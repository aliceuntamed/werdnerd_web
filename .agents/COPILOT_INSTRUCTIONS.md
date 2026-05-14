# Copilot Instructions for WerdNerd (Solo Builder)

Use this file for day-to-day coding decisions in this repo.

## Project Snapshot

- Stack: React + TypeScript + Vite + Tailwind + shadcn/ui + Supabase.
- Goal: a playful, visually distinct word-play app (WerdVault, games, creator tools).
- Default mode: practical shipping. Keep scope tight unless asked otherwise.

## Working Rules

- Match existing patterns in nearby files before introducing new ones.
- Keep new logic small and composable.
- Prefer strict typing over `any`.
- Keep styling consistent with `.agents/style.md`.
- Build for responsive behavior by default.

## Architecture Guardrails

- If routing/data structure in docs does not match code, trust code and call out the mismatch.
- Prefer feature-local state first; introduce global state only when multiple distant areas truly need shared state.
- Keep domain logic close to the feature (hooks/services) and keep presentational components lean.

## Common Task Patterns

### Add a new feature/page

1. Build minimal UI and route wiring.
2. Add typed data model and Supabase interaction.
3. Add loading/empty/error states.
4. Add a quick manual verification checklist.

### Add or update Supabase data flow

1. Define/confirm TypeScript types.
2. Implement query/mutation with clear error handling.
3. Handle optimistic or pending UI states where helpful.
4. Document assumptions in code comments only when non-obvious.

### UI iteration

1. Start from existing components/tokens.
2. Improve hierarchy/spacing first.
3. Add motion only if it improves clarity or delight.

## Definition of Done (practical)

- Feature works in local dev.
- No obvious TypeScript regressions.
- Empty/loading/error states exist where needed.
- Mobile and desktop behavior are both reasonable.
- Styling stays on-brand.

## Escalate to User When

- A choice changes schema or long-term architecture.
- A tradeoff impacts cost, security, or maintainability.
- Multiple valid paths have materially different outcomes.

## Avoid

- Large speculative rewrites.
- New dependencies for minor problems.
- Hidden behavior changes without note.

---

Bias: ship value now, keep options open, preserve quality.
