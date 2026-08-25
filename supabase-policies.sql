-- WerdNerd public Data API contract
-- Audited against Supabase project kfphjvgwatjyabimzinq on 2026-07-27.
--
-- Grants decide which relations each API role can reach. RLS then decides
-- which rows that role can read or change. Keep both layers in sync.

begin;

-- New public objects are private until their API contract is explicitly added.
alter default privileges for role postgres in schema public
  revoke select, insert, update, delete on tables
  from anon, authenticated, service_role;

alter default privileges for role postgres in schema public
  revoke usage, select on sequences
  from anon, authenticated, service_role;

alter default privileges for role postgres in schema public
  revoke execute on functions
  from public, anon, authenticated, service_role;

-- Remove legacy broad table grants, including the air_werds / werds_import
-- staging surfaces. Managed extension functions are owned by Supabase roles
-- and are reviewed separately by the security advisor.
revoke all privileges on all tables in schema public from anon, authenticated;
revoke all privileges on all sequences in schema public from anon, authenticated;

grant usage on schema public to anon, authenticated, service_role;

-- Browser-readable catalog data.
grant select on table
  public.werds,
  public.tags,
  public.werd_tags,
  public.funfacts,
  public.games,
  public.leaderboard
to anon, authenticated;

-- Signed-in, user-owned data.
grant select, insert, delete on table public.favorites to authenticated;

grant select, delete on table public.users to authenticated;
grant insert (user_id, email, phone) on table public.users to authenticated;
grant update (email, phone, updated_at) on table public.users to authenticated;

-- Community Werds cannot set ownership, curation, or audit columns after insert.
grant insert (
  werd,
  tags,
  pronunciation,
  part_of_speech,
  definition,
  language,
  source_1,
  source_2,
  origin,
  created_by
) on table public.werds to authenticated;

grant update (
  werd,
  tags,
  pronunciation,
  part_of_speech,
  definition,
  language,
  source_1,
  source_2,
  origin,
  last_modified
) on table public.werds to authenticated;

-- Status columns are writable at the grant layer so moderation policies can
-- distinguish contributors from admins. RLS still prevents self-publishing.
grant update (submission_status, is_curated)
  on table public.werds to authenticated;

grant delete on table public.werds to authenticated;

grant insert (werd_id, tag_id, werd, tag)
  on table public.werd_tags to authenticated;
grant delete on table public.werd_tags to authenticated;

-- Admin and score workflows still require grants before RLS can evaluate them.
grant insert, update, delete on table
  public.funfacts,
  public.games,
  public.leaderboard
to authenticated;

-- Trusted server-side work keeps explicit access to the application tables.
grant select, insert, update, delete on table
  public.werds,
  public.tags,
  public.werd_tags,
  public.favorites,
  public.users,
  public.games,
  public.leaderboard,
  public.funfacts
to service_role;

-- RLS is mandatory on every regular application table exposed through public.
alter table public.werds enable row level security;
alter table public.tags enable row level security;
alter table public.werd_tags enable row level security;
alter table public.favorites enable row level security;
alter table public.users enable row level security;
alter table public.games enable row level security;
alter table public.leaderboard enable row level security;
alter table public.funfacts enable row level security;
alter table public.werds_import enable row level security;

-- Replace the overlapping legacy policies with one intentional policy set.
do $$
declare
  existing_policy record;
begin
  for existing_policy in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename = any (array[
        'werds',
        'tags',
        'werd_tags',
        'favorites',
        'users',
        'games',
        'leaderboard',
        'funfacts',
        'werds_import'
      ])
  loop
    execute format(
      'drop policy if exists %I on %I.%I',
      existing_policy.policyname,
      existing_policy.schemaname,
      existing_policy.tablename
    );
  end loop;
end
$$;

-- Werd catalog and authenticated community contributions.
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

create policy werds_insert_owner
on public.werds for insert
to authenticated
with check (
  (select auth.uid()) = created_by
  and submission_status = 'pending'
  and coalesce(is_curated, false) = false
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

create policy tags_read_public
on public.tags for select
to anon, authenticated
using (true);

-- werd_tags repeats Werd text, so it follows the parent submission's visibility.
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

-- Favorites are immutable links: add, read, or remove your own.
create policy favorites_select_owner
on public.favorites for select
to authenticated
using (user_id = (select auth.uid()));

create policy favorites_insert_owner
on public.favorites for insert
to authenticated
with check (user_id = (select auth.uid()));

create policy favorites_delete_owner
on public.favorites for delete
to authenticated
using (user_id = (select auth.uid()));

-- Profile ownership is enforced by RLS; column grants protect is_admin.
create policy users_select_own
on public.users for select
to authenticated
using (user_id = (select auth.uid()));

create policy users_insert_own
on public.users for insert
to authenticated
with check (user_id = (select auth.uid()));

create policy users_update_own
on public.users for update
to authenticated
using (user_id = (select auth.uid()))
with check (user_id = (select auth.uid()));

create policy users_delete_own
on public.users for delete
to authenticated
using (user_id = (select auth.uid()));

-- Games are catalog records. Everyone may read them; only admins may write.
create policy games_read_public
on public.games for select
to anon, authenticated
using (true);

create policy games_insert_admin
on public.games for insert
to authenticated
with check (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

create policy games_update_admin
on public.games for update
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

create policy games_delete_admin
on public.games for delete
to authenticated
using (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

-- Public scores are visible to everyone; private scores remain owner-only.
create policy leaderboard_select_public
on public.leaderboard for select
to anon, authenticated
using (is_public = true);

create policy leaderboard_select_owner
on public.leaderboard for select
to authenticated
using (user_id = (select auth.uid()));

create policy leaderboard_insert_owner
on public.leaderboard for insert
to authenticated
with check (user_id = (select auth.uid()));

create policy leaderboard_update_owner
on public.leaderboard for update
to authenticated
using (user_id = (select auth.uid()))
with check (user_id = (select auth.uid()));

create policy leaderboard_delete_owner
on public.leaderboard for delete
to authenticated
using (user_id = (select auth.uid()));

create policy leaderboard_admin_all
on public.leaderboard for all
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

-- Fun Facts are public content with admin-only mutation.
create policy funfacts_read_public
on public.funfacts for select
to anon, authenticated
using (true);

create policy funfacts_insert_admin
on public.funfacts for insert
to authenticated
with check (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

create policy funfacts_update_admin
on public.funfacts for update
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

create policy funfacts_delete_admin
on public.funfacts for delete
to authenticated
using (
  exists (
    select 1
    from public.users
    where users.user_id = (select auth.uid())
      and users.is_admin = true
  )
);

-- Trigger-only functions must not be callable as public RPC endpoints.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.users (user_id, email, created_at)
  values (new.id, new.email, now())
  on conflict (user_id) do nothing;

  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

revoke execute on function public.set_updated_at() from public, anon, authenticated;

-- Bring accounts created before trigger installation into the profile table.
insert into public.users (user_id, email, created_at)
select id, email, created_at
from auth.users
on conflict (user_id) do update
set email = excluded.email
where public.users.email is null;

commit;
