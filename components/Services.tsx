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
      id: "security-guards",
      num: "01",
      total: "04",
      title: "Manned Guarding & Patrols",
      badge: "SIA APPROVED",
      img: "/images/manned-guarding.png",
      description: "Our highly trained security personnel offer professional manned guarding services, ensuring continuous protection, access monitoring, and deterrence for your premises.",
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
      description: "We provide comprehensive event security solutions, managing guest flow, entry control, and emergency response to guarantee a safe environment for all attendees.",
      highlights: [
        "Crowd Control & Queue Management",
        "VIP & Speaker Protection Services",
        "Emergency Evacuation Response Teams"
      ]
    },
    {
      id: "door-supervision",
      num: "03",
      total: "04",
      title: "Door Supervision & Venue Security",
      badge: "LICENSED OFFICERS",
      img: "/images/retail-security.png",
      description: "SIA-licensed door supervisors dedicated to maintaining order, managing guest entry, and resolving conflicts professionally at venues, clubs, and high-profile premises.",
      highlights: [
        "Professional ID & Search Verification",
        "Conflict De-escalation Specialists",
        "Venue Capacity & Safety Compliance"
      ]
    },
    {
      id: "keyholding",
      num: "04",
      total: "04",
      title: "Keyholding & Alarm Response",
      badge: "24/7 MOBILE RESPONSE",
      img: "/images/security-services.jpg",
      description: "Reliable, round-the-clock keyholding and rapid emergency alarm response services, eliminating staff risk and securing your business premises out of hours.",
      highlights: [
        "Rapid Emergency Mobile Dispatch",
        "Scheduled Site Lock & Unlock Services",
        "Secure Off-Site Vault Key Storage"
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
    <section id="services" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 overflow-hidden select-none font-sans relative transition-colors duration-300">
      
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-xs backdrop-blur-md transition-colors">
              <Shield className="w-3.5 h-3.5" /> 
              <span>CAPABILITIES // CORE_SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase transition-colors">
              Our <span className="text-[#f59e0b]">Services</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-base sm:text-xl bg-white dark:bg-slate-900 px-4 py-2 rounded-sm border border-slate-200 dark:border-slate-800 shadow-md self-start sm:self-auto transition-colors">
            <span className="font-black text-slate-900 dark:text-white">{currentService.num}</span>
            <span className="text-slate-400 font-bold">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-bold">{currentService.total}</span>
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative flex items-center justify-center">

          {/* PREV BUTTON */}
          <button 
            onClick={handlePrev}
            className="hidden lg:flex shrink-0 -ml-4 xl:-ml-8 mr-4 z-30 p-3.5 rounded-sm bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-lg hover:bg-[#f59e0b] hover:text-slate-950 hover:border-[#f59e0b] transition-all active:scale-95 cursor-pointer"
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
                  className="w-full shrink-0 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-sm overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch pointer-events-none transition-colors duration-300 relative"
                >
                  
                  {/* Tactical Corner Brackets */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#f59e0b] pointer-events-none z-20" />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#f59e0b] pointer-events-none z-20" />

                  {/* SERVICE IMAGE CANVAS */}
                  <div className="lg:col-span-5 relative h-[280px] sm:h-[360px] lg:h-auto bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 overflow-hidden">
                    <Image 
                      src={service.img} 
                      alt={service.title} 
                      fill
                      className="object-cover object-center pointer-events-none opacity-90 transition-opacity"
                    />
                    
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-sm text-[10px] sm:text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest shadow-md">
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

                      <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6 transition-colors">
                        {service.description}
                      </p>

                      <div className="space-y-2.5 border-t border-slate-200 dark:border-slate-800 pt-5 mb-8 transition-colors">
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
                        className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#f59e0b] text-slate-950 font-black px-7 py-4 rounded-sm text-xs sm:text-sm transition-all duration-300 overflow-hidden shadow-md active:scale-95 uppercase tracking-wider cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                        
                        <span className="relative z-10">
                          View Full Specifications
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4" />
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
            className="hidden lg:flex shrink-0 -mr-4 xl:-mr-8 ml-4 z-30 p-3.5 rounded-sm bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-lg hover:bg-[#f59e0b] hover:text-slate-950 hover:border-[#f59e0b] transition-all active:scale-95 cursor-pointer"
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
              className={`h-2 rounded-sm transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? 'w-10 bg-[#f59e0b] shadow-[0_0_12px_#f59e0b]' 
                  : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 w-3'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}