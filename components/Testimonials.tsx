"use client";

import React from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      quote: "Saints Services provided exceptional door supervision for our corporate venue. The security officers arrived punctually, maintained high professional standards, and managed entrance screening flawlessly.",
      author: "Operations Manager",
      organization: "Event & Venue Group",
      rating: 5,
    },
    {
      quote: "Saints Services has been an outstanding security partner across our hospitality locations over the past two years. Reliable, proactive, and instrumental in ensuring our weekend operations run safely.",
      author: "General Manager",
      organization: "Hospitality & Leisure Operations",
      rating: 5,
    },
    {
      quote: "I would like to extend our appreciation to Saints Services for delivering top-tier site protection across our multi-city locations. The assigned SIA guards react rapidly to alerts and remain exceptionally vigilant.",
      author: "Group Security Director",
      organization: "Enterprise Commercial Properties",
      rating: 5,
    },
    {
      quote: "Saints Services is by far the most dependable security provider we have contracted. Zero hassle, flawless shift attendance records, and highly trained personnel who take real pride in site protection.",
      author: "Security Coordinator",
      organization: "Commercial Distribution Network",
      rating: 5,
    },
    {
      quote: "The guard management tech Saints Services utilizes gives us total operational visibility. Real-time GPS patrol tracking of door supervisors and immediate incident logs give our management complete peace of mind.",
      author: "Head of Security",
      organization: "Entertainment & Gaming Group",
      rating: 5,
    },
    {
      quote: "Saints Services consistently delivers a first-class security service. From initial risk planning to on-site execution, their team is disciplined, presentable, and extremely proactive.",
      author: "Operations Director",
      organization: "Regional Property Management",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f8fafc] dark:bg-[#080f22] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 relative overflow-hidden font-sans transition-colors duration-300">
      
      {/* Subtle Ambient Radial Backlight */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/10 dark:bg-[#040914]/80 text-[#f59e0b] border border-slate-900/10 dark:border-white/15 text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow-md backdrop-blur-md transition-colors">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span className="text-slate-800 dark:text-[#f59e0b]">SOCIAL_PROOF // CLIENT_VERIFIED</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4 transition-colors">
            Testimonials & Social Proof
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium max-w-xl mx-auto transition-colors">
            Read direct feedback from operations directors, venue managers, and commercial clients across the UK.
          </p>
        </div>

        {/* 3-COLUMN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
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
                  — {rev.author}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 transition-colors">
                  {rev.organization}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}