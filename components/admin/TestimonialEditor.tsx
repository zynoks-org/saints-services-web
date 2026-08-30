'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Save, Trash2, ArrowLeft, Star } from 'lucide-react';
import {
  createTestimonialAction,
  updateTestimonialAction,
  deleteTestimonialAction,
} from '@/app/admin/testimonials/actions';
import type { Testimonial } from '@/lib/testimonialUtils';

export function TestimonialEditor({ testimonial }: { testimonial?: Testimonial }) {
  const router = useRouter();
  const isEditing = !!testimonial;

  const [quote, setQuote] = useState(testimonial?.quote ?? '');
  const [authorName, setAuthorName] = useState(testimonial?.author_name ?? '');
  const [organization, setOrganization] = useState(testimonial?.organization ?? '');
  const [rating, setRating] = useState(testimonial?.rating ?? 5);
  const [published, setPublished] = useState(testimonial?.published ?? true);

  const [saving, setSaving] = useState<'save' | 'delete' | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    setError(null);
    if (!quote.trim()) {
      setError('Quote is required.');
      return;
    }
    if (!authorName.trim()) {
      setError('Author name is required.');
      return;
    }

    setSaving('save');
    try {
      const payload = {
        quote: quote.trim(),
        authorName: authorName.trim(),
        organization: organization.trim() || null,
        rating,
        published,
      };

      const result = isEditing
        ? await updateTestimonialAction(testimonial!.id, payload)
        : await createTestimonialAction(payload);

      if (!result.ok) {
        setError(result.error);
        return;
      }

      router.push('/admin/testimonials');
      router.refresh();
    } finally {
      setSaving(null);
    }
  }

  async function handleDelete() {
    if (!testimonial) return;
    if (!confirm(`Delete the testimonial from "${testimonial.author_name}"? This can't be undone.`)) return;
    setSaving('delete');
    try {
      const result = await deleteTestimonialAction(testimonial.id);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push('/admin/testimonials');
    } finally {
      setSaving(null);
    }
  }

  const busy = saving !== null;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Link href="/admin/testimonials" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to testimonials
        </Link>

        <div className="flex items-center gap-2">
          {isEditing && (
            <button
              type="button"
              disabled={busy}
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-bold text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" /> {saving === 'delete' ? 'Deleting...' : 'Delete'}
            </button>
          )}
          <button
            type="button"
            disabled={busy}
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-bold bg-[#f59e0b] text-slate-950 hover:brightness-110 transition-all disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4" /> {saving === 'save' ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-sm px-4 py-3">
          {error}
        </div>
      )}

      <div className="bg-[#0b1329] border border-slate-800 rounded-sm p-4 space-y-4">
        <div>
          <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Quote</label>
          <textarea
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            rows={5}
            placeholder="What the client said..."
            className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white resize-none focus:outline-none focus:border-[#f59e0b] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Author Name</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="e.g. Operations Manager"
            className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Organization</label>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="e.g. Event & Venue Group"
            className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Rating</label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                className="p-1 cursor-pointer"
              >
                <Star className={`w-5 h-5 ${n <= rating ? 'fill-[#f59e0b] text-[#f59e0b]' : 'text-slate-700'}`} />
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-4 h-4 accent-[#f59e0b]"
          />
          <span className="text-sm text-slate-300">Published (visible on the site)</span>
        </label>
      </div>
    </div>
  );
}
