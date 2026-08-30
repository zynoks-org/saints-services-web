'use server';

import { getPublishedTestimonials } from '@/lib/testimonials';
import type { Testimonial } from '@/lib/testimonialUtils';

// Thin public server action so <Testimonials> can fetch data from pages that
// are themselves Client Components ("use client" for local tab/accordion
// state) - those can't import lib/testimonials.ts directly, since a Client
// Component subtree can't pull in the Node-only postgres driver. Only wraps
// the read-only, published-only query; admin CRUD stays behind
// requireAdminSession() in app/admin/testimonials/actions.ts.
export async function fetchPublishedTestimonials(): Promise<Testimonial[]> {
  return getPublishedTestimonials();
}
