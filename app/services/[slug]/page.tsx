"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GetInTouch } from '@/components/GetInTouch';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileCheck, 
  ChevronRight,
  Lock,
  Radio,
  FileBadge
} from 'lucide-react';

// Centralized Data Store with Exact Slug Matches
const servicesData: Record<string, {
  title: string;
  badge: string;
  subtitle: string;
  overview: string;
  keySpecs: string[];
  complianceList: string[];
  deploymentProcess: { step: string; title: string; desc: string }[];
}> = {
  "security-guards": {
    title: "Manned Guarding & Security Guards",
    badge: "SIA LICENSED // 24/7 OPERATIONS",
    subtitle: "Static guarding, gatehouse controls, and mobile perimeter patrols engineered for corporate, industrial, and high-value UK assets.",
    overview: "Saints Services Ltd delivers fully vetted, SIA-licensed manned guarding personnel trained to handle access authorization, emergency response protocols, and continuous physical patrols. Our officers serve as a formidable visible deterrent against unauthorized entry, vandalism, and asset loss.",
    keySpecs: [
      "BS7858 Vetted & SIA Licensed Officers",
      "Real-Time Digital Patrol GPS Tracking",
      "Gatehouse & Vehicle Clearance Controls",
      "24/7 Control Room Escalation Protocol",
      "Keyholding & Alarm Response Integration"
    ],
    complianceList: [
      "Fully compliant with UK Security Industry Authority (SIA) regulations.",
      "Vetted to British Standard BS7858 (5-year background & employment check).",
      "Comprehensive £10M Public & Employers' Liability Insurance coverage."
    ],
    deploymentProcess: [
      { step: "01", title: "Site Assessment", desc: "Our tactical operations team conducts an on-site security survey to map perimeter vulnerabilities." },
      { step: "02", title: "Assignment Instructions", desc: "We draft tailored site-specific Guard Assignment Instructions (AIs) detailing patrol routes and incident rules." },
      { step: "03", title: "Officer Deployment", desc: "Fully uniformed, SIA-licensed guards are dispatched with live GPS patrol tracking active." }
    ]
  },
  "keyholding": {
    title: "Key Holding & Alarm Response",
    badge: "24/7 ALARM RESPONSE // MOBILE PATROLS",
    subtitle: "Rapid 24/7 mobile emergency response, secure key storage, and vacant property inspections across the UK.",
    overview: "Saints Services Ltd securely stores your site keys in audited electronic safes while our 24/7 Alarm Receiving Centre (ARC) monitors your premises. Upon alarm activation, mobile response guards dispatch immediately to inspect, resolve threats, and reset your systems.",
    keySpecs: [
      "NPCC Compliant Emergency Alarm Response",
      "Encrypted GPS-Tracked Key Safe Transit",
      "Vacant Property Inspections & Sweeps",
      "Liaison with UK Emergency Services",
      "Instant Digital Photo Incident Reporting"
    ],
    complianceList: [
      "Adheres strictly to BS7984 keyholding and response operational standards.",
      "100% SIA-licensed mobile response officers.",
      "Encrypted key storage with zero site addresses attached."
    ],
    deploymentProcess: [
      { step: "01", title: "Key Onboarding", desc: "Keys are collected, coded into encrypted safes, and tested with your ARC provider." },
      { step: "02", title: "Patrol Assignment", desc: "Local mobile units map fastest route access for off-hours dispatch." },
      { step: "03", title: "24/7 Monitoring", desc: "Continuous monitoring ensures instant mobile guard dispatch upon alarm trigger." }
    ]
  },
  "door-supervision": {
    title: "Door Supervision & Venue Security",
    badge: "SIA APPROVED // DOOR SUPERVISORS",
    subtitle: "Licensed door supervisors for hospitality venues, corporate events, and licensed premises across the UK.",
    overview: "High-capacity licensed venues require security expertise beyond standard perimeter watching. Saints Services deploys SIA door supervisors trained in crowd management, entry screening, and conflict de-escalation to protect your visitors and brand image.",
    keySpecs: [
      "SIA Licensed Door Supervisors",
      "Crowd Management & Ingress Control",
      "ID Verification & Search Screening",
      "Incident De-escalation Expertise",
      "Body-Worn Camera (BWC) Integration"
    ],
    complianceList: [
      "Fully certified under SIA Licensing Regulations for Licensed Premises.",
      "Trained in First Aid and Counter-Terrorism Awareness (ACT).",
      "Continuous supervisory field audits."
    ],
    deploymentProcess: [
      { step: "01", title: "Venue Audit", desc: "We assess venue capacity, entrance choke points, and licensing stipulations." },
      { step: "02", title: "Team Briefing", desc: "Supervisors receive venue-specific instructions on dress code, guest policy, and risk zones." },
      { step: "03", title: "Live Management", desc: "On-site chief supervisor coordinates door operations and maintains real-time control room logs." }
    ]
  },
  "event-security": {
    title: "Event Security & Crowd Safety",
    badge: "RAPID EVENT DEPLOYMENT // STEWARDING",
    subtitle: "Crowd control, entry queue management, and VIP protection for festivals, corporate galas, and venue events.",
    overview: "Managing public and private events requires high-visibility security paired with conflict de-escalation expertise. Saints Services provides trained event stewards and SIA door supervisors qualified to handle crowd flows, bag searches, and emergency evacuation protocols.",
    keySpecs: [
      "SIA Door Supervisors & Event Safety Stewards",
      "Queue Control & Search/Screening Points",
      "VIP & Speaker Protection Services",
      "Emergency Evacuation Coordination",
      "Radio Communications & Control Desk Link"
    ],
    complianceList: [
      "Operates under strict Safety at Sports Grounds & Event Safety Guide standards.",
      "Trained in counter-terrorism awareness (ACT / Action Counters Terrorism).",
      "Crowd control teams certified in emergency first aid."
    ],
    deploymentProcess: [
      { step: "01", title: "Event Briefing", desc: "We review capacity estimates, entry choke points, and VIP movement routes with organizers." },
      { step: "02", title: "Crowd Plan", desc: "Formulate ingress, egress, search protocols, and designated emergency clearing corridors." },
      { step: "03", title: "Event Execution", desc: "Deploy radio-linked stewards and SIA door supervisors monitored by an on-site chief marshal." }
    ]
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = servicesData[slug];
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    notFound();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070d1e] font-sans text-white flex flex-col justify-between">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative bg-[#0b1329] text-white py-12 sm:py-20 lg:py-24 border-b border-slate-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/services" className="hover:text-[#f59e0b] transition-colors">SERVICES</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-[#f59e0b] uppercase">{slug.replace('-', '_')}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                  <span>{service.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4 sm:mb-6 uppercase">
                  {service.title}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                  {service.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                  <a 
                    href="#quote-form" 
                    className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-extrabold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95 border border-amber-400 uppercase tracking-wider"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a 
                    href="tel:07412733920" 
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all border border-slate-700 shadow-md active:scale-95 uppercase tracking-wider"
                  >
                    <PhoneCall className="w-4 h-4 text-[#f59e0b]" />
                    <span>Talk to an Expert</span>
                  </a>
                </div>
              </div>

              {/* QUOTE FORM CARD */}
              <div id="quote-form" className="lg:col-span-5 relative px-2">
                <div className="bg-[#0b1329] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                    <Lock className="w-3 h-3 text-[#f59e0b]" />
                    <span>FAST_DISPATCH // 2_HR_RESPONSE</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1 uppercase tracking-tight">Request a Quote</h3>
                  <p className="text-slate-400 text-xs font-medium mb-6">
                    Get an operational quotation for {service.title} within 2 hours.
                  </p>

                  {submitted ? (
                    <div className="bg-slate-900 text-white p-6 rounded-2xl text-center border border-slate-800">
                      <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-2" />
                      <h4 className="text-lg font-black mb-1">Request Dispatched</h4>
                      <p className="text-slate-300 text-xs font-medium">Our dispatch manager will review your specs shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="text" required placeholder="First name *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                        <input type="tel" required placeholder="Phone number *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                      </div>

                      <input type="email" required placeholder="Email Address *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />

                      <textarea rows={3} placeholder="Your site specs (location, shift hours)..." className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] resize-none" />

                      <button type="submit" className="w-full bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-black py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 uppercase tracking-wider cursor-pointer">
                        Submit Specification
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* OVERVIEW & SPECS */}
        <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0b1329] text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest">
                  <FileBadge className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>OPERATIONAL_SCOPE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#0b1329] tracking-tight uppercase leading-tight">
                  {service.title} Overview
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {service.overview}
                </p>

                <div className="bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl space-y-3">
                  <h3 className="text-sm font-black text-[#0b1329] uppercase tracking-wider flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#f59e0b]" />
                    <span>Compliance & Vetting Guarantees</span>
                  </h3>
                  
                  {service.complianceList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0b1329] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0b1329] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl">
                <div className="bg-slate-900 border border-slate-800 text-white p-4 rounded-2xl mb-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-1">
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    <span>NATIONWIDE_DISPATCH</span>
                  </div>
                  <div className="text-lg font-black uppercase text-white">Key Deliverables</div>
                </div>

                <div className="space-y-3 text-xs font-bold text-slate-200">
                  {service.keySpecs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* DEPLOYMENT STEPS */}
        <section className="py-16 sm:py-24 bg-[#050914] text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
                Deployment Process
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Our structured 3-step deployment framework engineered for fast site handover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.deploymentProcess.map((proc, idx) => (
                <div key={idx} className="bg-[#0b1329] border border-slate-800 p-6 sm:p-8 rounded-2xl relative">
                  <span className="text-2xl font-black text-[#f59e0b] font-mono block mb-3">
                    {proc.step}
                  </span>
                  <h3 className="text-base font-black text-white uppercase mb-2">{proc.title}</h3>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GetInTouch />
      </main>

      <Footer />
    </div>
  );
}