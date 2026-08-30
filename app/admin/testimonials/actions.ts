'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { requireAdminSession } from '@/lib/auth';
import {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
  type TestimonialInput,
} from '@/lib/testimonials';

const testimonialSchema = z.object({
  quote: z.string().min(1, 'Quote is required').max(2000),
  authorName: z.string().min(1, 'Author name is required').max(150),
  organization: z.string().max(200).optional().nullable(),
  rating: z.number().int().min(1).max(5),
  published: z.boolean(),
});

export type TestimonialFormInput = z.infer<typeof testimonialSchema>;
export type ActionResult = { ok: true; id: string } | { ok: false; error: string };

function toTestimonialInput(data: TestimonialFormInput): TestimonialInput {
  return {
    quote: data.quote.trim(),
    author_name: data.authorName.trim(),
    organization: data.organization?.trim() || null,
    rating: data.rating,
    published: data.published,
  };
}

export async function createTestimonialAction(raw: TestimonialFormInput): Promise<ActionResult> {
  await requireAdminSession();

  const parsed = testimonialSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0].message };
  }

  const testimonial = await createTestimonial(toTestimonialInput(parsed.data));

  revalidatePath('/');
  revalidatePath('/contact');
  revalidatePath('/about');
  revalidatePath('/services/door-supervision');
  revalidatePath('/services/security-guards');
  revalidatePath('/services/keyholding');
  revalidatePath('/services/event-security');
  revalidatePath('/admin/testimonials');

  return { ok: true, id: testimonial.id };
}

export async function updateTestimonialAction(id: string, raw: TestimonialFormInput): Promise<ActionResult> {
  await requireAdminSession();

  const parsed = testimonialSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0].message };
  }

  const testimonial = await updateTestimonial(id, toTestimonialInput(parsed.data));
  if (!testimonial) {
    return { ok: false, error: 'Testimonial not found.' };
  }

  revalidatePath('/');
  revalidatePath('/contact');
  revalidatePath('/about');
  revalidatePath('/services/door-supervision');
  revalidatePath('/services/security-guards');
  revalidatePath('/services/keyholding');
  revalidatePath('/services/event-security');
  revalidatePath('/admin/testimonials');

  return { ok: true, id: testimonial.id };
}

export async function deleteTestimonialAction(id: string): Promise<{ ok: true } | { ok: false; error: string }> {
  await requireAdminSession();

  await deleteTestimonial(id);

  revalidatePath('/');
  revalidatePath('/contact');
  revalidatePath('/about');
  revalidatePath('/services/door-supervision');
  revalidatePath('/services/security-guards');
  revalidatePath('/services/keyholding');
  revalidatePath('/services/event-security');
  revalidatePath('/admin/testimonials');

  return { ok: true };
}
