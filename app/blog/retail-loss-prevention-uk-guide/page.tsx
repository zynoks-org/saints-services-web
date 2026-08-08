import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Shield, 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  User, 
  HelpCircle, 
  FileText,
  AlertTriangle,
  Building2,
  Lock,
  ShieldAlert,
  BarChart3,
  Award,
  Gavel,
  Store,
  TrendingUp,
  Camera,
  FileSpreadsheet
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/* 
================================================================================
SEO & KEYWORD METADATA STRATEGY
================================================================================
Topic: Loss Prevention & Retail Asset Protection: 2026 UK Retail Guide
Target Keywords: 
  - Retail loss prevention UK guide
  - Shoplifting prevention security guards
  - UK retail theft statistics 2026
  - SIA retail security guard duties
  - Store asset protection strategies
  - Electronic Article Surveillance EAS response
  - PACE Act shoplifter detention UK
Secondary Keywords:
  - British Retail Consortium shrinkage statistics
  - Organized retail crime syndicate countermeasures
  - Retail security guard EAS pedestal protocol
  - PACE Act Section 24A citizen arrest retail
Target Audience: Retail store directors, loss prevention managers, commercial operations heads, and corporate asset protection leads across the UK.
Search Intent: Informational & Commercial Investigation (Understanding UK retail crime statistics, shrinkage mitigation, PACE Act detention legality, and procuring SIA loss prevention guards).
*/

export const metadata: Metadata = {
  title: "Loss Prevention & Retail Asset Protection: 2026 UK Retail Guide",
  description: "Comprehensive UK retail loss prevention guide analyzing the £4.2B shrinkage crisis, shoplifting deterrents, EAS tag response, and SIA store security guards.",
  keywords: [
    "Retail loss prevention UK guide",
    "Shoplifting prevention security guards",
    "UK retail theft statistics 2026",
    "SIA retail security guard duties",
    "Store asset protection strategies",
    "Electronic Article Surveillance EAS response",
    "PACE Act shoplifter detention UK"
  ],
  openGraph: {
    title: "Loss Prevention & Retail Asset Protection: 2026 UK Guide | Saints Services Ltd",
    description: "In-depth breakdown of UK retail loss prevention strategies, store theft data, SIA loss prevention guard duties, and EAS tag management.",
    url: 'https://www.saintsservices.co.uk/blog/retail-loss-prevention-uk-guide',
    type: 'article',
    images: [{ url: '/images/why-us.png', width: 1200, height: 630, alt: 'SIA Retail Security Guard Stationed in Store' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Loss Prevention & Retail Asset Protection: 2026 UK Guide",
    description: "Combating the £4.2B retail theft crisis in the UK with SIA loss prevention officers and proactive store guarding.",
    images: ['/images/why-us.png'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Loss Prevention: Retail and Asset Protection UK Guide 2026",
  "description": "An exhaustive guide detailing UK retail crime statistics, loss prevention strategies, EAS gate alarm protocols, PACE Act detentions, and SIA store guard deployments.",
  "image": "https://www.saintsservices.co.uk/images/why-us.png",
  "author": { 
    "@type": "Organization", 
    "name": "Saints Retail Security Group",
    "url": "https://www.saintsservices.co.uk"
  },
  "publisher": { 
    "@type": "Organization", 
    "name": "Saints Services Ltd",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.saintsservices.co.uk/images/why-us.png"
    }
  },
  "datePublished": "2026-07-20",
  "dateModified": "2026-08-07",
  "mainEntityOfPage": "https://www.saintsservices.co.uk/blog/retail-loss-prevention-uk-guide"
};

export default function RetailLossPreventionArticle() {
  const lossPreventionPillars = [
    {
      title: "Store Entrance & EAS Gate Surveillance",
      icon: Store,
      description: "Positioning uniformed SIA officers at primary store entry doors to monitor Electronic Article Surveillance (EAS) pedestals and deter targeted entry by known shoplifting groups."
    },
    {
      title: "High-Value Aisles & Floor Patrols",
      icon: Camera,
      description: "Executing active, high-visibility floor sweeps through vulnerable departments including designer fashion, alcohol, cosmetics, and consumer electronics."
    },
    {
      title: "Active Incident Response & De-escalation",
      icon: ShieldAlert,
      description: "Responding calmly to triggered door alarms, performing receipt validations, and de-escalating aggressive confrontations near customer checkout zones."
    },
    {
      title: "PACE Act Detention & Police Handovers",
      icon: Gavel,
      description: "Executing lawful detentions under Section 24A of the Police and Criminal Evidence Act 1984 (PACE) when theft is directly observed, preserving evidence for police arrival."
    },
    {
      title: "Civil Recovery & Loss Documentation",
      icon: FileSpreadsheet,
      description: "Logging time-stamped incident reports and supporting store managers with civil recovery procedures to reclaim financial damages from offender networks."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-white flex flex-col font-sans select-none transition-colors duration-300">
      <Header />

      <article className="flex-grow py-12 sm:py-20 relative overflow-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#f59e0b]/10 dark:bg-[#f59e0b]/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* BREADCRUMBS */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#f59e0b] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
            <Link href="/blog" className="hover:text-[#f59e0b] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
            <span className="text-[#f59e0b] truncate">Retail Loss Prevention</span>
          </nav>

          {/* HEADER SECTION */}
          <header className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm transition-colors">
              <Shield className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>CTRL // LOSS_PREVENTION_INSIGHTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
              Loss Prevention: Retail and Asset Protection UK Guide 2026
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
              An in-depth guide addressing the UK retail sector’s £4.2 billion shrinkage crisis, evaluating store security guard protocols, Electronic Article Surveillance (EAS) tag response, and PACE Act detention guidelines.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-slate-800 dark:text-slate-200 font-bold">Saints Retail Security Group</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>July 20, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>10 min read</span>
              </div>
            </div>
          </header>

          {/* FEATURED HERO IMAGE */}
          <div className="relative h-[320px] sm:h-[460px] rounded-sm overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl mb-12 bg-slate-900 transition-colors">
            <Image 
              src="/images/why-us.png" 
              alt="SIA Retail Security Guard Stationed at Store Entrance for Loss Prevention" 
              fill 
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent dark:from-[#040914] dark:via-transparent dark:to-transparent opacity-80" />
          </div>

          {/* QUICK NAVIGATION BOX */}
          <div className="p-6 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 mb-10 shadow-lg transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-3">
              <BarChart3 className="w-4 h-4" />
              <span>Contents // Operational Breakdown</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#retail-crisis" className="hover:text-[#f59e0b] transition-colors">1. The £4.2 Billion UK Retail Shrinkage Crisis</a></li>
              <li><a href="#organized-crime" className="hover:text-[#f59e0b] transition-colors">2. The Shift Toward Organized Retail Crime (ORC)</a></li>
              <li><a href="#core-pillars" className="hover:text-[#f59e0b] transition-colors">3. 5 Pillars of Active Retail Security Guarding</a></li>
              <li><a href="#eas-protocols" className="hover:text-[#f59e0b] transition-colors">4. Managing EAS Gate Alarms &amp; Receipt Checks</a></li>
              <li><a href="#pace-detention" className="hover:text-[#f59e0b] transition-colors">5. Lawful Detentions Under PACE Act 1984</a></li>
              <li><a href="#civil-recovery" className="hover:text-[#f59e0b] transition-colors">6. Implementing Civil Recovery &amp; Evidence Logging</a></li>
              <li><a href="#faq-section" className="hover:text-[#f59e0b] transition-colors">7. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* MAIN EDITORIAL CONTENT */}
          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal transition-colors">
            
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 border-l-2 border-[#f59e0b] pl-4 leading-relaxed transition-colors">
              Retail loss prevention in the UK is no longer just about catching individual shoplifters—it is an essential operational strategy designed to safeguard store personnel, mitigate violence, and stop profit erosion.
            </p>

            {/* SECTION 1 */}
            <section id="retail-crisis" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <TrendingUp className="w-5 h-5 text-[#f59e0b]" />
                1. The £4.2 Billion UK Retail Shrinkage Crisis
              </h2>
              <p>
                According to annual data published by the British Retail Consortium (BRC), retail theft and inventory shrinkage cost UK store operators over <strong>£4.2 billion per year</strong>. High Street retailers record millions of individual theft incidents annually, averaging over 55,000 recorded offenses every single day.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">£4.2B</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Annual Loss</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">55,000+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Daily Incidents</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">£1.8B</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Spent on Security</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">50%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Violence Rise</div>
                </div>
              </div>

              <p>
                Beyond direct financial loss, retail staff face unprecedented levels of abuse, threats, and physical assault. Deploying uniformed, SIA-licensed <Link href="/services/security-guards" className="text-[#f59e0b] hover:underline font-bold">retail security guards</Link> provides an immediate visual deterrent that protects both merchandise and store staff.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="organized-crime" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
                2. The Shift Toward Organized Retail Crime (ORC)
              </h2>
              <p>
                UK retail crime has shifted away from isolated, low-value shoplifting toward highly coordinated <strong>Organized Retail Crime (ORC)</strong> syndicates. These groups systematically target high-value merchandise categories—including designer clothing, fragrance, premium spirits, infant formula, and high-end electronics—for rapid resale through illicit online channels and secondary markets.
              </p>
              <p>
                ORC groups exploit stores lacking physical security presence. Without uniformed officers stationed at entry points and active floor surveillance, retail chains risk becoming recurring targets for sweep-thefts and coordinated gang raids.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="core-pillars" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Award className="w-5 h-5 text-[#f59e0b]" />
                3. 5 Pillars of Active Retail Security Guarding
              </h2>
              <p>
                Professional loss prevention relies on proactive engagement rather than passive observation. SIA officers deployed across UK stores execute five key operational duties:
              </p>

              <div className="space-y-4 my-6">
                {lossPreventionPillars.map((pillar, idx) => {
                  const IconComp = pillar.icon;
                  return (
                    <div key={idx} className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 hover:border-[#f59e0b] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">{idx + 1}. {pillar.title}</h3>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed pl-11 transition-colors">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* IN-ARTICLE MID-POINT CONVERSION CTA */}
            <div className="my-10 p-6 sm:p-8 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#f59e0b] uppercase">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Store Asset Protection Operations</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Need Dedicated Loss Prevention Guards?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-lg transition-colors">
                  Saints Services Ltd provides SIA-licensed retail guards, store entry officers, and rapid nationwide deployment to protect your retail premises.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Get Retail Quote</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
              </Link>
            </div>

            {/* SECTION 4 */}
            <section id="eas-protocols" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Lock className="w-5 h-5 text-[#f59e0b]" />
                4. Managing EAS Gate Alarms &amp; Receipt Checks
              </h2>
              <p>
                Electronic Article Surveillance (EAS) pedestals placed at store exits serve as a primary barrier against unauthorized item removal. However, an alarm pedestal&apos;s activation requires immediate, professional handling to avoid alienating paying customers while securing unpurchased store assets.
              </p>
              
              <p>
                SIA-licensed officers follow a strict 4-step EAS alarm protocol:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">1. Professional Greeting</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Approaching the individual calmly, requesting them to step back across the pedestal line politely without making accusatory statements.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">2. Receipt &amp; Bag Verification</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Cross-referencing items in shopping bags against proof-of-purchase receipts to locate un-deactivated security tags or un-scanned items.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">3. Deactivation Clearance</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Deactivating valid security tags at checkout or removing security hard-tags using authorized detachers before clearing the customer to exit.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">4. Incident Escalation</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">If a suspect refuses cooperation and attempts to escape with unpurchased goods, initiating lawful detention procedures or recording description logs for police.</p>
                </div>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="pace-detention" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Gavel className="w-5 h-5 text-[#f59e0b]" />
                5. Lawful Detentions Under PACE Act 1984
              </h2>
              <p>
                SIA-licensed retail guards operate under statutory Citizen&apos;s Arrest powers granted by <strong>Section 24A of the Police and Criminal Evidence Act 1984 (PACE)</strong>.
              </p>
              <p>
                For a detention to be lawful under UK legislation, four specific criteria (known as the ASCONE principle) must be strictly satisfied before initiating physical restraint or stopping an individual outside store doors:
              </p>

              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span><strong>Approach &amp; Selection:</strong> Observing the individual approaching a high-value display area.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span><strong>Concealment or Selection:</strong> Directly seeing the item selected and concealed in a personal bag, coat, or booster pouch.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span><strong>Continuous Observation:</strong> Maintaining unbroken line-of-sight visual tracking of the suspect across the store floor.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span><strong>Exit Beyond Point of Sale:</strong> Allowing the individual to pass all available checkout pay points and cross the store threshold before making contact.</span>
                </li>
              </ul>
            </section>

            {/* SECTION 6 */}
            <section id="civil-recovery" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Building2 className="w-5 h-5 text-[#f59e0b]" />
                6. Implementing Civil Recovery &amp; Evidence Logging
              </h2>
              <p>
                Beyond criminal prosecution through local Police forces, UK retailers increasingly utilize <strong>Civil Recovery</strong> mechanisms under tort law. Civil recovery allows store owners to issue financial demands to offenders to recover the administrative, security, and restoration costs associated with shoplifting incidents.
              </p>
              <p>
                Professional loss prevention guards ensure that all incident details—including CCTV timestamp bookmarks, stolen item value inventories, and offender details—are logged in standardized incident report books suitable for civil legal actions.
              </p>
              <p>
                To protect venue doorways or evening commercial sites, explore our specialized <Link href="/services/door-supervision" className="text-[#f59e0b] hover:underline font-bold">door supervision</Link> and <Link href="/services/keyholding" className="text-[#f59e0b] hover:underline font-bold">24/7 keyholding &amp; alarm response</Link> services.
              </p>
            </section>

            {/* SECTION 7: FAQ */}
            <section id="faq-section" className="pt-8 border-t border-slate-200 dark:border-slate-800 my-10 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">Are security guards in the UK allowed to search shopping bags?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Security guards can request to search bags as a condition of entry or exit on private store property. While customers have the right to refuse a search, the guard can deny entry or request the individual leave the premises immediately.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">Can a store security officer physically detain a shoplifter?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Yes, under Section 24A of the Police and Criminal Evidence Act 1984 (PACE), a guard can perform a Citizen&apos;s Arrest if theft has occurred and physical detention is necessary to hand the offender over to police.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What qualifications do retail security guards require in the UK?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Retail security officers must hold a valid SIA Security Guarding or Door Supervision license and undergo compulsory BS7858 background vetting including 5-year employment and criminal history checks.
                  </p>
                </div>
              </div>
            </section>

            {/* EXTERNAL SOURCES CITATION */}
            <div className="p-5 rounded-sm bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-2 transition-colors">
              <div className="font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Verified Industry &amp; Regulatory Sources:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>British Retail Consortium (BRC): <em>Annual Retail Crime Survey Reports</em></li>
                <li>Security Industry Authority (SIA): <em>Private Security Industry Act 2001 Standards</em></li>
                <li>UK Legislation: <em>Police and Criminal Evidence Act 1984 (Section 24A PACE)</em></li>
              </ul>
            </div>

          </div>

          {/* RELATED ARTICLES CAROUSEL */}
          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-6">
              <FileText className="w-4 h-4" />
              <span>Related Security Guidance</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link 
                href="/blog/london-crime-rates-by-borough-2026" 
                className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
              >
                <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">MANNED GUARDING</div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  Most Dangerous Areas in London: Crime Rates by Borough
                </h4>
              </Link>

              <Link 
                href="/blog/sia-security-guard-responsibilities" 
                className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
              >
                <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">COMPLIANCE</div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  Security Guard Roles and Responsibilities: A Guide to Modern Guarding
                </h4>
              </Link>
            </div>
          </div>

          {/* AUTHOR & FOOTER NAVIGATION */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Published by <span className="text-slate-900 dark:text-white font-bold">Saints Services Retail Security Group</span>
            </div>
            <Link 
              href="/blog" 
              className="text-xs font-mono text-[#f59e0b] hover:underline uppercase tracking-wider flex items-center gap-1"
            >
              ← Back to Blog Hub
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}