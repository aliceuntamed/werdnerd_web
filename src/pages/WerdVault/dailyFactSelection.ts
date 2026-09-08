export const DAILY_FUN_FACT_HASH = "#daily-fun-fact";

const MILLISECONDS_PER_DAY = 86_400_000;

export function getUtcDayNumber(date = new Date()) {
  return Math.floor(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    ) / MILLISECONDS_PER_DAY,
  );
}

export function selectDailyFunFact<T>(
  facts: readonly T[],
  date = new Date(),
): T | null {
  if (facts.length === 0) return null;
  return facts[getUtcDayNumber(date) % facts.length];
}
