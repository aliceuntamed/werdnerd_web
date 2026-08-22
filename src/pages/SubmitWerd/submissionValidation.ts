export const SUBMISSION_LIMITS = {
  werd: 80,
  definition: 1_000,
  pronunciation: 120,
  partOfSpeech: 60,
} as const;

export type SubmitWerdDraft = {
  werd: string;
  definition: string;
  pronunciation: string;
  partOfSpeech: string;
  tagIds: string[];
};

export type SubmitWerdPayload = {
  werd: string;
  definition: string;
  pronunciation: string | null;
  part_of_speech: string | null;
  tagIds: string[];
};

export type SubmissionField = keyof SubmitWerdDraft;
export type SubmissionErrors = Partial<Record<SubmissionField, string>>;

function normalizeLine(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function validateSubmitWerd(draft: SubmitWerdDraft):
  | { success: true; payload: SubmitWerdPayload }
  | { success: false; errors: SubmissionErrors } {
  const werd = normalizeLine(draft.werd);
  const definition = normalizeLine(draft.definition);
  const pronunciation = normalizeLine(draft.pronunciation);
  const partOfSpeech = normalizeLine(draft.partOfSpeech);
  const tagIds = [...new Set(draft.tagIds)];
  const errors: SubmissionErrors = {};

  if (werd.length < 2) {
    errors.werd = "Enter a Werd with at least 2 characters.";
  } else if (werd.length > SUBMISSION_LIMITS.werd) {
    errors.werd = `Keep the Werd under ${SUBMISSION_LIMITS.werd} characters.`;
  }

  if (definition.length < 10) {
    errors.definition = "Add a definition with at least 10 characters.";
  } else if (definition.length > SUBMISSION_LIMITS.definition) {
    errors.definition = `Keep the definition under ${SUBMISSION_LIMITS.definition} characters.`;
  }

  if (pronunciation.length > SUBMISSION_LIMITS.pronunciation) {
    errors.pronunciation = `Keep pronunciation under ${SUBMISSION_LIMITS.pronunciation} characters.`;
  }

  if (partOfSpeech.length > SUBMISSION_LIMITS.partOfSpeech) {
    errors.partOfSpeech = `Keep the grammatical role under ${SUBMISSION_LIMITS.partOfSpeech} characters.`;
  }

  if (tagIds.length === 0) {
    errors.tagIds = "Choose at least one archival tag.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    payload: {
      werd,
      definition,
      pronunciation: pronunciation || null,
      part_of_speech: partOfSpeech || null,
      tagIds,
    },
  };
}
