import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { listPosts } from '@/lib/posts';
import { PostsTable } from '@/components/admin/PostsTable';

interface Props {
  searchParams: Promise<{ q?: string; status?: string }>;
}

export default async function AdminBlogListPage({ searchParams }: Props) {
  const { q = '', status = 'all' } = await searchParams;
  const normalizedStatus = status === 'published' || status === 'draft' ? status : 'all';

  const posts = await listPosts({ search: q, status: normalizedStatus });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Blog Posts</h1>
          <p className="text-slate-500 text-sm mt-1">{posts.length} post{posts.length === 1 ? '' : 's'}</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-[#f59e0b] text-slate-950 font-bold px-4 py-2.5 rounded-sm text-sm uppercase tracking-wide hover:brightness-110 transition-all active:scale-95"
        >
          <PlusCircle className="w-4 h-4" /> New Post
        </Link>
      </div>

      <PostsTable posts={posts} />
    </div>
  );
}
