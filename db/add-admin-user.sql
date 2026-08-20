-- Run this (via psql, or any Postgres client connected as app_admin or the
-- migration superuser) to create a new admin login, or rotate an existing
-- one's password. pgcrypto's crypt()/gen_salt('bf') computes a bcrypt hash
-- server-side - the plaintext password is never stored, only ever appears
-- in this one statement while you run it.
--
-- Replace 'newusername' and 'their-strong-password' below, then run.

insert into admin_users (username, password_hash)
values ('newusername', crypt('their-strong-password', gen_salt('bf')))
on conflict (username) do update
  set password_hash = excluded.password_hash,
      is_active = true,
      updated_at = now();

-- To disable an account without deleting its row (e.g. someone leaves the team):
-- update admin_users set is_active = false where username = 'newusername';
