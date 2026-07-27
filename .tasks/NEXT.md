# Next

Work these tasks in order. Keep only one task in `IN_PROGRESS.md` at a time.

## TASK-001: Restore the local Supabase runtime and prove the core app works
**Priority:** P0
**Updated:** 2026-07-26 22:31

The new PC has no local `.env.local`. The app currently builds by falling back to placeholder Supabase credentials, but database and Auth features cannot work correctly until the real public client configuration is restored.

### Checklist

- [ ] Create an ignored `.env.local` with `VITE_SUPABASE_URL` and the public publishable key (or legacy anon key); never use a service-role or secret key in the browser.
- [ ] Run `npm install` if this checkout has not already been installed, then start `npm run dev`.
- [ ] Confirm the missing-Supabase-environment warning is gone.
- [ ] Smoke-test Home data, WOTD, Spin the Vault, Vault search/tag shelves, one Werd detail page, Submit Werd tag loading, login, signup, sign-out, and password-reset email.
- [ ] Confirm Supabase Auth redirect URLs include the local Vite URL and the production domain.
- [ ] Record any runtime/schema errors as scoped follow-up notes under TASK-002 or TASK-003 instead of switching to unrelated UI polish.

### Done when

The app can be run on this PC with real development data, and the exact failing backend flows—if any—are known.

---

## TASK-002: Type and secure the Supabase data layer
**Priority:** P0
**Updated:** 2026-07-26 22:31

Establish the real database contract before adding more features. The current client is untyped, `supabase-policies.sql` is not a complete representation of the tables the frontend uses, and several writes happen directly inside page components.

### Checklist

- [ ] Inspect the actual Supabase schema and Data API exposure for `werds`, `tags`, `werd_tags`, `favorites`, profile/user data, `games`, `leaderboard`, and `funfacts`.
- [ ] Generate a `Database` type from the live schema and apply it to the browser client.
- [ ] Reconcile `src/types/werd.ts` with generated row/insert/update types while retaining a clean normalized UI model.
- [ ] Audit RLS on every exposed table; explicitly define intended access for anonymous reads, authenticated ownership, and community submissions.
- [ ] Ensure update policies include both ownership checks and `WITH CHECK`, and verify public clients cannot access privileged data.
- [ ] Move reusable reads and mutations into typed helpers; keep page components responsible for UI state, not raw table details.
- [ ] Add explicit error results or typed exceptions so hooks can render loading, empty, and error states.
- [ ] Verify representative anonymous and signed-in queries against the real project.

### Done when

The client and data helpers compile against the real schema, intended reads/writes are verified, and RLS—not browser code—is enforcing access.

---

## TASK-003: Finish Submit a Werd as a safe end-to-end pipeline
**Priority:** P0
**Updated:** 2026-07-26 22:31

The redesigned page exists, but submission logic still writes directly from the form, has minimal validation, does not detect duplicates, ignores tag-link insert errors, and displays hard-coded recent gems.

### Checklist

- [ ] Decide whether community submissions enter the public Vault immediately or enter a pending moderation state; use pending by default if no product reason requires instant publication.
- [ ] Define `SubmitWerdPayload` and a typed mutation helper or `useSubmitWerd()` hook.
- [ ] Normalize whitespace/casing and validate required werd, definition, allowed lengths, pronunciation, part of speech, and selected tags.
- [ ] Detect duplicate werds case-insensitively before insertion and back that rule with a database constraint where appropriate.
- [ ] Make the werd insert and `werd_tags` links succeed or fail as one logical operation, or provide safe cleanup/retry behavior for partial failures.
- [ ] Handle tag-loading errors separately from an empty tag list.
- [ ] Replace hard-coded “Recent community gems” with approved submission data, or label the section as illustrative until that query exists.
- [ ] Show specific accessible success/error feedback and prevent accidental double submission.
- [ ] Test success, duplicate, invalid input, permission failure, tag failure, offline/network failure, and mobile keyboard behavior.

### Done when

A real user can submit a valid Werd without creating duplicates, orphaned rows, or silently missing tag links, and the UI accurately reports every outcome.

---
