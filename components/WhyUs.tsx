"use client";

import Image from 'next/image';
import { Award, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export function WhyUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: "100% Vetted Personnel",
      desc: "DBS checked officers and full SIA license verification to BS7858 standards."
    },
    {
      icon: Clock,
      title: "24/7 Control Room",
      desc: "Round-the-clock rapid mobile response and incident dispatch across the UK."
    },
    {
      icon: MapPin,
      title: "Nationwide Infrastructure",
      desc: "Multi-branch deployment and dedicated regional account managers."
    }
  ];

  return (
    <section id="why-us" className="relative min-h-[100dvh] flex flex-col justify-center bg-[#f8fafc] dark:bg-[#080f22] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 overflow-hidden py-12 lg:py-0 font-sans select-none transition-colors duration-300">
      
      {/* Background Ambient Glow (Dark Mode Only) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[140px] pointer-events-none hidden dark:block" />

      {/* DESKTOP BACKGROUND IMAGE */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-2/3 pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image 
            src="https://i.ibb.co/XZNsyGVL/why-us.jpg" 
            alt="Saints Services Operational Security" 
            fill
            priority
            sizes="100vw"
            className="object-cover object-[95%_center] opacity-85 dark:opacity-95 transition-opacity duration-300"
          />

          {/* Light Mode Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] from-10% via-[#f8fafc]/60 via-40% to-[#f8fafc]/0 to-80% dark:hidden transition-colors duration-300" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/40 to-transparent dark:hidden transition-colors duration-300" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f8fafc]/40 to-transparent dark:hidden transition-colors duration-300" />

          {/* Dark Mode Gradient Overlay */}
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#080f22] from-10% via-[#080f22]/60 via-40% to-[#080f22]/0 to-80% transition-colors duration-300" />
          <div className="hidden dark:block absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080f22] via-[#080f22]/40 to-transparent transition-colors duration-300" />
          <div className="hidden dark:block absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080f22]/40 to-transparent transition-colors duration-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Proof Copy */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0b1329] dark:bg-[#040914]/80 text-[#f59e0b] border border-transparent dark:border-white/15 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 shadow-md transition-colors">
              <Award className="w-4 h-4 text-[#f59e0b]" /> 
              <span>Compliance & Authority</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0b1329] dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight transition-colors">
              Built for Total Operational Security
            </h2>

            {/* MOBILE DEDICATED IMAGE CARD */}
            <div className="block lg:hidden relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md my-4">
              <Image 
                src="https://i.ibb.co/XZNsyGVL/why-us.jpg" 
                alt="Saints Services Operational Security" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[90%_center]"
              />
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-medium max-w-xl transition-colors">
              We bridge high-level security enforcement with flawless facility management—giving corporate, retail, and event clients total peace of mind across England, Scotland, and Wales.
            </p>

            <div className="space-y-3 mb-6 sm:mb-8">
              {[
                "Tailored Security Strategies to Meet Your Needs",
                "Highly Trained Personnel with Extensive Experience",
                "Commitment to Client Safety and Satisfaction",
                "Single-Site or Multi-Branch UK Contracts"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f59e0b] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#0b1329] dark:text-slate-200 transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-white/10 max-w-2xl transition-colors">
              {points.map((p, i) => (
                <div key={i} className="p-3 sm:p-0 rounded-xl bg-white/80 dark:bg-[#040914]/80 sm:bg-transparent sm:dark:bg-transparent border border-slate-200/80 dark:border-white/10 sm:border-none shadow-2xs sm:shadow-none transition-colors">
                  <h3 className="text-xs font-black text-[#0b1329] dark:text-white uppercase tracking-wide mb-1 transition-colors">{p.title}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed transition-colors">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}