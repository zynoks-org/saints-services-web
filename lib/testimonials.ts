import sql from '@/lib/db';
import sqlPublic from '@/lib/dbPublic';
import type { Testimonial, TestimonialInput } from '@/lib/testimonialUtils';

export type { Testimonial, TestimonialInput } from '@/lib/testimonialUtils';

// --- Admin-only reads/writes (app_admin role, full CRUD, RLS-exempt via its
// own "allow all" policy) -----------------------------------------------

export async function listTestimonials(): Promise<Testimonial[]> {
  return sql<Testimonial[]>`select * from testimonials order by created_at desc`;
}

export async function getTestimonialById(id: string): Promise<Testimonial | null> {
  const rows = await sql<Testimonial[]>`select * from testimonials where id = ${id} limit 1`;
  return rows[0] ?? null;
}

export async function createTestimonial(input: TestimonialInput): Promise<Testimonial> {
  const rows = await sql<Testimonial[]>`
    insert into testimonials (quote, author_name, organization, rating, published)
    values (${input.quote}, ${input.author_name}, ${input.organization}, ${input.rating}, ${input.published})
    returning *
  `;
  return rows[0];
}

export async function updateTestimonial(id: string, input: TestimonialInput): Promise<Testimonial | null> {
  const rows = await sql<Testimonial[]>`
    update testimonials set
      quote = ${input.quote},
      author_name = ${input.author_name},
      organization = ${input.organization},
      rating = ${input.rating},
      published = ${input.published}
    where id = ${id}
    returning *
  `;
  return rows[0] ?? null;
}

export async function deleteTestimonial(id: string): Promise<void> {
  await sql`delete from testimonials where id = ${id}`;
}

// --- Public reads (app_public role, read-only, RLS-restricted to
// published = true regardless of what the WHERE clause below says) -------

export async function getPublishedTestimonials(): Promise<Testimonial[]> {
  return sqlPublic<Testimonial[]>`
    select * from testimonials where published = true order by created_at asc
  `;
}
