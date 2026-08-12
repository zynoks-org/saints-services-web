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
  Lock,
  ShieldAlert,
  BarChart3,
  Award,
  Radio,
  KeyRound,
  FileSpreadsheet,
  Building,
  Siren
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/* 
================================================================================
SEO & KEYWORD METADATA STRATEGY
================================================================================
Topic: 24/7 Keyholding & Mobile Alarm Response SLA Standards UK
Target Keywords: 
  - 24/7 keyholding service UK SLA standards
  - BS 7984-1 keyholding response UK
  - Commercial keyholding and alarm response London
  - Out of hours alarm response security guards
  - Keyholding employer duty of care UK
Secondary Keywords:
  - Mobile patrol security officer dispatch
  - SIA licensed keyholding response times
  - Vacant commercial property keyholding insurance
  - ARC alarm receiving centre dispatch protocols
Target Audience: Commercial landlords, property estate managers, facility heads, retail directors, and corporate operations leads across the UK.
Search Intent: Informational & Commercial Investigation (Understanding keyholding regulations, BS 7984-1 compliance, employer lone-worker liabilities, and procuring emergency response guards).
*/

export const metadata: Metadata = {
  title: "24/7 Keyholding & Mobile Alarm Response: 2026 UK SLA Guide",
  description: "Exhaustive UK guide to 24/7 keyholding, BS 7984-1 compliance standards, SLA response time windows, employer duty of care, and commercial alarm response.",
  keywords: [
    "24/7 keyholding service UK SLA standards",
    "BS 7984-1 keyholding response UK",
    "Commercial keyholding and alarm response London",
    "Out of hours alarm response security guards",
    "Keyholding employer duty of care UK",
    "Mobile patrol security officer dispatch",
    "SIA licensed keyholding response times"
  ],
  openGraph: {
    title: "24/7 Keyholding & Mobile Alarm Response: 2026 UK SLA Guide | Saints Services Ltd",
    description: "In-depth operational analysis of BS 7984-1 keyholding standards, ARC integration, SLA response times, and mobile patrol dispatch across UK sites.",
    url: 'https://www.saintsservices.co.uk/blog/keyholding-alarm-response-sla-guide',
    type: 'article',
    images: [{ url: 'https://i.ibb.co/TBKL1mK0/keyholding-alarm-response-sla-guide.jpg', width: 1200, height: 630, alt: 'SIA Keyholding Security Officer Responding to Emergency Alarm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "24/7 Keyholding & Mobile Alarm Response: 2026 UK SLA Guide",
    description: "BS 7984-1 keyholding compliance, employer duty of care, and guaranteed alarm response SLA windows across commercial UK properties.",
    images: ['https://i.ibb.co/TBKL1mK0/keyholding-alarm-response-sla-guide.jpg'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "24/7 Keyholding & Mobile Alarm Response: SLA Standards for UK Landlords (2026)",
  "description": "An exhaustive guide detailing UK keyholding standards (BS 7984-1), Service Level Agreement (SLA) response windows, employer duty of care laws, and ARC mobile dispatch protocols.",
  "image": "https://i.ibb.co/TBKL1mK0/keyholding-alarm-response-sla-guide.jpg",
  "author": { 
    "@type": "Organization", 
    "name": "Saints Control Room Directorate",
    "url": "https://www.saintsservices.co.uk"
  },
  "publisher": { 
    "@type": "Organization", 
    "name": "Saints Services Ltd",
    "logo": {
      "@type": "ImageObject",
      "url": "https://i.ibb.co/TBKL1mK0/keyholding-alarm-response-sla-guide.jpg"
    }
  },
  "datePublished": "2026-04-04",
  "dateModified": "2026-08-07",
  "mainEntityOfPage": "https://www.saintsservices.co.uk/blog/keyholding-alarm-response-sla-guide"
};

export default function KeyholdingSlaGuideArticle() {
  const keyholdingPillars = [
    {
      title: "BS 7984-1 Code Access & Vault Security",
      icon: Lock,
      description: "Keys are stored off-site in high-security, access-controlled key safes, identified solely via unique encrypted barcodes rather than property addresses."
    },
    {
      title: "Automated ARC Integration & Instant Dispatch",
      icon: Radio,
      description: "Direct integration with Alarm Receiving Centres (ARCs) ensures immediate digital dispatch of the nearest mobile unit as soon as intruder or fire sensors activate."
    },
    {
      title: "Guaranteed SLA Arrival Windows (<30-45 Mins)",
      icon: Clock,
      description: "Deploying SIA mobile patrol officers to commercial premises within contractual Service Level Agreement timeframes to evaluate threats rapidly."
    },
    {
      title: "Systematic Site Search & Threat Assessment",
      icon: Siren,
      description: "Executing methodical external and internal perimeter checks, verifying intruder points of entry, and identifying active hazards before resetting alarm panels."
    },
    {
      title: "Emergency Boarding & Police Liaison",
      icon: FileSpreadsheet,
      description: "Managing emergency glazier boarding, contacting police under verified intruder criteria, and generating time-stamped digital incident logs with GPS evidence."
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
            <span className="text-[#f59e0b] truncate">24/7 Keyholding SLA Guide</span>
          </nav>

          {/* HEADER SECTION */}
          <header className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm transition-colors">
              <KeyRound className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>OPS // ALARM_RESPONSE_SLA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
              24/7 Keyholding &amp; Mobile Alarm Response: SLA Standards for UK Landlords
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
              An operational guide detailing BS 7984-1 keyholding standards, employer lone-worker liabilities, Alarm Receiving Centre (ARC) dispatch workflows, and contractual response SLA windows for commercial properties across the UK.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-slate-800 dark:text-slate-200 font-bold">Saints Control Room Directorate</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>April 04, 2026</span>
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
              src="https://i.ibb.co/TBKL1mK0/keyholding-alarm-response-sla-guide.jpg" 
              alt="SIA Mobile Security Response Officer Responding to Commercial Building Alarm" 
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
              <span>Contents // SLA Framework</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#keyholding-overview" className="hover:text-[#f59e0b] transition-colors">1. The Employer Liability of Night-Time Callouts</a></li>
              <li><a href="#bs7984-standard" className="hover:text-[#f59e0b] transition-colors">2. BS 7984-1: The Gold Standard for Key Storage</a></li>
              <li><a href="#core-duties" className="hover:text-[#f59e0b] transition-colors">3. 5 Stages of Professional Alarm Response Dispatch</a></li>
              <li><a href="#sla-windows" className="hover:text-[#f59e0b] transition-colors">4. Evaluating SLA Response Time Benchmarks</a></li>
              <li><a href="#vacant-property" className="hover:text-[#f59e0b] transition-colors">5. Insurance Compliance for Vacant Commercial Sites</a></li>
              <li><a href="#procuring-keyholding" className="hover:text-[#f59e0b] transition-colors">6. Partnering with SIA Mobile Patrol Providers</a></li>
              <li><a href="#faq-section" className="hover:text-[#f59e0b] transition-colors">7. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* MAIN EDITORIAL CONTENT */}
          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal transition-colors">
            
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 border-l-2 border-[#f59e0b] pl-4 leading-relaxed transition-colors">
              Expecting staff members to attend commercial premises during 3:00 AM alarm activations creates severe legal and safety liabilities. Professional keyholding eliminates personal risk while guaranteeing rapid, compliant response.
            </p>

            {/* SECTION 1 */}
            <section id="keyholding-overview" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
                1. The Employer Liability of Night-Time Callouts
              </h2>
              <p>
                Under the <em>Health and Safety at Work etc. Act 1974</em> and the <em>Management of Health and Safety at Work Regulations 1999</em>, UK employers hold a legal duty of care toward employees. Requiring staff to attend out-of-hours intruder or fire alarm activations exposes workers to severe physical risks—including confrontations with violent intruders, lone working hazards, and fatigue-related travel accidents.
              </p>
              <p>
                Outsourcing access credentials and response duties to an SIA-licensed <Link href="/services/keyholding" className="text-[#f59e0b] hover:underline font-bold">24/7 keyholding service</Link> ensures that trained security officers handle site emergencies in compliance with statutory safety laws.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="bs7984-standard" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Shield className="w-5 h-5 text-[#f59e0b]" />
                2. BS 7984-1: The Gold Standard for Key Storage
              </h2>
              <p>
                Professional keyholding operates under strict British Standard guidelines governed by <strong>BS 7984-1:2016</strong> (<em>Keyholding and response services – Code of practice</em>).
              </p>
              <p>
                To eliminate risk, client keys are held in secure, fireproof safes in access-controlled control rooms. Keys are tagged solely with encrypted alphanumeric references—never with property addresses or company names—guaranteeing complete security if a key fob is misplaced during transit.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="core-duties" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Award className="w-5 h-5 text-[#f59e0b]" />
                3. 5 Stages of Professional Alarm Response Dispatch
              </h2>
              <p>
                When a commercial intruder sensor or fire alarm triggers, SIA mobile response officers execute a seamless 5-stage procedure:
              </p>

              <div className="space-y-4 my-6">
                {keyholdingPillars.map((pillar, idx) => {
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
                  <span>24/7 Keyholding &amp; Mobile Response</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Need Guaranteed 24/7 Alarm Response?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-lg transition-colors">
                  Saints Services Ltd provides BS 7984-1 compliant keyholding, ARC integration, and rapid SLA mobile patrol dispatch across London and nationwide.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Request Keyholding Quote</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
              </Link>
            </div>

            {/* SECTION 4 */}
            <section id="sla-windows" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 transition-colors">
                4. Evaluating SLA Response Time Benchmarks
              </h2>
              <p>
                When establishing keyholding contracts, property managers must specify contractual <strong>Service Level Agreement (SLA) response windows</strong>. Standard industry SLAs require mobile patrol officers to arrive on site within <strong>30 to 45 minutes</strong> of receiving ARC notification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">&lt; 30 Mins</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white mt-1 uppercase">Urban Priority SLA</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">High-density metropolitan zones with dedicated mobile response units.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">&lt; 45 Mins</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white mt-1 uppercase">Standard Commercial SLA</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Standard response SLA covering business parks and suburban commercial hubs.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">24 / 7 / 365</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white mt-1 uppercase">Continuous Coverage</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Uninterrupted control room monitoring and officer dispatch 365 days a year.</p>
                </div>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="vacant-property" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Building className="w-5 h-5 text-[#f59e0b]" />
                5. Insurance Compliance for Vacant Commercial Sites
              </h2>
              <p>
                Commercial property insurers frequently mandate professional keyholding and weekly vacant property inspections as explicit policy conditions.
              </p>
              <p>
                Unoccupied buildings are highly vulnerable to squatting, arson, metal theft, and undetected water leaks. Having professional keyholding combined with mobile inspection sweeps ensures that insurance warranties remain fully valid.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="procuring-keyholding" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Lock className="w-5 h-5 text-[#f59e0b]" />
                6. Partnering with SIA Mobile Patrol Providers
              </h2>
              <p>
                When selecting a keyholding partner, estate managers must verify that mobile response officers hold frontline SIA licenses and undergo compulsory BS 7858 background vetting.
              </p>
              <p>
                Explore our comprehensive range of property protection solutions including <Link href="/services/security-guards" className="text-[#f59e0b] hover:underline font-bold">manned security guarding</Link> and <Link href="/services/door-supervision" className="text-[#f59e0b] hover:underline font-bold">door supervision</Link>.
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
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What is BS 7984-1 compliance for keyholding?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    BS 7984-1 is the official British Standard code of practice for keyholding and response services. It dictates secure key vault storage, encrypted code tagging, response management, and vetted personnel screening.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">How quickly do keyholding officers respond to an alarm?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Contractual response SLA timeframes typically guarantee on-site officer arrival within 30 to 45 minutes of Alarm Receiving Centre (ARC) dispatch.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">Why shouldn&apos;t employees attend out-of-hours alarms?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Sending untrained employees creates severe lone-working liabilities under UK health and safety laws, exposing staff to physical violence from intruders and hazard risks.
                  </p>
                </div>
              </div>
            </section>

            {/* Social Share Buttons Component */}
            <ShareButtons title="24/7 Keyholding & Mobile Alarm Response: 2026 UK SLA Guide" slug="keyholding-alarm-response-sla-guide" />

            {/* EXTERNAL SOURCES CITATION */}
            <div className="p-5 rounded-sm bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-2 transition-colors">
              <div className="font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Verified Regulatory &amp; Standard Sources:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>British Standards Institution: <em>BS 7984-1 Keyholding and Response Services Code of Practice</em></li>
                <li>Health and Safety Executive (HSE): <em>Managing Lone Working Risks Guidance</em></li>
                <li>Security Industry Authority (SIA): <em>Keyholding Licensable Activities Framework</em></li>
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
                href="/blog/construction-site-security-loss-prevention" 
                className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
              >
                <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">MANNED GUARDING</div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  Construction Site Security: Preventing Tool, Plant &amp; Fuel Theft in 2026
                </h4>
              </Link>
            </div>
          </div>

          {/* AUTHOR & FOOTER NAVIGATION */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Published by <span className="text-slate-900 dark:text-white font-bold">Saints Services Control Room Directorate</span>
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