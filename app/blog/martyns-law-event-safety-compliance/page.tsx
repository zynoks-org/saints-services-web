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
  Gavel,
  ClipboardCheck,
  FileSpreadsheet,
  Users
} from 'lucide-react';

/* 
================================================================================
SEO & KEYWORD METADATA STRATEGY
================================================================================
Topic: Martyn's Law UK Event Safety Planning & Terrorism Protection Compliance
Target Keywords: 
  - Martyns Law UK compliance guide 2026
  - Terrorism Protection of Premises Act 2025
  - Martyns Law standard vs enhanced tier
  - SIA counter terrorism event security
  - Event safety planning counter terrorism UK
Secondary Keywords:
  - SIA regulator Martyns Law inspections
  - Evacuation invacuation lockdown protocols UK
  - Action Counters Terrorism ACT training event staff
  - High capacity venue security compliance UK
Target Audience: Venue operators, event organizers, stadium directors, local authority licensing leads, and commercial estate managers across the UK.
Search Intent: Informational & Commercial Investigation (Understanding statutory counter-terrorism duties, SIA regulatory enforcement, and procuring compliant event security).
*/

export const metadata: Metadata = {
  title: "Martyn's Law & Event Safety Planning: 2026 UK Compliance Guide",
  description: "Exhaustive guide to Martyn's Law (Terrorism Protection of Premises Act), Standard & Enhanced Tier requirements, SIA enforcement, and event safety protocols.",
  keywords: [
    "Martyns Law UK compliance guide 2026",
    "Terrorism Protection of Premises Act 2025",
    "Martyns Law standard vs enhanced tier",
    "SIA counter terrorism event security",
    "Event safety planning counter terrorism UK",
    "Evacuation invacuation lockdown protocols UK",
    "Action Counters Terrorism ACT training event staff"
  ],
  openGraph: {
    title: "Martyn's Law & Event Safety Planning: 2026 UK Compliance Guide | Saints Services Ltd",
    description: "In-depth operational guide on Martyn's Law compliance for UK venues, risk assessment duties, SIA regulatory oversight, and event security strategies.",
    url: 'https://www.saintsservices.co.uk/blog/martyns-law-event-safety-compliance',
    type: 'article',
    images: [{ url: '/images/event-security.png', width: 1200, height: 630, alt: 'SIA Event Security Officers Managing Counter-Terrorism Protocols' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Martyn's Law & Event Safety Planning: 2026 UK Compliance Guide",
    description: "Terrorism (Protection of Premises) Act breakdown, capacity tiers, SIA compliance, and emergency event safety planning across the UK.",
    images: ['/images/event-security.png'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Martyn’s Law & Event Safety Planning: UK Regulatory Compliance Guide (2026)",
  "description": "An exhaustive operational guide analyzing the Terrorism (Protection of Premises) Act, Standard and Enhanced tier venue duties, SIA regulatory enforcement, and event safety protocols.",
  "image": "https://www.saintsservices.co.uk/images/event-security.png",
  "author": { 
    "@type": "Organization", 
    "name": "Saints Event Compliance Directorate",
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
  "datePublished": "2026-05-02",
  "dateModified": "2026-08-07",
  "mainEntityOfPage": "https://www.saintsservices.co.uk/blog/martyns-law-event-safety-compliance"
};

export default function MartynsLawArticle() {
  const compliancePillars = [
    {
      title: "Capacity Assessment & Tier Categorization",
      icon: Users,
      description: "Evaluating maximum venue capacities (including staff and visitors) to establish statutory obligations under either the Standard Tier (200–799 capacity) or Enhanced Tier (800+ capacity)."
    },
    {
      title: "Procedural Emergency Protocols (Guide, Shelter, Communicate)",
      icon: ShieldAlert,
      description: "Developing structured, rehearsed operational plans for rapid public Evacuation, internal safe-room Invacuation, total perimeter Lockdown, and emergency public announcements."
    },
    {
      title: "Mandatory Staff ACT Counter-Terrorism Training",
      icon: ClipboardCheck,
      description: "Ensuring all on-duty managers, venue staff, and SIA door supervisors complete official Action Counters Terrorism (ACT) e-learning modules prior to event execution."
    },
    {
      title: "Enhanced Physical Vulnerability Assessments",
      icon: FileSpreadsheet,
      description: "For 800+ capacity venues, executing documented risk evaluations that integrate entry search arches, bag check protocols, CCTV monitoring, and vehicle barrier checks."
    },
    {
      title: "SIA Regulatory Inspection Readiness",
      icon: Gavel,
      description: "Maintaining up-to-date documentation for Security Industry Authority (SIA) audits to prevent compliance notices, event restrictions, or severe financial penalties."
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
          <span className="text-[#f59e0b] truncate">Martyn&apos;s Law Event Compliance</span>
        </nav>

        {/* HEADER SECTION */}
        <header className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm transition-colors">
            <Shield className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>LEGAL // MARTYNS_LAW_COMPLIANCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
            Martyn’s Law &amp; Event Safety Planning: UK Regulatory Compliance Guide
          </h1>

          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
            An operational breakdown of the Terrorism (Protection of Premises) Act. Learn how venue managers and event organizers must prepare for capacity tiers, SIA inspections, staff counter-terrorism training, and emergency response protocols.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#f59e0b]" />
              <span className="text-slate-800 dark:text-slate-200 font-bold">Saints Event Compliance Directorate</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span>May 02, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span>11 min read</span>
            </div>
          </div>
        </header>

        {/* FEATURED HERO IMAGE */}
        <div className="relative h-[320px] sm:h-[460px] rounded-sm overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl mb-12 bg-slate-900 transition-colors">
          <Image 
            src="/images/event-security.png" 
            alt="SIA Event Security Officers Implementing Martyn's Law Safety Protocols" 
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
            <span>Contents // Statutory Requirements</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
            <li><a href="#act-overview" className="hover:text-[#f59e0b] transition-colors">1. Overview of the Terrorism (Protection of Premises) Act</a></li>
            <li><a href="#capacity-tiers" className="hover:text-[#f59e0b] transition-colors">2. Standard Tier vs. Enhanced Tier Breakdown</a></li>
            <li><a href="#core-pillars" className="hover:text-[#f59e0b] transition-colors">3. 5 Pillars of Venue Security Compliance</a></li>
            <li><a href="#procedural-planning" className="hover:text-[#f59e0b] transition-colors">4. Executing Evacuation, Invacuation &amp; Lockdown</a></li>
            <li><a href="#sia-regulation" className="hover:text-[#f59e0b] transition-colors">5. SIA Regulatory Oversight &amp; Sanctions</a></li>
            <li><a href="#sia-guarding-role" className="hover:text-[#f59e0b] transition-colors">6. Deploying SIA Event Security Officers</a></li>
            <li><a href="#faq-section" className="hover:text-[#f59e0b] transition-colors">7. Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* MAIN EDITORIAL CONTENT */}
        <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal transition-colors">
          
          <p className="text-lg font-medium text-slate-800 dark:text-slate-200 border-l-2 border-[#f59e0b] pl-4 leading-relaxed transition-colors">
            Martyn’s Law represents the most significant statutory change to UK event safety and public venue management in a generation. Venue operators must transition from voluntary guidance to enforceable counter-terrorism readiness.
          </p>

          {/* SECTION 1 */}
          <section id="act-overview" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <Gavel className="w-5 h-5 text-[#f59e0b]" />
              1. Overview of the Terrorism (Protection of Premises) Act
            </h2>
            <p>
              Enacted following years of dedicated campaigning by Figen Murray—mother of Martyn Hett, who tragically lost his life in the 2017 Manchester Arena attack—the <strong>Terrorism (Protection of Premises) Act</strong> legally mandates that public venue operators take active steps to mitigate terrorist risks.
            </p>
            <p>
              The legislation applies across England, Wales, Scotland, and Northern Ireland, targeting premises used for retail, hospitality, entertainment, education, sports, and public gatherings. Designed to ensure venues are prepared to act swiftly during emergency incidents, the law places statutory accountability directly onto designated responsible persons.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="capacity-tiers" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <Building2 className="w-5 h-5 text-[#f59e0b]" />
              2. Standard Tier vs. Enhanced Tier Breakdown
            </h2>
            <p>
              The Act divides qualifying premises and regulated public events into two distinct statutory tiers based on maximum spectator or visitor capacity:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#f59e0b]/10 text-[#f59e0b] font-mono text-xs font-bold uppercase">
                  Capacity: 200 – 799 People
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Standard Duty Tier</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
                  Focuses on low-cost procedural preparedness. Operators must register with the SIA regulator, establish clear evacuation/lockdown plans, and ensure staff undergo basic counter-terrorism awareness briefing. Physical security alterations are not mandatory.
                </p>
              </div>

              <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#f59e0b]/10 text-[#f59e0b] font-mono text-xs font-bold uppercase">
                  Capacity: 800+ People
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Enhanced Duty Tier</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
                  Applies to major stadiums, arenas, festivals, and large venues. Operators must execute comprehensive risk evaluations, deploy physical mitigation (e.g., SIA turnstile searching, CCTV, vehicle barriers), and appoint a designated compliance director.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="core-pillars" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <Award className="w-5 h-5 text-[#f59e0b]" />
              3. 5 Pillars of Venue Security Compliance
            </h2>
            <p>
              To maintain audit compliance, event organizers and premises controllers must embed five fundamental operational pillars into daily operations:
            </p>

            <div className="space-y-4 my-6">
              {compliancePillars.map((pillar, idx) => {
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
                <span>Martyn&apos;s Law Event Guarding Solutions</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Planning a High-Capacity Event?</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-lg transition-colors">
                Saints Services Ltd provides SIA door supervisors, turnstile search teams, and counter-terrorism crowd stewards fully aligned with Martyn&apos;s Law compliance.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Request Event Security Quote</span>
              <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
            </Link>
          </div>

          {/* SECTION 4 */}
          <section id="procedural-planning" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 transition-colors">
              4. Executing Evacuation, Invacuation &amp; Lockdown
            </h2>
            <p>
              Central to statutory compliance is establishing documented, practiced protocols based on the National Counter Terrorism Security Office (NaCTSO) guidelines:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
              <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Evacuation</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">Directing crowds swiftly away from external or internal threats using designated primary and secondary emergency exits.</p>
              </div>
              <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Invacuation</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">Moving crowds into protected internal zones when external hazards make exiting onto public streets dangerous.</p>
              </div>
              <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Lockdown</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">Securing physical perimeter doors, shutter systems, and access gates to prevent hostile entry into crowded concourses.</p>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="sia-regulation" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
              5. SIA Regulatory Oversight &amp; Sanctions
            </h2>
            <p>
              The government has officially appointed the <strong>Security Industry Authority (SIA)</strong> as the regulatory body responsible for inspecting venues and enforcing compliance.
            </p>
            <p>
              The SIA holds statutory powers to inspect premises, issue binding improvement notices, restrict event operations, and impose significant civil financial penalties—up to <strong>£18 million or 5% of global turnover</strong> for major Enhanced Tier infractions.
            </p>
          </section>

          {/* SECTION 6 */}
          <section id="sia-guarding-role" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
              <Lock className="w-5 h-5 text-[#f59e0b]" />
              6. Deploying SIA Event Security Officers
            </h2>
            <p>
              While venue managers hold legal responsibility, deploying qualified <Link href="/services/event-security" className="text-[#f59e0b] hover:underline font-bold">event security teams</Link> fulfills critical physical requirements.
            </p>
            <p>
              SIA-licensed officers execute archway metal detection, search bag entry lanes, monitor CCTV feeds, and lead crowd evacuation maneuvers during emergency alerts.
            </p>
            <p>
              Explore our wider event and venue security capabilities including <Link href="/services/door-supervision" className="text-[#f59e0b] hover:underline font-bold">door supervision</Link> and <Link href="/services/security-guards" className="text-[#f59e0b] hover:underline font-bold">manned guarding</Link>.
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
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">Who enforces Martyn&apos;s Law compliance in the UK?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  The Security Industry Authority (SIA) has been designated as the statutory regulator responsible for inspecting venues, issuing compliance notices, and levying financial penalties.
                </p>
              </div>
              <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What capacity threshold triggers Enhanced Tier obligations?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  Premises and regulated public events with a maximum capacity of 800 or more people fall under the Enhanced Tier, requiring detailed risk assessments and physical counter-terrorism measures.
                </p>
              </div>
              <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">Are venue staff required to complete counter-terrorism training?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  Yes. Staff and security personnel operating at qualifying premises must complete recognized counter-terrorism awareness training, such as the official Action Counters Terrorism (ACT) e-learning program.
                </p>
              </div>
            </div>
          </section>

          {/* EXTERNAL SOURCES CITATION */}
          <div className="p-5 rounded-sm bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-2 transition-colors">
            <div className="font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Verified Legislation &amp; Regulatory Sources:</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>UK Parliament: <em>Terrorism (Protection of Premises) Act 2025/2026 Statutory Text</em></li>
              <li>Home Office &amp; ProtectUK: <em>Martyn&apos;s Law Guidance &amp; Factsheets</em></li>
              <li>Security Industry Authority (SIA): <em>Regulatory Role &amp; Inspection Framework</em></li>
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
              href="/blog/uk-stadium-security-disorder-guide" 
              className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
            >
              <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">EVENT SECURITY</div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                UK&apos;s Most Dangerous Football Stadiums: Arrest &amp; Disorder Data Guide
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
            Published by <span className="text-slate-900 dark:text-white font-bold">Saints Services Event Compliance Directorate</span>
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