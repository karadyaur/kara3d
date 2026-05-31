-- Storage bucket for contact file attachments (STL / STEP / STP / PDF)
insert into storage.buckets (id, name, public, file_size_limit)
values ('contact-files', 'contact-files', false, 52428800)  -- 50 MB limit
on conflict do nothing;
