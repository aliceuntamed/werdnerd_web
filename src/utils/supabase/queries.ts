// supabase/queries.ts
import { supabase } from "./client";
import type { Werd } from "../../types";

// Helper: normalise the nested tags structure from Supabase joins
function normaliseTags(werd_tags: unknown[]): string[] {
  return (
    werd_tags
      ?.map(
        (t: any) =>
          t.tags?.tag_name ?? t.tags?.name ?? t.tag_name ?? t.name ?? "",
      )
      .filter(Boolean) ?? []
  );
}

const WERD_TAGS_SELECT = `werd_tags(tags:tag_id(tag_name))`;

const WERD_SELECT = `
  werd_id,
  werd,
  pronunciation,
  part_of_speech,
  definition,
  language,
  source,
  ${WERD_TAGS_SELECT}
`;

function mapWerd(w: any): Werd {
  return {
    werd_id: w.werd_id,
    werd: w.werd ?? "",
    pronunciation: w.pronunciation ?? undefined,
    part_of_speech: w.part_of_speech ?? undefined,
    definition: w.definition ?? undefined,
    language: w.language ?? undefined,
    source: w.source ?? undefined,
    tags: normaliseTags(w.werd_tags ?? []),
  };
}

// Fetch all werds with relational tags
export async function fetchWerds(): Promise<Werd[]> {
  const { data, error } = await supabase.from("werds").select(WERD_SELECT);
  if (error) throw error;
  return data.map(mapWerd);
}

// Fetch curated werds (is_curated = true)
export async function fetchCuratedWerds(): Promise<Werd[]> {
  const { data, error } = await supabase
    .from("werds")
    .select(WERD_SELECT)
    .eq("is_curated", true)
    .limit(6);
  if (error) throw error;
  return data.map(mapWerd);
}

// Fetch all tags
export async function fetchTags() {
  const { data, error } = await supabase.from("tags").select("*");
  if (error) throw error;
  return data;
}

// Fetch random werd
export async function getRandomWerd(): Promise<Werd | null> {
  const { data, error } = await supabase
    .from("werds")
    .select(WERD_SELECT)
    .limit(1);

  if (error) {
    console.error("Error fetching random werd:", error);
    return null;
  }

  if (!data || data.length === 0) return null;
  return mapWerd(data[0]);
}

// Fetch Word of the Day
export async function getWOTD(): Promise<Werd | null> {
  const today = new Date().toISOString().split("T")[0];

  const { data, error } = await supabase
    .from("wotd")
    .select(`werd_id, werds(${WERD_SELECT})`)
    .eq("date", today)
    .single();

  if (error) {
    // If no WOTD exists yet, fall back to a random werd
    const random = await getRandomWerd();
    if (!random) return null;

    await supabase.from("wotd").insert({
      date: today,
      werd_id: random.werd_id,
    });

    return random;
  }

  const werds = data?.werds;
  const w = Array.isArray(werds) ? werds[0] : werds;
  if (!w) return null;

  return mapWerd(w);
}
