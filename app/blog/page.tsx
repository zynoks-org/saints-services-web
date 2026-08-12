import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { 
  Shield, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Sparkles, 
  Radio, 
  Cpu, 
  Zap 
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Security Intelligence Desk & Operational Archive // Saints Services Ltd',
  description: 'Enterprise-grade UK security intelligence, SIA regulatory compliance frameworks, real-time threat telemetry, and tactical manned guarding doctrine.',
};

// Full Article Repository containing all 8 posts matching the slug routing dictionary with exact ImgBB links
const articlesData: Record<string, {
  title: string;
  category: string;
  codeTag: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  clearanceLevel: string;
  threatIndex: string;
}> = {
  'uk-stadium-security-disorder-guide': {
    title: 'UK Manned Guarding & Stadium Disorder: 2026 Operational Insights',
    category: 'EVENT SECURITY',
    codeTag: 'OPS // EVENT_SECURITY',
    description: 'In-depth analysis on UK stadium security, Home Office disorder statistics, SIA compliance, and manned guarding strategies for high-risk venues.',
    date: '12 August 2026',
    readTime: '8 min read',
    image: 'https://i.ibb.co/h1hdchkS/uk-stadium-security-disorder-guide.jpg',
    clearanceLevel: 'LEVEL_04 // RESTRICTED',
    threatIndex: 'HIGH (8.4/10)',
  },
  'london-crime-rates-by-borough-2026': {
    title: 'Most Dangerous Areas in London: Crime Rates by Borough (2026 Update)',
    category: 'MANNED GUARDING',
    codeTag: 'SEC // LONDON_RISK',
    description: 'An analysis of Met Police crime statistics across London boroughs and how commercial site managers can mitigate localized threats.',
    date: '01 August 2026',
    readTime: '9 min read',
    image: 'https://i.ibb.co/vvdP3b67/london-crime-rates-by-borough-2026.png',
    clearanceLevel: 'LEVEL_03 // CONFIDENTIAL',
    threatIndex: 'CRITICAL (9.1/10)',
  },
  'retail-loss-prevention-uk-guide': {
    title: 'Loss Prevention: Retail and Asset Protection UK Guide',
    category: 'RETAIL SECURITY',
    codeTag: 'CTRL // LOSS_PREVENTION',
    description: 'How SIA-licensed retail security officers and deterrent protocols protect UK stores against the rising £4.2B retail theft crisis.',
    date: '20 July 2026',
    readTime: '7 min read',
    image: 'https://i.ibb.co/XGHFd3F/retail-loss-prevention-uk-guide.jpg',
    clearanceLevel: 'LEVEL_02 // INTERNAL',
    threatIndex: 'ELEVATED (7.2/10)',
  },
  'sia-security-guard-responsibilities': {
    title: 'Security Guard Roles and Responsibilities: A Guide to Modern Guarding',
    category: 'COMPLIANCE',
    codeTag: 'SEC // BS7858_VETTED',
    description: 'Understanding BS7858 vetting, incident logging protocols, and conflict de-escalation for commercial site protection.',
    date: '10 July 2026',
    readTime: '6 min read',
    image: 'https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png',
    clearanceLevel: 'LEVEL_01 // PUBLIC',
    threatIndex: 'MODERATE (5.5/10)',
  },
  'close-protection-threat-dynamics-uk': {
    title: 'Close Protection & Executive Security Threat Dynamics in the UK',
    category: 'VIP PROTECTION',
    codeTag: 'OPS // EXECUTIVE_SEC',
    description: 'Strategic deployment of Close Protection Officers (CPOs) for corporate executives, high-net-worth individuals, and high-profile assets.',
    date: '05 July 2026',
    readTime: '7 min read',
    image: 'https://i.ibb.co/MDvfwBjF/close-protection-threat-dynamics-uk.jpg',
    clearanceLevel: 'LEVEL_05 // EYES_ONLY',
    threatIndex: 'SEVERE (9.6/10)',
  },
  'construction-site-security-loss-prevention': {
    title: 'Construction Site Security: Preventing Theft & Plant Vandalism',
    category: 'SITE SECURITY',
    codeTag: 'SEC // CONSTRUCTION',
    description: 'Protecting active construction zones, expensive machinery, and building materials from trespass, arson, and tool theft.',
    date: '28 June 2026',
    readTime: '6 min read',
    image: 'https://i.ibb.co/mVdf1rR5/construction-site-security-loss-prevention.jpg',
    clearanceLevel: 'LEVEL_02 // INTERNAL',
    threatIndex: 'ELEVATED (6.8/10)',
  },
  'keyholding-alarm-response-sla-guide': {
    title: 'Keyholding & Alarm Response: Understanding Emergency SLAs',
    category: 'MOBILE PATROLS',
    codeTag: 'CTRL // KEYHOLDING',
    description: 'Why commercial properties rely on professional keyholding and rapid alarm response to satisfy UK business insurance mandates.',
    date: '15 June 2026',
    readTime: '5 min read',
    image: 'https://i.ibb.co/TBKL1mK0/keyholding-alarm-response-sla-guide.jpg',
    clearanceLevel: 'LEVEL_01 // PUBLIC',
    threatIndex: 'ROUTINE (4.2/10)',
  },
  'maritime-port-security-uk-guide': {
    title: 'Maritime & Port Security: Securing UK Logistics Hubs',
    category: 'LOGISTICS',
    codeTag: 'OPS // MARITIME',
    description: 'Compliance standards, ISPS code adherence, and physical cargo protection strategies for UK shipping terminals and logistics parks.',
    date: '02 June 2026',
    readTime: '8 min read',
    image: 'https://i.ibb.co/ZRNnzgGQ/maritime-port-security-uk-guide.webp',
    clearanceLevel: 'LEVEL_04 // RESTRICTED',
    threatIndex: 'HIGH (8.0/10)',
  }
};

export default function BlogListingPage() {
  const articleEntries = Object.entries(articlesData);
  const featuredSlug = 'uk-stadium-security-disorder-guide';
  const featuredArticle = articlesData[featuredSlug];
  const regularArticles = articleEntries.filter(([slug]) => slug !== featuredSlug);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#f59e0b] selection:text-slate-950 transition-colors duration-300 flex flex-col relative overflow-x-hidden select-none">
      
      {/* Tactical Background Grid Overlay & Dual-Mode Ambient Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#f59e0b]/5 dark:bg-[#f59e0b]/5 rounded-full blur-[200px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Header Included */}
      <div className="relative z-30">
        <Header />
      </div>

      <main className="flex-grow py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TOP TELEMETRY STATUS BAR */}
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-300 dark:border-slate-800/80 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                SYSTEM_ONLINE
              </span>
            </div>
          </div>

          {/* HEADER SECTION */}
          <div className="max-w-3xl mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-md backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>TACTICAL INTELLIGENCE &amp; DOCTRINE REPOSITORY</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
              Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-amber-500 to-amber-700 dark:via-amber-200 dark:to-amber-500">Briefs &amp; Directives</span>
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
              High-clearance security telemetry, SIA compliance audits, threat dynamics, and tactical manned guarding doctrine engineered for UK corporate estates and critical infrastructure.
            </p>
          </div>

          {/* FEATURED ARTICLE HERO CARD */}
          {featuredArticle && (
            <div className="mb-16 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 animate-spin text-[#f59e0b]" />
                  <span>[ PRIORITY_TARGET // FEATURED BRIEF ]</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  THREAT INDEX: <span className="text-amber-700 dark:text-amber-400 font-bold">{featuredArticle.threatIndex}</span>
                </div>
              </div>

              <Link 
                href={`/blog/${featuredSlug}`}
                className="group relative grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] rounded-sm overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-xl"
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />

                <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-auto min-h-[360px] bg-slate-900 dark:bg-slate-950 overflow-hidden">
                  <Image 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center group-hover:scale-105 group-hover:filter group-hover:contrast-110 dark:group-hover:contrast-125 transition-all duration-700 ease-out opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/80 hidden lg:block" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,9,20,0.8)_100%)] pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-mono font-bold text-slate-950 bg-[#f59e0b] px-3 py-1 rounded-sm uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                      <Zap className="w-3 h-3 fill-slate-950" />
                      CRITICAL_DIRECTIVE
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 relative">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[10px] font-mono font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded border border-[#f59e0b]/30 uppercase tracking-widest shadow-inner">
                        {featuredArticle.codeTag}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#f59e0b]" /> {featuredArticle.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" /> {featuredArticle.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors uppercase tracking-tight leading-tight">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {featuredArticle.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-[#f59e0b]">
                    <span className="uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-2">
                      Access Full Telemetry <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] text-slate-500 bg-slate-100 dark:bg-slate-950 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800">
                      {featuredArticle.clearanceLevel}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* SECTION DIVIDER */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-300 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-[#f59e0b]" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Archived Operational Directives ({regularArticles.length})
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              SORTED BY RECENT TELEMETRY TIMESTAMP
            </div>
          </div>

          {/* REGULAR ARTICLES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map(([slug, article]) => (
              <Link 
                key={slug}
                href={`/blog/${slug}`}
                className="group relative flex flex-col justify-between bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] rounded-sm overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#f59e0b]/0 via-transparent to-[#f59e0b]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="relative h-52 sm:h-56 bg-slate-900 dark:bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 group-hover:contrast-105 dark:group-hover:contrast-110 transition-transform duration-700 ease-out opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-mono font-bold text-slate-950 bg-[#f59e0b] px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-md">
                        {article.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[9px] font-mono font-bold text-amber-700 dark:text-amber-400 bg-white/90 dark:bg-slate-950/90 px-2 py-0.5 rounded border border-amber-500/30 uppercase tracking-widest shadow-sm">
                        {article.threatIndex}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3 relative z-10">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span className="text-[#f59e0b] font-bold">{article.codeTag}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" /> {article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors uppercase tracking-tight line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono font-bold text-[#f59e0b] relative z-10">
                  <span className="uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    Read Brief <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {article.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* SECURE TRANSMISSION CALLOUT BOX */}
          <div className="mt-20 p-8 sm:p-12 rounded-sm bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-[#0b1329] dark:to-slate-900 border border-slate-300 dark:border-slate-800 relative overflow-hidden shadow-2xl transition-colors duration-300">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#f59e0b]/5 dark:bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 font-mono text-xs font-bold uppercase tracking-widest">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>SECURE ENTERPRISE INQUIRY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Need Custom Manned Guarding &amp; Compliance Protocols?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Engage our tactical intelligence directorate for bespoke site vulnerability assessments, BS7858 vetted deployment, and 24/7 emergency response integration.
                </p>
              </div>

              <Link 
                href="/contact" 
                className="group relative overflow-hidden shrink-0 inline-flex items-center gap-3 bg-slate-900 dark:bg-[#f59e0b] text-white dark:text-slate-950 font-black px-8 py-4 rounded-sm text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 border border-slate-800 dark:border-transparent"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Secure Dispatch <ArrowRight className="w-4 h-4 text-[#f59e0b] dark:text-slate-950 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}