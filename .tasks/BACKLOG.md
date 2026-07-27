# Backlog

Do not start these while a task remains in `NEXT.md`. Promote only the next dependency-ready task.

## TASK-004: Complete the core Vault discovery loop
**Priority:** P1
**Updated:** 2026-07-26 22:31

Basic Vault search, combined tag filtering, and `/werd/:slug` are already implemented. Finish the path from Home discovery to a useful specimen detail experience before adding broader features.

### Checklist

- [ ] Link WOTD, Spin the Vault, and Curated Picks directly to `/werd/:slug` instead of routing through a Vault search result.
- [ ] Add related Werds based on shared tags to the detail page.
- [ ] Preserve combined `search` and `tag` URL state, and make tag matching consistently normalized/case-insensitive.
- [ ] Add an error state to `useWerds()` so network failures do not look like an empty Vault.
- [ ] Decide whether simple substring search is sufficient for the current data size; add lightweight fuzzy matching only if real searches demonstrate the need.
- [ ] Add a dedicated WOTD destination only if the detail route does not satisfy the editorial experience.
- [ ] Add the synonym flip interaction only after synonym data is present and typed.
- [ ] Verify deep links, browser back/forward, zero results, slow loading, and mobile shelf scrolling.

### Done when

Every Home discovery entry opens a stable specimen page, related Werds continue the browsing loop, and loading/empty/error states are distinguishable.

---

## TASK-005: Ship the missing Fun Facts feature
**Priority:** P1
**Updated:** 2026-07-26 22:31

Fun Facts is a Blueprint “must retain” feature but no current page, hook, or query implements it.

### Checklist

- [ ] Confirm the live `funfacts` schema and intended fields/status flags.
- [ ] Add generated types plus a focused random/curated query and `useFunFacts()` only if reusable UI state warrants it.
- [ ] Build the smallest useful Fun Facts surface with loading, empty, and error states.
- [ ] Decide whether Daily Fun Fact belongs on Home, at its own route, or both.
- [ ] Wire the footer destination to the real surface.
- [ ] Add reduced-motion-friendly presentation and a simple behavior test.

### Done when

At least one real Fun Fact can be discovered through the app and the footer no longer points to a placeholder.

---

## TASK-006: Deliver one complete Auth, profile, and favorites slice
**Priority:** P1
**Updated:** 2026-07-26 22:31

Email signup/login/sign-out and reset-email requests exist, but the Auth pages are visually generic, password recovery is incomplete, there is no profile route, and favorite controls are local-only UI.

### Checklist

- [ ] Verify signup confirmation, login, session restoration, sign-out, and recovery redirects against the real Supabase project.
- [ ] Add the post-email password update screen required to complete recovery.
- [ ] Restyle Auth screens to the WerdNerd system with accessible labels, pending states, and safe user-facing errors.
- [ ] Define the minimum profile schema the UI actually needs and add a profile route.
- [ ] Add typed favorites helpers or `useFavorites()` with fetch, toggle, optimistic reconciliation, and rollback on error.
- [ ] Place favorite controls on the Werd detail experience and show saved Werds on the profile.
- [ ] Add `ProtectedRoute` only now that profile/favorites provide a real protected destination.
- [ ] Give signed-in navigation clear Profile, Settings, and Sign Out actions.

### Done when

A user can create an account, recover access, save/unsave a Werd, refresh without losing state, and view saved Werds on a protected profile.

---

## TASK-007: Replace nonfunctional shell actions and placeholder destinations
**Priority:** P1
**Updated:** 2026-07-26 22:31

The global shell looks substantially complete, but the newsletter only prevents submit, the contact form reports success without sending, and many footer/social links are hash placeholders. Pinterest and TikTok are also missing from the Blueprint list.

### Checklist

- [ ] Choose and implement a real newsletter destination with consent copy, validation, pending/success/error states, and duplicate handling.
- [ ] Connect the About contact form to a real delivery/store path; never show success before the backend confirms receipt.
- [ ] Replace social placeholders with Stephanie’s real URLs and add Pinterest and TikTok, or intentionally hide networks that are not ready.
- [ ] Replace internal placeholder links with real routes/sections or visibly mark future destinations as unavailable.
- [ ] Provide actual Privacy, Terms, Cookie, and Accessibility destinations before collecting user data in production.
- [ ] Check keyboard navigation, focus treatment, mobile menu behavior, and footer form announcements.

### Done when

Every visible global action either works, navigates somewhere real, or is honestly presented as unavailable.

---

## TASK-008: Run the core-beta production readiness pass
**Priority:** P1
**Updated:** 2026-07-26 22:31

Build and lint currently pass, but release-level routing, metadata, automated smoke coverage, bundle size, and deployment checks remain.

### Checklist

- [ ] Add a branded 404 page and catch-all route.
- [ ] Replace the generic document title with core title/description, canonical, Open Graph, and social metadata appropriate for Vite.
- [ ] Add a small automated smoke suite for Home, Vault search/tag state, Werd detail, Submit validation, Auth entry points, and route fallback.
- [ ] Keep `npm run build` and `npm run lint` green and add a test script that CI can run.
- [ ] Reduce the approximately 4.6 MB minified Boggle route chunk, currently dominated by the bundled word list; load or partition dictionary data deliberately.
- [ ] Perform responsive, keyboard, contrast, reduced-motion, loading, empty, and error-state checks on primary pages.
- [ ] Verify Vercel build settings, SPA rewrites/deep links, environment variables, Supabase redirect URLs, and a production smoke test.
- [ ] Reconcile README, ARCHITECTURE, and ROADMAP only after the deployed behavior is confirmed.

### Done when

A production deployment passes automated and manual core-flow checks, deep links work, metadata is credible, and there are no known release-blocking accessibility or data failures.

---

## TASK-009: Expand the Game Cabinet one finished game at a time
**Priority:** P2
**Updated:** 2026-07-26 22:31

Custom WerdNerd game names are already defined and Letter-Lock/Boggle is the only playable game. The other six routes are explicit Coming Soon screens, so avoid treating the cabinet artwork as completed gameplay.

### Checklist

- [ ] First harden Letter-Lock: valid adjacency/path rules, deselection, round/timer behavior, invalid/duplicate feedback, restart flow, keyboard/touch UX, and tests.
- [ ] Solve the Boggle dictionary bundle-size issue as part of that hardening.
- [ ] Pick exactly one next game based on smallest shippable mechanic; do not implement multiple engines in parallel.
- [ ] For each game, complete rules, scoring, feedback, replay/reset, accessibility, responsive behavior, and tests before promoting another Coming Soon card.
- [ ] Make Coming Soon cards non-misleading while their routes remain placeholders.
- [ ] Add leaderboard persistence only after a game’s score rules are stable and the Auth/favorites data layer is proven.

### Done when

Each game labeled Playable is genuinely complete enough to replay, and only then is another cabinet slot promoted.

---

## TASK-010: Consolidate the design system after core flows stabilize
**Priority:** P2
**Updated:** 2026-07-26 22:31

The visual identity is strong, but shared tokens/effects remain concentrated in a large `src/index.css` plus feature CSS. Consolidate this only after the functional core and release baseline are stable.

### Checklist

- [ ] Inventory duplicated colors, type scales, spacing, radii, shadows, chrome edges, shimmer, glow, parallax, and reduced-motion rules.
- [ ] Move shared tokens into `src/styles/theme.css`.
- [ ] Move genuinely reusable cinematic effects into `src/styles/chrome-effects.css`.
- [ ] Add `src/styles/layout.css` only for layout patterns used across multiple pages.
- [ ] Map a small set of stable tokens into Tailwind 4 utilities where that reduces repetition.
- [ ] Do not add `theme.ts` unless runtime TypeScript code actually needs token values.
- [ ] Refactor page-by-page in small visual-regression-safe slices; do not combine this with unrelated redesigns.

### Done when

Shared styling has one clear CSS source of truth, page CSS is smaller and feature-specific, and the current visual identity is preserved.

---
