'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { SESSION_COOKIE, createSessionToken } from '@/lib/auth';
import { verifyAdminCredentials } from '@/lib/adminUsers';
import { loginRatelimit } from '@/lib/loginRateLimit';

export type LoginState = { error: string | null };

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const headerList = await headers();
  const ip =
    headerList.get('x-real-ip') ||
    headerList.get('x-forwarded-for')?.split(',').slice(-1)[0]?.trim() ||
    '127.0.0.1';

  const { success } = await loginRatelimit.limit(`login_${ip}`);
  if (!success) {
    return { error: 'Too many login attempts. Please wait a few minutes and try again.' };
  }

  const username = String(formData.get('username') ?? '');
  const password = String(formData.get('password') ?? '');

  if (!(await verifyAdminCredentials(username, password))) {
    return { error: 'Invalid username or password.' };
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect('/admin/blog');
}

export async function logout(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect('/admin/login');
}
