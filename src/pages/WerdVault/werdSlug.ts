export function toWerdSlug(werd: string) {
  return werd.toLocaleLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function werdPath(werd: string) {
  return `/werd/${encodeURIComponent(toWerdSlug(werd))}`;
}
