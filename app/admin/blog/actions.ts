'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { requireAdminSession } from '@/lib/auth';
import { sanitizePostContent } from '@/lib/sanitize';
import { createPost, deletePost, isSlugTaken, slugify, updatePost, type PostInput } from '@/lib/posts';

const postSchema = z.object({
  title: z.string().min(1, 'Title is required').max(300),
  slug: z.string().min(1, 'Slug is required').max(200).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens only'),
  content: z.string(),
  excerpt: z.string().max(500).optional().nullable(),
  coverImage: z.union([z.string().url('Cover image must be a valid URL'), z.literal('')]).optional().nullable(),
  authorName: z.string().min(1, 'Author name is required').max(150),
  category: z.string().max(100).optional().nullable(),
  published: z.boolean(),
  metaTitle: z.string().max(70, 'Meta title should stay under ~70 characters').optional().nullable(),
  metaDescription: z.string().max(170, 'Meta description should stay under ~170 characters').optional().nullable(),
});

export type PostFormInput = z.infer<typeof postSchema>;
export type ActionResult = { ok: true; id: string } | { ok: false; error: string };

function toPostInput(data: PostFormInput): PostInput {
  return {
    title: data.title,
    slug: data.slug,
    content: sanitizePostContent(data.content),
    excerpt: data.excerpt?.trim() || null,
    cover_image: data.coverImage?.trim() || null,
    author_name: data.authorName,
    category: data.category?.trim() || null,
    published: data.published,
    meta_title: data.metaTitle?.trim() || null,
    meta_description: data.metaDescription?.trim() || null,
  };
}

export async function generateUniqueSlug(title: string, excludeId?: string): Promise<string> {
  const base = slugify(title) || 'post';
  let candidate = base;
  let suffix = 2;
  while (await isSlugTaken(candidate, excludeId)) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }
  return candidate;
}

export async function createPostAction(raw: PostFormInput): Promise<ActionResult> {
  await requireAdminSession();

  const parsed = postSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0].message };
  }

  if (await isSlugTaken(parsed.data.slug)) {
    return { ok: false, error: 'That slug is already in use by another post.' };
  }

  const post = await createPost(toPostInput(parsed.data));

  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  revalidatePath(`/blog/${post.slug}`);

  return { ok: true, id: post.id };
}

export async function updatePostAction(id: string, raw: PostFormInput): Promise<ActionResult> {
  await requireAdminSession();

  const parsed = postSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0].message };
  }

  if (await isSlugTaken(parsed.data.slug, id)) {
    return { ok: false, error: 'That slug is already in use by another post.' };
  }

  const post = await updatePost(id, toPostInput(parsed.data));
  if (!post) {
    return { ok: false, error: 'Post not found.' };
  }

  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  revalidatePath(`/blog/${post.slug}`);

  return { ok: true, id: post.id };
}

export async function deletePostAction(id: string, slug: string): Promise<{ ok: true } | { ok: false; error: string }> {
  await requireAdminSession();

  await deletePost(id);

  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  revalidatePath(`/blog/${slug}`);

  return { ok: true };
}
