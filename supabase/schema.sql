-- ============================================================
-- kara3d — Supabase schema
-- Run this in: Supabase Dashboard → SQL Editor
-- ============================================================

-- Contact form submissions
create table public.contact_submissions (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),
  name        text        not null,
  email       text        not null,
  stueckzahl  text        not null,
  message     text,
  file_name   text,
  file_path   text,
  status      text        not null    default 'new'
);

-- Newsletter subscriptions
create table public.newsletter_subscriptions (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),
  updated_at  timestamptz not null    default now(),
  email       text        not null    unique,
  status      text        not null    default 'active'
);

-- Auto-update updated_at on newsletter
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger newsletter_updated_at
  before update on public.newsletter_subscriptions
  for each row execute function public.set_updated_at();

-- Row Level Security (service role key bypasses RLS — tables stay locked for public)
alter table public.contact_submissions       enable row level security;
alter table public.newsletter_subscriptions  enable row level security;

-- ============================================================
-- Storage bucket for contact file attachments
-- Create manually in: Supabase Dashboard → Storage → New bucket
--   Name:   contact-files
--   Public: false
-- ============================================================
