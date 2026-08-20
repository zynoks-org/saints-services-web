import sql from '@/lib/db';
import sqlPublic from '@/lib/dbPublic';
import type { Post, PostInput } from '@/lib/postUtils';

export type { Post, PostInput } from '@/lib/postUtils';
export { slugify, htmlToPlainText, computeReadTime } from '@/lib/postUtils';

// --- Admin-only reads/writes (app_admin role, full CRUD, RLS-exempt via its
// own "allow all" policy) -----------------------------------------------

export async function listPosts(opts: { search?: string; status?: 'all' | 'published' | 'draft' }) {
  const { search = '', status = 'all' } = opts;
  const like = `%${search}%`;

  const rows = await sql<Post[]>`
    select * from posts
    where
      (${search === ''} or title ilike ${like})
      and (
        ${status === 'all'}
        or (${status === 'published'} and published = true)
        or (${status === 'draft'} and published = false)
      )
    order by created_at desc
  `;
  return rows;
}

export async function getPostById(id: string): Promise<Post | null> {
  const rows = await sql<Post[]>`select * from posts where id = ${id} limit 1`;
  return rows[0] ?? null;
}

export async function isSlugTaken(slug: string, excludeId?: string): Promise<boolean> {
  const rows = excludeId
    ? await sql`select 1 from posts where slug = ${slug} and id != ${excludeId} limit 1`
    : await sql`select 1 from posts where slug = ${slug} limit 1`;
  return rows.length > 0;
}

export async function createPost(input: PostInput): Promise<Post> {
  const rows = await sql<Post[]>`
    insert into posts
      (title, slug, content, excerpt, cover_image, author_name, category, published, published_at, meta_title, meta_description)
    values (
      ${input.title}, ${input.slug}, ${input.content}, ${input.excerpt}, ${input.cover_image},
      ${input.author_name}, ${input.category}, ${input.published},
      ${input.published ? sql`now()` : null},
      ${input.meta_title}, ${input.meta_description}
    )
    returning *
  `;
  return rows[0];
}

export async function updatePost(id: string, input: PostInput): Promise<Post | null> {
  const existing = await getPostById(id);
  if (!existing) return null;

  const newlyPublished = input.published && !existing.published;

  const rows = await sql<Post[]>`
    update posts set
      title = ${input.title},
      slug = ${input.slug},
      content = ${input.content},
      excerpt = ${input.excerpt},
      cover_image = ${input.cover_image},
      author_name = ${input.author_name},
      category = ${input.category},
      published = ${input.published},
      published_at = ${newlyPublished ? sql`now()` : existing.published_at},
      meta_title = ${input.meta_title},
      meta_description = ${input.meta_description}
    where id = ${id}
    returning *
  `;
  return rows[0] ?? null;
}

export async function deletePost(id: string): Promise<void> {
  await sql`delete from posts where id = ${id}`;
}

// --- Public reads (app_public role, read-only, RLS-restricted to
// published = true regardless of what the WHERE clause below says) -------

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const rows = await sqlPublic<Post[]>`
    select * from posts where slug = ${slug} and published = true limit 1
  `;
  return rows[0] ?? null;
}

export async function getPublishedPosts(): Promise<Post[]> {
  return sqlPublic<Post[]>`
    select * from posts
    where published = true
    order by published_at desc nulls last, created_at desc
  `;
}
