"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceCard {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
}

export function ServicesGrid() {
  const services: ServiceCard[] = [
    {
      title: "Door Supervision",
      description: "Professional SIA-licensed door supervisors for secure venue management. Saints Services ensures controlled access and a safe environment with our licensed experts.",
      href: "/services/door-supervision",
      imageSrc: "https://i.ibb.co/hJc6P9kd/door-supervision.jpg",
      imageAlt: "Saints Services Door Supervision Operations",
      tag: "VENUE_SECURITY"
    },
    {
      title: "Event Security",
      description: "Tailored security for events of all sizes. Our team ensures a secure, smooth experience for every attendee, from corporate galas to outdoor festivals.",
      href: "/services/event-security",
      imageSrc: "https://i.ibb.co/XxWf5ZRg/event-security.png",
      imageAlt: "Saints Services Event Security",
      tag: "CROWD_SAFETY"
    },
    {
      title: "Key Holding",
      description: "Reliable key holding and swift 24/7 alarm response. Saints Services offers peace of mind with secure key management and rapid incident handling.",
      href: "/services/keyholding",
      imageSrc: "https://i.ibb.co/TBKL1mK0/keyholding-alarm-response-sla-guide.jpg",
      imageAlt: "Saints Services Mobile Response Van",
      tag: "RAPID_RESPONSE"
    },
    {
      title: "Security Guards",
      description: "Vigilant SIA-licensed security guards for comprehensive asset protection. Skilled guards tailored to your specific security needs, from retail to construction sites.",
      href: "/services/security-guards",
      imageSrc: "https://i.ibb.co/VY0pj6Mn/manned-guarding.png",
      imageAlt: "Saints Services Manned Guarding",
      tag: "MANNED_GUARDING"
    }
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
        
        {/* 2x2 GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/95 dark:bg-[#080f22]/90 border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/50 dark:hover:border-[#f59e0b]/50 rounded-lg p-6 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[350px] sm:min-h-[380px] shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300"
            >
              
              {/* Glowing Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#f59e0b] opacity-0 group-hover:opacity-100 shadow-[0_0_12px_#f59e0b] transition-all duration-300" />

              {/* HIGH-VISIBILITY BACKGROUND IMAGE */}
              <div className="absolute inset-y-0 right-0 w-full sm:w-3/4 pointer-events-none z-0 overflow-hidden">
                <Image 
                  src={service.imageSrc} 
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center opacity-70 dark:opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Lighter Radial/Linear Gradients for High Subject Visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-[#080f22] dark:via-[#080f22]/60 dark:to-transparent transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent dark:from-[#080f22]/90 dark:to-transparent transition-colors duration-300" />
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/80 to-transparent dark:from-[#080f22]/80 dark:to-transparent transition-colors duration-300" />
              </div>

              {/* CONTENT COLUMN (LEFT SIDE) */}
              <div className="relative z-10 max-w-xs sm:max-w-sm space-y-4">
                
                {/* TAG BADGE */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100/90 dark:bg-[#040914]/90 border border-slate-300 dark:border-white/15 text-[#f59e0b] text-[10px] font-mono font-bold tracking-widest uppercase shadow-md backdrop-blur-md transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>{service.tag}</span>
                </div>

                {/* TITLE & DIVIDER */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none group-hover:text-[#f59e0b] dark:group-hover:text-amber-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-full bg-slate-300 dark:bg-white/15 group-hover:bg-[#f59e0b]/60 transition-colors" />
                    <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-[#f59e0b] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold sm:font-medium leading-relaxed drop-shadow-sm transition-colors">
                  {service.description}
                </p>

                {/* UNIFIED BUTTON */}
                <div className="pt-2">
                  <Link 
                    href={service.href}
                    className="group/btn relative inline-flex items-center justify-center gap-2.5 bg-slate-900 dark:bg-[#0b1329] text-white font-black px-6 py-3 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-slate-800 dark:border-white/20 backdrop-blur-md overflow-hidden shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0" />

                    <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#080f22]">
                      Learn More
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover/btn:text-[#080f22] group-hover/btn:translate-x-1" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}