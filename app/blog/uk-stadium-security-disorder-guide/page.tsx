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
  Gavel,
  Radio,
  Users,
  Eye
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/* 
================================================================================
SEO & KEYWORD METADATA STRATEGY
================================================================================
Topic: UK Manned Guarding & Stadium Disorder Operational Insights 2026
Target Keywords: 
  - UK stadium security manned guarding 2026
  - Football stadium arrest disorder statistics UK
  - SIA licensed security guard stadium crowd control
  - Home Office football disorder data guide
  - Event security guard responsibilities stadiums
Secondary Keywords:
  - Turnstile searching pyrotechnic detection UK
  - Pitch invasion deterrence security officers
  - Football spectator act 1989 compliance
  - Crowd safety stewards SIA door supervisors
Target Audience: Stadium operations directors, sports venue heads, local authority safety advisory groups (SAG), and major event safety officers across the UK.
Search Intent: Informational & Commercial Investigation (Understanding stadium disorder statistics, crowd management protocols, and procuring SIA-licensed event guarding).
*/

export const metadata: Metadata = {
  title: "UK Manned Guarding & Stadium Disorder: 2026 Operational Insights",
  description: "Comprehensive 2026 guide analyzing UK football stadium disorder data, Home Office arrest statistics, SIA crowd safety guarding, and turnstile security protocols.",
  keywords: [
    "UK stadium security manned guarding 2026",
    "Football stadium arrest disorder statistics UK",
    "SIA licensed security guard stadium crowd control",
    "Home Office football disorder data guide",
    "Event security guard responsibilities stadiums",
    "Turnstile searching pyrotechnic detection UK",
    "Pitch invasion deterrence security officers"
  ],
  openGraph: {
    title: "UK Manned Guarding & Stadium Disorder: 2026 Operational Insights | Saints Services Ltd",
    description: "In-depth breakdown of official Home Office football arrest statistics, SIA event security deployment, turnstile search operations, and pitch protection.",
    url: 'https://www.saintsservices.co.uk/blog/uk-stadium-security-disorder-guide',
    type: 'article',
    images: [{ url: 'https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/uk-stadium-security-disorder-guide.jpg', width: 1200, height: 630, alt: 'SIA Event Security Guards Stationed at UK Football Stadium' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "UK Manned Guarding & Stadium Disorder: 2026 Operational Insights",
    description: "Home Office football arrest data, crowd safety management, and SIA event security standards across UK sports stadiums.",
    images: ['https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/uk-stadium-security-disorder-guide.jpg'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "UK Manned Guarding & Stadium Disorder: 2026 Operational Insights",
  "description": "An exhaustive operational guide analyzing Home Office football arrest statistics, pyrotechnic deterrence, pitch invasion mitigation, and SIA event security deployment.",
  "image": "https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/uk-stadium-security-disorder-guide.jpg",
  "author": { 
    "@type": "Organization", 
    "name": "Saints Event Operations Desk",
    "url": "https://www.saintsservices.co.uk"
  },
  "publisher": { 
    "@type": "Organization", 
    "name": "Saints Services Ltd",
    "logo": {
      "@type": "ImageObject",
      "url": "https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/uk-stadium-security-disorder-guide.jpg"
    }
  },
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "mainEntityOfPage": "https://www.saintsservices.co.uk/blog/uk-stadium-security-disorder-guide"
};

export default function UkStadiumSecurityArticle() {
  const stadiumSecurityPillars = [
    {
      title: "Outer Perimeter Access Control & Turnstile Searches",
      icon: Lock,
      description: "Operating outer search arches and turnstile entry lanes to detect prohibited items, pyrotechnics, alcohol, and weapons before entry into concourses."
    },
    {
      title: "Away Fan Segregation & Corridor Shielding",
      icon: Users,
      description: "Managing physical buffer zones between home and away supporter blocks, preventing physical confrontations across stadium concourses and exit gates."
    },
    {
      title: "Pitch Perimeter Protection & Incursion Prevention",
      icon: ShieldAlert,
      description: "Positioning SIA safety officers along the touchline to deter unauthorized pitch invasions and protect players, officials, and coaching staff."
    },
    {
      title: "Control Room CCTV Integration & Spotting",
      icon: Eye,
      description: "Monitoring high-definition PTZ camera networks in tandem with police spotters to identify ringleaders, pyrotechnic ignition, and disorder hotspots."
    },
    {
      title: "Post-Match Dispersal & Transport Choke Points",
      icon: Radio,
      description: "Guiding thousands of departing supporters safely through exit turnstiles toward local transport hubs while preventing localized public order incidents."
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
            <span className="text-[#f59e0b] truncate">UK Stadium Security Guide</span>
          </nav>

          {/* HEADER SECTION */}
          <header className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm transition-colors">
              <Shield className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>OPS // EVENT_SECURITY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
              UK Manned Guarding &amp; Stadium Disorder: 2026 Operational Insights
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
              An in-depth analysis of official UK Home Office football arrest statistics, stadium disorder trends, pyrotechnic deterrence, pitch invasion prevention, and the deployment of SIA-licensed event security personnel.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-slate-800 dark:text-slate-200 font-bold">Saints Event Operations Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>August 12, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>8 min read</span>
              </div>
            </div>
          </header>

          {/* FEATURED HERO IMAGE */}
          <div className="relative h-[320px] sm:h-[460px] rounded-sm overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl mb-12 bg-slate-900 transition-colors">
            <Image 
              src="https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/uk-stadium-security-disorder-guide.jpg" 
              alt="SIA Licensed Event Security Officers Performing Crowd Safety Patrols at Stadium"  
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
              <span>Contents // Operational Assessment</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#disorder-landscape" className="hover:text-[#f59e0b] transition-colors">1. UK Football Disorder &amp; Home Office Data Trends</a></li>
              <li><a href="#primary-threats" className="hover:text-[#f59e0b] transition-colors">2. Pyrotechnics, Pitch Invasions &amp; Alcohol Offenses</a></li>
              <li><a href="#core-pillars" className="hover:text-[#f59e0b] transition-colors">3. 5 Pillars of Active Stadium Manned Guarding</a></li>
              <li><a href="#turnstile-searching" className="hover:text-[#f59e0b] transition-colors">4. Turnstile Search Protocols &amp; Prohibited Items</a></li>
              <li><a href="#stewarding-vs-sia" className="hover:text-[#f59e0b] transition-colors">5. Safety Stewards vs. SIA Door Supervisors</a></li>
              <li><a href="#martyns-law-stadiums" className="hover:text-[#f59e0b] transition-colors">6. Martyn&apos;s Law Compliance for High-Capacity Venues</a></li>
              <li><a href="#faq-section" className="hover:text-[#f59e0b] transition-colors">7. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* MAIN EDITORIAL CONTENT */}
          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal transition-colors">
            
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 border-l-2 border-[#f59e0b] pl-4 leading-relaxed transition-colors">
              Managing crowd dynamics across major UK sports grounds requires a sophisticated blend of proactive searching, physical fan segregation, de-escalation, and strict statutory compliance.
            </p>

            {/* SECTION 1 */}
            <section id="disorder-landscape" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <BarChart3 className="w-5 h-5 text-[#f59e0b]" />
                1. UK Football Disorder &amp; Home Office Data Trends
              </h2>
              <p>
                According to official football-related arrest and disorder statistics published annually by the <strong>UK Home Office</strong>, over 2,200 football-related arrests were recorded across England and Wales in recent seasons. Public disorder, pyrotechnic possession, violent behavior, and alcohol-fueled offences continue to pose significant operational challenges for stadium operators and local Safety Advisory Groups (SAG).
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">2,200+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Annual Arrests</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">38%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Public Disorder</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">200+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Pyro Offenses</div>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-center transition-colors">
                  <div className="text-2xl font-black font-mono text-[#f59e0b]">600+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-mono">Banning Orders</div>
                </div>
              </div>

              <p>
                High-profile venues hosting tens of thousands of spectators require structured manned guarding protocols to prevent disorder, safeguard players and officials, and ensure compliance with the <em>Football Spectators Act 1989</em>.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="primary-threats" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
                2. Pyrotechnics, Pitch Invasions &amp; Alcohol Offenses
              </h2>
              <p>
                Modern stadium operations face three major threat vectors that require active physical intervention:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <h3 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Pyrotechnic Flares &amp; Smoke Bombs</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Illegal smuggling of high-heat flares into packed stands poses extreme burn and lung inhalation hazards.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <h3 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Pitch Incursions</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Individual or mass spectator runs onto the playing field threaten athlete safety and cause severe match stoppages.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-1 transition-colors">
                  <h3 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">Concourse Anti-Social Behavior</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Excessive alcohol consumption in concourse bar zones leading to verbal abuse, vandalism, and physical fights.</p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="core-pillars" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Award className="w-5 h-5 text-[#f59e0b]" />
                3. 5 Pillars of Active Stadium Manned Guarding
              </h2>
              <p>
                Professional event security deployment relies on multi-layered operational tactics executed across matchday shifts:
              </p>

              <div className="space-y-4 my-6">
                {stadiumSecurityPillars.map((pillar, idx) => {
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
                  <span>Stadium &amp; Arena Security Operations</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">Operating a Sports Ground or Event Venue?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-lg transition-colors">
                  Saints Services Ltd provides SIA door supervisors, turnstile search teams, pit stewards, and rapid event security deployments nationwide.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="group relative overflow-hidden shrink-0 inline-flex items-center gap-2 bg-slate-900 dark:bg-[#080f22] text-white font-black px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 dark:border-white/20 shadow-lg active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">Request Stadium Security Quote</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
              </Link>
            </div>

            {/* SECTION 4 */}
            <section id="turnstile-searching" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 transition-colors">
                4. Turnstile Search Protocols &amp; Prohibited Items
              </h2>
              <p>
                The outer perimeter search line is the primary barrier preventing dangerous items from entering spectator stands. SIA-licensed security guards conduct thorough bag searches and body wands at entry turnstiles.
              </p>
              <p>
                Search teams confiscate alcohol, glass bottles, pyrotechnic canisters, mega-phones, and offensive banners while ensuring smooth throughput so entry queues do not become dangerous crowd choke points outside venue gates.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="stewarding-vs-sia" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Gavel className="w-5 h-5 text-[#f59e0b]" />
                5. Safety Stewards vs. SIA Door Supervisors
              </h2>
              <p>
                Understanding the regulatory legal distinction between general safety stewards and SIA badge holders is essential for licensing compliance under the Green Guide:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">General Safety Stewards (NVQ Level 2)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Responsible for customer service, seat guiding, monitoring aisle clearways, and assisting general evacuations. They do <strong>not</strong> perform physical restraint or search duties.</p>
                </div>
                <div className="p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-xs font-mono font-bold text-[#f59e0b] uppercase">SIA Licensed Security Guards / Door Supervisors</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Authorized for bag searches, physical interventions, managing ejected individuals, responding to violent disorder, and protecting pitch boundaries.</p>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="martyns-law-stadiums" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2 transition-colors">
                <Building2 className="w-5 h-5 text-[#f59e0b]" />
                6. Martyn&apos;s Law Compliance for High-Capacity Venues
              </h2>
              <p>
                All sports stadiums with capacities exceeding 800 people fall directly into the <strong>Enhanced Tier of Martyn&apos;s Law (Terrorism Protection of Premises Act)</strong>.
              </p>
              <p>
                Venue controllers must maintain documented counter-terrorism risk evaluations, establish rehearsed Evacuation/Invacuation protocols, conduct physical search wands at turnstiles, and ensure security teams complete official Action Counters Terrorism (ACT) training modules.
              </p>
              <p>
                For further compliance requirements, read our specialized breakdown on <Link href="/blog/martyns-law-event-safety-compliance" className="text-[#f59e0b] hover:underline font-bold">Martyn&apos;s Law event safety planning</Link> and <Link href="/services/security-guards" className="text-[#f59e0b] hover:underline font-bold">manned security guarding</Link>.
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
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">Do stadium security guards require an SIA license in the UK?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Yes. Security personnel performing search duties, physical interventions, pitch boundary protection, or alcohol enforcement at UK sports grounds must hold a valid SIA Door Supervision or Security Guarding license.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">What is the penalty for carrying pyrotechnics into a UK stadium?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Under the Sporting Events (Control of Alcohol etc.) Act 1985, possessing pyrotechnics (flares, fireworks, smoke bombs) at a sports ground is a criminal offense carrying mandatory football banning orders and potential prison sentences.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase transition-colors">How do security guards prevent pitch invasions?</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    Security providers deploy trained SIA officers along pitch perimeter lines during high-risk fixtures, utilizing physical positioning, rapid intercept protocols, and close coordination with CCTV control rooms.
                  </p>
                </div>
              </div>
            </section>

            {/* Social Share Buttons Component */}
            <ShareButtons title="UK Manned Guarding & Stadium Disorder: 2026 Operational Insights" slug="uk-stadium-security-disorder-guide" />

            {/* EXTERNAL SOURCES CITATION */}
            <div className="p-5 rounded-sm bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-2 transition-colors">
              <div className="font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Verified Home Office &amp; Regulatory Sources:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>UK Home Office: <em>Football-Related Arrests and Banning Order Statistics</em></li>
                <li>SGSA (Sports Grounds Safety Authority): <em>Guide to Safety at Sports Grounds (Green Guide)</em></li>
                <li>Security Industry Authority (SIA): <em>Event Security and Door Supervision Standards</em></li>
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
                href="/blog/martyns-law-event-safety-compliance" 
                className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all"
              >
                <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">EVENT SECURITY</div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  Martyn’s Law &amp; Event Safety Planning: UK Regulatory Compliance Guide
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
              Published by <span className="text-slate-900 dark:text-white font-bold">Saints Services Event Operations Desk</span>
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