import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShareButtons } from '@/components/ShareButtons';
import { getPostBySlug, computeReadTime, htmlToPlainText } from '@/lib/posts';
import { sanitizePostContent } from '@/lib/sanitize';
import { jsonLdScript } from '@/lib/jsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || htmlToPlainText(post.content).slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Saints Services Ltd`,
      description,
      type: 'article',
      images: post.cover_image ? [post.cover_image] : undefined,
      publishedTime: post.published_at ?? undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Saints Services Ltd`,
      description,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const safeContent = sanitizePostContent(post.content);
  const readTime = computeReadTime(post.content);
  const dateLabel = post.published_at
    ? new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || htmlToPlainText(post.content).slice(0, 160),
    image: post.cover_image || undefined,
    author: { '@type': 'Organization', name: post.author_name },
    datePublished: post.published_at || undefined,
    dateModified: post.updated_at,
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />

      <Header />

      <main className="grow py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="flex w-fit items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-8 hover:translate-x-[-2px] transition-transform"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
          </Link>

          {post.category && (
            <span className="inline-block text-[10px] font-mono font-bold text-slate-950 bg-[#f59e0b] px-3 py-1 rounded-sm uppercase tracking-widest mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#f59e0b]" /> {post.author_name}</span>
            {dateLabel && <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#f59e0b]" /> {dateLabel}</span>}
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {readTime}</span>
          </div>

          {post.cover_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full rounded-sm border border-slate-200 dark:border-slate-800 mb-10 object-cover"
            />
          )}

          <div
            className="prose prose-slate dark:prose-invert prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-[#f59e0b] max-w-none [&_table]:border-collapse [&_td]:border [&_td]:border-slate-300 dark:[&_td]:border-slate-700 [&_td]:p-2 [&_th]:border [&_th]:border-slate-300 dark:[&_th]:border-slate-700 [&_th]:p-2 [&_th]:bg-slate-100 dark:[&_th]:bg-slate-800"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
