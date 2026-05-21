import ExcelJS from "exceljs";
import { createClient } from "@supabase/supabase-js";
import fs from "node:fs/promises";
import path from "node:path";

const WORKBOOK_PATH = "doc/werds.xlsx";
const SHEET_NAME = "werds";
const REPORT_DIR = "doc/import-reports";
const READY_STATUS = "ready_for_import";
const IMPORTED_STATUS = "imported";
const KNOWN_STATUSES = new Set([
  "draft",
  "needs_fact_checked",
  READY_STATUS,
  IMPORTED_STATUS,
  "needs_revision",
]);

const REQUIRED_READY_COLUMNS = [
  "werd",
  "definition",
  "part_of_speech",
  "pronunciation",
  "language",
  "tags",
  "source_1",
  "status",
];

const args = new Set(process.argv.slice(2));
const shouldImport = args.has("--import");
const shouldWriteWorkbook = args.has("--write-workbook");

function normalizeText(value) {
  if (value == null) return "";
  if (typeof value === "object" && "text" in value) return String(value.text).trim();
  if (typeof value === "object" && "result" in value) return String(value.result).trim();
  return String(value).trim();
}

function normalizeStatus(value) {
  return normalizeText(value).toLowerCase().replace(/\s+/g, "_");
}

function parseTags(value) {
  return normalizeText(value)
    .split(",")
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean)
    .filter((tag, index, tags) => tags.indexOf(tag) === index);
}

function truthyExcel(value) {
  const normalized = normalizeText(value).toLowerCase();
  return ["true", "yes", "y", "1"].includes(normalized);
}

async function readEnv(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return Object.fromEntries(
    raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const index = line.indexOf("=");
        const key = line.slice(0, index).trim();
        const value = line
          .slice(index + 1)
          .trim()
          .replace(/^['"]|['"]$/g, "");
        return [key, value];
      }),
  );
}

function getHeaderMap(worksheet) {
  const headerMap = new Map();
  worksheet.getRow(1).eachCell({ includeEmpty: false }, (cell, colNumber) => {
    const header = normalizeText(cell.value);
    if (header) headerMap.set(header, colNumber);
  });
  return headerMap;
}

function readRows(worksheet, headerMap) {
  const rows = [];
  for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber += 1) {
    const row = worksheet.getRow(rowNumber);
    if (!row.hasValues) continue;

    const record = { rowNumber };
    for (const [header, colNumber] of headerMap.entries()) {
      record[header] = row.getCell(colNumber).value;
    }
    rows.push(record);
  }
  return rows;
}

function validateWorkbook(headerMap, rows) {
  const missingColumns = REQUIRED_READY_COLUMNS.filter((column) => !headerMap.has(column));
  const statusCounts = {};
  const invalidStatuses = [];
  const duplicateRows = [];
  const seenWerds = new Map();
  const readyRows = [];
  const validationErrors = [];

  for (const row of rows) {
    const werd = normalizeText(row.werd);
    const werdKey = werd.toLowerCase();
    const status = normalizeStatus(row.status);

    statusCounts[status || "<blank>"] = (statusCounts[status || "<blank>"] ?? 0) + 1;

    if (status && !KNOWN_STATUSES.has(status)) {
      invalidStatuses.push({ rowNumber: row.rowNumber, werd, status });
    }

    if (werdKey) {
      if (seenWerds.has(werdKey)) {
        duplicateRows.push({ werd, rows: [seenWerds.get(werdKey), row.rowNumber] });
      } else {
        seenWerds.set(werdKey, row.rowNumber);
      }
    }

    if (status === READY_STATUS) {
      readyRows.push(row);
      for (const column of REQUIRED_READY_COLUMNS) {
        if (!normalizeText(row[column])) {
          validationErrors.push({
            rowNumber: row.rowNumber,
            werd,
            issue: `Missing required value: ${column}`,
          });
        }
      }
    }
  }

  return {
    missingColumns,
    statusCounts,
    invalidStatuses,
    duplicateRows,
    readyRows,
    validationErrors,
  };
}

async function loadSupabase() {
  const env = await readEnv(".env.local");
  const url = env.SUPABASE_URL || env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SECRET_KEY;

  if (!url) throw new Error("Missing SUPABASE_URL in .env.local.");
  if (!key) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEY in .env.local.");

  return createClient(url, key, { auth: { persistSession: false } });
}

async function fetchExistingWerds(supabase) {
  const { data, error } = await supabase.from("werds").select("werd_id,werd");
  if (error) throw error;
  return new Map((data ?? []).map((row) => [normalizeText(row.werd).toLowerCase(), row]));
}

async function fetchTags(supabase) {
  const { data, error } = await supabase.from("tags").select("tag_id,tag_name");
  if (error) throw error;
  return new Map((data ?? []).map((row) => [normalizeText(row.tag_name).toLowerCase(), row]));
}

async function ensureTags(supabase, tagNames, tagMap) {
  const ensured = [];

  for (const tagName of tagNames) {
    if (tagMap.has(tagName)) {
      ensured.push(tagMap.get(tagName));
      continue;
    }

    const { data, error } = await supabase
      .from("tags")
      .insert({ tag_name: tagName })
      .select("tag_id,tag_name")
      .single();

    if (error) throw error;
    tagMap.set(tagName, data);
    ensured.push(data);
  }

  return ensured;
}

function toWerdInsert(row) {
  return {
    werd: normalizeText(row.werd),
    definition: normalizeText(row.definition),
    part_of_speech: normalizeText(row.part_of_speech),
    pronunciation: normalizeText(row.pronunciation),
    language: normalizeText(row.language),
    tags: parseTags(row.tags).join(","),
    source: normalizeText(row.source_1),
    is_curated: truthyExcel(row.is_curated),
  };
}

async function importReadyRows(supabase, readyRows, existingWerds, tagMap) {
  const imported = [];
  const skippedExisting = [];
  const failed = [];

  for (const row of readyRows) {
    const werd = normalizeText(row.werd);
    const werdKey = werd.toLowerCase();

    if (existingWerds.has(werdKey)) {
      skippedExisting.push({
        rowNumber: row.rowNumber,
        werd,
        reason: "Already exists in Supabase. Safer mode does not update existing werds.",
      });
      continue;
    }

    try {
      const insertPayload = toWerdInsert(row);
      const { data: insertedWerd, error: werdError } = await supabase
        .from("werds")
        .insert(insertPayload)
        .select("werd_id,werd")
        .single();

      if (werdError) throw werdError;

      const tags = await ensureTags(supabase, parseTags(row.tags), tagMap);
      if (tags.length > 0) {
        const linkPayload = tags.map((tag) => ({
          werd_id: insertedWerd.werd_id,
          tag_id: tag.tag_id,
          werd: insertedWerd.werd,
          tag: tag.tag_name,
        }));
        const { error: linkError } = await supabase.from("werd_tags").insert(linkPayload);
        if (linkError) throw linkError;
      }

      existingWerds.set(werdKey, insertedWerd);
      imported.push({ rowNumber: row.rowNumber, werd, werd_id: insertedWerd.werd_id });
    } catch (error) {
      failed.push({ rowNumber: row.rowNumber, werd, error: error.message });
    }
  }

  return { imported, skippedExisting, failed };
}

async function writeReport(report) {
  await fs.mkdir(REPORT_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const reportPath = path.join(REPORT_DIR, `werds-import-${stamp}.json`);
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  return reportPath;
}

function markImportedRows(worksheet, headerMap, importedRows) {
  if (!shouldWriteWorkbook || importedRows.length === 0) return;

  const statusCol = headerMap.get("status");
  let importNotesCol = headerMap.get("import_notes");

  if (!importNotesCol) {
    importNotesCol = worksheet.columnCount + 1;
    worksheet.getRow(1).getCell(importNotesCol).value = "import_notes";
    headerMap.set("import_notes", importNotesCol);
  }

  for (const imported of importedRows) {
    const row = worksheet.getRow(imported.rowNumber);
    row.getCell(statusCol).value = IMPORTED_STATUS;
    row.getCell(importNotesCol).value = `Imported to Supabase as ${imported.werd_id}`;
  }
}

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile(WORKBOOK_PATH);
const worksheet = workbook.getWorksheet(SHEET_NAME) ?? workbook.worksheets[0];
const headerMap = getHeaderMap(worksheet);
const rows = readRows(worksheet, headerMap);
const validation = validateWorkbook(headerMap, rows);

let supabaseSummary = {};
let importSummary = { imported: [], skippedExisting: [], failed: [] };

if (validation.missingColumns.length === 0) {
  const supabase = await loadSupabase();
  const existingWerds = await fetchExistingWerds(supabase);
  const tagMap = await fetchTags(supabase);
  const readyWerdKeys = validation.readyRows.map((row) => normalizeText(row.werd).toLowerCase());

  supabaseSummary = {
    existingWerds: existingWerds.size,
    existingTags: tagMap.size,
    readyRowsAlreadyExisting: readyWerdKeys.filter((werd) => existingWerds.has(werd)).length,
  };

  if (shouldImport && validation.validationErrors.length === 0) {
    importSummary = await importReadyRows(supabase, validation.readyRows, existingWerds, tagMap);
    markImportedRows(worksheet, headerMap, importSummary.imported);
    if (shouldWriteWorkbook && importSummary.imported.length > 0) {
      await workbook.xlsx.writeFile(WORKBOOK_PATH);
    }
  }
}

const report = {
  mode: shouldImport ? "import" : "dry-run",
  workbook: WORKBOOK_PATH,
  sheet: worksheet.name,
  generatedAt: new Date().toISOString(),
  rowCount: rows.length,
  statusCounts: validation.statusCounts,
  missingColumns: validation.missingColumns,
  invalidStatuses: validation.invalidStatuses,
  duplicateRows: validation.duplicateRows,
  readyRowCount: validation.readyRows.length,
  validationErrors: validation.validationErrors,
  supabaseSummary,
  unsupportedExcelColumns: ["origin", "source_2"].filter((column) => headerMap.has(column)),
  importSummary,
  nextStep:
    shouldImport
      ? "Review importSummary. Existing werds are intentionally skipped in safer mode."
      : "Run with --import to insert ready_for_import rows. Add --write-workbook to mark successful rows imported.",
};

const reportPath = await writeReport(report);
console.log(JSON.stringify(report, null, 2));
console.log(`Report written: ${reportPath}`);
