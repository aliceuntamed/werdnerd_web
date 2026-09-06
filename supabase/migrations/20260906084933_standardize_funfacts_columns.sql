alter table public.funfacts rename column fact to fact_text;
alter table public.funfacts rename column source to fact_source;
alter table public.funfacts rename column note to fact_details;
alter table public.funfacts rename column created_at to fact_created_at;
alter table public.funfacts add column fact_img text;
