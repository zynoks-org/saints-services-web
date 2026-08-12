"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Shield, 
  ChevronRight, 
  Phone,
  UserCheck,
  Calendar,
  KeyRound,
  ShieldAlert
} from 'lucide-react';

export function Hero() {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const services = [
    { title: "Door Supervision", desc: "Front-of-house conflict management & door safety", icon: UserCheck, href: "/services/door-supervision" },
    { title: "Event Security", desc: "Comprehensive crowd control & high-profile event safety", icon: Calendar, href: "/services/event-security" },
    { title: "Key Holding", desc: "24/7 mobile alarm response & premises inspection", icon: KeyRound, href: "/services/keyholding" },
    { title: "Manned Guarding", desc: "Static guarding & continuous mobile patrol units", icon: ShieldAlert, href: "/services/security-guards" },
  ];

  return (
    <section className="relative w-full h-[calc(100vh-104px)] min-h-[500px] bg-slate-100 dark:bg-[#080f22] transition-colors duration-300 overflow-hidden flex flex-col justify-between font-sans select-none">
      
      {/* 1. REFINED BACKGROUND IMAGE & SLATE NAVY GRADIENT MASKS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Horizontal Gradient: Light Mode uses subtle slate fade; Dark Mode uses slate navy fade with high officer visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 via-slate-100/40 to-transparent dark:from-[#080f22] dark:via-[#080f22]/50 dark:to-transparent z-10 transition-colors duration-300" />
        
        {/* Soft Vertical Edge Blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 via-transparent to-slate-100/50 dark:from-[#080f22] dark:via-transparent dark:to-[#080f22]/50 z-10 transition-colors duration-300" />
        
        <Image 
          src="https://i.ibb.co/60pj5vqm/security-services.jpg" 
          alt="Saints Services Security Operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* 2. MAIN HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-center pb-4">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-lg bg-slate-900/80 dark:bg-[#0b1329]/80 border border-white/20 dark:border-white/15 backdrop-blur-md mb-4 shadow-md">
            <Shield className="w-3.5 h-3.5 text-[#f59e0b]" /> 
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-100 dark:text-slate-200">
              SIA TRAINED SECURITY GUARDS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-4 drop-shadow-sm transition-colors">
            Uncompromising Security. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-amber-500 to-amber-700 dark:via-amber-200 dark:to-white">
              Absolute Confidence.
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed max-w-xl mb-6 transition-colors">
            Saints Services Ltd delivers elite, SIA-licensed security solutions tailored to protect your personnel, assets, and reputation across the United Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            {/* Primary Quote Button (Gold Sweep) */}
            <Link 
              href="/contact" 
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-[#0b1329]/90 text-white font-black px-7 py-3 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-slate-800 dark:border-white/15 backdrop-blur-md overflow-hidden shadow-xl active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">
                Request Comprehensive Quote
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover:text-[#080f22] group-hover:translate-x-1" />
            </Link>

            {/* Phone Button (Blue Sweep) */}
            <a 
              href="tel:07412733920" 
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900/80 dark:bg-[#0b1329]/60 text-white font-bold px-7 py-3 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-slate-700 dark:border-white/20 backdrop-blur-md overflow-hidden shadow-lg active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              <Phone className="relative z-10 w-4 h-4 text-sky-400 transition-colors duration-300 group-hover:text-white" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                07412 733920
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM ACCORDION STRIP */}
      <div className="relative z-20 border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#080f22]/95 backdrop-blur-2xl shrink-0 shadow-lg dark:shadow-[0_-10px_30px_rgba(0,0,0,0.5)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              const isHovered = hoveredTab === idx;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onMouseEnter={() => setHoveredTab(idx)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`p-4 lg:p-6 flex flex-col justify-between transition-all duration-300 group relative overflow-hidden ${
                    isHovered ? 'bg-slate-100/80 dark:bg-white/5' : 'bg-transparent'
                  }`}
                >
                  {/* Glowing Accent Line on Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isHovered ? 'bg-[#f59e0b] opacity-100 shadow-[0_0_12px_#f59e0b]' : 'bg-transparent opacity-0'
                  }`} />

                  <div>
                    <div className="flex items-center justify-between mb-2 lg:mb-3">
                      <div className={`transition-colors duration-300 ${
                        isHovered ? 'text-[#f59e0b]' : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        <IconComp className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-all duration-300 ${
                        isHovered ? 'text-[#f59e0b] translate-x-1' : 'text-slate-400 dark:text-slate-500'
                      }`} />
                    </div>

                    <h3 className={`text-xs sm:text-sm lg:text-base font-bold transition-colors duration-200 mb-0.5 lg:mb-1 ${
                      isHovered ? 'text-[#f59e0b] dark:text-white' : 'text-slate-900 dark:text-slate-200'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-[10px] sm:text-[11px] lg:text-xs text-slate-600 dark:text-slate-400 font-medium line-clamp-1 lg:line-clamp-2 transition-colors duration-200 group-hover:text-slate-900 dark:group-hover:text-slate-100">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}