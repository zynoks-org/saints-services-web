import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ShareButtons } from '@/components/ShareButtons';
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
  UserCheck,
  Radio,
  Compass,
  Car
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/* 
================================================================================
SEO & KEYWORD METADATA STRATEGY
================================================================================
Topic: Close Protection UK: Threat Dynamics, HNWIs & Executive Protection
Target Keywords: 
  - Close protection services UK 2026
  - SIA close protection officer London
  - Executive protection HNWIs UK
  - VIP bodyguard security operations London
  - Threat assessment close protection UK
Secondary Keywords:
  - Advance security reconnaissance CP officers
  - High net worth individual personal security
  - Royal and diplomatic protection protocols UK
  - Secure executive transit and convoy escort
Target Audience: Family office directors, high-net-worth individuals (HNWIs), corporate executives, legal representatives, and celebrity management teams across London and the UK.
Search Intent: Informational & Commercial Investigation (Understanding close protection methodologies, threat dynamics, SIA CP licensing, and hiring executive bodyguards).
*/

export const metadata: Metadata = {
  title: "Close Protection UK: Threat Dynamics & Executive Protection Guide (2026)",
  description: "Comprehensive 2026 operational guide to SIA close protection in the UK, threat assessment dynamics, advance reconnaissance, and HNWI executive guarding.",
  keywords: [
    "Close protection services UK 2026",
    "SIA close protection officer London",
    "Executive protection HNWIs UK",
    "VIP bodyguard security operations London",
    "Threat assessment close protection UK",
    "Advance security reconnaissance CP officers",
    "High net worth individual personal security"
  ],
  openGraph: {
    title: "Close Protection UK: Threat Dynamics & Executive Protection Guide | Saints Services Ltd",
    description: "In-depth operational breakdown of SIA close protection standards, VIP threat profiling, advance security planning, and secure executive transport across London.",
    url: 'https://www.saintsservices.co.uk/blog/close-protection-threat-dynamics-uk',
    type: 'article',
    images: [{ url: 'https://i.ibb.co/MDvfwBjF/close-protection-threat-dynamics-uk.jpg', width: 1200, height: 630, alt: 'SIA Licensed Close Protection Officer on Duty in London' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Close Protection UK: Threat Dynamics & Executive Protection Guide",
    description: "SIA close protection standards, HNWI threat assessment, and executive security escort protocols across Greater London.",
    images: ['https://i.ibb.co/MDvfwBjF/close-protection-threat-dynamics-uk.jpg'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Close Protection: Threat Dynamics, HNWIs & VIP Guarding Solutions (2026 Guide)",
  "description": "An exhaustive guide detailing UK close protection protocols, threat matrix evaluations, advance route reconnaissance, and SIA executive security operations.",
  "image": "https://i.ibb.co/MDvfwBjF/close-protection-threat-dynamics-uk.jpg",
  "author": { 
    "@type": "Organization", 
    "name": "Saints Services Close Protection Unit",
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
  "datePublished": "2026-05-14",
  "dateModified": "2026-08-07",
  "mainEntityOfPage": "https://www.saintsservices.co.uk/blog/close-protection-threat-dynamics-uk"
};

export default function CloseProtectionArticle() {
  const cpOperationalPillars = [
    {
      title: "Threat Matrix & Risk Profiling",
      icon: ShieldAlert,
      description: "Analyzing dynamic risk levels including fixated individuals, stalkers, hostile surveillance, corporate extortion, organized crime, and opportunistic physical assault."
    },
    {
      title: "Advance Reconnaissance & Route Auditing",
      icon: Compass,
      description: "Pre-checking primary and secondary transit corridors, emergency medical locations, venue choke points, and safe-room availability prior to principal arrival."
    },
    {
      title: "Low-Profile Escort & Embarkation Logistics",
      icon: Car,
      description: "Managing seamless venue arrivals, secure vehicle counter-surveillance maneuvers, and discreet personal protection walking formations."
    },
    {
      title: "Residential & Family Estate Shielding",
      icon: Lock,
      description: "Integrating physical close protection with static perimeter guards, biometric locks, and 24/7 CCTV surveillance for private HNWI residences."
    },
    {
      title: "Emergency Medical & Evacuation Protocols",
      icon: Radio,
      description: "Executing rapid extraction maneuvers and providing trauma medical treatment under high-stress emergency scenarios."
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
            <span className="text-[#f59e0b] truncate">Close Protection Guide</span>
          </nav>

          {/* HEADER SECTION */}
          <header className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm transition-colors">
              <Shield className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>CP // EXECUTIVE_PROTECTION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
              Close Protection: Threat Dynamics, HNWIs &amp; VIP Guarding Solutions
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
              An operational breakdown of SIA close protection standards in the UK, evaluating risk assessment matrices, advance route reconnaissance, secure executive transport, and personal shielding for high-net-worth individuals.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-slate-800 dark:text-slate-200 font-bold">Saints Close Protection Unit</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>May 14, 2026</span>
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
              src="https://i.ibb.co/MDvfwBjF/close-protection-threat-dynamics-uk.jpg" 
              alt="SIA Licensed Close Protection Officers Executing Executive Protection Duties"  
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
              <span>Contents // Protection Framework</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#cp-definition" className="hover:text-[#f59e0b] transition-colors">1. Defining Modern Close Protection in the UK</a></li>
              <li><a href="#threat-dynamics" className="hover:text-[#f59e0b] transition-colors">2. Evaluating Threat Dynamics &amp; Risk Profiling</a></li>
              <li><a href="#core-pillars" className="hover:text-[#f59e0b] transition-colors">3. 5 Pillars of Professional Executive Protection</a></li>
              <li><a href="#advance-recon" className="hover:text-[#f59e0b] transition-colors">4. The Critical Role of Advance Security Reconnaissance</a></li>
              <li><a href="#sia-licensing" className="hover:text-[#f59e0b] transition-colors">5. SIA Close Protection Licensing &amp; Medical Standards</a></li>
              <li><a href="#residential-protection" className="hover:text-[#f59e0b] transition-colors">6. Securing Private HNWI Estates &amp; Family Transit</a></li>
              <li><a href="#faq-section" className="hover:text-[#f59e0b] transition-colors">7. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* MAIN EDITORIAL CONTENT */}
          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal transition-colors">
            
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 border-l-2 border-[#f59e0b] pl-4 leading-relaxed transition-colors">
              Close protection is not merely a reactive physical barrier—it is an intricate discipline combining intelligence gathering, advance logistics, threat mitigation, and unobtrusive personal escorting.
            </p>

            {/* SECTION 1 */}
            <section id="cp-definition" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Shield className="w-5 h-5 text-[#f59e0b]" />
                1. Defining Modern Close Protection in the UK
              </h2>
              <p>
                In an increasingly volatile security environment, high-profile individuals, FTSE-100 corporate executives, foreign dignitaries, visiting diplomats, and high-net-worth families require specialized personal security. Regulated by the <strong>Security Industry Authority (SIA)</strong> under the <em>Private Security Industry Act 2001</em>, close protection in the UK involves the deployment of highly trained officers tasked with guaranteeing the physical safety and privacy of a principal.
              </p>
              <p>
                Unlike standard manned guarding, professional <Link href="/services/security-guards" className="text-[#f59e0b] hover:underline font-bold">close protection operatives (CPOs)</Link> operate with high fluid adaptability—blending low-profile personal escorting with proactive risk intelligence to neutralize threats long before they materialize.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="threat-dynamics" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
                2. Evaluating Threat Dynamics &amp; Risk Profiling
              </h2>
              <p>
                Every close protection deployment begins with a rigorous, objective threat analysis. Threats facing principals in major metropolitan areas like London fall into distinct dynamic categories:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Fixated Persons &amp; Stalking</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Monitored individuals displaying obsessive behavior, unannounced approach attempts, or persistent unwanted communications.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Targeted High-Value Robbery</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Organized criminal gangs targeting luxury watches, jewelry, and high-value personal assets in affluent corridors.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Hostile Media &amp; Public Disorder</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Aggressive paparazzi crowds, activist group disruptions, and unauthorized recording during public movements.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Corporate &amp; Geopolitical Risks</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">High-risk corporate negotiations, shareholder disputes, and sensitive geopolitical travel requiring discreet escorting.</p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="core-pillars" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Award className="w-5 h-5 text-[#f59e0b]" />
                3. 5 Pillars of Professional Executive Protection
              </h2>
              <p>
                Operational effectiveness relies on executing structured protection tactics tailored to the principal&apos;s lifestyle:
              </p>

              <div className="space-y-4 my-6">
                {cpOperationalPillars.map((pillar, idx) => {
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
                  <span>Executive &amp; VIP Close Protection</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Require Discreet Close Protection in the UK?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-lg transition-colors">
                  Saints Services Ltd supplies SIA-licensed close protection officers, advance security teams, and secure executive transport across London and internationally.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Consult CP Directorate</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
              </Link>
            </div>

            {/* SECTION 4 */}
            <section id="advance-recon" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 transition-colors">
                4. The Critical Role of Advance Security Reconnaissance
              </h2>
              <p>
                The hallmark of elite executive protection is advance planning. Before a principal arrives at a restaurant, hotel, airfield, or public engagement, an Advance Operative audits the environment.
              </p>
              <p>
                Reconnaissance protocols include establishing discreet ingress and egress pathways, physically inspecting holding areas, identifying nearest Level-1 trauma centers, testing secure communication bands, and coordinating directly with venue management and local law enforcement units.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="sia-licensing" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <UserCheck className="w-5 h-5 text-[#f59e0b]" />
                5. SIA Close Protection Licensing &amp; Medical Standards
              </h2>
              <p>
                Holding an SIA Close Protection License requires rigorous training far beyond basic security guarding standards. CPOs undergo extensive instruction in conflict management, counter-surveillance, tactical driving, law, and physical intervention.
              </p>
              <p>
                Furthermore, as mandated by current SIA standards, all active CPOs must hold valid <strong>First Person on Scene (FPOS)</strong> or <strong>First Aid Response (FREC Level 3)</strong> qualifications, enabling them to deliver emergency trauma care in critical situations.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="residential-protection" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Building2 className="w-5 h-5 text-[#f59e0b]" />
                6. Securing Private HNWI Estates &amp; Family Transit
              </h2>
              <p>
                Executive protection extends to private family residences. Residential Security Teams (RST) deploy around private estates, establishing access control perimeters, managing physical intrusion alarms, and supervising contractor visits.
              </p>
              <p>
                For families in transit, CPOs provide seamless protection during school runs, international travel transfers, and private venue visits while maintaining absolute discretion and family privacy.
              </p>
              <p>
                To explore specialized event management or premises security, view our <Link href="/services/door-supervision" className="text-[#f59e0b] hover:underline font-bold">door supervision</Link> and <Link href="/services/keyholding" className="text-[#f59e0b] hover:underline font-bold">24/7 keyholding response</Link> solutions.
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
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What qualifications do close protection officers require in the UK?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Close protection officers must hold an official SIA Close Protection License, complete accredited CPO training (including physical intervention and threat management), undergo BS7858 background vetting, and hold FREC 3 / FPOS trauma medical certification.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What is the difference between a bodyguard and a close protection officer?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    While the term &quot;bodyguard&quot; is often used informally, a licensed Close Protection Operative (CPO) executes holistic security operations including threat analysis, advance venue reconnaissance, counter-surveillance, and emergency medical care beyond simple physical presence.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">How quickly can Saints Services Ltd deploy close protection teams in London?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Our operational command team can deploy experienced SIA close protection operatives and secure executive transit vehicles across Greater London within 4 to 12 hours for emergency requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Social Share Buttons Component */}
            <ShareButtons title="Close Protection UK: Threat Dynamics & Executive Protection Guide" slug="close-protection-threat-dynamics-uk" />

            {/* EXTERNAL SOURCES CITATION */}
            <div className="p-5 rounded-sm bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-2 transition-colors">
              <div className="font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Verified Regulatory &amp; Professional Sources:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>Security Industry Authority (SIA): <em>Close Protection Qualification Standards &amp; Licensing</em></li>
                <li>British Standards Institution: <em>BS8507 Code of Practice for Close Protection Services</em></li>
                <li>Royal and Diplomatic Protection Group (RaSP): <em>Operational Escort Guidelines</em></li>
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
                href="/blog/maritime-port-security-uk-guide" 
                className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
              >
                <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">MARITIME &amp; PORT</div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  UK Maritime &amp; Port Security: Where SIA Badge Holders Operate
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
              Published by <span className="text-slate-900 dark:text-white font-bold">Saints Services Close Protection Unit</span>
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