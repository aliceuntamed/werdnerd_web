import { describe, expect, it } from "vitest";
import { validateSubmitWerd } from "./submissionValidation";

describe("validateSubmitWerd", () => {
  it("normalizes a valid submission and removes duplicate tags", () => {
    const result = validateSubmitWerd({
      werd: "  Petrichor  ",
      definition: "  The earthy scent after rain.  ",
      pronunciation: "  peh-truh-kor ",
      partOfSpeech: " noun ",
      tagIds: ["weather", "weather", "senses"],
    });

    expect(result).toEqual({
      success: true,
      payload: {
        werd: "Petrichor",
        definition: "The earthy scent after rain.",
        pronunciation: "peh-truh-kor",
        part_of_speech: "noun",
        tagIds: ["weather", "senses"],
      },
    });
  });

  it("reports all missing required fields at once", () => {
    const result = validateSubmitWerd({
      werd: "",
      definition: "",
      pronunciation: "",
      partOfSpeech: "",
      tagIds: [],
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toMatchObject({
        werd: expect.any(String),
        definition: expect.any(String),
        tagIds: expect.any(String),
      });
    }
  });
});
