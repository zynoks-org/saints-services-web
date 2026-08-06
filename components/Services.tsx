"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const currentDrag = useRef(0);

  const servicesList = [
    {
      id: "door-supervision",
      num: "01",
      total: "04",
      title: "Man Guarding & Patrols",
      badge: "SIA APPROVED",
      img: "/images/manned-guarding.png",
      description: "Our highly trained security personnel offer man guarding services, ensuring constant protection and surveillance for your premises, events, and properties.",
      highlights: [
        "Static Guarding & Mobile Patrol Units",
        "Gatehouse & Access Control Management",
        "Real-Time Incident & Patrol Logging"
      ]
    },
    {
      id: "event-security",
      num: "02",
      total: "04",
      title: "Event Security & Safety",
      badge: "RAPID DEPLOYMENT",
      img: "/images/event-security.png",
      description: "We provide top-notch event security services, managing all aspects of safety for your events and gatherings, ensuring a secure environment for all attendees.",
      highlights: [
        "Crowd Control & Queue Management",
        "VIP & Speaker Protection Services",
        "Emergency Evacuation Response Teams"
      ]
    },
    {
      id: "retail-security",
      num: "03",
      total: "04",
      title: "Retail Loss Prevention",
      badge: "STORE PROTECTION",
      img: "/images/retail-security.png",
      description: "Our retail security solutions include manned personnel and surveillance systems aimed at preventing theft and ensuring the safety of customers and staff.",
      highlights: [
        "Front-of-House Loss Deterrence",
        "Conflict De-escalation Officers",
        "CCTV Monitoring & Surveillance"
      ]
    },
    {
      id: "commercial-cleaning",
      num: "04",
      total: "04",
      title: "Commercial Facilities Cleaning",
      badge: "HYGIENE STANDARD",
      img: "/images/security-services.jpg",
      description: "Comprehensive facilities maintenance and customized commercial cleaning rotas keeping offices, retail outlets, and venue spaces spotless.",
      highlights: [
        "Scheduled Commercial Cleaning Rotas",
        "Post-Event & Deep Sanitization",
        "Eco-Friendly Cleaning Solutions"
      ]
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? servicesList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === servicesList.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    currentDrag.current = 0;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startX.current;
    currentDrag.current = delta;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 70;
    if (currentDrag.current < -threshold) {
      handleNext();
    } else if (currentDrag.current > threshold) {
      handlePrev();
    }

    setDragOffset(0);
    currentDrag.current = 0;
  };

  const currentService = servicesList[currentIndex];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-100 dark:bg-[#080f22] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 overflow-hidden select-none font-sans relative transition-colors duration-300">
      
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-lg bg-slate-900/10 dark:bg-[#040914]/70 border border-slate-900/10 dark:border-white/15 backdrop-blur-md text-[#f59e0b] mb-3 shadow-md transition-colors">
              <Shield className="w-3.5 h-3.5" /> 
              <span className="text-[11px] font-bold uppercase tracking-widest font-mono text-slate-800 dark:text-[#f59e0b]">
                CAPABILITIES // CORE_SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase transition-colors">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-amber-500 to-amber-700 dark:via-amber-200 dark:to-white">Services</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-base sm:text-xl bg-slate-200/80 dark:bg-[#040914]/80 px-4 py-2 rounded-lg border border-slate-300 dark:border-white/15 backdrop-blur-md shadow-lg self-start sm:self-auto transition-colors">
            <span className="font-black text-slate-900 dark:text-white">{currentService.num}</span>
            <span className="text-slate-400 dark:text-slate-600 font-bold">/</span>
            <span className="text-slate-600 dark:text-slate-400 font-bold">{currentService.total}</span>
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative flex items-center justify-center">

          {/* PREV BUTTON */}
          <button 
            onClick={handlePrev}
            className="hidden lg:flex shrink-0 -ml-4 xl:-ml-8 mr-4 z-30 p-3.5 rounded-lg bg-white/90 dark:bg-[#040914]/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/15 backdrop-blur-md shadow-xl hover:bg-[#f59e0b] hover:text-[#040914] hover:border-[#f59e0b] dark:hover:bg-[#f59e0b] dark:hover:text-[#040914] dark:hover:border-[#f59e0b] transition-all active:scale-95 cursor-pointer"
            aria-label="Previous Service"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* SLIDER VIEWPORT */}
          <div 
            className="w-full max-w-5xl overflow-hidden py-3 px-1 cursor-grab active:cursor-grabbing touch-pan-y"
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            
            <div 
              className="flex gap-6 w-full"
              style={{
                transform: `translate3d(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem + ${dragOffset}px), 0, 0)`,
                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {servicesList.map((service) => (
                <div 
                  key={service.id} 
                  className="w-full shrink-0 bg-white/95 dark:bg-[#040914]/90 border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 items-stretch pointer-events-none transition-colors duration-300"
                >
                  
                  {/* SERVICE IMAGE CANVAS */}
                  <div className="lg:col-span-5 relative h-[280px] sm:h-[360px] lg:h-auto bg-slate-900 dark:bg-[#040914] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 overflow-hidden">
                    <Image 
                      src={service.img} 
                      alt={service.title} 
                      fill
                      className="object-cover object-center pointer-events-none opacity-95 dark:opacity-90 transition-opacity"
                    />
                    
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#040914] via-transparent dark:via-[#040914]/20 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 bg-slate-900/90 dark:bg-[#040914]/90 backdrop-blur-md border border-white/15 px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest shadow-md">
                      {service.badge}
                    </div>
                  </div>

                  {/* CONTENT COLUMN */}
                  <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-transparent">
                    <div>
                      <div className="text-[10px] sm:text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-2">
                        {`SERVICE_${service.num} // ${service.total}`}
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight uppercase transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm lg:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-6 transition-colors">
                        {service.description}
                      </p>

                      <div className="space-y-2.5 border-t border-slate-200 dark:border-white/10 pt-5 mb-8 transition-colors">
                        {service.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pointer-events-auto">
                      {/* Left-to-Right Gold Sweep Action Button */}
                      <Link 
                        href={`/services/${service.id}`} 
                        className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-slate-900 dark:bg-[#040914]/80 text-white font-black px-7 py-4 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-slate-800 dark:border-white/15 backdrop-blur-md overflow-hidden shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                        
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-[#040914]">
                          View Full Specifications
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover:text-[#040914] group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* NEXT BUTTON */}
          <button 
            onClick={handleNext}
            className="hidden lg:flex shrink-0 -mr-4 xl:-mr-8 ml-4 z-30 p-3.5 rounded-lg bg-white/90 dark:bg-[#040914]/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/15 backdrop-blur-md shadow-xl hover:bg-[#f59e0b] hover:text-[#040914] hover:border-[#f59e0b] dark:hover:bg-[#f59e0b] dark:hover:text-[#040914] dark:hover:border-[#f59e0b] transition-all active:scale-95 cursor-pointer"
            aria-label="Next Service"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>

        {/* BOTTOM PAGINATION DOTS */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {servicesList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-md transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? 'w-10 bg-[#f59e0b] shadow-[0_0_12px_#f59e0b]' 
                  : 'bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40 w-3'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}