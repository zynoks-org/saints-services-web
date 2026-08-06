"use client";

import React, { useState } from 'react';
import { ClipboardCheck, GraduationCap, BadgePercent, Award } from 'lucide-react';

export function SecurityBenefitsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      number: "01",
      title: "Bespoke Tailored Solutions",
      icon: ClipboardCheck,
      description: "Every commercial facility presents unique risk factors. Our specialists conduct thorough site evaluations to engineer customized security frameworks aligned with your sector, venue layout, and operational mandates—ensuring robust protection without impeding daily workflows."
    },
    {
      number: "02",
      title: "Highly Trained Experts",
      icon: GraduationCap,
      description: "Every officer deployed by Saints Services Ltd holds active SIA licensing and completes advanced training modules. From conflict de-escalation and emergency dispatch to first aid and site-specific protocols, our personnel deliver authoritative, highly competent protection."
    },
    {
      number: "03",
      title: "Competitive Rates",
      icon: BadgePercent,
      description: "We deliver enterprise-grade protection with complete cost transparency and zero hidden charges. By maintaining exceptionally low staff turnover and optimized operational rotas, we provide dependable 24/7 guarding solutions that deliver maximum value for your budget."
    },
    {
      number: "04",
      title: "98% Customer Retention Rate",
      icon: Award,
      description: "Our sustained 98% client retention rate reflects an uncompromised commitment to operational reliability. We build long-term corporate partnerships across the UK by combining rigorous guarding standards, real-time technology oversight, and trusted frontline performance."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 relative overflow-hidden font-sans select-none transition-colors duration-300">
      
      {/* 1. INDUSTRIAL SVG CORNER RETICLES & DOT MATRIX BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Ambient Glow */}
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
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold text-[#f59e0b] bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 px-3.5 py-1 rounded-lg uppercase tracking-widest inline-block mb-3 backdrop-blur-md shadow-md transition-colors">
            OPERATIONAL_EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase transition-colors">
            Why Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-amber-500 to-amber-700 dark:via-amber-200 dark:to-white">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((item, index) => {
            const IconComp = item.icon;
            const isHovered = hoveredCard === index;
            return (
              <div 
                key={index} 
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white/95 dark:bg-[#040914]/90 border border-slate-200 dark:border-white/10 p-6 sm:p-8 rounded-lg shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-slate-300 dark:hover:border-white/20"
              >
                {/* Large Background Watermark Number (Lights up brighter gold on hover) */}
                <span className={`absolute right-4 bottom-2 text-7xl sm:text-8xl font-black select-none pointer-events-none font-mono transition-colors duration-500 ${
                  isHovered 
                    ? 'text-[#f59e0b]/[0.18] dark:text-[#f59e0b]/[0.12]' 
                    : 'text-slate-900/[0.04] dark:text-white/[0.03]'
                }`}>
                  {item.number}
                </span>

                {/* Glowing Top Accent Line on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                  isHovered ? 'bg-[#f59e0b] opacity-100 shadow-[0_0_12px_#f59e0b]' : 'bg-transparent opacity-0'
                }`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3.5 rounded-lg transition-all duration-300 shrink-0 ${
                      isHovered 
                        ? 'bg-[#f59e0b] text-[#040914] scale-110' 
                        : 'bg-slate-100 dark:bg-white/5 text-[#f59e0b] border border-slate-200 dark:border-white/10'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}