import React, { useCallback, useEffect, useState } from "react";
import type { TagRow } from "../../types/werd";
import {
  createWerdWithTags,
  fetchTags,
} from "../../utils/supabase/queries";
import {
  SUBMISSION_LIMITS,
  validateSubmitWerd,
  type SubmissionErrors,
  type SubmissionField,
} from "./submissionValidation";

export default function SubmitWerdForm() {
  const [werd, setWerd] = useState("");
  const [definition, setDefinition] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [availableTags, setAvailableTags] = useState<TagRow[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<SubmissionErrors>({});
  const [tagStatus, setTagStatus] = useState<"loading" | "ready" | "error">("loading");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const loadTags = useCallback(() => {
    fetchTags()
      .then((tags) => {
        setAvailableTags(tags ?? []);
        setTagStatus("ready");
      })
      .catch((error: unknown) => {
        console.error(error);
        setAvailableTags([]);
        setTagStatus("error");
      });
  }, []);

  useEffect(() => {
    loadTags();
  }, [loadTags]);

  function clearValidationError(field: SubmissionField) {
    setValidationErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function toggleTag(tagId: string) {
    clearValidationError("tagIds");
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((t) => t !== tagId)
        : [...prev, tagId],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    const result = validateSubmitWerd({
      werd,
      definition,
      pronunciation,
      partOfSpeech,
      tagIds: selectedTags,
    });

    if (!result.success) {
      setValidationErrors(result.errors);
      setStatus("error");
      setErrorMessage("Check the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);
    setValidationErrors({});
    try {
      await createWerdWithTags(result.payload);

      setWerd("");
      setDefinition("");
      setPronunciation("");
      setPartOfSpeech("");
      setSelectedTags([]);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went sideways. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="submit-werd-form" noValidate>
      <div className="submit-werd-form__field submit-werd-form__field--wide">
        <label htmlFor="submit-werd-werd">
          <span>01.</span> The Werd
        </label>
        <input
          id="submit-werd-werd"
          value={werd}
          onChange={(e) => {
            setWerd(e.target.value);
            clearValidationError("werd");
          }}
          required
          maxLength={SUBMISSION_LIMITS.werd}
          aria-invalid={Boolean(validationErrors.werd)}
          aria-describedby={validationErrors.werd ? "submit-werd-werd-error" : undefined}
          placeholder="e.g. petrichor"
          className="submit-werd-form__word-input"
        />
        {validationErrors.werd && <p id="submit-werd-werd-error" className="submit-werd-form__field-error">{validationErrors.werd}</p>}
      </div>

      <div className="submit-werd-form__field submit-werd-form__field--wide">
        <label htmlFor="submit-werd-definition">
          <span>02.</span> Contextual Meaning
        </label>
        <textarea
          id="submit-werd-definition"
          value={definition}
          onChange={(e) => {
            setDefinition(e.target.value);
            clearValidationError("definition");
          }}
          rows={4}
          required
          maxLength={SUBMISSION_LIMITS.definition}
          aria-invalid={Boolean(validationErrors.definition)}
          aria-describedby={validationErrors.definition ? "submit-werd-definition-error" : undefined}
          placeholder="What does it mean?"
        />
        {validationErrors.definition && <p id="submit-werd-definition-error" className="submit-werd-form__field-error">{validationErrors.definition}</p>}
      </div>

      <div className="submit-werd-form__field">
        <label htmlFor="submit-werd-pronunciation">
          <span>03.</span> Oral Delivery
        </label>
        <input
          id="submit-werd-pronunciation"
          value={pronunciation}
          onChange={(e) => {
            setPronunciation(e.target.value);
            clearValidationError("pronunciation");
          }}
          maxLength={SUBMISSION_LIMITS.pronunciation}
          aria-invalid={Boolean(validationErrors.pronunciation)}
          aria-describedby={validationErrors.pronunciation ? "submit-werd-pronunciation-error" : undefined}
          placeholder="e.g. pe-tri-ker"
        />
        {validationErrors.pronunciation && <p id="submit-werd-pronunciation-error" className="submit-werd-form__field-error">{validationErrors.pronunciation}</p>}
      </div>

      <div className="submit-werd-form__field">
        <label htmlFor="submit-werd-part-of-speech">
          <span>04.</span> Grammatical Role
        </label>
        <input
          id="submit-werd-part-of-speech"
          value={partOfSpeech}
          onChange={(e) => {
            setPartOfSpeech(e.target.value);
            clearValidationError("partOfSpeech");
          }}
          maxLength={SUBMISSION_LIMITS.partOfSpeech}
          aria-invalid={Boolean(validationErrors.partOfSpeech)}
          aria-describedby={validationErrors.partOfSpeech ? "submit-werd-part-of-speech-error" : undefined}
          placeholder="e.g. noun"
        />
        {validationErrors.partOfSpeech && <p id="submit-werd-part-of-speech-error" className="submit-werd-form__field-error">{validationErrors.partOfSpeech}</p>}
      </div>

      <div className="submit-werd-form__field submit-werd-form__field--wide">
        <label>
          <span>05.</span> Archival Tags
        </label>

        {tagStatus === "loading" ? (
          <p className="submit-werd-form__tag-note">Loading the archival index…</p>
        ) : tagStatus === "error" ? (
          <div className="submit-werd-form__tag-note" role="alert">
            <p>The tag catalog could not be loaded.</p>
            <button type="button" onClick={() => {
              setTagStatus("loading");
              loadTags();
            }}>Try again</button>
          </div>
        ) : availableTags.length > 0 ? (
          <div className="submit-werd-form__tags">
            {availableTags.map((tag) => {
              const isSelected = selectedTags.includes(tag.tag_id);

              return (
                <button
                  key={tag.tag_id}
                  type="button"
                  onClick={() => toggleTag(tag.tag_id)}
                  aria-pressed={isSelected}
                  className={isSelected ? "is-selected" : undefined}
                >
                  {tag.tag_name}
                </button>
              );
            })}
          </div>
        ) : (
          <p className="submit-werd-form__tag-note">
            Tags will appear here when the vault taxonomy answers the bell.
          </p>
        )}
        {validationErrors.tagIds && <p className="submit-werd-form__field-error" role="alert">{validationErrors.tagIds}</p>}
      </div>

      <div className="submit-werd-form__status submit-werd-form__field--wide">
        {status === "success" && (
          <p className="submit-werd-form__status-message submit-werd-form__status-message--success">
            Werd submitted successfully.
          </p>
        )}
        {status === "error" && (
          <p className="submit-werd-form__status-message submit-werd-form__status-message--error" role="alert">
            {errorMessage ?? "Something went sideways. Please try again."}
          </p>
        )}
      </div>

      <div className="submit-werd-form__actions submit-werd-form__field--wide">
        <button type="submit" disabled={status === "submitting"}>
          <span>
            {status === "submitting" ? "Cataloging..." : "Catalog into the Vault"}
          </span>
        </button>
      </div>
    </form>
  );
}
