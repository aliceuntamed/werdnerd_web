# WerdNerd Agent Instructions (Solo Builder)

Purpose: help a solo builder ship fast, keep quality high, and preserve WerdNerd's distinct voice.

## 1) Core Priorities (in order)

1. Ship working features quickly.
2. Keep UX clear, playful, and accessible.
3. Preserve visual consistency with the WerdNerd style system.
4. Keep code easy to maintain for future you.

If priorities conflict: ship the smallest reliable version first, then iterate.

## 2) Collaboration Style

- Be concise and direct.
- Explain tradeoffs when they matter.
- Be proactive: suggest better approaches without waiting to be asked.
- Default to actionable help over theory.
- Ask follow-up questions only when the decision meaningfully affects architecture, data model, or long-term maintenance.

## 3) Sources of Truth

Use the source that matches the question being answered:

1. **Current codebase reality** — source of truth for what is currently implemented and how the application actually behaves.
2. **`.agents/PROJECT_BLUEPRINT.md`** — source of truth for WerdNerd product direction, required features, and visual/design intent.
3. **This file (`.agents/AGENT_INSTRUCTIONS.md`)** — source of truth for agent behavior and implementation approach.
4. **`.agents/COPILOT_INSTRUCTIONS.md`** — day-to-day coding guidance.
5. **`ARCHITECTURE.md`** — documented architecture; verify against current code.
6. **`ROADMAP.md`** — staged planning and broad delivery priorities.

Do not treat this as a single linear precedence ladder when comparing current implementation with future intent.

- Code answers: **What exists now?**
- The Project Blueprint answers: **What is WerdNerd supposed to become?**

If code conflicts with the Project Blueprint, flag the mismatch instead of silently choosing one or rebuilding existing code without analysis.

### Project Blueprint Ownership

`.agents/PROJECT_BLUEPRINT.md` is owner-maintained guidance.

- Read it before product, feature, or visual-design work.
- Do not edit, reorganize, shorten, or mark items complete unless Stephanie explicitly asks you to edit the blueprint.
- Always verify blueprint backlog items against the current codebase before implementing them.
- A feature listed as required may already exist; required-feature sections are product requirements, not implementation-status checklists.

Always flag meaningful documentation mismatches briefly instead of silently guessing.

## 3.1) Useful Repo Facts

- Routing is centralized in `src/routes.ts` and rendered from `src/App.tsx`.
- Page screens live in `src/pages/`.
- Shared UI components live in `src/components/` and reusable primitives under `src/components/ui/`.
- Supabase helpers and client setup live in `src/utils/supabase/`.
- Domain types belong in `src/types/`.
- The app currently uses local component state and feature hooks; no global state library is installed.
- Use existing feature-local hooks (`src/hooks/`) before introducing new shared state.

### Werd vs. Word

- Use **Werd/Werds** for WerdNerd domain concepts: Vault entries, specimens, submissions, collections, and branded feature copy.
- Use **word/words** for ordinary language, definitions, quotations, established linguistic terms, and game terminology such as Word Search.
- Use **WOTD** for code identifiers and internal labels.
- User-facing copy may spell out **Word of the Day** when that is clearer.
- Apply judgment to expressive copy; do not mechanically replace every occurrence of “word.”

Examples:

- “Submit a Werd”
- “Explore related Werds”
- “A Werd from the Vault”
- “Word Search”
- “A lover of words”
- “Words are slippery little beasts”
- `flipwords.tsx`
- `getWOTD`, `WOTD`, and `wotd-*`

## 4) Build Approach

- Prefer small, incremental changes over large rewrites.
- Keep components focused and reusable.
- Preserve strict TypeScript quality.
- Avoid introducing heavy dependencies unless clearly justified.
- For new features, implement the smallest useful slice first (MVP), then polish.

## 5) UI/UX Expectations

- Follow the product and visual direction in `.agents/PROJECT_BLUEPRINT.md`.
- Preserve the dark, chrome-cinematic curiosity-cabinet identity.
- Prioritize legibility and hierarchy over decoration.
- Cinematic environmental motion, layered depth, and parallax are encouraged when they strengthen atmosphere or discovery.
- Use motion intentionally; avoid stacking unrelated decorative animations on the same element.
- Use rainbow chrome as an accent, edge, reflection, or focal treatment rather than a default large-surface fill.
- Ensure keyboard accessibility and semantic HTML.
- Respect reduced-motion preferences for non-essential animation.

## 6) Data & Backend

- Use Supabase as the default backend path.
- Keep schema changes explicit and reversible.
- Validate inputs at UI boundaries.
- Handle loading, empty, and error states every time data is fetched.
- Use tags as the primary Werd classification system unless Stephanie explicitly changes the taxonomy model.

## 7) Performance & Quality

- Prevent obvious re-render and bundle bloat issues.
- Lazy-load heavy or secondary views when practical.
- Add or update tests when behavior is non-trivial.
- If tests are missing, include a short manual verification checklist.

## 8) Output Expectations

For implementation tasks, provide:

1. What changed
2. Why it changed
3. How to verify
4. Optional next best step

## 9) Anti-Patterns to Avoid

- No giant speculative refactors.
- No "perfect architecture" detours before shipping value.
- No copy-only visual changes that break consistency.
- No silent instruction conflicts.
- No rebuilding existing features because they also appear in the Project Blueprint's required-feature sections.
- No duplicate taxonomy systems for categories and tags without an explicit product decision.

---

Short version: ship quickly, keep it clean, keep it weird, and leave future you a codebase you can trust.
