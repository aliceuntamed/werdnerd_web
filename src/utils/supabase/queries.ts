// supabase/queries.ts
import { supabase } from "./client";
import type { Werd } from "../../types";
import { WERDS as LOCAL_WERDS } from "../../data/werd_data";

type SupabaseTagJoin = {
  tags?:
    | {
        tag_name?: string;
        name?: string;
      }
    | {
        tag_name?: string;
        name?: string;
      }[];
  tag_name?: string;
  name?: string;
};

type SupabaseWerdRow = {
  werd_id: string;
  werd: string;
  pronunciation?: string | null;
  part_of_speech?: string | null;
  definition?: string | null;
  language?: string | null;
  source_1?: string | null;
  werd_tags?: SupabaseTagJoin[];
};

function pickJoinedTagName(tagJoin: SupabaseTagJoin): string {
  const nestedTags = Array.isArray(tagJoin.tags)
    ? tagJoin.tags[0]
    : tagJoin.tags;

  return (
    nestedTags?.tag_name ??
    nestedTags?.name ??
    tagJoin.tag_name ??
    tagJoin.name ??
    ""
  );
}

// Helper: normalise the nested tags structure from Supabase joins
function normaliseTags(werd_tags: SupabaseTagJoin[] = []): string[] {
  return werd_tags.map(pickJoinedTagName).filter(Boolean);
}

function normaliseLocalTags(tags: unknown): string[] {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

const LOCAL_TAGS_BY_ID = new Map<string, string[]>(
  LOCAL_WERDS.map((werd) => [werd.werd_id, normaliseLocalTags(werd.tags)]),
);

const LOCAL_TAGS_BY_WORD = new Map<string, string[]>(
  LOCAL_WERDS.map((werd) => [
    werd.werd.toLowerCase(),
    normaliseLocalTags(werd.tags),
  ]),
);

const WERD_TAGS_SELECT = `werd_tags(tags:tag_id(tag_name))`;

const WERD_SELECT = `
  werd_id,
  werd,
  pronunciation,
  part_of_speech,
  definition,
  language,
  source_1,
  ${WERD_TAGS_SELECT}
`;

function mapWerd(w: SupabaseWerdRow): Werd {
  const relationalTags = normaliseTags(w.werd_tags ?? []);
  const fallbackTags =
    LOCAL_TAGS_BY_ID.get(w.werd_id) ??
    LOCAL_TAGS_BY_WORD.get(String(w.werd ?? "").toLowerCase()) ??
    [];

  return {
    werd_id: w.werd_id,
    werd: w.werd ?? "",
    pronunciation: w.pronunciation ?? undefined,
    part_of_speech: w.part_of_speech ?? undefined,
    definition: w.definition ?? undefined,
    language: w.language ?? undefined,
    source_1: w.source_1 ?? undefined,
    tags: relationalTags.length > 0 ? relationalTags : fallbackTags,
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
