'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Pencil, Trash2, Star, CheckCircle2, EyeOff } from 'lucide-react';
import { deleteTestimonialAction } from '@/app/admin/testimonials/actions';
import type { Testimonial } from '@/lib/testimonialUtils';

export function TestimonialsTable({ testimonials }: { testimonials: Testimonial[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(id: string, author: string) {
    if (!confirm(`Delete the testimonial from "${author}"? This can't be undone.`)) return;
    setDeletingId(id);
    try {
      const result = await deleteTestimonialAction(id);
      if (!result.ok) alert(result.error);
      else router.refresh();
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="bg-[#0b1329] border border-slate-800 rounded-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] font-mono uppercase tracking-wider text-slate-500 border-b border-slate-800">
              <th className="px-4 py-3 font-bold">Quote</th>
              <th className="px-4 py-3 font-bold hidden sm:table-cell">Author</th>
              <th className="px-4 py-3 font-bold hidden md:table-cell">Rating</th>
              <th className="px-4 py-3 font-bold">Status</th>
              <th className="px-4 py-3 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-slate-500 text-sm">
                  No testimonials yet.
                </td>
              </tr>
            )}
            {testimonials.map((t) => (
              <tr key={t.id} className="border-b border-slate-800/60 last:border-0 hover:bg-slate-900/40">
                <td className="px-4 py-3.5 max-w-md">
                  <div className="text-slate-200 line-clamp-2 italic">&quot;{t.quote}&quot;</div>
                </td>
                <td className="px-4 py-3.5 hidden sm:table-cell">
                  <div className="font-semibold text-white">{t.author_name}</div>
                  <div className="text-xs text-slate-500">{t.organization || '—'}</div>
                </td>
                <td className="px-4 py-3.5 hidden md:table-cell">
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  {t.published ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-sm">
                      <CheckCircle2 className="w-3 h-3" /> Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wide text-slate-400 bg-slate-700/30 border border-slate-700 px-2 py-1 rounded-sm">
                      <EyeOff className="w-3 h-3" /> Hidden
                    </span>
                  )}
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/admin/testimonials/edit/${t.id}`}
                      title="Edit"
                      className="p-2 rounded-sm text-slate-400 hover:text-[#f59e0b] hover:bg-slate-800/60 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      title="Delete"
                      disabled={deletingId === t.id}
                      onClick={() => handleDelete(t.id, t.author_name)}
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
