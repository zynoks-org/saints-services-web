import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Shield, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  User, 
  HelpCircle, 
  FileText,
  Building2,
  Lock,
  ShieldAlert,
  BarChart3,
  Award,
  Anchor,
  Compass,
  Ship,
  Eye,
  Radio,
  FileSpreadsheet
} from 'lucide-react';

/* 
================================================================================
SEO & KEYWORD METADATA STRATEGY
================================================================================
Topic: UK Maritime & Port Security Guide: Landside SIA Guarding & ISPS Code
Target Keywords: 
  - UK maritime port security guide 2026
  - SIA security guard duties UK ports
  - Landside port protection ISPS code
  - Cargo terminal access control UK
  - Port security officers England
Secondary Keywords:
  - ISPS Code Port Facility Security Officer (PFSO)
  - Quayside manned guarding standards
  - Container terminal theft prevention UK
  - Dockside security screening SIA licensed
Target Audience: Port facility operators, maritime terminal managers, logistics operations directors, cargo handling heads, and maritime compliance officers across the UK.
Search Intent: Informational & Commercial Investigation (Understanding landside port security regulations, ISPS Code compliance, and procuring SIA-licensed maritime guarding).
*/

export const metadata: Metadata = {
  title: "UK Maritime & Port Security Guide: Landside SIA Guarding & ISPS Code",
  description: "Comprehensive 2026 guide on UK maritime port security, ISPS Code landside compliance, quayside access control, and SIA-licensed cargo terminal guarding.",
  keywords: [
    "UK maritime port security guide 2026",
    "SIA security guard duties UK ports",
    "Landside port protection ISPS code",
    "Cargo terminal access control UK",
    "Port security officers England",
    "ISPS Code Port Facility Security Officer",
    "Quayside manned guarding standards"
  ],
  openGraph: {
    title: "UK Maritime & Port Security Guide: Landside SIA Guarding & ISPS Code | Saints Services Ltd",
    description: "In-depth breakdown of UK port facility protection, cargo screening, ISPS Code adherence, and SIA manned guarding for maritime terminals.",
    url: 'https://www.saintsservices.co.uk/blog/maritime-port-security-uk-guide',
    type: 'article',
    images: [{ url: '/images/security-services.jpg', width: 1200, height: 630, alt: 'SIA Port Security Officer Stationed at UK Maritime Terminal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "UK Maritime & Port Security Guide: Landside SIA Guarding & ISPS Code",
    description: "ISPS Code landside protocols, quayside perimeter security, and SIA cargo terminal guarding across UK maritime hubs.",
    images: ['/images/security-services.jpg'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "UK Maritime & Port Security: Where SIA Badge Holders Operate (2026 Guide)",
  "description": "An exhaustive guide detailing UK landside port security duties, ISPS Code compliance standards, cargo terminal access control, and SIA security officer deployment.",
  "image": "https://www.saintsservices.co.uk/images/security-services.jpg",
  "author": { 
    "@type": "Organization", 
    "name": "Saints Services Intelligence Desk",
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
  "datePublished": "2026-06-26",
  "dateModified": "2026-08-07",
  "mainEntityOfPage": "https://www.saintsservices.co.uk/blog/maritime-port-security-uk-guide"
};

export default function MaritimePortSecurityArticle() {
  const portSecurityPillars = [
    {
      title: "Gatehouse Access Control & Vehicle Screening",
      icon: Lock,
      description: "Managing primary entry points, verifying HGV drivers against automated booking lists, conducting physical cab and trailer inspections, and issuing visitor credentials."
    },
    {
      title: "Perimeter Integrity & CCTV Sweep Patrols",
      icon: Eye,
      description: "Executing continuous foot and mobile vehicle patrols along dockside boundaries, monitoring thermal CCTV feeds, and securing restricted ISPS zones."
    },
    {
      title: "Cargo Seal Verification & Loss Prevention",
      icon: FileSpreadsheet,
      description: "Logging container bolt seal integrity numbers upon gate arrival and departure to eliminate cargo tampering, contraband stowage, and high-value freight theft."
    },
    {
      title: "Passenger Terminal & Luggage Screening",
      icon: ShieldAlert,
      description: "Operating metal detection arches, X-ray baggage scanners, and passenger verification lanes across UK ferry and cruise terminal facilities."
    },
    {
      title: "PFSO Support & Emergency Incident Liaison",
      icon: Radio,
      description: "Acting as immediate operational respondents during MARSEC threat level escalations, assisting Port Facility Security Officers (PFSOs), and liaising with Police and Maritime Agencies."
    }
  ];

  return (
    <article className="min-h-screen bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-white py-12 sm:py-20 font-sans relative overflow-hidden select-none transition-colors duration-300">
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
          <span className="text-[#f59e0b] truncate">Maritime Port Security Guide</span>
        </nav>

        {/* HEADER SECTION */}
        <header className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm transition-colors">
            <Anchor className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>PORT // LANDSIDE_SECURITY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
            UK Maritime &amp; Port Security: Where SIA Badge Holders Operate (2026 Guide)
          </h1>

          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
            An in-depth analysis of landside security duties across UK commercial ports, cargo terminals, and passenger docks. Learn how SIA-licensed security guards uphold the International Ship and Port Facility Security (ISPS) Code.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#f59e0b]" />
              <span className="text-slate-800 dark:text-slate-200 font-bold">Saints Services Intelligence Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span>June 26, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span>9 min read</span>
            </div>
          </div>
        </header>

        {/* FEATURED HERO IMAGE */}
        <div className="relative h-[320px] sm:h-[460px] rounded-sm overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl mb-12 bg-slate-900 transition-colors">
          <Image 
            src="/images/security-services.jpg" 
            alt="SIA Security Officer Patrols Commercial Port and Cargo Terminal Facility" 
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
            <span>Contents // Operational Topics</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
            <li><a href="#maritime-landscape" className="hover:text-[#f59e0b] transition-colors">1. The UK Maritime Security Regulatory Landscape</a></li>
            <li><a href="#isps-code" className="hover:text-[#f59e0b] transition-colors">2. The ISPS Code &amp; Landside Guarding Jurisdiction</a></li>
            <li><a href="#core-duties" className="hover:text-[#f59e0b] transition-colors">3. 5 Core Security Guard Responsibilities at Port Terminals</a></li>
            <li><a href="#marsec-levels" className="hover:text-[#f59e0b] transition-colors">4. Responding to MARSEC Threat Level Escalations</a></li>
            <li><a href="#cargo-theft" className="hover:text-[#f59e0b] transition-colors">5. Combating Cargo Shrinkage &amp; Illegal Entry Attempts</a></li>
            <li><a href="#procuring-guards" className="hover:text-[#f59e0b] transition-colors">6. Procuring SIA BS7858 Vetted Maritime Security Staff</a></li>
            <li><a href="#faq-section" className="hover:text-[#f59e0b] transition-colors">7. Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* MAIN EDITORIAL CONTENT */}
        <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal transition-colors">
          
          <p className="text-lg font-medium text-slate-800 dark:text-slate-200 border-l-2 border-[#f59e0b] pl-4 leading-relaxed transition-colors">
            Over 95% of the UK&apos;s international trade passes through its maritime ports. Securing landside cargo hubs, passenger ferries, and container terminals requires rigorous access control and specialized SIA-licensed guarding.
          </p>

          {/* SECTION 1 */}
          <section id="maritime-landscape" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <Ship className="w-5 h-5 text-[#f59e0b]" />
              1. The UK Maritime Security Regulatory Landscape
            </h2>
            <p>
              UK commercial ports, container terminals, and passenger ferry docks operate under stringent national and international regulatory frameworks. While armed anti-piracy operators handle vessel security in international waters, all <strong>landside port security within the UK jurisdiction</strong> falls under the regulation of the <strong>Security Industry Authority (SIA)</strong> and the Department for Transport (DfT).
            </p>
            <p>
              From major freight gateways like Felixstowe, Southampton, and London Gateway to regional ferry terminals, SIA-licensed manned guarding officers form the frontline defense protecting supply chains against unauthorized access, high-value theft, contraband smuggling, and malicious disruption.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="isps-code" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <Compass className="w-5 h-5 text-[#f59e0b]" />
              2. The ISPS Code &amp; Landside Guarding Jurisdiction
            </h2>
            <p>
              Following international maritime safety mandates, all UK port facilities serving international trade must adhere to the <strong>International Ship and Port Facility Security (ISPS) Code</strong>. 
            </p>
            <p>
              Under the ISPS Code, each port maintains an official Port Facility Security Plan (PFSP) directed by a designated <strong>Port Facility Security Officer (PFSO)</strong>. SIA-licensed security guards deployed on site act as the primary operational personnel executing the PFSP:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                <div className="text-xl font-black font-mono text-[#f59e0b]">MARSEC 1</div>
                <div className="text-xs font-bold text-slate-800 dark:text-white mt-1 uppercase">Baseline Level</div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Minimum routine protective security measures maintained at all times.</p>
              </div>
              <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                <div className="text-xl font-black font-mono text-[#f59e0b]">MARSEC 2</div>
                <div className="text-xs font-bold text-slate-800 dark:text-white mt-1 uppercase">Heightened Threat</div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Additional protective measures deployed due to increased risk of an incident.</p>
              </div>
              <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                <div className="text-xl font-black font-mono text-[#f59e0b]">MARSEC 3</div>
                <div className="text-xs font-bold text-slate-800 dark:text-white mt-1 uppercase">Exceptional Threat</div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Specific, probable threat requiring total lockdown and intensive searches.</p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="core-duties" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <Award className="w-5 h-5 text-[#f59e0b]" />
              3. 5 Core Security Guard Responsibilities at Port Terminals
            </h2>
            <p>
              Manned guarding personnel stationed at maritime logistics centers perform multi-layered operational tasks:
            </p>

            <div className="space-y-4 my-6">
              {portSecurityPillars.map((pillar, idx) => {
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
                <span>Maritime &amp; Logistics Protection</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Operating a Port or Cargo Terminal?</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-lg transition-colors">
                Saints Services Ltd supplies BS7858 vetted SIA security officers, gatehouse controllers, and mobile patrol units specialized in port facility security.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Request Port Security Quote</span>
              <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
            </Link>
          </div>

          {/* SECTION 4 */}
          <section id="marsec-levels" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 transition-colors">
              4. Responding to MARSEC Threat Level Escalations
            </h2>
            <p>
              When the Department for Transport or national intelligence authorities escalate a port’s Maritime Security (MARSEC) level, security personnel must quickly execute heightened access protocols.
            </p>
            <p>
              During <strong>MARSEC Level 2</strong> or <strong>3</strong>, SIA officers increase vehicle search percentages, restrict visitor access to sensitive berth areas, institute 100% ID verification, and coordinate with UK Border Force, Port of London Authority (PLA) police, or local police units to secure vulnerable quayside perimeters.
            </p>
          </section>

          {/* SECTION 5 */}
          <section id="cargo-theft" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 transition-colors">
              5. Combating Cargo Shrinkage &amp; Illegal Entry Attempts
            </h2>
            <p>
              Commercial shipping terminals handle billions of pounds in high-value electronics, luxury vehicles, alcohol, and pharmaceutical inventory. Without active gate control and physical security sweeps, container yards face risks from organized theft networks.
            </p>
            <p>
              Furthermore, UK cross-Channel ferry docks require constant vigilance to prevent illegal stowaways from entering freight vehicles prior to embarkation. SIA officers perform thorough thermal imaging, CO2 probe testing, and physical trailer checks to safeguard logistics operators against severe penalties.
            </p>
          </section>

          {/* SECTION 6 */}
          <section id="procuring-guards" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <Building2 className="w-5 h-5 text-[#f59e0b]" />
              6. Procuring SIA BS7858 Vetted Maritime Security Staff
            </h2>
            <p>
              Due to the sensitive nature of port infrastructure, all security officers deployed to maritime sites must undergo rigorous background screening.
            </p>
            <p>
              Partnering with an SIA-licensed security provider ensures that officers are cleared to <strong>BS7858 screening standards</strong>, holding valid 5-year employment verification, enhanced DBS criminal history clearance, and specialized training in gatehouse management and emergency response.
            </p>
            <p>
              Explore our wider commercial protection capabilities including <Link href="/services/security-guards" className="text-[#f59e0b] hover:underline font-bold">manned guarding</Link> and <Link href="/services/keyholding" className="text-[#f59e0b] hover:underline font-bold">24/7 keyholding &amp; mobile patrols</Link>.
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
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">Do UK port security guards require an SIA license?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  Yes. All security personnel performing landside guarding, gatehouse access control, cargo inspection, and passenger screening at UK commercial ports must hold valid SIA Security Guarding or Door Supervision licenses.
                </p>
              </div>
              <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What is the ISPS Code in UK maritime security?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  The International Ship and Port Facility Security (ISPS) Code is a comprehensive set of measures to enhance the security of ships and port facilities, establishing mandatory threat level protocols (MARSEC 1, 2, and 3).
                </p>
              </div>
              <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">How do security guards prevent cargo theft at port terminals?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  Security officers verify container bolt seals upon gate entry/exit, conduct randomized quayside patrols, operate gatehouse access barriers, and monitor perimeter CCTV systems.
                </p>
              </div>
            </div>
          </section>

          {/* EXTERNAL SOURCES CITATION */}
          <div className="p-5 rounded-sm bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-2 transition-colors">
            <div className="font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Verified Industry &amp; Regulatory Sources:</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>Department for Transport (DfT): <em>Maritime Security &amp; ISPS Code Guidance</em></li>
              <li>International Maritime Organization (IMO): <em>ISPS Code Regulations</em></li>
              <li>Security Industry Authority (SIA): <em>Private Security Industry Act 2001 Standards</em></li>
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
            Published by <span className="text-slate-900 dark:text-white font-bold">Saints Services Intelligence Desk</span>
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
  );
}