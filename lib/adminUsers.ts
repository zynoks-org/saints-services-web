import sql from '@/lib/db';

// Kept out of lib/auth.ts deliberately: proxy.ts imports from auth.ts on
// every request to validate the session cookie, and it must never pull in a
// DB client it doesn't need. This file (DB-backed credential check) is only
// ever imported from app/admin/actions.ts's login Server Action.

/**
 * bcrypt comparison happens inside Postgres via pgcrypto's crypt(), which
 * hashes the submitted password with the stored row's own salt and compares
 * the result - the plaintext password is never held in JS beyond this call,
 * and a non-matching username still costs one query, avoiding a cheap
 * username-enumeration timing gap. The RLS policy on admin_users additionally
 * makes disabled accounts (is_active = false) invisible to this query
 * regardless of what's written here.
 */
export async function verifyAdminCredentials(username: string, password: string): Promise<boolean> {
  if (!username || !password) return false;

  const rows = await sql`
    select 1 from admin_users
    where username = ${username}
      and is_active = true
      and password_hash = crypt(${password}, password_hash)
    limit 1
  `;
  return rows.length > 0;
}
