import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ShareButtons } from '@/components/ShareButtons';
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
  Building2,
  ShieldAlert,
  BarChart3,
  Award,
  Gavel,
  ClipboardCheck,
  UserCheck,
  Eye,
  Radio,
  FileSpreadsheet
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/* 
================================================================================
SEO & KEYWORD METADATA STRATEGY
================================================================================
Topic: SIA Security Guard Roles & Responsibilities: 2026 Operational Guide
Target Keywords: 
  - SIA security guard responsibilities UK
  - BS7858 vetted security guards
  - Commercial security guard duties
  - SIA licensed security guard requirements
  - Manned guarding compliance UK
  - Security guard access control protocols
  - Site security officer duties and responsibilities
Secondary Keywords:
  - SIA Private Security Industry Act 2001
  - BS7858 security screening vetting standard
  - PACE Act 1984 citizen arrest security guards
  - NFC checkpoint patrol logging systems
Target Audience: Commercial property managers, facility heads, corporate security directors, and estate operations leads across the UK.
Search Intent: Informational & Commercial Investigation (Understanding UK security guard duties, BS7858 vetting compliance, legal powers under PACE, and procuring SIA guarding).
*/

export const metadata: Metadata = {
  title: "SIA Security Guard Roles & Responsibilities: 2026 Operational Guide",
  description: "Comprehensive guide to UK security guard duties, BS7858 vetting standards, SIA compliance requirements, access control, and emergency incident protocols.",
  keywords: [
    "SIA security guard responsibilities UK",
    "BS7858 vetted security guards",
    "Commercial security guard duties",
    "SIA licensed security guard requirements",
    "Manned guarding compliance UK",
    "Security guard access control protocols",
    "Site security officer duties and responsibilities"
  ],
  openGraph: {
    title: "SIA Security Guard Roles & Responsibilities: 2026 Operational Guide | Saints Services Ltd",
    description: "In-depth operational breakdown of SIA manned guarding standards, BS7858 vetting procedures, real-time patrol logging, and incident response duties across UK sites.",
    url: 'https://www.saintsservices.co.uk/blog/sia-security-guard-responsibilities',
    type: 'article',
    images: [{ url: 'https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png', width: 1200, height: 630, alt: 'BS7858 SIA Licensed Security Officer on Duty' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SIA Security Guard Roles & Responsibilities: 2026 Operational Guide",
    description: "BS7858 vetting, SIA compliance, emergency response, and access control protocols for UK security personnel.",
    images: ['https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "SIA Security Guard Roles and Responsibilities: The 2026 Operational Compliance Guide",
  "description": "An exhaustive guide detailing the legal duties, BS7858 screening standards, emergency response protocols, and physical access control responsibilities of SIA security guards in the UK.",
  "image": "https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png",
  "author": { 
    "@type": "Organization", 
    "name": "Saints Compliance Directorate",
    "url": "https://www.saintsservices.co.uk"
  },
  "publisher": { 
    "@type": "Organization", 
    "name": "Saints Services Ltd",
    "logo": {
      "@type": "ImageObject",
      "url": "https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png"
    }
  },
  "datePublished": "2026-07-10",
  "dateModified": "2026-08-07",
  "mainEntityOfPage": "https://www.saintsservices.co.uk/blog/sia-security-guard-responsibilities"
};

export default function SecurityGuardResponsibilitiesArticle() {
  const coreDuties = [
    {
      title: "Perimeter Patrols & Lock-Up Verification",
      icon: Eye,
      description: "Executing scheduled and randomized foot patrols across site boundaries, verifying that fire doors, window latches, and perimeter gates are physically secured."
    },
    {
      title: "Visitor Screening & Access Control",
      icon: UserCheck,
      description: "Operating badging turnstiles, verifying contractor RAMS documentation, issuing visitor badges, and restricting unauthorized entry to sensitive zones."
    },
    {
      title: "Real-Time GPS Checkpoint Logging",
      icon: Radio,
      description: "Utilizing mobile NFC checkpoint scanners to log patrol completion timestamps, providing facility managers with transparent digital audit trails."
    },
    {
      title: "Emergency Evacuation & First Response",
      icon: ShieldAlert,
      description: "Acting as primary fire marshals and first-aid respondents during emergency alarms, directing safe building evacuations and guiding emergency services."
    },
    {
      title: "Incident Documentation & Police Liaison",
      icon: FileSpreadsheet,
      description: "Maintaining legally compliant, time-stamped incident logbooks and preserving evidence-grade CCTV footage for police investigations under UK law."
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
            <span className="text-[#f59e0b] truncate">SIA Guard Responsibilities</span>
          </nav>

          {/* HEADER SECTION */}
          <header className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm transition-colors">
              <Shield className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>SEC // BS7858_COMPLIANCE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
              Security Guard Roles and Responsibilities: The 2026 Operational Guide
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
              A comprehensive breakdown of SIA security guard duties in the UK, evaluating BS7858 vetting standards, physical access control, real-time GPS patrol logging, and legal emergency protocols.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-slate-800 dark:text-slate-200 font-bold">Saints Compliance Directorate</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>July 10, 2026</span>
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
              src="https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png" 
              alt="SIA Licensed Security Guard Performing Manned Guarding Inspection"  
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent dark:from-[#040914] dark:via-transparent dark:to-transparent opacity-80" />
          </div>

          {/* QUICK NAVIGATION BOX */}
          <div className="p-6 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 mb-10 shadow-lg transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-3">
              <BarChart3 className="w-4 h-4" />
              <span>Contents // Compliance Topics</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#evolution-guarding" className="hover:text-[#f59e0b] transition-colors">1. The Evolution of Modern SIA Manned Guarding</a></li>
              <li><a href="#bs7858-standard" className="hover:text-[#f59e0b] transition-colors">2. BS7858 Vetting: The Statutory Gold Standard</a></li>
              <li><a href="#core-responsibilities" className="hover:text-[#f59e0b] transition-colors">3. 5 Core Operational Duties on Commercial Sites</a></li>
              <li><a href="#legal-powers" className="hover:text-[#f59e0b] transition-colors">4. Legal Powers &amp; Citizen&apos;s Arrest (PACE 1984)</a></li>
              <li><a href="#tech-integration" className="hover:text-[#f59e0b] transition-colors">5. Technology Integration: GPS Checkpoints &amp; Bodycams</a></li>
              <li><a href="#guard-vs-door-supervisor" className="hover:text-[#f59e0b] transition-colors">6. SIA Security Guard vs. Door Supervisor Differences</a></li>
              <li><a href="#faq-section" className="hover:text-[#f59e0b] transition-colors">7. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* MAIN EDITORIAL CONTENT */}
          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal transition-colors">
            
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 border-l-2 border-[#f59e0b] pl-4 leading-relaxed transition-colors">
              The role of a modern SIA-licensed security guard has transformed from a static physical presence into an active risk management, access control, and emergency compliance officer.
            </p>

            {/* SECTION 1 */}
            <section id="evolution-guarding" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Building2 className="w-5 h-5 text-[#f59e0b]" />
                1. The Evolution of Modern SIA Manned Guarding
              </h2>
              <p>
                In the modern UK business landscape, security personnel act as the primary frontline ambassadors for corporate estates, construction sites, and retail facilities. Governed by the <strong>Security Industry Authority (SIA)</strong> under the <em>Private Security Industry Act 2001</em>, licensed security guards provide statutory protection against unauthorized entry, arson, corporate espionage, asset theft, and workplace disorder.
              </p>
              <p>
                Rather than merely reacting to security breaches, professional <Link href="/services/security-guards" className="text-[#f59e0b] hover:underline font-bold">manned guarding teams</Link> execute proactive, intelligence-led risk mitigation strategies designed to protect lives, physical property, and business reputation.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="bs7858-standard" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <ClipboardCheck className="w-5 h-5 text-[#f59e0b]" />
                2. BS7858 Vetting: The Statutory Gold Standard
              </h2>
              <p>
                Before any security officer is legally cleared to represent a client on-site, they must undergo screening in accordance with <strong>BS7858</strong> (the British Standard code of practice for security screening of personnel).
              </p>
              
              <p>
                A fully BS7858-vetted security officer must pass six compulsory screening checks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">5-Year Employment History</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Unbroken 5-year career verification, including direct contact with former employers and character referees.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Enhanced DBS Background Check</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Disclosure and Barring Service criminal record check confirming zero unspent disqualifying convictions.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Financial &amp; Credit Check</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Public record review verifying insolvency history, CCJs, and credit standing to prevent bribery vulnerability.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Right to Work &amp; Identity Verification</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Biometric passport validation, Home Office visa verification, and primary proof of UK residence check.</p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="core-responsibilities" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Award className="w-5 h-5 text-[#f59e0b]" />
                3. 5 Core Operational Duties on Commercial Sites
              </h2>
              <p>
                While site specific assignment instructions (AIs) dictate daily operations, professional security officers perform five core operational duties:
              </p>

              <div className="space-y-4 my-6">
                {coreDuties.map((duty, idx) => {
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
                  <span>Commercial Security Operations</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Need BS7858 Vetted Guarding for Your Site?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-lg transition-colors">
                  Saints Services Ltd provides SIA-licensed security officers, static guards, and rapid 2-hour emergency site deployments nationwide.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Request Guarding Quote</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
              </Link>
            </div>

            {/* SECTION 4 */}
            <section id="legal-powers" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Gavel className="w-5 h-5 text-[#f59e0b]" />
                4. Legal Powers &amp; Citizen&apos;s Arrest (PACE 1984)
              </h2>
              <p>
                Contrary to popular misconception, security guards in England and Wales do not possess special police powers. Instead, their legal authority derives from common law property rights and statutory citizen powers under <strong>Section 24A of the Police and Criminal Evidence Act 1984 (PACE)</strong>.
              </p>
              
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span><strong>Right to Deny Entry:</strong> As authorized agents of the property owner, security guards have the legal right to refuse entry or demand trespassers leave private land immediately.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span><strong>Section 24A PACE Detention:</strong> Guards may perform a lawful Citizen&apos;s Arrest if an indictable offence (e.g., criminal damage, burglary, physical assault) is actively observed and calling police immediately is impractical.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span><strong>Proportional Force (Section 3 CLA 1967):</strong> Any physical restraint applied during a lawful detention must be strictly reasonable, necessary, and non-excessive.</span>
                </li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section id="tech-integration" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Radio className="w-5 h-5 text-[#f59e0b]" />
                5. Technology Integration: GPS Checkpoints &amp; Bodycams
              </h2>
              <p>
                Modern security guarding relies heavily on integrated technology. Today&apos;s security officers utilize mobile management platforms that log active site checks via Near-Field Communication (NFC) tags situated along perimeter fence lines and interior corridors.
              </p>
              <p>
                Furthermore, full-HD body-worn cameras provide transparent visual and audio recordings during incidents, mitigating false liability claims and ensuring evidence-grade documentation for police handovers.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="guard-vs-door-supervisor" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <UserCheck className="w-5 h-5 text-[#f59e0b]" />
                6. SIA Security Guard vs. Door Supervisor Differences
              </h2>
              <p>
                When specifying guarding requirements, property managers must select the appropriate SIA license category:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">SIA Security Guard License</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Authorized for static guarding, office reception desks, construction sites, and corporate premises where alcohol is <strong>not</strong> served for consumption on-site.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h4 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">SIA Door Supervisor License</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Covers all standard guarding duties PLUS licensed venues, events, pubs, clubs, and venues where alcohol is served. Includes mandatory physical intervention training.</p>
                </div>
              </div>
              
              <p>
                For licensed premises or crowded venues, explore our specialized <Link href="/services/door-supervision" className="text-[#f59e0b] hover:underline font-bold">door supervision</Link> and <Link href="/services/keyholding" className="text-[#f59e0b] hover:underline font-bold">keyholding &amp; alarm response</Link> solutions.
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
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What is BS7858 vetting for UK security guards?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    BS7858 is the official British Standard code of practice for security screening. It requires a mandatory 5-year employment history check, DBS criminal record check, address verification, and financial background check prior to site deployment.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">Can a security guard physically detain someone in the UK?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Yes, under Section 24A of the Police and Criminal Evidence Act 1984 (PACE), a security guard can perform a Citizen&apos;s Arrest if an indictable offence is observed and police attendance is required.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What is the difference between a security guard and a door supervisor?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    A Door Supervisor license allows an officer to work at licensed premises (where alcohol is served) and public events, and includes specialized physical intervention training. A standard Security Guard license is restricted to non-licensed premises like corporate offices and construction sites.
                  </p>
                </div>
              </div>
            </section>

            {/* Social Share Buttons Component */}
            <ShareButtons title="SIA Security Guard Roles & Responsibilities: 2026 Operational Guide" slug="sia-security-guard-responsibilities" />

            {/* EXTERNAL SOURCES CITATION */}
            <div className="p-5 rounded-sm bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-2 transition-colors">
              <div className="font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Verified Statutory &amp; Industry Sources:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>Security Industry Authority (SIA): <em>Private Security Industry Act 2001 Guidance</em></li>
                <li>British Standards Institution: <em>BS7858 Code of Practice for Security Screening</em></li>
                <li>UK Legislation: <em>Police and Criminal Evidence Act 1984 (Section 24A)</em></li>
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
                href="/blog/retail-loss-prevention-uk-guide" 
                className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
              >
                <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">RETAIL SECURITY</div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  Loss Prevention: Retail &amp; Asset Protection UK Guide
                </h4>
              </Link>
            </div>
          </div>

          {/* AUTHOR & FOOTER NAVIGATION */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Published by <span className="text-slate-900 dark:text-white font-bold">Saints Services Compliance Directorate</span>
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