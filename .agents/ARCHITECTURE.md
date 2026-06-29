# WerdNerd Architecture

Last updated: May 13, 2026

This document describes how the app is currently built, plus near-term architecture direction.

## 1) System Overview

WerdNerd is a React + TypeScript web app for exploring and playing with unusual words.

Current architecture:

- Frontend: React 18, TypeScript, Vite
- Routing: React Router (BrowserRouter + Routes)
- Styling: Tailwind CSS + custom tokens + reusable UI components
- Backend: Supabase (client, queries, favorites integration)
- UI model: page-driven with shared layout/navigation components

## 2) Current Project Structure (high-level)

- `src/App.tsx`: app shell, navigation, route rendering
- `src/routes.ts`: route constants and route-to-component registry
- `src/pages/`: page-level screens (Home, Vault, About, Games, Submit, Playground, Settings)
- `src/components/`: shared UI, layout, navigation, game components
- `src/games/`: game engines and supporting logic
- `src/hooks/`: reusable hooks (`useWerds`, `useFavorites`, `useSpeech`)
- `src/utils/supabase/`: client and query helpers
- `src/types/`: domain and utility types
- `src/styles/` and `src/theme/`: tokens and styling primitives

## 3) Routing (current)

Routing is active and centralized via `src/routes.ts` and rendered in `src/App.tsx`.

Primary routes:

- `/`
- `/vault`
- `/about`
- `/playground` and legacy `/creators-playground`
- `/submit` and legacy `/submit-werd`
- `/games`
- `/games/boggle`
- `/games/wordle`
- `/games/wordsearch`
- `/games/trivia`
- `/games/hangman`
- `/games/brainteasers`
- `/games/codenames`
- `/settings`

## 4) Data Flow

Typical flow:

1. User interaction in page/component
2. Hook or handler updates local state
3. Supabase query/mutation (where applicable)
4. Response mapped into typed UI state
5. UI updates for success, empty, or error states

## 5) State Management Strategy

Current:

- Local component state for UI behavior
- Feature hooks for reusable logic
- No global state manager required yet

Guideline:

- Keep state local first
- Introduce shared/global state only when multiple distant features need it

## 6) Styling Architecture

- Design direction: moody minimalism with colorful accents
- Token source: `src/styles/tokens.css` and `src/theme/theme.ts`
- Shared UI primitives in `src/components/ui/`

## 7) Supabase Architecture

Current usage includes client setup and helper modules in `src/utils/supabase/`.

Schema direction currently centers on:

- `werds`
- `tags`
- `werd_tags`
- `users`
- `games`
- `leaderboard`
- `funfacts`

Note: keep schema docs in sync with actual migrations/source-of-truth when database changes land.

## 8) Quality and Reliability

- Type safety: strict TypeScript
- Build: `npm run build` (`tsc` + `vite build`)
- Lint: `npm run lint`
- Test tooling available: Vitest + Playwright (coverage maturity may vary by feature)

## 9) Known Architecture Notes

- Some files include both `.ts` and `.js` variants in game/data areas; this is workable short-term but should be normalized over time.
- Keep route/path constants in `src/routes.ts` as the single routing source of truth.

## 10) Near-Term Architecture Priorities

1. Keep feature delivery incremental and route-safe.
2. Continue consolidating data access through typed helpers/hooks.
3. Normalize duplicate TS/JS artifacts where they increase maintenance cost.
4. Tighten test coverage around core user flows (vault, submit, games).

---

If this document conflicts with the code, trust the code first and update this file immediately.
