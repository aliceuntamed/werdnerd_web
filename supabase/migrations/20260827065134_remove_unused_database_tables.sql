-- Remove database tables that are not referenced by the WerdNerd application.
-- The Airtable server and spatial extension stack are intentionally preserved.

drop foreign table if exists public.air_werds;
drop table if exists public.werds_import;
