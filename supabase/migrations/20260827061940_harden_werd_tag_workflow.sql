begin;

-- The policies already allow owner-created pending submissions, but the API
-- roles also need matching column grants before RLS can be evaluated.
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
  created_by,
  submission_status
) on table public.werds to authenticated;

grant insert (werd_id, tag_id, werd, tag)
  on table public.werd_tags to authenticated;

-- Preserve all existing classifications by adding links that only exist in
-- the legacy comma-separated column. The relational tables remain canonical.
insert into public.tags (tag_name)
select distinct lower(btrim(raw.tag_name))
from public.werds w
cross join lateral unnest(string_to_array(coalesce(w.tags, ''), ',')) raw(tag_name)
where nullif(btrim(raw.tag_name), '') is not null
on conflict do nothing;

insert into public.werd_tags (werd_id, tag_id, werd, tag)
select distinct
  w.werd_id,
  t.tag_id,
  w.werd,
  t.tag_name
from public.werds w
cross join lateral unnest(string_to_array(coalesce(w.tags, ''), ',')) raw(tag_name)
join public.tags t
  on lower(btrim(t.tag_name)) = lower(btrim(raw.tag_name))
where nullif(btrim(raw.tag_name), '') is not null
on conflict (werd_id, tag_id) do nothing;

-- Repair stale display copies in the junction table without changing IDs.
update public.werd_tags wt
set werd = w.werd,
    tag = t.tag_name
from public.werds w, public.tags t
where w.werd_id = wt.werd_id
  and t.tag_id = wt.tag_id
  and (wt.werd is distinct from w.werd or wt.tag is distinct from t.tag_name);

-- If a relationship contained a tag missing from the legacy display column,
-- refresh only that affected cache rather than rewriting every row.
with relational_tags as (
  select
    wt.werd_id,
    string_agg(t.tag_name, ',' order by t.tag_name) as tag_list
  from public.werd_tags wt
  join public.tags t on t.tag_id = wt.tag_id
  group by wt.werd_id
), mismatched as (
  select w.werd_id, r.tag_list
  from public.werds w
  join relational_tags r using (werd_id)
  where exists (
    select lower(btrim(value))
    from unnest(string_to_array(coalesce(w.tags, ''), ',')) value
    where nullif(btrim(value), '') is not null
    except
    select lower(btrim(t.tag_name))
    from public.werd_tags wt
    join public.tags t on t.tag_id = wt.tag_id
    where wt.werd_id = w.werd_id
  )
  or exists (
    select lower(btrim(t.tag_name))
    from public.werd_tags wt
    join public.tags t on t.tag_id = wt.tag_id
    where wt.werd_id = w.werd_id
    except
    select lower(btrim(value))
    from unnest(string_to_array(coalesce(w.tags, ''), ',')) value
    where nullif(btrim(value), '') is not null
  )
)
update public.werds w
set tags = m.tag_list
from mismatched m
where m.werd_id = w.werd_id;

-- Keep the small controlled vocabulary clean and case-insensitively unique.
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.tags'::regclass
      and conname = 'tags_name_normalized_check'
  ) then
    alter table public.tags
      add constraint tags_name_normalized_check
      check (tag_name = lower(btrim(tag_name)) and tag_name <> '');
  end if;
end
$$;

create unique index if not exists tags_normalized_name_unique
  on public.tags (lower(btrim(tag_name)));

-- Keep the audit timestamp accurate for every update path, including RPCs
-- and dashboard edits.
create or replace function public.set_werd_last_modified()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.last_modified = now();
  return new;
end;
$$;

revoke all on function public.set_werd_last_modified() from public, anon, authenticated;

drop trigger if exists set_werd_last_modified on public.werds;
create trigger set_werd_last_modified
before update on public.werds
for each row execute function public.set_werd_last_modified();

-- Submit a Werd and all of its tag links in one transaction. SECURITY INVOKER
-- deliberately preserves the caller's grants and RLS checks.
create or replace function public.submit_werd_with_tags(
  p_werd text,
  p_definition text,
  p_tag_ids uuid[],
  p_pronunciation text default null,
  p_part_of_speech text default null
)
returns uuid
language plpgsql
security invoker
set search_path = ''
as $$
declare
  new_werd_id uuid;
  normalized_werd text := btrim(p_werd);
  distinct_tag_count integer;
  matched_tag_count integer;
  tag_list text;
begin
  if (select auth.uid()) is null then
    raise sqlstate 'P0001' using message = 'AUTH_REQUIRED';
  end if;

  if normalized_werd = '' or nullif(btrim(p_definition), '') is null then
    raise sqlstate 'P0001' using message = 'INVALID_WERD';
  end if;

  select count(distinct tag_id)
  into distinct_tag_count
  from unnest(coalesce(p_tag_ids, '{}'::uuid[])) tag_id;

  select count(*), string_agg(t.tag_name, ',' order by t.tag_name)
  into matched_tag_count, tag_list
  from public.tags t
  where t.tag_id in (
    select distinct tag_id
    from unnest(coalesce(p_tag_ids, '{}'::uuid[])) tag_id
  );

  if distinct_tag_count = 0 or matched_tag_count <> distinct_tag_count then
    raise sqlstate 'P0001' using message = 'INVALID_TAG';
  end if;

  insert into public.werds (
    werd,
    definition,
    pronunciation,
    part_of_speech,
    tags,
    created_by,
    submission_status
  )
  values (
    normalized_werd,
    btrim(p_definition),
    nullif(btrim(p_pronunciation), ''),
    nullif(btrim(p_part_of_speech), ''),
    tag_list,
    (select auth.uid()),
    'pending'
  )
  returning werd_id into new_werd_id;

  insert into public.werd_tags (werd_id, tag_id, werd, tag)
  select new_werd_id, t.tag_id, normalized_werd, t.tag_name
  from public.tags t
  where t.tag_id in (
    select distinct tag_id
    from unnest(p_tag_ids) tag_id
  );

  return new_werd_id;
end;
$$;

revoke all on function public.submit_werd_with_tags(text, text, uuid[], text, text)
  from public, anon;
grant execute on function public.submit_werd_with_tags(text, text, uuid[], text, text)
  to authenticated;

commit;
