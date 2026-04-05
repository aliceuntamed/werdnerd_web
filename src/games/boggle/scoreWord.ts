export function scoreWord(word: string): number {
  const length = word.length;

  if (length < 3) return 0;
  if (length === 3 || length === 4) return 1;
  if (length === 5) return 2;
  if (length === 6) return 3;
  if (length === 7) return 5;
  if (length >= 8) return 11;

  return 0;
}
