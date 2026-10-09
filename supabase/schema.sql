-- McD BERL Supabase Database Schema

-- 1. Contact Form Enquiries Table
create table if not exists public.contact_submissions (
  id            uuid primary key default gen_random_uuid(),
  name          text not null check (char_length(name) <= 120),
  email         text not null check (char_length(email) <= 254),
  phone         text check (char_length(phone) <= 30),
  company       text check (char_length(company) <= 150),
  designation   text check (char_length(designation) <= 120),
  message       text not null check (char_length(message) <= 5000),
  created_at    timestamptz not null default now()
);

-- Enable Row Level Security (RLS)
alter table public.contact_submissions enable row level security;

-- Policy to allow anonymous submissions from the website
drop policy if exists "Anyone can submit contact enquiries" on public.contact_submissions;
create policy "Anyone can submit contact enquiries"
  on public.contact_submissions for insert
  to anon
  with check (true);

-- 2. Careers & Job Applications Table
create table if not exists public.career_applications (
  id            uuid primary key default gen_random_uuid(),
  name          text not null check (char_length(name) <= 120),
  email         text not null check (char_length(email) <= 254),
  phone         text check (char_length(phone) <= 30),
  track         text not null check (char_length(track) <= 80), -- Graduate, Internship, Apprenticeship, Experienced
  portfolio_url text check (char_length(portfolio_url) <= 500),
  cover_note    text check (char_length(cover_note) <= 5000),
  created_at    timestamptz not null default now()
);

-- Enable Row Level Security (RLS)
alter table public.career_applications enable row level security;

-- Policy to allow anonymous job applications from the website
drop policy if exists "Anyone can submit career applications" on public.career_applications;
create policy "Anyone can submit career applications"
  on public.career_applications for insert
  to anon
  with check (true);
