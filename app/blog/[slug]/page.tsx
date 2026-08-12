import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Shield, ArrowRight, Calendar, Clock, HelpCircle, CheckCircle2, User, ListOrdered, FileText, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShareButtons } from '@/components/ShareButtons';

interface Props {
  params: Promise<{ slug: string }>;
}

// Full Article Repository including all 8 security intelligence briefs with verified direct ImgBB links
const articlesData: Record<string, {
  title: string;
  category: string;
  codeTag: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  intro: string;
  section1Title: string;
  section1Content: string;
  statValue: string;
  statLabel: string;
  section2Title: string;
  points: string[];
  faqs: { q: string; a: string }[];
}> = {
  'uk-stadium-security-disorder-guide': {
    title: 'UK Manned Guarding & Stadium Disorder: 2026 Operational Insights',
    category: 'EVENT SECURITY',
    codeTag: 'OPS // EVENT_SECURITY',
    description: 'In-depth analysis on UK stadium security, Home Office disorder statistics, SIA compliance, and manned guarding strategies for high-risk venues.',
    date: '12 August 2026',
    readTime: '8 min read',
    image: 'https://i.ibb.co/h1hdchkS/uk-stadium-security-disorder-guide.jpg',
    author: 'Saints Operational Control',
    intro: 'Managing large crowds at commercial venues and high-risk sports fixtures requires structured access control, trained SIA operatives, and proactive conflict de-escalation protocols.',
    section1Title: '1. High-Density Venue Security Risk Profile',
    section1Content: 'Effective physical security is founded on rapid response and strict access logging. Operatives stationed at entry points perform vital screening procedures while maintaining seamless guest movement.',
    statValue: '4.2 / 100k',
    statLabel: 'National Benchmark: Average arrest frequency across regulated high-capacity UK events. Proactive SIA guarding lowers incident escalation rates by over 60%.',
    section2Title: '2. SIA Compliance & Screening Standards',
    points: [
      'BS7858 Vetted Operatives: Comprehensive background check including 5-year employment verification and credit checks prior to site placement.',
      'Real-time GPS Patrol Logging: Instant digital incident reporting sent directly to facility managers for total transparency.',
      'Conflict De-escalation Expertise: Trained officers adept at calming confrontations without physical force.'
    ],
    faqs: [
      {
        q: 'What credentials do security officers require at high-risk UK venues?',
        a: 'Operatives must hold valid SIA Frontline Licenses (Door Supervision or Security Guarding) and undergo BS7858 background vetting including 5-year employment verification and criminal record checks.'
      },
      {
        q: 'How quickly can Saints Services Ltd deploy manned guards for emergency coverage?',
        a: 'Our 24/7 control room offers rapid nationwide deployment, placing SIA-vetted personnel on-site within 2 hours of operational dispatch.'
      }
    ]
  },
  'london-crime-rates-by-borough-2026': {
    title: 'Most Dangerous Areas in London: Crime Rates by Borough (2026 Update)',
    category: 'MANNED GUARDING',
    codeTag: 'SEC // LONDON_RISK',
    description: 'An analysis of Met Police crime statistics across London boroughs and how commercial site managers can mitigate localized threats.',
    date: '01 August 2026',
    readTime: '9 min read',
    image: 'https://i.ibb.co/vvdP3b67/london-crime-rates-by-borough-2026.png',
    author: 'Saints Intelligence Desk',
    intro: 'Metropolitan Police data highlights significant variations in commercial property risks across Greater London boroughs, demanding tailored security postures.',
    section1Title: '1. Evaluating High-Risk Commercial Corridors',
    section1Content: 'Commercial crime patterns in central boroughs like Westminster and Camden show elevated rates of theft, opportunistic intrusion, and anti-social behavior affecting business operations.',
    statValue: '195.7 / 1k',
    statLabel: 'Met Police Incident Benchmark: High-volume incidents per 1,000 commercial addresses in top-density London sectors.',
    section2Title: '2. Manned Deterrence & Site Perimeter Security',
    points: [
      'High-Visibility Mobile Patrols: Regular random perimeter checks discourage target selection by opportunistic trespassers.',
      'SIA Access Control: Strict visitor check-in logs and badge verification for commercial office buildings.',
      'Rapid Incident Dispatch: Dedicated control room monitoring with immediate mobile response units.'
    ],
    faqs: [
      {
        q: 'Which London boroughs require keyholding and alarm response?',
        a: 'Commercial properties in Westminster, Camden, and Southwark benefit heavily from 24/7 keyholding due to high false-alarm rates and night-time response needs.'
      },
      {
        q: 'How do static security guards reduce commercial retail losses?',
        a: 'Static guards act as a immediate visual deterrent and maintain direct radio contact with local business crime reduction partnerships.'
      }
    ]
  },
  'retail-loss-prevention-uk-guide': {
    title: 'Loss Prevention: Retail and Asset Protection UK Guide',
    category: 'RETAIL SECURITY',
    codeTag: 'CTRL // LOSS_PREVENTION',
    description: 'How SIA-licensed retail security officers and deterrent protocols protect UK stores against the rising £4.2B retail theft crisis.',
    date: '20 July 2026',
    readTime: '7 min read',
    image: 'https://i.ibb.co/XGHFd3F/retail-loss-prevention-uk-guide.jpg',
    author: 'Saints Retail Security Group',
    intro: 'With retail shrinkage reaching unprecedented levels across the UK, commercial store operators require disciplined loss prevention strategies.',
    section1Title: '1. Combatting Store Theft & Organized Retail Crime',
    section1Content: 'Professional retail security operatives combine tactical positioning with active customer service, creating an environment where theft is systematically deterred.',
    statValue: '£4.2 Billion',
    statLabel: 'Annual UK Retail Loss: Total cost of shoplifting and inventory shrinkage facing High Street retailers without dedicated security presence.',
    section2Title: '2. Core Retail Guarding Responsibilities',
    points: [
      'Floor Surveillance & Deterrence: Maintaining clear line-of-sight across high-value store aisles and entry points.',
      'EAS Gate Monitoring: Responding calmly and professionally to electronic article surveillance alarm triggers.',
      'Evidence-Grade Incident Reports: Logging comprehensive store incident logs suitable for Police prosecution.'
    ],
    faqs: [
      {
        q: 'Are retail security guards allowed to detain shoplifters in the UK?',
        a: 'SIA-licensed guards can perform a Citizens Arrest under Section 24A of the Police and Criminal Evidence Act 1984 when an offence is observed.'
      }
    ]
  },
  'sia-security-guard-responsibilities': {
    title: 'Security Guard Roles and Responsibilities: A Guide to Modern Guarding',
    category: 'COMPLIANCE',
    codeTag: 'SEC // BS7858_VETTED',
    description: 'Understanding BS7858 vetting, incident logging protocols, and conflict de-escalation for commercial site protection.',
    date: '10 July 2026',
    readTime: '6 min read',
    image: 'https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png',
    author: 'Saints Compliance Directorate',
    intro: 'Modern manned guarding goes far beyond static observation—it requires certified screening, digital reporting, and regulatory SIA compliance.',
    section1Title: '1. The Standard of BS7858 Vetted Guarding',
    section1Content: 'Every security officer deployed by Saints Services Ltd undergoes mandatory BS7858 vetting, ensuring absolute trustworthiness and site safety for our clients.',
    statValue: '100% SIA',
    statLabel: 'Fully Licensed Standard: All operatives hold active SIA licensing across Manned Guarding, Door Supervision, or Keyholding.',
    section2Title: '2. Essential Guarding Operational Duties',
    points: [
      'Perimeter Patrol Checks: Systematic physical inspections of building doors, windows, and security gates.',
      'Emergency Response Execution: Leading site evacuation protocols during fire or safety alerts.',
      'Visitor Verification: Managing electronic badging systems for contractors and facility guests.'
    ],
    faqs: [
      {
        q: 'What is BS7858 vetting in UK security?',
        a: 'BS7858 is the British Standard code of practice for security screening of personnel, covering 5-year employment history, criminal background checks, and identity verification.'
      }
    ]
  },
  'close-protection-threat-dynamics-uk': {
    title: 'Close Protection & Executive Security Threat Dynamics in the UK',
    category: 'VIP PROTECTION',
    codeTag: 'OPS // EXECUTIVE_SEC',
    description: 'Strategic deployment of Close Protection Officers (CPOs) for corporate executives, high-net-worth individuals, and high-profile assets.',
    date: '05 July 2026',
    readTime: '7 min read',
    image: 'https://i.ibb.co/MDvfwBjF/close-protection-threat-dynamics-uk.jpg',
    author: 'Saints Executive Protection',
    intro: 'Executive protection requires discrete intelligence, proactive route planning, and highly trained security operatives capable of neutralizing threats before escalation.',
    section1Title: '1. Threat Assessment & Advance Reconnaissance',
    section1Content: 'Before any movement or event, close protection teams execute rigorous venue reconnaissance, mapping emergency egress routes and verifying local security infrastructure.',
    statValue: '24/7 Intel',
    statLabel: 'Proactive Monitoring: Real-time threat intelligence tracking to safeguard principals across domestic and international itineraries.',
    section2Title: '2. Key Principles of Operative Deployment',
    points: [
      'Discreet Surveillance: Maintaining a protective perimeter without disrupting normal professional routines.',
      'Secure Transit Management: Coordinated vehicle convoys and trained drivers experienced in evasive maneuvering.',
      'Crisis Management Coordination: Direct comms with local law enforcement and emergency response hubs.'
    ],
    faqs: [
      {
        q: 'Do close protection officers in the UK carry weapons?',
        a: 'Standard UK close protection operates strictly within UK firearms legislation, utilizing unarmed tactical defense, surveillance detection, and advanced de-escalation.'
      }
    ]
  },
  'construction-site-security-loss-prevention': {
    title: 'Construction Site Security: Preventing Theft & Plant Vandalism',
    category: 'SITE SECURITY',
    codeTag: 'SEC // CONSTRUCTION',
    description: 'Protecting active construction zones, expensive machinery, and building materials from trespass, arson, and tool theft.',
    date: '28 June 2026',
    readTime: '6 min read',
    image: 'https://i.ibb.co/mVdf1rR5/construction-site-security-loss-prevention.jpg',
    author: 'Saints Site Protection',
    intro: 'Active construction sites are prime targets for opportunistic thieves seeking copper cabling, power tools, and heavy plant machinery.',
    section1Title: '1. Securing Vulnerable Perimeter Boundaries',
    section1Content: 'Unfinished perimeters and open access points create severe liability issues. Deploying static gatehouse guards and mobile patrols significantly reduces site breach rates.',
    statValue: 'Zero Loss',
    statLabel: 'Target Objective: Complete asset preservation achieved via rigorous gatehouse sign-in protocols and random night patrols.',
    section2Title: '2. Critical Construction Defense Protocols',
    points: [
      'Gatehouse Access Control: Mandatory contractor induction and photographic ID logging at all entry gates.',
      'Out-of-Hours Mobile Patrols: Randomized vehicle drive-bys to deter nocturnal intruders and check fence integrity.',
      'Hot-Works & Fire Safety Checks: End-of-shift thermal inspections to prevent accidental site fires.'
    ],
    faqs: [
      {
        q: 'How do you secure construction sites without permanent power supply?',
        a: 'We deploy mobile patrol units, temporary solar-powered CCTV towers, and standalone battery-backed alarm systems.'
      }
    ]
  },
  'keyholding-alarm-response-sla-guide': {
    title: 'Keyholding & Alarm Response: Understanding Emergency SLAs',
    category: 'MOBILE PATROLS',
    codeTag: 'CTRL // KEYHOLDING',
    description: 'Why commercial properties rely on professional keyholding and rapid alarm response to satisfy UK business insurance mandates.',
    date: '15 June 2026',
    readTime: '5 min read',
    image: 'https://i.ibb.co/TBKL1mK0/keyholding-alarm-response-sla-guide.jpg',
    author: 'Saints Operations Control',
    intro: 'Relying on internal staff to answer middle-of-the-night burglar alarms introduces severe safety risks and invalidates insurance compliance.',
    section1Title: '1. The Danger of Untrained Alarm Attendance',
    section1Content: 'Confronting an active intruder or investigating commercial property damage without tactical training puts employees in direct physical danger.',
    statValue: '< 45 Min',
    statLabel: 'Response SLA Guarantee: Rapid mobile deployment to investigate alarm triggers and secure compromised facilities.',
    section2Title: '2. Professional Keyholding Standards',
    points: [
      'CCTV-Monitored Key Vaults: Encrypted, audit-trailed key storage housing keys safely off-site.',
      'Perimeter Inspection Protocols: Systematic exterior building sweeps before interior entry is attempted.',
      'Emergency Services Liaison: Seamless coordination with police and fire authorities on-scene.'
    ],
    faqs: [
      {
        q: 'Are keys stored securely under BS standards?',
        a: 'Yes, all client keys are held in secure, alarmed vaults carrying no address identifiers, only unique coded serial numbers.'
      }
    ]
  },
  'maritime-port-security-uk-guide': {
    title: 'Maritime & Port Security: Securing UK Logistics Hubs',
    category: 'LOGISTICS',
    codeTag: 'OPS // MARITIME',
    description: 'Compliance standards, ISPS code adherence, and physical cargo protection strategies for UK shipping terminals and logistics parks.',
    date: '02 June 2026',
    readTime: '8 min read',
    image: 'https://i.ibb.co/ZRNnzgGQ/maritime-port-security-uk-guide.webp',
    author: 'Saints Logistics Division',
    intro: 'UK ports and supply chain distribution hubs require stringent access controls and cargo monitoring to prevent contraband smuggling and inventory theft.',
    section1Title: '1. ISPS Code & Supply Chain Compliance',
    section1Content: 'Adhering to international port security codes ensures uninterrupted commercial freight movement while mitigating regional smuggling threats.',
    statValue: '100% Audit',
    statLabel: 'Compliance Standard: Complete adherence to statutory shipping facility security guidelines and dockside gate protocols.',
    section2Title: '2. Freight Terminal Defense Measures',
    points: [
      'Container Seal Verification: Inspecting shipping container lock integrity upon yard entry and exit.',
      'HGV Driver Credentialing: Validating manifest paperwork and driver identity credentials.',
      'Night-time Yard Surveillance: High-frequency mobile patrols across extensive freight parking bays.'
    ],
    faqs: [
      {
        q: 'Do security guards at logistics hubs require specialized training?',
        a: 'Yes, guards complete cargo safety modules, hazardous material awareness, and freight documentation verification.'
      }
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const article = slug ? articlesData[slug] : undefined;

  if (!article) {
    return { title: 'Article Not Found | Saints Services Ltd' };
  }

  return {
    title: `${article.title} | Saints Services Ltd`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `https://www.saintsservices.co.uk/blog/${slug}`,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const article = slug ? articlesData[slug] : undefined;

  if (!article) {
    notFound();
  }

  const relatedArticles = Object.entries(articlesData)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 font-sans selection:bg-[#f59e0b] selection:text-slate-950 transition-colors duration-300">
      <Header />

      <article className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#f59e0b]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#f59e0b] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
            <Link href="/blog" className="hover:text-[#f59e0b] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
            <span className="text-[#f59e0b] truncate">{article.category}</span>
          </nav>

          <header className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-xs backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>{article.codeTag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-[1.08]">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-slate-800 dark:text-slate-200 font-bold">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          <div className="relative h-[300px] sm:h-[450px] rounded-sm overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl mb-12 bg-slate-100 dark:bg-slate-900">
            <Image 
              src={article.image} 
              alt={article.title}  
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
          </div>

          <div className="p-6 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 mb-10 shadow-lg backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-3">
              <ListOrdered className="w-4 h-4" />
              <span>Quick Nav // Topics</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
              <li><a href="#section1" className="hover:text-[#f59e0b] transition-colors">{article.section1Title}</a></li>
              <li><a href="#section2" className="hover:text-[#f59e0b] transition-colors">{article.section2Title}</a></li>
              <li><a href="#faq" className="hover:text-[#f59e0b] transition-colors">3. Frequently Asked Questions</a></li>
            </ul>
          </div>

          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-relaxed border-l-2 border-[#f59e0b] pl-4">
              {article.intro}
            </p>

            <h2 id="section1" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-6 border-b border-slate-200 dark:border-slate-800 pb-2">
              {article.section1Title}
            </h2>
            <p>{article.section1Content}</p>

            <div className="p-6 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 my-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-3xl font-black text-[#f59e0b] font-mono shrink-0">{article.statValue}</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">{article.statLabel}</div>
            </div>

            <div className="my-10 p-6 sm:p-8 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Need Licensed Site Security?</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">SIA-licensed personnel available for nationwide deployment within 2 hours.</p>
              </div>
              <Link 
                href="/contact" 
                className="group relative overflow-hidden shrink-0 bg-[#f59e0b] text-slate-950 font-black px-6 py-3 rounded-sm text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10">Get Immediate Quote</span>
                <ArrowRight className="relative z-10 w-4 h-4" />
              </Link>
            </div>

            <h2 id="section2" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-6 border-b border-slate-200 dark:border-slate-800 pb-2">
              {article.section2Title}
            </h2>
            <ul className="space-y-2.5">
              {article.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <section id="faq" className="pt-8 border-t border-slate-200 dark:border-slate-800 my-10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-4">
                {article.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{faq.q}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Social Share Bar Component */}
            <ShareButtons title={article.title} slug={slug} />

          </div>

          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-6">
              <FileText className="w-4 h-4" />
              <span>Related Security Guidance</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map(([itemSlug, itemData]) => (
                <Link 
                  key={itemSlug} 
                  href={`/blog/${itemSlug}`} 
                  className="group block p-5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] transition-all shadow-md"
                >
                  <div className="text-[10px] font-mono text-[#f59e0b] font-bold uppercase mb-1">{itemData.category}</div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors line-clamp-2 uppercase">
                    {itemData.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Published by <span className="text-slate-800 dark:text-white font-bold">{article.author}</span>
            </div>
            <Link 
              href="/blog" 
              className="text-xs font-mono text-[#f59e0b] hover:underline uppercase tracking-wider flex items-center gap-1 font-bold"
            >
              ← Back to All Articles
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}