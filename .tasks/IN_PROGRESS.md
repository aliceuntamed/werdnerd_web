# In Progress

## TASK-002: Type and secure the Supabase data layer
**Priority:** P0
**Updated:** 2026-07-27 05:27

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
