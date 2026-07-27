# Next

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
