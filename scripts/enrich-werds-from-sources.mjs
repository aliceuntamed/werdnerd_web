import ExcelJS from "exceljs";
import fs from "node:fs/promises";
import path from "node:path";

const WORKBOOK_PATH = "doc/werds.xlsx";
const SHEET_NAME = "werds";
const REPORT_DIR = "doc/import-reports";
const DRAFT_STATUS = "draft";
const REVIEW_STATUS = "needs_fact_checked";
const REVISION_STATUS = "needs_revision";

const args = process.argv.slice(2);
const argSet = new Set(args);
const shouldWriteWorkbook = argSet.has("--write-workbook");
const overwriteExisting = argSet.has("--overwrite");
const limitArg = args.find((arg) => arg.startsWith("--limit="));
const rowArg = args.find((arg) => arg.startsWith("--row="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : 10;
const targetRowNumber = rowArg ? Number(rowArg.split("=")[1]) : null;

const REQUIRED_HEADERS = ["werd", "status"];
const OPTIONAL_HEADERS = [
  "definition",
  "part_of_speech",
  "pronunciation",
  "origin",
  "language",
  "tags",
  "source_1",
  "source_2",
  "fact_check_notes",
];

function normalizeText(value) {
  if (value == null) return "";
  if (typeof value === "object" && "text" in value) return String(value.text).trim();
  if (typeof value === "object" && "result" in value) return String(value.result).trim();
  if (typeof value === "object" && "hyperlink" in value) return String(value.hyperlink).trim();
  return String(value).trim();
}

function normalizeStatus(value) {
  return normalizeText(value).toLowerCase().replace(/\s+/g, "_");
}

function getHeaderMap(worksheet) {
  const headerMap = new Map();
  worksheet.getRow(1).eachCell({ includeEmpty: false }, (cell, colNumber) => {
    const header = normalizeText(cell.value);
    if (header) headerMap.set(header, colNumber);
  });
  return headerMap;
}

function ensureHeader(worksheet, headerMap, header) {
  if (headerMap.has(header)) return headerMap.get(header);

  const nextColumn = worksheet.columnCount + 1;
  worksheet.getRow(1).getCell(nextColumn).value = header;
  headerMap.set(header, nextColumn);
  return nextColumn;
}

function getCellValue(row, headerMap, header) {
  const column = headerMap.get(header);
  if (!column) return "";
  return normalizeText(row.getCell(column).value);
}

function setCellValue(row, headerMap, header, value, changedFields) {
  if (!value) return false;
  const column = headerMap.get(header);
  const cell = row.getCell(column);
  const current = normalizeText(cell.value);

  if (current && !overwriteExisting) return false;
  if (current === value) return false;

  cell.value = value;
  changedFields.push(header);
  return true;
}

function firstMeaning(entries) {
  return entries
    .flatMap((entry) => entry.meanings ?? [])
    .find((meaning) => meaning.definitions?.[0]?.definition);
}

function pickDefinition(meaning) {
  return normalizeText(meaning?.definitions?.[0]?.definition);
}

function pickPartOfSpeech(meaning) {
  const pos = normalizeText(meaning?.partOfSpeech);
  const aliases = {
    noun: "n.",
    verb: "v.",
    adjective: "adj.",
    adverb: "adv.",
    interjection: "interj.",
    preposition: "prep.",
    conjunction: "conj.",
    pronoun: "pron.",
  };
  return aliases[pos] ?? pos;
}

function pickPronunciation(entries) {
  const phonetic = entries
    .flatMap((entry) => [entry.phonetic, ...(entry.phonetics ?? []).map((p) => p.text)])
    .map(normalizeText)
    .find(Boolean);

  return phonetic;
}

function pickSourceUrls(entries) {
  return entries
    .flatMap((entry) => entry.sourceUrls ?? [])
    .map(normalizeText)
    .filter(Boolean)
    .filter((url, index, urls) => urls.indexOf(url) === index)
    .slice(0, 2);
}

function inferLanguage(entries) {
  const licenseNames = entries
    .map((entry) => normalizeText(entry.license?.name))
    .join(" ")
    .toLowerCase();

  if (licenseNames.includes("english")) return "English";
  return "English";
}

function inferTags({ definition, partOfSpeech, word }) {
  const text = `${definition} ${word}`.toLowerCase();
  const tags = new Set();

  if (partOfSpeech === "n.") tags.add("noun");
  if (partOfSpeech === "v.") tags.add("verb");
  if (partOfSpeech === "adj.") tags.add("adjective");
  if (partOfSpeech === "adv.") tags.add("adverb");
  if (/\b(slang|informal|colloquial)\b/.test(text)) tags.add("slang");
  if (/\b(archaic|obsolete|old-fashioned)\b/.test(text)) tags.add("archaic");
  if (/\b(humorous|jocular|facetious)\b/.test(text)) tags.add("humorous");
  if (/\b(philosophy|exist|belief|doctrine|metaphysic)\b/.test(text)) tags.add("philosophical");
  if (/\b(psychology|emotion|feeling|urge|mind|mental)\b/.test(text)) tags.add("psychology");
  if (/\b(insult|contempt|fool|stupid|person who)\b/.test(text)) tags.add("insult");
  if (tags.size === 0) tags.add("general");

  return Array.from(tags).join(",");
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "WerdNerd enrichment script" },
  });

  if (!response.ok) return null;
  return response.json();
}

async function lookupFreeDictionary(word) {
  const encoded = encodeURIComponent(word.toLowerCase());
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encoded}`;
  const data = await fetchJson(url);
  if (!Array.isArray(data) || data.length === 0) {
    return {
      sourceName: "Free Dictionary API",
      lookupUrl: url,
      found: false,
      notes: "No Free Dictionary API match.",
    };
  }

  const meaning = firstMeaning(data);
  const definition = pickDefinition(meaning);
  const partOfSpeech = pickPartOfSpeech(meaning);
  const pronunciation = pickPronunciation(data);
  const sourceUrls = pickSourceUrls(data);
  const origin = normalizeText(data.find((entry) => entry.origin)?.origin);

  return {
    sourceName: "Free Dictionary API",
    lookupUrl: url,
    found: Boolean(definition),
    definition,
    partOfSpeech,
    pronunciation,
    origin,
    language: inferLanguage(data),
    sourceUrls,
    notes: definition ? "Definition found via Free Dictionary API; verify against listed source URL." : "Entry found, but no usable definition.",
  };
}

async function lookupDatamuse(word) {
  const encoded = encodeURIComponent(word.toLowerCase());
  const url = `https://api.datamuse.com/words?sp=${encoded}&md=dp&max=1`;
  const data = await fetchJson(url);
  const match = Array.isArray(data) ? data.find((item) => item.word?.toLowerCase() === word.toLowerCase()) : null;
  const def = match?.defs?.[0] ?? "";
  const [rawPos, ...definitionParts] = def.split("\t");

  return {
    sourceName: "Datamuse",
    lookupUrl: url,
    found: Boolean(match),
    definition: normalizeText(definitionParts.join("\t")),
    partOfSpeech: normalizeText(rawPos),
    tags: match?.tags ?? [],
    notes: match ? "Datamuse supplied a secondary definition signal." : "No exact Datamuse match.",
  };
}

function mergeLookup(word, dictionaryResult, datamuseResult) {
  const definition = dictionaryResult.definition || datamuseResult.definition || "";
  const partOfSpeech = dictionaryResult.partOfSpeech || datamuseResult.partOfSpeech || "";
  const tags = inferTags({ definition, partOfSpeech, word });
  const sources = [
    ...(dictionaryResult.sourceUrls?.length ? dictionaryResult.sourceUrls : [dictionaryResult.lookupUrl]),
    datamuseResult.lookupUrl,
  ].filter(Boolean);

  return {
    definition,
    part_of_speech: partOfSpeech,
    pronunciation: dictionaryResult.pronunciation || "",
    origin: dictionaryResult.origin || "",
    language: dictionaryResult.language || "English",
    tags,
    source_1: sources[0] ?? "",
    source_2: sources[1] ?? "",
    found: dictionaryResult.found || datamuseResult.found,
    notes: [dictionaryResult.notes, datamuseResult.notes]
      .filter(Boolean)
      .join(" "),
  };
}

async function writeReport(report) {
  await fs.mkdir(REPORT_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const reportPath = path.join(REPORT_DIR, `werds-enrich-${stamp}.json`);
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  return reportPath;
}

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile(WORKBOOK_PATH);
const worksheet = workbook.getWorksheet(SHEET_NAME) ?? workbook.worksheets[0];
const headerMap = getHeaderMap(worksheet);

const missingHeaders = REQUIRED_HEADERS.filter((header) => !headerMap.has(header));
if (missingHeaders.length > 0) {
  throw new Error(`Missing required workbook columns: ${missingHeaders.join(", ")}`);
}

if (shouldWriteWorkbook) {
  for (const header of OPTIONAL_HEADERS) ensureHeader(worksheet, headerMap, header);
}

const candidates = [];
for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber += 1) {
  const row = worksheet.getRow(rowNumber);
  if (!row.hasValues) continue;
  if (targetRowNumber && rowNumber !== targetRowNumber) continue;

  const status = normalizeStatus(getCellValue(row, headerMap, "status"));
  const werd = getCellValue(row, headerMap, "werd");
  if (status === DRAFT_STATUS && werd) {
    candidates.push({ rowNumber, row, werd });
  }
}

const selectedCandidates = targetRowNumber ? candidates : candidates.slice(0, Number.isFinite(limit) ? limit : 10);
const enriched = [];
const unchanged = [];
const failed = [];

for (const candidate of selectedCandidates) {
  const changedFields = [];

  try {
    const dictionaryResult = await lookupFreeDictionary(candidate.werd);
    const datamuseResult = await lookupDatamuse(candidate.werd);
    const suggestion = mergeLookup(candidate.werd, dictionaryResult, datamuseResult);

    if (shouldWriteWorkbook) {
      setCellValue(candidate.row, headerMap, "definition", suggestion.definition, changedFields);
      setCellValue(candidate.row, headerMap, "part_of_speech", suggestion.part_of_speech, changedFields);
      setCellValue(candidate.row, headerMap, "pronunciation", suggestion.pronunciation, changedFields);
      setCellValue(candidate.row, headerMap, "origin", suggestion.origin, changedFields);
      setCellValue(candidate.row, headerMap, "language", suggestion.language, changedFields);
      setCellValue(candidate.row, headerMap, "tags", suggestion.tags, changedFields);
      setCellValue(candidate.row, headerMap, "source_1", suggestion.source_1, changedFields);
      setCellValue(candidate.row, headerMap, "source_2", suggestion.source_2, changedFields);
      setCellValue(candidate.row, headerMap, "fact_check_notes", suggestion.notes, changedFields);

      if (changedFields.length > 0) {
        candidate.row.getCell(headerMap.get("status")).value = suggestion.found ? REVIEW_STATUS : REVISION_STATUS;
        changedFields.push("status");
      }
    }

    const result = {
      rowNumber: candidate.rowNumber,
      werd: candidate.werd,
      found: suggestion.found,
      changedFields,
      suggestion,
    };

    if (changedFields.length > 0 || !shouldWriteWorkbook) {
      enriched.push(result);
    } else {
      unchanged.push(result);
    }
  } catch (error) {
    failed.push({ rowNumber: candidate.rowNumber, werd: candidate.werd, error: error.message });
  }
}

if (shouldWriteWorkbook && enriched.some((item) => item.changedFields.length > 0)) {
  await workbook.xlsx.writeFile(WORKBOOK_PATH);
}

const report = {
  mode: shouldWriteWorkbook ? "write" : "dry-run",
  workbook: WORKBOOK_PATH,
  sheet: worksheet.name,
  generatedAt: new Date().toISOString(),
  candidateDraftRows: candidates.length,
  selectedRows: selectedCandidates.map((candidate) => ({
    rowNumber: candidate.rowNumber,
    werd: candidate.werd,
  })),
  enriched,
  unchanged,
  failed,
  nextStep: shouldWriteWorkbook
    ? "Review rows moved to needs_fact_checked before marking any ready_for_import."
    : "Run with --write-workbook to fill selected draft rows.",
};

const reportPath = await writeReport(report);
console.log(JSON.stringify(report, null, 2));
console.log(`Report written: ${reportPath}`);
