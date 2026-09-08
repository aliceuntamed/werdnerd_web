# WerdNerd Agent Guide

This repository uses root agent instruction files to guide AI coding agents.

## Primary files

- `.agents/AGENT_INSTRUCTIONS.md` — core agent guidance, priorities, repo-specific conventions.
- `.agents/COPILOT_INSTRUCTIONS.md` — day-to-day coding rules, dev commands, and verification guidance.
- `PROJECT_MEMORY.md` — durable project decisions, continuity context, recurring gotchas, and active direction across sessions.

## Project Preferences and Information

- `.agents/PROJECT_BLUEPRINT.md`
- `.agents/ARCHITECTURE.md`
- `/ROADMAP.md`
- `/README.md` - project description

### Project Style

- `/index.css`

## Recommended workflow for AI agents

1. Read `.agents/AGENT_INSTRUCTIONS.md` first.
2. Read `PROJECT_MEMORY.md` for durable project context relevant to the current task.
3. Consult `.agents/COPILOT_INSTRUCTIONS.md` for build/dev commands and practical rules.
4. For product, feature, or visual-design work, consult `.agents/PROJECT_BLUEPRINT.md`.
5. If a persistent memory provider/tool is available (for example Empirical), search it using `werdnerd_web` plus the current feature/topic before making decisions that depend on prior sessions.
6. Use actual source files as the final source of truth for what is currently implemented.

### Memory workflow

Use memory to preserve continuity, not to create a transcript archive.

At the start of work:
- Search available persistent memory for relevant prior decisions when the task depends on history.
- Cross-check remembered information against `PROJECT_MEMORY.md`, the Project Blueprint, and current code.
- If memory conflicts with current code or owner-maintained guidance, flag the mismatch instead of silently trusting stale memory.

At the end of work:
- Add or update `PROJECT_MEMORY.md` only when a durable decision, recurring gotcha, meaningful preference, or important implementation fact was learned.
- If a persistent memory provider is available, save the same durable decision there when useful.
- Do not store routine edits, temporary debugging notes, guesses, credentials, tokens, or private personal information.
- Prefer updating an existing memory entry over adding duplicates.

## Repo-specific guidance

- Routing is centralized in `src/routes.ts` and wired in `src/App.tsx`.
- Page components live under `src/pages/`.
- Shared UI pieces belong in `src/components/`, especially reusable primitives under `src/components/ui/`.
- Supabase helpers and client setup live in `src/utils/supabase/`.
- Domain types belong in `src/types/`.
- Prefer local component state and feature hooks in `src/hooks/` rather than adding global state.
- Keep new changes small, composable, and consistent with the existing visual/system style.

## Verification

- `npm run dev` for local development.
- `npm run build` and `npm run lint` before finalizing changes.
- Supabase local env: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

## Notes

- This file is a summary/entrypoint only; it is not a replacement for the detailed instructions in the other files.
- `PROJECT_MEMORY.md` is continuity context, not a substitute for verifying the current codebase.
