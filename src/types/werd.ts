// types/werd.ts

// Normalized Werd object used in your UI
export interface Werd {
  werd_id: string;
  werd: string;
  pronunciation?: string;
  part_of_speech?: string;
  definition?: string;
  language?: string;
  source_1?: string;
  tags: string[]; // normalized relational tags
}
