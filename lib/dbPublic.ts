import postgres from 'postgres';

declare global {
  var __pgSqlPublic: ReturnType<typeof postgres> | undefined;
}

// Connects as the read-only `app_public` role (see db/roles-and-rls.sql).
// This role has no grant at all on admin_users, and its RLS policy on posts
// restricts SELECT to published = true - so even a bug in the queries below
// that dropped the WHERE clause could not leak drafts or admin credentials.
// Only import this from public-facing pages (/blog, /blog/[slug]), never
// from admin code.
const sqlPublic =
  global.__pgSqlPublic ??
  postgres(process.env.DATABASE_URL_PUBLIC!, {
    // 'require' (not 'prefer'): see lib/db.ts for why.
    ssl: 'require',
    max: 5,
  });

if (process.env.NODE_ENV !== 'production') {
  global.__pgSqlPublic = sqlPublic;
}

export default sqlPublic;
