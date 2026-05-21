# Werds Excel Workflow

Use `doc/werds.xlsx` as the long-term editing workspace. Supabase is the app's source of truth.

## Status Values

- `draft`: still being written
- `needs_fact_checked`: ready for Codex review before publishing
- `ready_for_import`: approved to insert into Supabase
- `imported`: already inserted
- `needs_revision`: hold until you decide what to change

## Import Rules

The importer is intentionally conservative:

- It only reads rows where `status` is `ready_for_import`.
- It inserts new werds only.
- If the same `werd` already exists in Supabase, it skips the row and reports it.
- It creates missing tags in `tags`.
- It links new werds to tags in `werd_tags`.
- It does not overwrite existing Supabase records.
- It writes a JSON report to `doc/import-reports`.

Current Supabase `werds` columns do not include `origin` or `source_2`, so those Excel columns are reported as unsupported instead of silently pretending they were imported.

## Commands

Preview what would happen:

```bash
npm run werds:dry-run
```

Import approved rows and mark successful workbook rows as `imported`:

```bash
npm run werds:import
```

Close `doc/werds.xlsx` before running `werds:import`, because the script writes status updates back to the workbook.
