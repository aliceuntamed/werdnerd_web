import type { AuthError, PostgrestError } from "@supabase/supabase-js";
import { WERDS as LOCAL_WERDS } from "../../data/werd_data";
import type {
  TagRow,
  Werd,
  WerdInsert,
  WerdRow,
} from "../../types/werd";
import { supabase } from "./client";

type SupabaseFailure = Pick<Error, "message"> &
  Partial<Pick<PostgrestError, "code" | "details" | "hint">>;

export class SupabaseDataError extends Error {
  readonly operation: string;
  readonly code?: string;
  readonly details?: string;
  readonly hint?: string;
  readonly internalMessage: string;

  constructor(operation: string, failure: SupabaseFailure) {
    super(
      failure.code === "AUTH_REQUIRED" ||
        failure.code === "INVALID_TAG" ||
        failure.code === "DUPLICATE_WERD" ||
        failure.code === "PARTIAL_SUBMISSION"
        ? failure.message
        : `Unable to ${operation}. Please try again.`,
    );
    this.name = "SupabaseDataError";
    this.operation = operation;
    this.code = failure.code;
    this.details = failure.details;
    this.hint = failure.hint;
    this.internalMessage = failure.message;
  }
}

function dataError(
  operation: string,
  failure: PostgrestError | AuthError,
): SupabaseDataError {
  return new SupabaseDataError(operation, failure);
}

type JoinedTag = {
  tags: Pick<TagRow, "tag_name"> | null;
};

type WerdQueryRow = Pick<
  WerdRow,
  | "werd_id"
  | "werd"
  | "pronunciation"
  | "part_of_speech"
  | "definition"
  | "language"
  | "source_1"
> & {
  werd_tags: JoinedTag[];
};

const LOCAL_TAGS_BY_ID = new Map<string, string[]>(
  LOCAL_WERDS.map((werd) => [werd.werd_id, normalizeLocalTags(werd.tags)]),
);

const LOCAL_TAGS_BY_WORD = new Map<string, string[]>(
  LOCAL_WERDS.map((werd) => [
    werd.werd.toLocaleLowerCase(),
    normalizeLocalTags(werd.tags),
  ]),
);

const WERD_SELECT = `
  werd_id,
  werd,
  pronunciation,
  part_of_speech,
  definition,
  language,
  source_1,
  werd_tags(tags:tag_id(tag_name))
` as const;

function normalizeLocalTags(tags: unknown): string[] {
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

function mapWerd(row: WerdQueryRow): Werd {
  const relationalTags = row.werd_tags
    .map(({ tags }) => tags?.tag_name.trim() ?? "")
    .filter(Boolean);
  const normalizedWerd = row.werd?.trim() ?? "";
  const fallbackTags =
    LOCAL_TAGS_BY_ID.get(row.werd_id) ??
    LOCAL_TAGS_BY_WORD.get(normalizedWerd.toLocaleLowerCase()) ??
    [];

  return {
    werd_id: row.werd_id,
    werd: normalizedWerd,
    pronunciation: row.pronunciation ?? undefined,
    part_of_speech: row.part_of_speech ?? undefined,
    definition: row.definition ?? undefined,
    language: row.language ?? undefined,
    source_1: row.source_1 ?? undefined,
    tags: relationalTags.length > 0 ? relationalTags : fallbackTags,
  };
}

export async function fetchWerds(): Promise<Werd[]> {
  const { data, error } = await supabase
    .from("werds")
    .select(WERD_SELECT)
    .eq("submission_status", "published");

  if (error) throw dataError("load the WerdVault", error);
  return data.map(mapWerd);
}

export async function fetchCuratedWerds(): Promise<Werd[]> {
  const { data, error } = await supabase
    .from("werds")
    .select(WERD_SELECT)
    .eq("submission_status", "published")
    .eq("is_curated", true)
    .limit(6);

  if (error) throw dataError("load curated Werds", error);
  return data.map(mapWerd);
}

export async function fetchTags(): Promise<TagRow[]> {
  const { data, error } = await supabase
    .from("tags")
    .select("tag_id, tag_name")
    .order("tag_name");

  if (error) throw dataError("load tags", error);
  return data;
}

export async function getRandomWerd(): Promise<Werd | null> {
  const { data, error } = await supabase
    .from("werds")
    .select(WERD_SELECT)
    .eq("submission_status", "published");

  if (error) throw dataError("spin the Vault", error);
  if (data.length === 0) return null;

  return mapWerd(data[Math.floor(Math.random() * data.length)]);
}

export async function getWOTD(): Promise<Werd | null> {
  const { data, error } = await supabase
    .from("werds")
    .select(WERD_SELECT)
    .eq("submission_status", "published");

  if (error) throw dataError("load the Word of the Day", error);
  if (data.length === 0) return null;

  const daySeed = Math.floor(Date.now() / 86_400_000);
  return mapWerd(data[daySeed % data.length]);
}

export type CreateWerdInput = Pick<
  WerdInsert,
  "werd" | "definition" | "pronunciation" | "part_of_speech"
> & {
  tagIds: string[];
};

export async function createWerdWithTags({
  tagIds,
  ...input
}: CreateWerdInput): Promise<Pick<WerdRow, "werd_id">> {
  const operation = "submit a Werd";
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) throw dataError(operation, sessionError);
  if (!session) {
    throw new SupabaseDataError(operation, {
      message: "Please sign in before submitting a Werd.",
      code: "AUTH_REQUIRED",
    });
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw dataError(operation, userError);
  if (!user) {
    throw new SupabaseDataError(operation, {
      message: "Please sign in again before submitting a Werd.",
      code: "AUTH_REQUIRED",
    });
  }

  const uniqueTagIds = [...new Set(tagIds)];
  const normalizedWerd = input.werd?.trim() ?? "";
  const { data: werdId, error: werdError } = await supabase.rpc(
    "submit_werd_with_tags",
    {
      p_werd: normalizedWerd,
      p_definition: input.definition ?? "",
      p_pronunciation: input.pronunciation ?? undefined,
      p_part_of_speech: input.part_of_speech ?? undefined,
      p_tag_ids: uniqueTagIds,
    },
  );

  if (werdError?.code === "23505") {
    throw new SupabaseDataError(operation, {
      message: "That Werd is already cataloged or awaiting review.",
      code: "DUPLICATE_WERD",
      details: werdError.details,
    });
  }
  if (werdError?.code === "P0001" && werdError.message === "INVALID_TAG") {
    throw new SupabaseDataError(operation, {
      message: "One or more selected tags are no longer available.",
      code: "INVALID_TAG",
      details: werdError.details,
    });
  }
  if (werdError) throw dataError(operation, werdError);

  return { werd_id: werdId };
}
