begin;

do $$
begin
  create type public.werd_submission_status as enum (
    'pending',
    'published',
    'rejected'
  );
exception
  when duplicate_object then null;
end
$$;

alter table public.werds
  add column if not exists submission_status public.werd_submission_status;

-- Existing catalog entries predate moderation and remain publicly available.
update public.werds
set submission_status = 'published'
where submission_status is null;

alter table public.werds
  alter column submission_status set default 'pending',
  alter column submission_status set not null;

grant usage on type public.werd_submission_status
to anon, authenticated, service_role;

-- Enforce the same trim/case/whitespace normalization used at the UI boundary.
create unique index if not exists werds_normalized_name_unique
on public.werds (
  lower(regexp_replace(btrim(werd), '[[:space:]]+', ' ', 'g'))
)
where werd is not null and btrim(werd) <> '';

-- RLS ownership lookups should not scan the full catalog.
create index if not exists werds_created_by_idx
on public.werds (created_by)
where created_by is not null;

-- Community authors may submit pending rows but cannot publish or curate them.
grant update (submission_status, is_curated)
on table public.werds
to authenticated;

drop policy if exists werds_read_public on public.werds;
drop policy if exists werds_read_published on public.werds;
drop policy if exists werds_read_owner on public.werds;
drop policy if exists werds_read_admin on public.werds;
drop policy if exists werds_insert_owner on public.werds;
drop policy if exists werds_update_owner on public.werds;
drop policy if exists werds_update_admin on public.werds;
drop policy if exists werds_delete_owner on public.werds;
drop policy if exists werds_delete_admin on public.werds;

drop policy if exists werd_tags_read_public on public.werd_tags;
drop policy if exists werd_tags_read_published on public.werd_tags;
drop policy if exists werd_tags_read_owner on public.werd_tags;
drop policy if exists werd_tags_read_admin on public.werd_tags;
drop policy if exists werd_tags_insert_owner on public.werd_tags;
drop policy if exists werd_tags_delete_owner on public.werd_tags;

create policy werds_read_published
on public.werds for select
to anon, authenticated
using (submission_status = 'published');

-- Owners need visibility for tag-link validation and future submission history.
create policy werds_read_owner
on public.werds for select
to authenticated
using ((select auth.uid()) = created_by);

create policy werds_read_admin
on public.werds for select
to authenticated
using (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

create policy werds_insert_owner
on public.werds for insert
to authenticated
with check (
  (select auth.uid()) = created_by
  and submission_status = 'pending'
  and coalesce(is_curated, false) = false
);

create policy werds_update_owner
on public.werds for update
to authenticated
using (
  (select auth.uid()) = created_by
  and submission_status = 'pending'
)
with check (
  (select auth.uid()) = created_by
  and submission_status = 'pending'
  and coalesce(is_curated, false) = false
);

create policy werds_update_admin
on public.werds for update
to authenticated
using (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
)
with check (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

create policy werds_delete_owner
on public.werds for delete
to authenticated
using (
  (select auth.uid()) = created_by
  and submission_status = 'pending'
);

create policy werds_delete_admin
on public.werds for delete
to authenticated
using (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

-- The link table repeats the Werd text, so its read policy must also hide
-- pending and rejected submissions from other users.
create policy werd_tags_read_published
on public.werd_tags for select
to anon, authenticated
using (
  exists (
    select 1
    from public.werds
    where werds.werd_id = werd_tags.werd_id
      and werds.submission_status = 'published'
  )
);

create policy werd_tags_read_owner
on public.werd_tags for select
to authenticated
using (
  exists (
    select 1
    from public.werds
    where werds.werd_id = werd_tags.werd_id
      and werds.created_by = (select auth.uid())
  )
);

create policy werd_tags_read_admin
on public.werd_tags for select
to authenticated
using (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

create policy werd_tags_insert_owner
on public.werd_tags for insert
to authenticated
with check (
  exists (
    select 1
    from public.werds
    where werds.werd_id = werd_tags.werd_id
      and werds.created_by = (select auth.uid())
      and werds.submission_status = 'pending'
      and werds.werd = werd_tags.werd
  )
  and exists (
    select 1
    from public.tags
    where tags.tag_id = werd_tags.tag_id
      and tags.tag_name = werd_tags.tag
  )
);

create policy werd_tags_delete_owner
on public.werd_tags for delete
to authenticated
using (
  exists (
    select 1
    from public.werds
    where werds.werd_id = werd_tags.werd_id
      and werds.created_by = (select auth.uid())
      and werds.submission_status = 'pending'
  )
);

commit;
