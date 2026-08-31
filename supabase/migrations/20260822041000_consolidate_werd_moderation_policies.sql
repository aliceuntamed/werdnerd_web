begin;

drop policy if exists werds_read_published on public.werds;
drop policy if exists werds_read_owner on public.werds;
drop policy if exists werds_read_admin on public.werds;
drop policy if exists werds_update_owner on public.werds;
drop policy if exists werds_update_admin on public.werds;
drop policy if exists werds_delete_owner on public.werds;
drop policy if exists werds_delete_admin on public.werds;

create policy werds_read_published_anon
on public.werds for select
to anon
using (submission_status = 'published');

create policy werds_read_authenticated
on public.werds for select
to authenticated
using (
  submission_status = 'published'
  or (select auth.uid()) = created_by
  or exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

create policy werds_update_authenticated
on public.werds for update
to authenticated
using (
  (
    (select auth.uid()) = created_by
    and submission_status = 'pending'
  )
  or exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
)
with check (
  (
    (select auth.uid()) = created_by
    and submission_status = 'pending'
    and coalesce(is_curated, false) = false
  )
  or exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

create policy werds_delete_authenticated
on public.werds for delete
to authenticated
using (
  (
    (select auth.uid()) = created_by
    and submission_status = 'pending'
  )
  or exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

drop policy if exists werd_tags_read_published on public.werd_tags;
drop policy if exists werd_tags_read_owner on public.werd_tags;
drop policy if exists werd_tags_read_admin on public.werd_tags;

create policy werd_tags_read_published_anon
on public.werd_tags for select
to anon
using (
  exists (
    select 1
    from public.werds
    where werds.werd_id = werd_tags.werd_id
      and werds.submission_status = 'published'
  )
);

create policy werd_tags_read_authenticated
on public.werd_tags for select
to authenticated
using (
  exists (
    select 1
    from public.werds
    where werds.werd_id = werd_tags.werd_id
      and (
        werds.submission_status = 'published'
        or werds.created_by = (select auth.uid())
      )
  )
  or exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

commit;
