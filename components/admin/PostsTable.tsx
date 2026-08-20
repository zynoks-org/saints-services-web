'use client';

import { useState, useTransition, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Search, Pencil, Trash2, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { deletePostAction } from '@/app/admin/blog/actions';
import type { Post } from '@/lib/postUtils';

export function PostsTable({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const q = searchParams.get('q') ?? '';
  const status = searchParams.get('status') ?? 'all';

  const pushParams = useCallback(
    (next: { q?: string; status?: string }) => {
      const params = new URLSearchParams(searchParams.toString());
      if (next.q !== undefined) {
        if (next.q) params.set('q', next.q);
        else params.delete('q');
      }
      if (next.status !== undefined) {
        if (next.status && next.status !== 'all') params.set('status', next.status);
        else params.delete('status');
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, router, searchParams]
  );

  async function handleDelete(id: string, slug: string, title: string) {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    setDeletingId(id);
    try {
      const result = await deletePostAction(id, slug);
      if (!result.ok) alert(result.error);
      else router.refresh();
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="bg-[#0b1329] border border-slate-800 rounded-sm overflow-hidden">
      <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            defaultValue={q}
            placeholder="Search posts by title..."
            onChange={(e) => pushParams({ q: e.target.value })}
            className="w-full bg-[#070d1e] border border-slate-800 rounded-sm pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
          />
        </div>
        <select
          value={status}
          onChange={(e) => pushParams({ status: e.target.value })}
          className="bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
        >
          <option value="all">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className={`overflow-x-auto transition-opacity ${isPending ? 'opacity-50' : ''}`}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] font-mono uppercase tracking-wider text-slate-500 border-b border-slate-800">
              <th className="px-4 py-3 font-bold">Title</th>
              <th className="px-4 py-3 font-bold hidden sm:table-cell">Category</th>
              <th className="px-4 py-3 font-bold">Status</th>
              <th className="px-4 py-3 font-bold hidden md:table-cell">Updated</th>
              <th className="px-4 py-3 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-slate-500 text-sm">
                  No posts found.
                </td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-slate-800/60 last:border-0 hover:bg-slate-900/40">
                <td className="px-4 py-3.5">
                  <div className="font-semibold text-white line-clamp-1">{post.title}</div>
                  <div className="text-xs text-slate-500 font-mono">/{post.slug}</div>
                </td>
                <td className="px-4 py-3.5 hidden sm:table-cell text-slate-400">{post.category || '—'}</td>
                <td className="px-4 py-3.5">
                  {post.published ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-sm">
                      <CheckCircle2 className="w-3 h-3" /> Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wide text-slate-400 bg-slate-700/30 border border-slate-700 px-2 py-1 rounded-sm">
                      <FileText className="w-3 h-3" /> Draft
                    </span>
                  )}
                </td>
                <td className="px-4 py-3.5 hidden md:table-cell text-slate-500 text-xs">
                  {new Date(post.updated_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center justify-end gap-1">
                    {post.published && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        title="View live"
                        className="p-2 rounded-sm text-slate-400 hover:text-[#f59e0b] hover:bg-slate-800/60 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href={`/admin/blog/edit/${post.id}`}
                      title="Edit"
                      className="p-2 rounded-sm text-slate-400 hover:text-[#f59e0b] hover:bg-slate-800/60 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      title="Delete"
                      disabled={deletingId === post.id}
                      onClick={() => handleDelete(post.id, post.slug, post.title)}
                      className="p-2 rounded-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
