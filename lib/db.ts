import postgres from 'postgres';

declare global {
  var __pgSqlAdmin: ReturnType<typeof postgres> | undefined;
}

// Connects as the least-privilege `app_admin` role (see db/roles-and-rls.sql)
// - full CRUD on posts and admin_users, but not a superuser and not the table
// owner, so RLS actually applies to it. Never point this at the superuser
// DATABASE_URL; that would make every RLS policy decorative. Used only by
// authenticated server actions and admin pages - public pages use dbPublic.ts.
const sql =
  global.__pgSqlAdmin ??
  postgres(process.env.DATABASE_URL_ADMIN!, {
    // 'require' (not 'prefer'): the server now supports TLS (Coolify-issued
    // cert), so this connection fails loudly instead of silently falling
    // back to plaintext if that ever regresses.
    ssl: 'require',
    max: 5,
  });

if (process.env.NODE_ENV !== 'production') {
  global.__pgSqlAdmin = sql;
}

export default sql;
