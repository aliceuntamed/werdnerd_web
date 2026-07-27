# Done

## TASK-001: Restore the local Supabase runtime and prove the core app works

**Priority:** P0
**Updated:** 2026-07-27 05:22

The new PC has no local `.env.local`. The app currently builds by falling back to placeholder Supabase credentials, but database and Auth features cannot work correctly until the real public client configuration is restored.

### Checklist

- [x] Create an ignored `.env.local` with `VITE_SUPABASE_URL` and the public publishable key (or legacy anon key); never use a service-role or secret key in the browser.
- [x] Run `npm install` if this checkout has not already been installed, then start `npm run dev`.
- [ ] Confirm the missing-Supabase-environment warning is gone.
- [x] Smoke-test Home data, WOTD, Spin the Vault, Vault search/tag shelves, one Werd detail page, Submit Werd tag loading, login, signup, sign-out, and password-reset email.
- [ ] Confirm Supabase Auth redirect URLs include the local Vite URL and the production domain.
- [ ] Record any runtime/schema errors as scoped follow-up notes under TASK-002 or TASK-003 instead of switching to unrelated UI polish.

### Done when

The app can be run on this PC with real development data, and the exact failing backend flows—if any—are known.

---

