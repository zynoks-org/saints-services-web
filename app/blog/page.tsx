"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Terminal, Calendar, Clock, ArrowRight, Shield, Filter, ShieldAlert } from 'lucide-react';

const posts = [
  {
    slug: 'uk-stadium-security-disorder-guide',
    category: 'EVENT SECURITY',
    codeTag: 'OPS // EVENT_SECURITY',
    title: 'UK Manned Guarding & Stadium Disorder: 2026 Operational Insights',
    excerpt: 'Comprehensive breakdown of crowd management, SIA guarding requirements, and official Home Office disorder data across UK venues.',
    date: '12 August 2026',
    readTime: '8 min read',
    image: '/images/event-security.png',
    featured: true,
  },
  {
    slug: 'london-crime-rates-by-borough-2026',
    category: 'MANNED GUARDING',
    codeTag: 'SEC // LONDON_RISK',
    title: 'Most Dangerous Areas in London: Crime Rates by Borough (2026 Update)',
    excerpt: 'An analysis of Met Police crime statistics across London boroughs and how commercial site managers can mitigate localized threats.',
    date: '01 August 2026',
    readTime: '9 min read',
    image: '/images/security-services.jpg',
    featured: false,
  },
  {
    slug: 'retail-loss-prevention-uk-guide',
    category: 'RETAIL SECURITY',
    codeTag: 'CTRL // LOSS_PREVENTION',
    title: 'Loss Prevention: Retail and Asset Protection UK Guide',
    excerpt: 'How SIA-licensed retail security officers and deterrent protocols protect UK stores against the rising £4.2B retail theft crisis.',
    date: '20 July 2026',
    readTime: '7 min read',
    image: '/images/why-us.png',
    featured: false,
  },
  {
    slug: 'sia-security-guard-responsibilities',
    category: 'COMPLIANCE',
    codeTag: 'SEC // BS7858_VETTED',
    title: 'Security Guard Roles and Responsibilities: A Guide to Modern Guarding',
    excerpt: 'Understanding BS7858 vetting, incident logging protocols, and conflict de-escalation for commercial site protection.',
    date: '10 July 2026',
    readTime: '6 min read',
    image: '/images/joinus.png',
    featured: false,
  },
  {
    slug: 'maritime-port-security-uk-guide',
    category: 'MARITIME & PORT',
    codeTag: 'PORT // LANDSIDE_SEC',
    title: 'UK Maritime & Port Security: Where SIA Badge Holders Operate',
    excerpt: 'Analyzing landside security operations across UK ports, cargo terminals, ISPS compliance, and quayside access control protocols.',
    date: '26 June 2026',
    readTime: '9 min read',
    image: '/images/security-services.jpg',
    featured: false,
  },
  {
    slug: 'close-protection-threat-dynamics-uk',
    category: 'CLOSE PROTECTION',
    codeTag: 'CP // EXECUTIVE_SHIELD',
    title: 'Close Protection: Threat Dynamics, High-Net-Worth & VIP Guarding Solutions',
    excerpt: 'How Tier-1 close protection officers evaluate threat profiles, advance reconnaissance, and personal escort logistics for high-profile clients.',
    date: '14 May 2026',
    readTime: '10 min read',
    image: '/images/event-security.png',
    featured: false,
  },
  {
    slug: 'martyns-law-event-safety-compliance',
    category: 'EVENT SECURITY',
    codeTag: 'LEGAL // MARTYNS_LAW',
    title: 'Martyn’s Law & Event Safety Planning: UK Regulatory Compliance Guide',
    excerpt: 'Preparing UK venue managers and event organizers for the Terrorism (Protection of Premises) Act, risk evaluations, and SIA crowd protection.',
    date: '02 May 2026',
    readTime: '11 min read',
    image: '/images/event-security.png',
    featured: false,
  },
  {
    slug: 'construction-site-security-loss-prevention',
    category: 'MANNED GUARDING',
    codeTag: 'SITE // PLANT_PROTECT',
    title: 'Construction Site Security: Preventing Tool, Plant & Fuel Theft in 2026',
    excerpt: 'Tactical gatehouse guarding, wireless perimeter detection, and out-of-hours mobile patrols for high-value construction developments.',
    date: '18 April 2026',
    readTime: '8 min read',
    image: '/images/why-us.png',
    featured: false,
  },
  {
    slug: 'keyholding-alarm-response-sla-guide',
    category: 'COMPLIANCE',
    codeTag: 'OPS // ALARM_RESPONSE',
    title: '24/7 Keyholding & Mobile Alarm Response: SLA Standards for UK Landlords',
    excerpt: 'Mitigating staff danger during out-of-hours alarm activations with BS7984-compliant keyholding officers and rapid dispatch units.',
    date: '04 April 2026',
    readTime: '7 min read',
    image: '/images/joinus.png',
    featured: false,
  },
];

const categories = [
  'ALL',
  'EVENT SECURITY',
  'MANNED GUARDING',
  'RETAIL SECURITY',
  'COMPLIANCE',
  'MARITIME & PORT',
  'CLOSE PROTECTION'
];

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  
  // Filter remaining grid posts by active pill tag
  const gridPosts = posts
    .filter((p) => p.slug !== featuredPost.slug)
    .filter((p) => activeCategory === 'ALL' || p.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-white py-16 sm:py-24 font-sans relative overflow-hidden select-none transition-colors duration-300">
      
      {/* Tactical Ambient Glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-[#f59e0b]/10 dark:bg-[#f59e0b]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMMAND HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow-sm transition-colors">
            <Terminal className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>INSIGHTS_DESK // SAINTS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4 transition-colors">
            Security Insights &amp; Industry Guidance
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto transition-colors">
            Practical guidance, SIA compliance updates, and risk analysis for UK business owners and site managers.
          </p>
        </div>

        {/* FEATURED POST BANNER */}
        <div className="mb-16">
          <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800/80 rounded-sm overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 transition-colors">
            
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[420px] bg-slate-900 group">
              <Link href={`/blog/${featuredPost.slug}`} className="block relative w-full h-full">
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#0b1329] dark:via-transparent dark:to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white dark:lg:to-[#0b1329]" />
              </Link>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold tracking-widest uppercase transition-colors">
                  <span>FEATURED // {featuredPost.category}</span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`} className="block group">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight group-hover:text-[#f59e0b] transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3 transition-colors">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Read Article</span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22] group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* CATEGORY FILTER BAR */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Filter by Category:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-[#f59e0b] text-[#080f22] border-[#f59e0b] shadow-md scale-105'
                    : 'bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-800 hover:border-[#f59e0b] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b]">
              Latest Publications
            </h3>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{gridPosts.length} Articles Listed</span>
          </div>

          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post, i) => (
                <article 
                  key={i} 
                  className="group bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800/80 rounded-sm overflow-hidden shadow-lg hover:border-[#f59e0b] dark:hover:border-[#f59e0b]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <Link href={`/blog/${post.slug}`} className="block relative h-48 bg-slate-900 overflow-hidden">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-white/90 dark:bg-[#0b1329]/90 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                        {post.category}
                      </div>
                    </Link>

                    <div className="p-6 space-y-3">
                      <Link href={`/blog/${post.slug}`} className="block">
                        <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-[#f59e0b] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-3 transition-colors">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#f59e0b] group-hover:translate-x-1 transition-transform uppercase tracking-wider"
                    >
                      <span>Read Full Post</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-mono text-xs transition-colors">
              No publications currently match the selected category filter.
            </div>
          )}
        </div>

        {/* BOTTOM COMMAND CTA BANNER */}
        <div className="mt-20 p-8 sm:p-12 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left transition-colors">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Tailored Security Assessment</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white transition-colors">
              Need site or venue protection?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium transition-colors">
              SIA approved officers available for immediate UK deployment.
            </p>
          </div>

          <Link 
            href="/contact" 
            className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-8 py-4 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-xl active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
            <Shield className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Request Operational Quote</span>
          </Link>
        </div>

      </div>
    </main>
  );
}