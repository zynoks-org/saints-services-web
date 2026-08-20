import Link from 'next/link';
import { ShieldCheck, Newspaper, PlusCircle, LogOut, ExternalLink } from 'lucide-react';
import { logout } from '@/app/admin/actions';

export function AdminSidebar() {
  return (
    <aside className="w-full md:w-64 shrink-0 bg-[#0b1329] border-b md:border-b-0 md:border-r border-slate-800 flex md:flex-col">
      <div className="p-5 border-b border-slate-800 hidden md:block">
        <div className="flex items-center gap-2 text-[#f59e0b]">
          <ShieldCheck className="w-5 h-5" />
          <span className="font-black uppercase tracking-tight text-sm text-white">Saints Admin</span>
        </div>
      </div>

      <nav className="flex md:flex-col gap-1 p-3 flex-1 text-sm">
        <Link
          href="/admin/blog"
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-sm text-slate-300 hover:bg-slate-800/60 hover:text-white font-medium transition-colors"
        >
          <Newspaper className="w-4 h-4" /> Posts
        </Link>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-sm text-slate-300 hover:bg-slate-800/60 hover:text-white font-medium transition-colors"
        >
          <PlusCircle className="w-4 h-4" /> New Post
        </Link>
        <Link
          href="/blog"
          target="_blank"
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-sm text-slate-300 hover:bg-slate-800/60 hover:text-white font-medium transition-colors"
        >
          <ExternalLink className="w-4 h-4" /> View Site
        </Link>
      </nav>

      <div className="p-3 border-t border-slate-800 md:mt-auto">
        <form action={logout}>
          <button
            type="submit"
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 rounded-sm text-slate-400 hover:bg-red-500/10 hover:text-red-400 font-medium transition-colors text-sm cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
