"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GetInTouch } from '@/components/GetInTouch';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileCheck, 
  ChevronRight,
  Lock,
  Radio,
  FileBadge,
  Clock,
  Send,
  UsersRound,
  ShieldUser,
  KeyRound
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
    badge: "SIA LICENSED // DOOR SUPERVISORS",
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

interface ServiceClientProps {
  slug: string;
}

export default function ServiceDetailClient({ slug }: ServiceClientProps) {
  const service = servicesData[slug];

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(service ? service.title : 'Security Guards');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('firstName') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      service: selectedService,
      details: (form.elements.namedItem('details') as HTMLTextAreaElement)?.value || 'N/A'
    };

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert('Failed to dispatch quote request. Please try again.');
        console.error(result.error);
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Network error connecting to dispatch server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] font-sans text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
      <Header />

      <main className="grow">
        {/* ========================================== */}
        {/* 1. HERO SECTION                            */}
        {/* ========================================== */}
        <section className="relative bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
          
          {/* Tactical Dot Grid Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 z-0"
            style={{
              backgroundImage: 'radial-gradient(currentColor 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Ambient Amber Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <Link href="/services" className="hover:text-[#f59e0b] transition-colors">SERVICES</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span className="text-[#f59e0b] uppercase">{slug.replace('-', '_')}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs backdrop-blur-md transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                  <span>{service.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4 sm:mb-6 uppercase transition-colors">
                  {service.title}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl transition-colors">
                  {service.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                  <button 
                    type="button"
                    onClick={() => {
                      const element = document.getElementById('quote-form');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-slate-950 font-black px-7 py-3.5 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    <span className="relative z-10">Request a Quote</span>
                    <ArrowRight className="relative z-10 w-4 h-4" />
                  </button>

                  <a 
                    href="tel:07412733920" 
                    className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-extrabold px-6 py-3.5 rounded-sm text-xs sm:text-sm transition-all border border-slate-300 dark:border-slate-800 shadow-md active:scale-95 uppercase tracking-wider"
                  >
                    <PhoneCall className="w-4 h-4 text-[#f59e0b]" />
                    <span>Talk to an Expert</span>
                  </a>
                </div>
              </div>

              {/* QUOTE FORM CARD */}
              <div id="quote-form" className="lg:col-span-5 relative px-2">
                
                {/* Tactical Corner Brackets */}
                <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-12 h-12 border-t-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-12 h-12 border-b-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />

                <div className="bg-white dark:bg-[#070d1e] text-slate-900 dark:text-white p-6 sm:p-8 rounded-sm border border-slate-200 dark:border-slate-800 shadow-2xl relative z-10 transition-colors">
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                    <Lock className="w-3 h-3 text-[#f59e0b]" />
                    <span>FAST_DISPATCH // 2_HR_RESPONSE</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">Request a Quote</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-6">
                    Get an operational quotation for {service.title} within 2 hours.
                  </p>

                  {submitted ? (
                    <div className="bg-slate-50 dark:bg-[#0b1329] text-slate-900 dark:text-white p-6 sm:p-8 rounded-sm text-center border border-slate-200 dark:border-slate-800 shadow-lg">
                      <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-2" />
                      <h4 className="text-lg font-black mb-1 uppercase tracking-tight">Request Dispatched</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs font-medium">Our dispatch manager will review your site specifications shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input 
                          type="text" 
                          name="firstName"
                          required 
                          placeholder="Full Name *" 
                          className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                        />
                        <input 
                          type="tel" 
                          name="phone"
                          required 
                          placeholder="Phone Number *" 
                          className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                        />
                      </div>

                      <input 
                        type="email" 
                        name="email"
                        required 
                        placeholder="Work Email *" 
                        className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                      />

                      <div>
                        <CustomServiceSelect 
                          value={selectedService} 
                          onChange={setSelectedService} 
                        />
                      </div>

                      <textarea 
                        name="details"
                        rows={3} 
                        placeholder="Your site specs (postcode, shift hours, duties required)..." 
                        className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none transition-colors" 
                      />

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-3.5 rounded-sm text-xs sm:text-sm transition-all shadow-md active:scale-95 uppercase tracking-wider cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                        <span className="relative z-10">{loading ? "Dispatching..." : "Submit Specification"}</span>
                        <Send className="relative z-10 w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. OVERVIEW & SPECS SECTION                */}
        {/* ========================================== */}
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest transition-colors">
                  <FileBadge className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>OPERATIONAL_SCOPE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight">
                  {service.title} Overview
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                  {service.overview}
                </p>

                <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 p-6 rounded-sm space-y-3 shadow-md transition-colors">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#f59e0b]" />
                    <span>Compliance & Vetting Guarantees</span>
                  </h3>
                  
                  {service.complianceList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables Card */}
              <div className="lg:col-span-5 bg-white dark:bg-[#0b1329] text-slate-900 dark:text-white p-6 sm:p-8 rounded-sm border border-slate-200 dark:border-slate-800 shadow-xl transition-colors">
                <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm mb-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-1">
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    <span>NATIONWIDE_DISPATCH</span>
                  </div>
                  <div className="text-lg font-black uppercase text-slate-900 dark:text-white">Key Deliverables</div>
                </div>

                <div className="space-y-3 text-xs font-bold text-slate-800 dark:text-slate-200">
                  {service.keySpecs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-sm bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. DEPLOYMENT PROCESS SECTION              */}
        {/* ========================================== */}
        <section className="py-16 sm:py-24 bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>STRUCTURED_WORKFLOW</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                Deployment Process
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">
                Our structured 3-step deployment framework engineered for fast site handover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.deploymentProcess.map((proc, idx) => (
                <div key={idx} className="bg-white dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-sm relative shadow-lg transition-colors">
                  <span className="text-2xl font-black text-[#f59e0b] font-mono block mb-3">
                    {proc.step}
                  </span>
                  <h3 className="text-base font-black text-slate-900 dark:text-white uppercase mb-2">{proc.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* QUICK SERVICE SWITCHER */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-4 text-center sm:text-left">
                Explore Other Operational Services
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Manned Guarding", icon: ShieldUser, slug: "security-guards" },
                  { label: "Key Holding & Alarm", icon: KeyRound, slug: "keyholding" },
                  { label: "Door Supervision", icon: FileBadge, slug: "door-supervision" },
                  { label: "Event Security", icon: UsersRound, slug: "event-security" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  const isActive = slug === item.slug;

                  return (
                    <Link
                      key={idx}
                      href={`/services/${item.slug}`}
                      className={`group relative overflow-hidden bg-white dark:bg-[#070d1e] rounded-sm px-5 py-4 flex items-center justify-between border transition-all duration-300 shadow-md cursor-pointer active:scale-98 ${
                        isActive 
                          ? 'border-[#f59e0b]' 
                          : 'border-slate-200 dark:border-slate-800 hover:border-[#f59e0b]/60'
                      }`}
                    >
                      <div className="absolute inset-y-0 left-0 w-1 bg-[#f59e0b] z-20" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                      <div className="relative z-10 flex items-center gap-3.5 pl-2">
                        <ItemIcon className="w-4 h-4 shrink-0 text-[#f59e0b] group-hover:text-[#0b1329] transition-colors duration-300" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-[#0b1329] transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>

                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-[#0b1329] group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-2" />
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 4. DIRECT CONTACT CTA SECTION              */}
        {/* ========================================== */}
        <GetInTouch />
      </main>

      <Footer />
    </div>
  );
}