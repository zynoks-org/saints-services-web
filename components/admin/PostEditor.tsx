'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Save, Rocket, Trash2, ArrowLeft, ImageOff, Search } from 'lucide-react';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { createPostAction, updatePostAction, deletePostAction, generateUniqueSlug } from '@/app/admin/blog/actions';
import { slugify, type Post } from '@/lib/postUtils';

const CATEGORIES = [
  'MANNED GUARDING', 'EVENT SECURITY', 'RETAIL SECURITY', 'COMPLIANCE',
  'VIP PROTECTION', 'SITE SECURITY', 'MOBILE PATROLS', 'LOGISTICS', 'KEYHOLDING',
];

export function PostEditor({ post }: { post?: Post }) {
  const router = useRouter();
  const isEditing = !!post;

  const [title, setTitle] = useState(post?.title ?? '');
  const [slug, setSlug] = useState(post?.slug ?? '');
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [content, setContent] = useState(post?.content ?? '');
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '');
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? '');
  const [category, setCategory] = useState(post?.category ?? '');
  const [authorName, setAuthorName] = useState(post?.author_name ?? 'Saints Services Team');
  const [metaTitle, setMetaTitle] = useState(post?.meta_title ?? '');
  const [metaDescription, setMetaDescription] = useState(post?.meta_description ?? '');
  const [imageError, setImageError] = useState(false);

  const [saving, setSaving] = useState<'draft' | 'publish' | 'delete' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTitleChange = useCallback(
    (value: string) => {
      setTitle(value);
      if (!slugTouched) setSlug(slugify(value));
    },
    [slugTouched]
  );

  async function handleSlugBlur() {
    if (!slug) {
      const unique = await generateUniqueSlug(title, post?.id);
      setSlug(unique);
    }
  }

  async function handleSave(publish: boolean) {
    setError(null);
    if (!title.trim()) {
      setError('Title is required.');
      return;
    }
    let finalSlug = slug.trim() ? slugify(slug) : '';
    if (!finalSlug) {
      finalSlug = await generateUniqueSlug(title, post?.id);
      setSlug(finalSlug);
    }

    setSaving(publish ? 'publish' : 'draft');
    try {
      const payload = {
        title: title.trim(),
        slug: finalSlug,
        content,
        excerpt: excerpt.trim() || null,
        coverImage: coverImage.trim() || null,
        authorName: authorName.trim() || 'Saints Services Team',
        category: category.trim() || null,
        published: publish,
        metaTitle: metaTitle.trim() || null,
        metaDescription: metaDescription.trim() || null,
      };

      const result = isEditing
        ? await updatePostAction(post!.id, payload)
        : await createPostAction(payload);

      if (!result.ok) {
        setError(result.error);
        return;
      }

      if (!isEditing) {
        router.push(`/admin/blog/edit/${result.id}`);
      } else {
        router.refresh();
      }
    } finally {
      setSaving(null);
    }
  }

  async function handleDelete() {
    if (!post) return;
    if (!confirm(`Delete "${post.title}"? This can't be undone.`)) return;
    setSaving('delete');
    try {
      const result = await deletePostAction(post.id, post.slug);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push('/admin/blog');
    } finally {
      setSaving(null);
    }
  }

  const busy = saving !== null;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Link href="/admin/blog" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to posts
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
            onClick={() => handleSave(false)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-bold text-slate-200 border border-slate-700 hover:bg-slate-800 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4" /> {saving === 'draft' ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => handleSave(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-bold bg-[#f59e0b] text-slate-950 hover:brightness-110 transition-all disabled:opacity-50 cursor-pointer"
          >
            <Rocket className="w-4 h-4" /> {saving === 'publish' ? 'Publishing...' : post?.published ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-sm px-4 py-3">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
            className="w-full bg-transparent border-b border-slate-800 focus:border-[#f59e0b] px-1 py-3 text-2xl sm:text-3xl font-black text-white placeholder:text-slate-600 focus:outline-none transition-colors"
          />

          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <div className="space-y-4">
          <div className="bg-[#0b1329] border border-slate-800 rounded-sm p-4 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Post Details</h3>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">URL Slug</label>
              <div className="flex items-center gap-1 text-xs text-slate-500 mb-1 font-mono">/blog/</div>
              <input
                type="text"
                value={slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setSlug(e.target.value);
                }}
                onBlur={handleSlugBlur}
                placeholder="auto-generated-from-title"
                className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Category</label>
              <input
                type="text"
                list="post-categories"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Manned Guarding"
                className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
              <datalist id="post-categories">
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Author</label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Excerpt</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                placeholder="Short summary shown on the blog feed..."
                className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white resize-none focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>
          </div>

          <div className="bg-[#0b1329] border border-slate-800 rounded-sm p-4 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Cover Image</h3>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => {
                setCoverImage(e.target.value);
                setImageError(false);
              }}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
            />
            <div className="aspect-video rounded-sm overflow-hidden bg-[#070d1e] border border-slate-800 flex items-center justify-center">
              {coverImage && !imageError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={coverImage}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center gap-1.5 text-slate-600 text-xs">
                  <ImageOff className="w-6 h-6" />
                  {imageError ? 'Could not load image' : 'No image set'}
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#0b1329] border border-slate-800 rounded-sm p-4 space-y-3">
            <h3 className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              <Search className="w-3.5 h-3.5" /> SEO
            </h3>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase">Meta Title</label>
                <span className={`text-[10px] font-mono ${metaTitle.length > 60 ? 'text-amber-400' : 'text-slate-600'}`}>
                  {metaTitle.length}/60
                </span>
              </div>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder={title || 'Falls back to the post title'}
                className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase">Meta Description</label>
                <span className={`text-[10px] font-mono ${metaDescription.length > 160 ? 'text-amber-400' : 'text-slate-600'}`}>
                  {metaDescription.length}/160
                </span>
              </div>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={3}
                placeholder={excerpt || 'Falls back to the excerpt'}
                className="w-full bg-[#070d1e] border border-slate-800 rounded-sm px-3 py-2 text-sm text-white resize-none focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>

            <div className="border border-slate-800 rounded-sm p-3 bg-[#070d1e]">
              <div className="text-[10px] font-mono text-slate-600 uppercase mb-1">Google preview</div>
              <div className="text-[#8ab4f8] text-base leading-snug truncate">
                {metaTitle || title || 'Post title'}
              </div>
              <div className="text-emerald-400/80 text-xs mb-0.5">
                saintsservices.co.uk/blog/{slug || 'post-slug'}
              </div>
              <div className="text-slate-400 text-xs leading-snug line-clamp-2">
                {metaDescription || excerpt || 'Meta description preview...'}
              </div>
            </div>
          </div>

          <div className="bg-[#0b1329] border border-slate-800 rounded-sm p-4 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Status: <span className={post?.published ? 'text-emerald-400' : 'text-slate-300'}>{post?.published ? 'Published' : 'Draft'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
