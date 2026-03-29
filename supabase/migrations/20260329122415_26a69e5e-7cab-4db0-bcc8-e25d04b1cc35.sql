create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  message text,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

create policy "Allow anonymous inserts"
  on public.contact_submissions
  for insert
  to anon
  with check (true);