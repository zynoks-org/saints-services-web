import Link from 'next/link';
import { Newspaper, MessageSquareQuote, PlusCircle, ExternalLink } from 'lucide-react';
import { listPosts } from '@/lib/posts';
import { listTestimonials } from '@/lib/testimonials';

export default async function AdminIndexPage() {
  const [posts, testimonials] = await Promise.all([
    listPosts({ search: '', status: 'all' }),
    listTestimonials(),
  ]);

  const publishedPosts = posts.filter((p) => p.published).length;
  const publishedTestimonials = testimonials.filter((t) => t.published).length;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white uppercase tracking-tight">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Saints Services content management</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#0b1329] border border-slate-800 rounded-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-[#f59e0b]">
              <Newspaper className="w-5 h-5" />
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">Blog Posts</h2>
            </div>
            <span className="text-2xl font-black text-white">{posts.length}</span>
          </div>
          <p className="text-xs text-slate-500">
            {publishedPosts} published, {posts.length - publishedPosts} draft
          </p>
          <div className="flex items-center gap-2 pt-2">
            <Link
              href="/admin/blog"
              className="flex-1 text-center px-3 py-2 rounded-sm text-sm font-bold text-slate-200 border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              Manage
            </Link>
            <Link
              href="/admin/blog/new"
              className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-sm text-sm font-bold bg-[#f59e0b] text-slate-950 hover:brightness-110 transition-all"
            >
              <PlusCircle className="w-4 h-4" /> New
            </Link>
          </div>
        </div>

        <div className="bg-[#0b1329] border border-slate-800 rounded-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-[#f59e0b]">
              <MessageSquareQuote className="w-5 h-5" />
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">Testimonials</h2>
            </div>
            <span className="text-2xl font-black text-white">{testimonials.length}</span>
          </div>
          <p className="text-xs text-slate-500">
            {publishedTestimonials} published, {testimonials.length - publishedTestimonials} hidden
          </p>
          <div className="flex items-center gap-2 pt-2">
            <Link
              href="/admin/testimonials"
              className="flex-1 text-center px-3 py-2 rounded-sm text-sm font-bold text-slate-200 border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              Manage
            </Link>
            <Link
              href="/admin/testimonials/new"
              className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-sm text-sm font-bold bg-[#f59e0b] text-slate-950 hover:brightness-110 transition-all"
            >
              <PlusCircle className="w-4 h-4" /> New
            </Link>
          </div>
        </div>
      </div>

      <Link
        href="/"
        target="_blank"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
      >
        <ExternalLink className="w-4 h-4" /> View live site
      </Link>
    </div>
  );
}
