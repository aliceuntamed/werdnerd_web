import { describe, expect, it } from "vitest";
import { toWerdSlug, werdPath } from "./werdSlug";

describe("Werd routes", () => {
  it("creates a stable slug", () => {
    expect(toWerdSlug("  A Lover's Quarrel  ")).toBe("a-lover-s-quarrel");
  });

  it("creates the canonical specimen path", () => {
    expect(werdPath("Petrichor")).toBe("/werd/petrichor");
  });
});
