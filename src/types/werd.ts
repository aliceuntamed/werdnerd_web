import type { Tables, TablesInsert, TablesUpdate } from "./database";

export type WerdRow = Tables<"werds">;
export type WerdInsert = TablesInsert<"werds">;
export type WerdUpdate = TablesUpdate<"werds">;
export type TagRow = Tables<"tags">;
export type WerdTagRow = Tables<"werd_tags">;

/**
 * Normalized Werd model used by the UI.
 *
 * Database nulls become optional strings and relational tags are flattened
 * into a stable string array at the data boundary.
 */
export type Werd = {
  werd_id: string;
  werd: string;
  pronunciation?: string;
  part_of_speech?: string;
  definition?: string;
  language?: string;
  source_1?: string;
  tags: string[];
};
