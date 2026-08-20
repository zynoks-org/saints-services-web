-- Least-privilege application roles + Row Level Security.
-- Run once, as a superuser, AFTER schema.sql has created posts/admin_users.
--
-- Why this file exists: RLS policies are only enforced against roles that are
-- NOT the table owner and NOT a superuser - both bypass RLS unconditionally,
-- no matter what policies exist. The app must stop connecting as the
-- superuser and use app_admin / app_public below, or every policy here is
-- purely decorative.
--
-- Replace :'app_admin_password' / :'app_public_password' with strong random
-- values before running manually (psql -v app_admin_password=... -v
-- app_public_password=... -f roles-and-rls.sql), or generate+substitute them
-- programmatically. Never commit real values into this file.

do $$
begin
  if not exists (select from pg_roles where rolname = 'app_admin') then
    create role app_admin with login password :'app_admin_password';
  else
    execute format('alter role app_admin with password %L', :'app_admin_password');
  end if;

  if not exists (select from pg_roles where rolname = 'app_public') then
    create role app_public with login password :'app_public_password';
  else
    execute format('alter role app_public with password %L', :'app_public_password');
  end if;
end
$$;

-- Postgres grants some privileges to the implicit PUBLIC pseudo-role by
-- default; strip those so access is only ever what's explicitly granted below.
revoke all on schema public from public;
grant usage on schema public to app_admin, app_public;

-- app_admin: full CRUD on both tables. Used only by authenticated server
-- actions and the admin dashboard's own data reads - never by public pages.
grant select, insert, update, delete on posts to app_admin;
grant select, insert, update, delete on admin_users to app_admin;

-- app_public: read-only, posts only. No grant at all on admin_users - a role
-- with zero table privileges can't be affected by what its RLS policies say,
-- so admin_users is unreachable from this role independent of RLS.
grant select on posts to app_public;

alter table posts enable row level security;
alter table admin_users enable row level security;

drop policy if exists posts_public_published_only on posts;
create policy posts_public_published_only on posts
  for select to app_public
  using (published = true);

drop policy if exists posts_admin_full_access on posts;
create policy posts_admin_full_access on posts
  for all to app_admin
  using (true)
  with check (true);

-- Deliberately NOT restricted to is_active = true here: Postgres enforces a
-- table's SELECT policy against the POST-update row on UPDATE too, not just
-- the pre-update row, so an is_active-gated SELECT policy would make it
-- impossible for app_admin to ever flip an account to disabled (the UPDATE
-- that sets is_active = false would itself be rejected as producing an
-- invisible row). The is_active check instead lives in the login query
-- itself (lib/adminUsers.ts: "and is_active = true"), which is the correct
-- place for it - RLS here only needs to guarantee app_admin is the sole role
-- with any access to this table at all, which the grants above already do.
drop policy if exists admin_users_login_active_only on admin_users;
drop policy if exists admin_users_manage_insert on admin_users;
drop policy if exists admin_users_manage_update on admin_users;
drop policy if exists admin_users_manage_delete on admin_users;
drop policy if exists admin_users_full_access on admin_users;
create policy admin_users_full_access on admin_users
  for all to app_admin
  using (true)
  with check (true);
