# WerdNerd Agent Guide

This repository uses root agent instruction files to guide AI coding agents.

## Primary files

- `.agents/AGENT_INSTRUCTIONS.md` — core agent guidance, priorities, repo-specific conventions.
- `.agents/COPILOT_INSTRUCTIONS.md` — day-to-day coding rules, dev commands, and verification guidance.

## Project Preferences and Information

- `.agents/ARCHITECTURE.md`
- `/ROADMAP.md`
- `/README.md` - project description

### Project Style

- `.agents/style.md`
- `src/styles/globals.css`
- `src/styles/tokens.css`
- `src/theme/theme.ts`
- `/index.css`


## Recommended workflow for AI agents

1. Read `.agents/AGENT_INSTRUCTIONS.md` first.
2. Consult `.agents/COPILOT_INSTRUCTIONS.md` for build/dev commands and practical rules.
3. Use actual source files as the final source of truth.

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
