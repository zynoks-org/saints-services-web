'use client';

import { useActionState } from 'react';
import { ShieldCheck, Lock, User, ArrowRight, AlertTriangle } from 'lucide-react';
import { login, type LoginState } from '@/app/admin/actions';

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="min-h-screen bg-[#040914] flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-3 mb-8 text-center">
          <div className="p-3 rounded-sm bg-slate-900 border border-slate-800 text-[#f59e0b]">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-widest block">
              ADMIN_ACCESS // AUTHENTICATION_REQUIRED
            </span>
            <h1 className="text-xl font-black text-white uppercase tracking-tight mt-1">
              Saints Services Admin
            </h1>
          </div>
        </div>

        <form
          action={formAction}
          className="bg-[#0b1329] border border-slate-800 rounded-sm p-6 sm:p-8 shadow-2xl space-y-4"
        >
          <div>
            <label className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">
              <User className="w-3.5 h-3.5" /> Username
            </label>
            <input
              type="text"
              name="username"
              required
              autoComplete="username"
              autoFocus
              className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
            />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">
              <Lock className="w-3.5 h-3.5" /> Password
            </label>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
            />
          </div>

          {state.error && (
            <div className="flex items-start gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-sm px-3 py-2.5">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{state.error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-3.5 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">{pending ? 'Verifying...' : 'Sign In'}</span>
            {!pending && <ArrowRight className="relative z-10 w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}
