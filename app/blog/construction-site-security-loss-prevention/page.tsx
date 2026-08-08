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
  AlertTriangle,
  Building2,
  Lock,
  ShieldAlert,
  BarChart3,
  Award,
  Truck,
  Eye,
  Radio,
  FileSpreadsheet,
  HardHat
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/* 
================================================================================
SEO & KEYWORD METADATA STRATEGY
================================================================================
Topic: Construction Site Security & Plant Theft Loss Prevention UK
Target Keywords: 
  - Construction site security guards UK
  - Plant and machinery theft prevention 2026
  - SIA gatehouse security officer construction
  - Construction site fuel theft deterrence
  - Building site loss prevention London
Secondary Keywords:
  - Wireless CCTV perimeter detection UK
  - Contractor RAMS verification gatehouse
  - Out of hours construction mobile patrol
  - Copper wire and tool theft prevention site
Target Audience: Project directors, main contractors, site managers, commercial quantity surveyors, and development heads across the UK.
Search Intent: Informational & Commercial Investigation (Preventing equipment theft, verifying contractor site access, and procuring BS7858 vetted SIA site security guards).
*/

export const metadata: Metadata = {
  title: "Construction Site Security: Plant & Tool Loss Prevention (2026 Guide)",
  description: "Exhaustive UK construction site security guide analyzing plant machinery theft, copper wire loss prevention, gatehouse access control, and SIA guarding.",
  keywords: [
    "Construction site security guards UK",
    "Plant and machinery theft prevention 2026",
    "SIA gatehouse security officer construction",
    "Construction site fuel theft deterrence",
    "Building site loss prevention London",
    "Wireless CCTV perimeter detection UK",
    "Out of hours construction mobile patrol"
  ],
  openGraph: {
    title: "Construction Site Security: Plant & Tool Loss Prevention | Saints Services Ltd",
    description: "In-depth breakdown of UK construction site threat vectors, plant theft deterrence, gatehouse access control, and SIA manned guarding solutions.",
    url: 'https://www.saintsservices.co.uk/blog/construction-site-security-loss-prevention',
    type: 'article',
    images: [{ url: '/images/why-us.png', width: 1200, height: 630, alt: 'SIA Construction Site Security Guard Stationed at Gatehouse' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Construction Site Security: Plant & Tool Loss Prevention (2026 Guide)",
    description: "Plant machinery security, gatehouse contractor management, and wireless perimeter detection for UK construction sites.",
    images: ['/images/why-us.png'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Construction Site Security: Preventing Tool, Plant & Fuel Theft in 2026",
  "description": "An exhaustive guide detailing UK construction crime statistics, gatehouse contractor screening, plant machinery asset protection, wireless perimeter detection, and SIA site guarding.",
  "image": "https://www.saintsservices.co.uk/images/why-us.png",
  "author": { 
    "@type": "Organization", 
    "name": "Saints Construction Security Group",
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
  "datePublished": "2026-04-18",
  "dateModified": "2026-08-07",
  "mainEntityOfPage": "https://www.saintsservices.co.uk/blog/construction-site-security-loss-prevention"
};

export default function ConstructionSiteSecurityArticle() {
  const constructionThreatVectors = [
    {
      title: "Gatehouse Access Control & Delivery Management",
      icon: Truck,
      description: "Managing primary site entry points, verifying sub-contractor RAMS documentation, checking delivery manifests against purchase orders, and issuing visitor PPE passes."
    },
    {
      title: "Heavy Plant & Machinery Asset Shielding",
      icon: HardHat,
      description: "Implementing key-custody controls, immobilizing excavators and telehandlers out-of-hours, and tracking CESAR/SMMT registration numbers to deter organized theft syndicates."
    },
    {
      title: "Out-of-Hours Foot Patrols & Perimeter Checks",
      icon: Eye,
      description: "Executing scheduled and randomized foot sweeps across boundary fencing, verifying scaffold tower locks, and checking tool store container deadbolts."
    },
    {
      title: "Red Diesel & Fuel Depot Safeguarding",
      icon: ShieldAlert,
      description: "Stationing dedicated visual checkpoints over central fuel bowsers and generator banks to eliminate nocturnal fuel siphoning."
    },
    {
      title: "Incident Auditing & Police Liaison",
      icon: FileSpreadsheet,
      description: "Maintaining time-stamped digital visitor logs, preserving CCTV evidence of trespass, and coordinating directly with police plant theft task forces."
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
            <span className="text-[#f59e0b] truncate">Construction Site Security</span>
          </nav>

          {/* HEADER SECTION */}
          <header className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm transition-colors">
              <HardHat className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>SITE // PLANT_LOSS_PREVENTION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
              Construction Site Security: Preventing Tool, Plant &amp; Fuel Theft in 2026
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
              A comprehensive operational guide on mitigating the £800M annual UK construction crime crisis. Learn how gatehouse access control, plant machinery immobilization, and SIA static guards safeguard development projects.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-slate-800 dark:text-slate-200 font-bold">Saints Construction Security Group</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>April 18, 2026</span>
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
              alt="SIA Security Officer Conducting Gatehouse Inspection at UK Construction Site" 
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
              <span>Contents // Site Loss Prevention</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#crime-crisis" className="hover:text-[#f59e0b] transition-colors">1. The £800M UK Construction Crime Landscape</a></li>
              <li><a href="#threat-vectors" className="hover:text-[#f59e0b] transition-colors">2. Primary Theft Targets: Plant, Cables &amp; Fuel</a></li>
              <li><a href="#core-duties" className="hover:text-[#f59e0b] transition-colors">3. 5 Core Operational Duties of Site Security Guards</a></li>
              <li><a href="#gatehouse-control" className="hover:text-[#f59e0b] transition-colors">4. Gatehouse Delivery Screening &amp; Contractor RAMS</a></li>
              <li><a href="#wireless-detection" className="hover:text-[#f59e0b] transition-colors">5. Wireless Perimeter Towers vs. Static Guarding</a></li>
              <li><a href="#procuring-guards" className="hover:text-[#f59e0b] transition-colors">6. Procuring BS7858 Vetted Construction Guarding</a></li>
              <li><a href="#faq-section" className="hover:text-[#f59e0b] transition-colors">7. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* MAIN EDITORIAL CONTENT */}
          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal transition-colors">
            
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 border-l-2 border-[#f59e0b] pl-4 leading-relaxed transition-colors">
              Construction sites are prime targets for organized criminal gangs. Unsecured building developments face severe financial losses, costly project delays, and crippling insurance premium increases.
            </p>

            {/* SECTION 1 */}
            <section id="crime-crisis" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
                1. The £800M UK Construction Crime Landscape
              </h2>
              <p>
                Industry audits published by the Chartered Institute of Building (CIOB) estimate that theft, vandalism, and arson cost the UK construction industry over <strong>£800 million per year</strong>. High-value plant machinery, power tools, copper cabling, and diesel fuel stores are continuously targeted by professional theft networks for rapid domestic and overseas resale.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">£800M+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Annual Losses</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">2,000+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Excavators Stolen</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">92%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Victim Frequency</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">£40k</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Avg Claim Value</div>
                </div>
              </div>

              <p>
                Beyond the replacement cost of stolen assets, plant theft triggers substantial secondary losses: extended project downtime, liquidated damages for late handover, hire-replacement costs, and heightened excess premiums. Deploying uniformed, SIA-licensed <Link href="/services/security-guards" className="text-[#f59e0b] hover:underline font-bold">construction security officers</Link> provides an immediate physical defense.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="threat-vectors" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Building2 className="w-5 h-5 text-[#f59e0b]" />
                2. Primary Theft Targets: Plant, Cables &amp; Fuel
              </h2>
              <p>
                Criminal syndicates operating across UK building sites focus on four core material categories:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Heavy Plant &amp; Machinery</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Mini-excavators, telehandlers, dumpers, and rollers loaded onto flatbed trailers out-of-hours.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Copper Cabling &amp; Raw Metals</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Stripped electrical wiring, lead flashings, and stored copper pipework extracted from partially completed structures.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Handheld Power Tools</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Cordless drills, saws, and laser levels stolen from contractor tool stores during evening site closures.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Red Diesel &amp; Generator Fuel</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Large-capacity fuel bowsers tapped overnight using portable electric transfer pumps.</p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="core-duties" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Award className="w-5 h-5 text-[#f59e0b]" />
                3. 5 Core Operational Duties of Site Security Guards
              </h2>
              <p>
                Active manned guarding on active developments involves continuous, multi-layered risk mitigation:
              </p>

              <div className="space-y-4 my-6">
                {constructionThreatVectors.map((duty, idx) => {
                  const IconComp = duty.icon;
                  return (
                    <div key={idx} className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 hover:border-[#f59e0b] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">{idx + 1}. {duty.title}</h3>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed pl-11 transition-colors">
                        {duty.description}
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
                  <span>Construction Site Protection Operations</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Need BS7858 Vetted Guarding for Your Development?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-lg transition-colors">
                  Saints Services Ltd provides SIA-licensed gatehouse officers, out-of-hours static guards, and rapid 2-hour emergency site deployments nationwide.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Request Site Security Quote</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
              </Link>
            </div>

            {/* SECTION 4 */}
            <section id="gatehouse-control" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 transition-colors">
                4. Gatehouse Delivery Screening &amp; Contractor RAMS
              </h2>
              <p>
                The primary site entrance is the single most critical security choke point. An SIA gatehouse officer controls all vehicle ingress and egress, ensuring that unauthorized vehicles cannot enter under the guise of delivery drivers.
              </p>
              <p>
                Gatehouse guards verify driver credentials against daily delivery schedules, log vehicle registration numbers, check Risk Assessment and Method Statements (RAMS) documentation for contractors, issue visitor site passes, and perform physical searches of outgoing vans to eliminate insider theft.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="wireless-detection" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Radio className="w-5 h-5 text-[#f59e0b]" />
                5. Wireless Perimeter Towers vs. Static Guarding
              </h2>
              <p>
                While standalone solar-powered CCTV towers offer basic perimeter monitoring, automated cameras cannot intervene physically during an active breach.
              </p>
              <p>
                Optimal site security combines electronic surveillance with a dedicated SIA static officer. While camera towers detect boundary incursions, the physical security guard provides an immediate on-site response—confronting trespassers, securing plant machinery, and managing police arrivals.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="procuring-guards" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Lock className="w-5 h-5 text-[#f59e0b]" />
                6. Procuring BS7858 Vetted Construction Guarding
              </h2>
              <p>
                Main contractors must verify that all security personnel deployed to site undergo compulsory <strong>BS7858 screening</strong>, which includes a 5-year employment history check, DBS criminal background check, and financial vetting.
              </p>
              <p>
                To protect vacant commercial buildings or out-of-hours developments, explore our specialized <Link href="/services/keyholding" className="text-[#f59e0b] hover:underline font-bold">24/7 keyholding &amp; mobile alarm response</Link> and <Link href="/services/door-supervision" className="text-[#f59e0b] hover:underline font-bold">door supervision</Link> solutions.
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
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What credentials do construction site security guards require in the UK?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Construction security officers must hold a valid SIA Security Guarding or Door Supervision license, undergo BS7858 background vetting, and typically hold CSCS (Construction Skills Certification Scheme) cards for site access.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">How do security guards prevent fuel theft on building sites?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Security guards conduct regular out-of-hours patrols around fuel bowsers, log all fuel dispenser usage during shifts, inspect tank anti-siphon locks, and monitor perimeter boundaries for unauthorized vehicle access.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">How quickly can Saints Services Ltd deploy guards to a construction site?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Our 24/7 control room provides emergency deployment, placing SIA-licensed security officers on-site across London and nationwide within 2 hours of dispatch.
                  </p>
                </div>
              </div>
            </section>

            {/* EXTERNAL SOURCES CITATION */}
            <div className="p-5 rounded-sm bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-2 transition-colors">
              <div className="font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Verified Industry Sources:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>Chartered Institute of Building (CIOB): <em>Crime in the Construction Industry Report</em></li>
                <li>Plant Theft Scheme (CESAR): <em>Official UK Plant Security Statistics</em></li>
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
                href="/blog/sia-security-guard-responsibilities" 
                className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
              >
                <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">COMPLIANCE</div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  Security Guard Roles and Responsibilities: A Guide to Modern Guarding
                </h4>
              </Link>

              <Link 
                href="/blog/london-crime-rates-by-borough-2026" 
                className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
              >
                <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">MANNED GUARDING</div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  Most Dangerous Areas in London: Crime Rates by Borough
                </h4>
              </Link>
            </div>
          </div>

          {/* AUTHOR & FOOTER NAVIGATION */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Published by <span className="text-slate-900 dark:text-white font-bold">Saints Services Construction Security Group</span>
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