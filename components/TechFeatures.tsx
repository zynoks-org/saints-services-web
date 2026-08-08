"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Smartphone, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export function TechFeatures() {
  const [activeTab, setActiveTab] = useState('technology');

  const tabs = [
    { id: 'technology', label: 'Technology & Tracking', icon: Smartphone },
    { id: 'professionalism', label: 'Professional Standards', icon: ShieldCheck },
    { id: 'experience', label: 'Industry Experience', icon: Briefcase },
    { id: 'reliability', label: 'Guaranteed Reliability', icon: Award },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 font-sans relative overflow-hidden select-none transition-colors duration-300">
      
      {/* INDUSTRIAL SVG CORNER RETICLES & DOT MATRIX BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f59e0b]/5 rounded-full blur-[160px]" />
        
        {/* Engineering Dot Matrix Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.10]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }}
        />

        {/* SVG Tactical Reticle / Crosshair Markers in Corners */}
        <svg className="absolute top-6 left-6 w-8 h-8 text-slate-400/30 dark:text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <svg className="absolute top-6 right-6 w-8 h-8 text-slate-400/30 dark:text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <svg className="absolute bottom-6 left-6 w-8 h-8 text-slate-400/30 dark:text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <svg className="absolute bottom-6 right-6 w-8 h-8 text-slate-400/30 dark:text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/10 dark:bg-[#080f22]/80 text-[#f59e0b] border border-slate-900/10 dark:border-white/15 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-md backdrop-blur-md transition-colors">
            <Smartphone className="w-3.5 h-3.5 text-[#f59e0b]" /> 
            <span className="text-slate-800 dark:text-[#f59e0b]">OPERATIONAL_ADVANTAGES // SYSTEM_METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase mb-4 transition-colors">
            Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-amber-500 to-amber-700 dark:via-amber-200 dark:to-white">Saints Services?</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
            Deploying fully vetted security personnel backed by real-time GPS patrol tracking, body-worn cameras, and instant control room escalation protocols.
          </p>
        </div>

        {/* TAB NAVIGATION CONTROLS (WITH GOLD SWEEP ANIMATION) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 border-b border-slate-200 dark:border-white/10 pb-6 transition-colors">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 border backdrop-blur-md overflow-hidden shadow-lg active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 dark:bg-[#0b1329] text-white border-slate-800 dark:border-[#f59e0b] scale-105 shadow-xl'
                    : 'bg-white dark:bg-[#080f22]/90 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/50'
                }`}
              >
                {/* Gold Fill Layer from Left to Right */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 transition-transform duration-500 ease-out z-0 ${
                  isActive ? 'translate-x-0' : 'translate-x-[-100%] group-hover:translate-x-0'
                }`} />

                <IconComp className={`relative z-10 w-4 h-4 transition-colors duration-300 ${
                  isActive ? 'text-[#040914]' : 'text-slate-400 dark:text-slate-400 group-hover:text-[#040914]'
                }`} />
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive ? 'text-[#040914]' : 'group-hover:text-[#040914]'
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT DISPLAY CONTAINER */}
        <div className="bg-white/95 dark:bg-[#080f22]/90 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden transition-colors duration-300">
          
          {/* TAB 1: TECHNOLOGY & TRACKING */}
          {activeTab === 'technology' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#f59e0b]/10 text-slate-900 dark:text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#f59e0b]/30">
                  <span>GPS Guard Tour Verification</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight transition-colors">
                  Innovative Real-Time Patrol Operations
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-6 transition-colors">
                  Saints Services harnesses advanced guard management software. Clients receive live checkpoint verification, automated duty clock-ins, and instant digital incident reporting across all assigned UK properties.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Live GPS Guard Patrol Tracking & Checkpoint Logging",
                    "Body Worn Cameras (BWC) & Two-Way Radio Dispatch Units",
                    "Instant Digital Incident Reports & Patrol Escalation",
                    "Transparent Shift Rotas & Automated Attendance Logs"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* UNIFIED GOLD SWEEP BUTTON */}
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-[#0b1329] text-white font-black px-7 py-4 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-slate-800 dark:border-white/20 backdrop-blur-md overflow-hidden shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#040914]">
                    Request Site Audit
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover:text-[#040914] group-hover:translate-x-1" />
                </Link>
              </div>

              {/* RIGHT SIDE IMAGE BOX */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-300 dark:border-white/15 shadow-xl">
                <Image 
                  src="/images/manned-guarding.png" 
                  alt="Technology & Tracking Operations"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between font-mono text-[11px] text-white">
                  <span>GPS_VERIFICATION_ACTIVE</span>
                  <span className="text-[#f59e0b]">LIVE</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROFESSIONAL STANDARDS */}
          {activeTab === 'professionalism' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#f59e0b]/10 text-slate-900 dark:text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#f59e0b]/30">
                  <span>Strict Regulatory Vetting</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight transition-colors">
                  100% SIA Licensed & BS7858 Vetted
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-6 transition-colors">
                  Every member of our guarding team is fully vetted to British Standard BS7858 requirements, encompassing 5-year employment history checks, criminal record clearances, right-to-work verification, and ongoing supervisory spot audits.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Mandatory Security Industry Authority (SIA) Licensing",
                    "Rigorous 5-Year Background & Employment Screening",
                    "Advanced De-escalation & First Aid Certification",
                    "Continuous Professional Development Audits"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* UNIFIED GOLD SWEEP BUTTON */}
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-[#0b1329] text-white font-black px-7 py-4 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-slate-800 dark:border-white/20 backdrop-blur-md overflow-hidden shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#040914]">
                    Verify Our Credentials
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover:text-[#040914] group-hover:translate-x-1" />
                </Link>
              </div>

              {/* RIGHT SIDE IMAGE BOX */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-300 dark:border-white/15 shadow-xl">
                <Image 
                  src="/images/security1.png" 
                  alt="Professional Standards & Vetting"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between font-mono text-[11px] text-white">
                  <span>SIA_ACCREDITED // BS7858</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INDUSTRY EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#f59e0b]/10 text-slate-900 dark:text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#f59e0b]/30">
                  <span>Multi-Sector Deployment</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight transition-colors">
                  Proven Expertise Across UK Industries
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-6 transition-colors">
                  From corporate office reception management and retail loss prevention to active construction site security and high-capacity event crowd control, our operatives bring seasoned sector-specific knowledge to every deployment.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Corporate Headquarter & Reception Security",
                    "Retail Loss Prevention & Asset Monitoring",
                    "Construction Site Gatehouse & Perimeter Defense",
                    "Festival, Concert & Corporate Event Crowd Management"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* UNIFIED GOLD SWEEP BUTTON */}
                <Link 
                  href="/services" 
                  className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-[#0b1329] text-white font-black px-7 py-4 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-slate-800 dark:border-white/20 backdrop-blur-md overflow-hidden shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#040914]">
                    Explore All Services
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover:text-[#040914] group-hover:translate-x-1" />
                </Link>
              </div>

              {/* RIGHT SIDE IMAGE BOX */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-300 dark:border-white/15 shadow-xl">
                <Image 
                  src="/images/event-security.png" 
                  alt="Multi-Sector Deployment Expertise"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between font-mono text-[11px] text-white">
                  <span>ACTIVE_DEPLOYMENTS</span>
                  <span className="text-[#f59e0b]">150+ UNITS</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: GUARANTEED RELIABILITY */}
          {activeTab === 'reliability' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#f59e0b]/10 text-slate-900 dark:text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#f59e0b]/30">
                  <span>Unbroken Operational Uptime</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight transition-colors">
                  98%+ Client Retention Rate
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-6 transition-colors">
                  We deliver consistent, dependable security supported by zero hidden charges, transparent hourly billing, real-time GPS tracking, and guaranteed emergency backup deployment within 1 hour.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Guaranteed 1-Hour Emergency Backup Response",
                    "Transparent Pricing with Zero Hidden Charges",
                    "Exceptional 98% Client Retention Across the UK",
                    "Dedicated Account Managers Available 24/7/365"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* UNIFIED GOLD SWEEP BUTTON */}
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-[#0b1329] text-white font-black px-7 py-4 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-slate-800 dark:border-white/20 backdrop-blur-md overflow-hidden shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#040914]">
                    Secure Your Venue Today
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover:text-[#040914] group-hover:translate-x-1" />
                </Link>
              </div>

              {/* RIGHT SIDE IMAGE BOX */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-300 dark:border-white/15 shadow-xl">
                <Image 
                  src="/images/hero-van.png" 
                  alt="Guaranteed Reliability & Rapid Response"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between font-mono text-[11px] text-white">
                  <span>SLA_RESPONSE_TIME</span>
                  <span className="text-emerald-400">&lt; 60 MINS</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}