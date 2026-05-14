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

## 3) Source of Truth

When instructions conflict, use this order:

1. Current codebase reality
2. This file (`.agents/AGENT_INSTRUCTIONS.md`)
3. `.agents/COPILOT_INSTRUCTIONS.md`
4. `ARCHITECTURE.md`
5. `ROADMAP.md`

Always flag mismatches briefly instead of silently guessing.

## 4) Build Approach

- Prefer small, incremental changes over large rewrites.
- Keep components focused and reusable.
- Preserve strict TypeScript quality.
- Avoid introducing heavy dependencies unless clearly justified.
- For new features, implement the smallest useful slice first (MVP), then polish.

## 5) UI/UX Expectations

- Keep the "moody minimalism + weird pops" brand intact.
- Prioritize legibility and hierarchy over decoration.
- Use motion intentionally, not everywhere.
- Ensure keyboard accessibility and semantic HTML.

## 6) Data & Backend

- Use Supabase as the default backend path.
- Keep schema changes explicit and reversible.
- Validate inputs at UI boundaries.
- Handle loading, empty, and error states every time data is fetched.

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

---

Short version: ship quickly, keep it clean, keep it weird, and leave future you a codebase you can trust.
