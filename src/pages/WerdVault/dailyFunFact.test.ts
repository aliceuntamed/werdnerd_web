import { describe, expect, it } from "vitest";
import { selectDailyFunFact } from "./dailyFactSelection";

describe("Daily Fun Fact selection", () => {
  const facts = ["one", "two", "three", "four"];

  it("keeps the same fact throughout one UTC calendar day", () => {
    const morning = new Date("2026-09-08T00:01:00.000Z");
    const evening = new Date("2026-09-08T23:59:00.000Z");

    expect(selectDailyFunFact(facts, morning)).toBe(
      selectDailyFunFact(facts, evening),
    );
  });

  it("returns no fact when the collection is empty", () => {
    expect(selectDailyFunFact([], new Date("2026-09-08T12:00:00.000Z"))).toBeNull();
  });
});
