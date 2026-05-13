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
    .select(WERD_SELECT);

  if (error) {
    console.error("Error fetching random werd:", error);
    return null;
  }

  if (!data || data.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * data.length);
  return mapWerd(data[randomIndex]);
}

// Fetch Word of the Day
export async function getWOTD(): Promise<Werd | null> {
  const { data, error } = await supabase
    .from("werds")
    .select(WERD_SELECT);

  if (error) {
    console.error("Error fetching word of the day:", error);
    return null;
  }

  if (!data || data.length === 0) return null;

  const daySeed = Math.floor(Date.now() / 86_400_000);
  return mapWerd(data[daySeed % data.length]);
}
