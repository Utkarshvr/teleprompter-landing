-- Waiting List (landing page signups)
-- Paste into Supabase SQL Editor (Dashboard → SQL → New query) and run.
-- Safe to re-run: policies are dropped before recreate.
-- Use the same Supabase project as teleprompter-app.

-- ---------------------------------------------------------------------------
-- Waiting List
-- ---------------------------------------------------------------------------
create table if not exists public.waiting_list (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  constraint waiting_list_email_unique unique (email)
);

-- Normalize emails before insert/update so uniqueness is case-insensitive
create or replace function public.normalize_waiting_list_email()
returns trigger
language plpgsql
as $$
begin
  new.email := lower(trim(new.email));
  return new;
end;
$$;

drop trigger if exists waiting_list_normalize_email on public.waiting_list;
create trigger waiting_list_normalize_email
  before insert or update of email on public.waiting_list
  for each row execute function public.normalize_waiting_list_email();

alter table public.waiting_list enable row level security;

drop policy if exists "Anyone can join waiting list" on public.waiting_list;
drop policy if exists "No public read of waiting list" on public.waiting_list;

-- Public join form uses the anon key; allow inserts only.
create policy "Anyone can join waiting list"
  on public.waiting_list
  for insert
  to anon, authenticated
  with check (true);

-- No SELECT/UPDATE/DELETE for anon or authenticated — view rows in
-- Dashboard → Table Editor (service role), or add a locked-down policy later.
