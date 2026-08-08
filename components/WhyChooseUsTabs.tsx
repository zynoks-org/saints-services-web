"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Terminal, Activity } from 'lucide-react';

interface TabData {
  id: string;
  label: string;
  title: string;
  codeTag: string;
  paragraphs: string[];
  imageSrc: string;
}

export function WhyChooseUsTabs() {
  const [activeTab, setActiveTab] = useState('technology');

  const tabContent: Record<string, TabData> = {
    technology: {
      id: 'technology',
      label: 'TECHNOLOGY',
      codeTag: 'SYS // LIVE_PATROL_GPS',
      title: 'Advanced Digital Tracking & Real-Time Monitoring',
      paragraphs: [
        "Saints Services Ltd integrates modern workforce management software into every active deployment. Our live GPS checkpoint verification enables facility managers to track officer rotas, verify patrol completion, and review guard activity logs instantly.",
        "Equipped with HD body-worn cameras, two-way encrypted radios, and digital incident reporting tools, our field officers maintain full transparency. Every site interaction is logged automatically, offering undeniable proof of service."
      ],
      imageSrc: '/images/security-services.jpg'
    },
    professionalism: {
      id: 'professionalism',
      label: 'PROFESSIONALISM',
      codeTag: 'SEC // BS7858_VETTED',
      title: 'Uncompromising Standards & SIA-Licensed Officers',
      paragraphs: [
        "Every member of our operational team undergoes rigorous BS7858 background screening, including 5-year employment history verification, credit checks, and criminal record clearance prior to site placement.",
        "We balance robust physical deterrence with exceptional customer care. Our officers act as polished brand ambassadors for your business—trained in conflict de-escalation, access clearance protocols, and emergency response."
      ],
      imageSrc: '/images/why-us.png'
    },
    experience: {
      id: 'experience',
      label: 'EXPERIENCE',
      codeTag: 'OPS // MULTI_SECTOR_DEFENSE',
      title: 'Proven Multi-Sector Defense & Operational Mastery',
      paragraphs: [
        "With extensive operational experience across the UK, Saints Services Ltd understands the nuanced security risks inherent to different commercial sectors.",
        "From corporate headquarters and high-footfall retail centers to active construction perimeters and high-capacity event venues, we design bespoke protection strategies tailored specifically to your risk assessment profile."
      ],
      imageSrc: '/images/joinus.png'
    },
    reliability: {
      id: 'reliability',
      label: 'RELIABILITY',
      codeTag: 'CTRL // 24_7_DISPATCH',
      title: '24/7 Dispatch Control & Zero-Downtime Guarantee',
      paragraphs: [
        "Security threats do not adhere to business hours. Our London control room operates 24/7/365 to oversee field operations, manage shift handovers, and coordinate rapid mobile response officers whenever emergency backup is required.",
        "Backed by a 98% client retention rate, we take pride in absolute punctuality and dependable service execution. When you contract Saints Services Ltd, your site remains protected without interruption."
      ],
      imageSrc: '/images/security-services.jpg'
    }
  };

  const current = tabContent[activeTab];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#070d1e] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      
      {/* Tactical Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-15 z-0"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 dark:bg-[#f59e0b]/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-amber-600 dark:text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-amber-600 dark:text-[#f59e0b]" />
            <span>EXCELLENCE_METRICS // SAINTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">
            Why Partner with Saints Services Ltd?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Tailored security architecture, vetted personnel, and transparent operational dispatch across the UK.
          </p>
        </div>

        {/* TACTICAL TAB SWITCHER */}
        <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-1.5 rounded-2xl mb-8 sm:mb-12 shadow-xl backdrop-blur-md">
          {Object.values(tabContent).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`py-3.5 px-3 text-xs font-mono font-bold tracking-wider transition-all rounded-xl cursor-pointer text-center uppercase flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-amber-500 dark:bg-[#f59e0b] text-slate-950 dark:text-[#0b1329] shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <Activity className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'text-slate-950 dark:text-[#0b1329]' : 'text-slate-400 dark:text-slate-500'}`} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ACTIVE TAB DISPLAY WITH TACTICAL BRACKETS */}
        <div className="relative px-2">
          
          {/* Top Left Bracket */}
          <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-16 h-16 border-t-2 border-l-2 border-amber-500 dark:border-[#f59e0b] rounded-tl-2xl z-20 pointer-events-none" />
          {/* Bottom Right Bracket */}
          <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-16 h-16 border-b-2 border-r-2 border-amber-500 dark:border-[#f59e0b] rounded-br-2xl z-20 pointer-events-none" />

          <div className="bg-slate-50 dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT: TEXT CONTENT */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-amber-600 dark:text-[#f59e0b] text-[10px] font-mono font-bold tracking-widest uppercase">
                  <span>{current.codeTag}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                  {current.title}
                </h3>

                {current.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 dark:bg-[#f59e0b] dark:hover:bg-amber-500 text-slate-950 dark:text-[#0b1329] font-extrabold px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Request Operational Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* RIGHT: FEATURED IMAGE */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-200 dark:bg-[#070d1e]">
                <Image 
                  src={current.imageSrc} 
                  alt={current.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center opacity-90 hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#0b1329] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 dark:bg-[#0b1329]/90 border border-slate-200 dark:border-slate-800 rounded-xl backdrop-blur-md flex items-center gap-3 shadow-lg">
                  <ShieldCheck className="w-5 h-5 text-amber-500 dark:text-[#f59e0b] shrink-0" />
                  <span className="text-[11px] font-mono text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">Verified Security Protocol</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}