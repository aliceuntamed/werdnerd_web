import React, { useEffect, useState } from "react";
import type { TagRow } from "../../types/werd";
import {
  createWerdWithTags,
  fetchTags,
} from "../../utils/supabase/queries";

export default function SubmitWerdForm() {
  const [werd, setWerd] = useState("");
  const [definition, setDefinition] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [availableTags, setAvailableTags] = useState<TagRow[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    fetchTags()
      .then((tags) => setAvailableTags(tags ?? []))
      .catch((error: unknown) => {
        console.error(error);
        setErrorMessage("The tag catalog could not be loaded.");
      });
  }, []);

  function toggleTag(tagId: string) {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((t) => t !== tagId)
        : [...prev, tagId],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!werd.trim()) return;

    setStatus("submitting");
    setErrorMessage(null);
    try {
      await createWerdWithTags({
        werd: werd.trim(),
        definition: definition.trim() || null,
        pronunciation: pronunciation.trim() || null,
        part_of_speech: partOfSpeech.trim() || null,
        tagIds: selectedTags,
      });

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
    <form onSubmit={handleSubmit} className="submit-werd-form">
      <div className="submit-werd-form__field submit-werd-form__field--wide">
        <label htmlFor="submit-werd-werd">
          <span>01.</span> The Werd
        </label>
        <input
          id="submit-werd-werd"
          value={werd}
          onChange={(e) => setWerd(e.target.value)}
          required
          placeholder="e.g. petrichor"
          className="submit-werd-form__word-input"
        />
      </div>

      <div className="submit-werd-form__field submit-werd-form__field--wide">
        <label htmlFor="submit-werd-definition">
          <span>02.</span> Contextual Meaning
        </label>
        <textarea
          id="submit-werd-definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          rows={4}
          placeholder="What does it mean?"
        />
      </div>

      <div className="submit-werd-form__field">
        <label htmlFor="submit-werd-pronunciation">
          <span>03.</span> Oral Delivery
        </label>
        <input
          id="submit-werd-pronunciation"
          value={pronunciation}
          onChange={(e) => setPronunciation(e.target.value)}
          placeholder="e.g. pe-tri-ker"
        />
      </div>

      <div className="submit-werd-form__field">
        <label htmlFor="submit-werd-part-of-speech">
          <span>04.</span> Grammatical Role
        </label>
        <input
          id="submit-werd-part-of-speech"
          value={partOfSpeech}
          onChange={(e) => setPartOfSpeech(e.target.value)}
          placeholder="e.g. noun"
        />
      </div>

      <div className="submit-werd-form__field submit-werd-form__field--wide">
        <label>
          <span>05.</span> Archival Tags
        </label>

        {availableTags.length > 0 ? (
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
      </div>

      <div className="submit-werd-form__status submit-werd-form__field--wide">
        {status === "success" && (
          <p className="submit-werd-form__status-message submit-werd-form__status-message--success">
            Werd submitted successfully.
          </p>
        )}
        {status === "error" && (
          <p className="submit-werd-form__status-message submit-werd-form__status-message--error">
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
