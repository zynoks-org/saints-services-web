// Pure, isomorphic helpers - safe to import from client components. DB access
// lives in lib/testimonials.ts, which pulls in the Node-only postgres driver
// and must never be imported from a 'use client' file.

export interface Testimonial {
  id: string;
  quote: string;
  author_name: string;
  organization: string | null;
  rating: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export type TestimonialInput = {
  quote: string;
  author_name: string;
  organization: string | null;
  rating: number;
  published: boolean;
};
