# WerdNerd Architecture

Last updated: July 13, 2026

This document describes how the app is currently built plus near-term architecture direction.

For intended product features and visual direction, see `doc/PROJECT_BLUEPRINT.md`.

## 1) System Overview

WerdNerd is a React + TypeScript web app for exploring and playing with unusual words.

Current architecture:

- Frontend: React 18, TypeScript, Vite
- Routing: React Router (`BrowserRouter` + `Routes`)
- Styling: Tailwind CSS 4 + custom CSS tokens/effects + reusable UI components
- Backend: Supabase client, typed domain models, query helpers, and Auth integration
- UI model: page-driven with shared navigation and footer around routed content

## 2) Current Project Structure (high-level)

- `src/App.tsx`: app shell, navigation, route rendering, Suspense fallback, and footer
- `src/routes.ts`: route constants and route-to-component registry
- `src/pages/`: page-level screens
- `src/components/`: shared UI, layout, navigation, and game components
- `src/games/`: game engines and supporting logic
- `src/hooks/`: reusable feature hooks such as `useWerds`
- `src/contexts/`: cross-cutting React contexts such as Auth
- `src/utils/supabase/`: client and query helpers
- `src/types/`: domain and utility types
- `src/index.css`: current global styles, theme variables, and several shared visual effects

Planned styling consolidation is documented in `doc/PROJECT_BLUEPRINT.md`. Do not assume planned `src/styles/*` files already exist.

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
- `/auth/login`
- `/auth/signup`
- `/auth/reset-password`
- `/settings`

Known route-direction work includes a Werd detail route, Word of the Day destination, and a catch-all 404 route.

## 4) Data Flow

Typical flow:

1. User interaction in page or component
2. Feature-local state or hook handles UI state
3. Supabase query or mutation where applicable
4. Response is mapped into typed domain/UI state
5. UI updates for success, loading, empty, or error states

Current query helpers include Werd, curated Werd, tag, random Werd, and Word of the Day reads.

Some features still write directly to the Supabase client from page-level code. Continue consolidating reusable data access into typed helpers or feature hooks when doing so improves error handling, reuse, or maintainability.

## 5) State Management Strategy

Current:

- local component state for most UI behavior
- feature hooks for reusable logic
- `AuthContext` for session and Auth state
- no global state-management library

Guideline:

- keep state local first
- use a feature hook when loading, errors, derived state, or mutations need a reusable boundary
- introduce shared context only when multiple distant features need synchronized state
- do not add a global `WerdContext` without a demonstrated cross-feature state requirement

## 6) Styling Architecture

Current:

- design direction: dark, chrome-cinematic minimalism with colorful accents
- core color tokens and shared chrome effects currently live in `src/index.css`
- page and feature styles are also maintained in nearby CSS files where appropriate
- reusable UI primitives live under `src/components/ui/`
- Tailwind CSS 4 is available for utility styling and CSS-based theme variables

Planned direction:

- consolidate shared theme tokens into `src/styles/theme.css`
- consolidate reusable cinematic effects into `src/styles/chrome-effects.css`
- add `src/styles/layout.css` only for genuinely shared page/container structures
- map useful shared values into Tailwind 4 theme utilities

Do not create `theme.ts` unless TypeScript or JavaScript code develops a concrete need to consume shared theme values.

## 7) Supabase Architecture

Current usage includes:

- Supabase browser client setup in `src/utils/supabase/`
- Werd and tag read helpers
- deterministic Word of the Day selection
- random Werd selection
- direct Submit Werd and `werd_tags` inserts in the current submission form
- Supabase Auth through `AuthContext`

Schema direction centers on:

- `werds`
- `tags`
- `werd_tags`
- user/profile data as required by profile and preference features
- favorites
- games and leaderboard data where replayability requires persistence
- `funfacts`

Use tags as the primary Werd classification system. Do not introduce a parallel categories taxonomy without an explicit product decision.

Near-term data priorities:

- generate database types from the actual Supabase schema
- apply database typing to the Supabase client
- move reusable mutations into typed helpers
- add validation and duplicate detection to submissions
- review RLS for user-owned or public-write data

## 8) Auth

Current:

- `AuthProvider` wraps the app
- session and user state are stored in `AuthContext`
- signup, password login, sign-out, and password-reset requests are implemented
- login, signup, and reset-password routes exist
- Settings currently includes a locally persisted theme toggle

Future auth/user work should be driven by concrete protected features such as profiles, favorites, or admin workflows.

Do not build `ProtectedRoute` or an admin-role system before a real route or workflow requires it.

## 9) Quality and Reliability

- Type safety: strict TypeScript
- Build: `npm run build` (`tsc` + `vite build`)
- Lint: `npm run lint`
- Test tooling available: Vitest + Playwright; coverage maturity may vary by feature
- Lazy-loaded page routes are registered through `src/routes.ts`

Guidelines:

- preserve loading, empty, and error states for fetched content
- respect `prefers-reduced-motion` for non-essential cinematic motion
- verify current code before acting on a Blueprint backlog item
- update this document when architectural reality changes

## 10) Known Architecture Notes

- Some files may still contain mixed or legacy TS/JS artifacts; normalize them only when they create real maintenance friction.
- Keep route/path constants in `src/routes.ts` as the routing source of truth.
- Home components currently navigate to `/vault?search=...`, while the current Vault page only handles the `tag` query parameter. Vault search/query-parameter support is a known implementation gap.
- The current footer contains placeholder links and does not yet match the complete social list defined in the Project Blueprint.

## 11) Near-Term Architecture Priorities

1. Implement coherent Vault search and query-parameter handling.
2. Generate and apply Supabase database types.
3. Continue consolidating reusable Supabase mutations and feature hooks.
4. Consolidate the CSS-based design system without introducing unnecessary parallel theme layers.
5. Tighten core user flows around Vault, Submit Werd, Auth, favorites, and games as those features mature.

---

If this document conflicts with current code, trust code for implementation reality and update this document.

If current code conflicts with `doc/PROJECT_BLUEPRINT.md`, treat that as a current-state versus intended-state mismatch and flag it rather than silently changing product intent.
