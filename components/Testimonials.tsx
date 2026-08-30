"use client";

import { useEffect, useState } from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { fetchPublishedTestimonials } from '@/app/actions/testimonials';
import type { Testimonial } from '@/lib/testimonialUtils';

interface Props {
  // Server-rendered pages (e.g. the homepage) fetch this up front and pass it
  // down so there's no client-side loading flash. Pages that are themselves
  // Client Components (most of the /services pages, /about, /contact) can't
  // fetch server data before rendering, so they omit this and the component
  // fetches it itself via a server action on mount.
  initialTestimonials?: Testimonial[];
}

export function Testimonials({ initialTestimonials }: Props) {
  const [reviews, setReviews] = useState<Testimonial[] | null>(initialTestimonials ?? null);

  useEffect(() => {
    if (initialTestimonials) return;
    let cancelled = false;
    fetchPublishedTestimonials().then((data) => {
      if (!cancelled) setReviews(data);
    });
    return () => {
      cancelled = true;
    };
  }, [initialTestimonials]);

  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#f8fafc] dark:bg-[#080f22] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 relative overflow-hidden font-sans transition-colors duration-300">

      {/* Subtle Ambient Radial Backlight */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge icon={MessageSquareQuote} className="mb-4">Verified Client Feedback</Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4 transition-colors">
            Testimonials & Feedback
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium max-w-xl mx-auto transition-colors">
            Read direct feedback from operations directors, venue managers, and commercial clients across the UK.
          </p>
        </div>

        {/* 3-COLUMN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white/95 dark:bg-[#040914]/90 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative group hover:border-[#f59e0b]/60 transition-all duration-300"
            >
              {/* Tactical Top Amber Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-slate-200 dark:bg-white/10 group-hover:bg-[#f59e0b] transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <Quote className="w-6 h-6 text-[#f59e0b] opacity-80" />
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10 transition-colors">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-6 italic transition-colors">
                  &quot;{rev.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 transition-colors">
                <div className="font-mono text-xs font-bold text-[#f59e0b] tracking-wider uppercase">
                  — {rev.author_name}
                </div>
                {rev.organization && (
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 transition-colors">
                    {rev.organization}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
