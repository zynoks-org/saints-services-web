"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Send, Clock, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '@/lib/servicesData';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      service: selectedService || 'General Quote',
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
        alert('Failed to send request. Please try again.');
        console.error(result.error);
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Network error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 relative overflow-hidden font-sans select-none transition-colors duration-300">
      
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Dispatch Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/10 dark:bg-[#080f22]/80 text-[#f59e0b] border border-slate-900/10 dark:border-white/15 text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-md transition-colors">
              <Clock className="w-3.5 h-3.5 text-[#f59e0b]" /> 
              <span>24/7 Control Desk</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 transition-colors">
              Request a Security & Facilities Quote
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed mb-8 transition-colors">
              Need immediate site guarding, event stewards, or routine commercial cleaning? Connect directly with our London control desk.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/95 dark:bg-[#080f22]/90 border border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-md transition-colors">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#040914] text-[#f59e0b] border border-slate-200 dark:border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase text-slate-400">Direct Operations Line</div>
                  <a href="tel:07412733920" className="text-sm font-black text-slate-900 dark:text-white hover:text-[#f59e0b] transition-colors">
                    07412 733920
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/95 dark:bg-[#080f22]/90 border border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-md transition-colors">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#040914] text-[#f59e0b] border border-slate-200 dark:border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase text-slate-400">Email Control Desk</div>
                  <a href="mailto:info@saintsservices.co.uk" className="text-sm font-black text-slate-900 dark:text-white hover:text-[#f59e0b] transition-colors">
                    info@saintsservices.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/95 dark:bg-[#080f22]/90 border border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-md transition-colors">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#040914] text-[#f59e0b] border border-slate-200 dark:border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase text-slate-400">Headquarters</div>
                  <div className="text-sm font-black text-slate-900 dark:text-white transition-colors">
                    20 Wenlock Road, London, England, N1 7GU
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="lg:col-span-7 bg-white/95 dark:bg-[#080f22]/90 border border-slate-200 dark:border-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-colors">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 transition-colors">Hire Saints Services</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-6 transition-colors">Submit your site specifications for a rapid response within 2 hours.</p>

            {submitted ? (
              <div className="bg-slate-900 dark:bg-[#040914] text-white p-8 rounded-2xl text-center border border-slate-800 dark:border-white/10">
                <ShieldCheck className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                <h4 className="text-xl font-black mb-1">Quote Request Received</h4>
                <p className="text-slate-300 text-xs font-medium">An operational account manager will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors">Your Name *</label>
                    <input type="text" name="name" required placeholder="John Smith" className="w-full bg-slate-50 dark:bg-[#040914]/80 border border-slate-300 dark:border-white/15 rounded-xl px-4 py-3 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-slate-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors">Company Name *</label>
                    <input type="text" name="company" required placeholder="Company Ltd" className="w-full bg-slate-50 dark:bg-[#040914]/80 border border-slate-300 dark:border-white/15 rounded-xl px-4 py-3 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-slate-400 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors">Email Address *</label>
                    <input type="email" name="email" required placeholder="john@company.co.uk" className="w-full bg-slate-50 dark:bg-[#040914]/80 border border-slate-300 dark:border-white/15 rounded-xl px-4 py-3 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-slate-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors">Phone Number *</label>
                    <input type="tel" name="phone" required placeholder="07412 733920" className="w-full bg-slate-50 dark:bg-[#040914]/80 border border-slate-300 dark:border-white/15 rounded-xl px-4 py-3 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-slate-400 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors">Service Required *</label>
                  <CustomServiceSelect 
                    value={selectedService} 
                    onChange={setSelectedService} 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors">Site Location & Details *</label>
                  <textarea name="details" rows={3} required placeholder="Specify site postcode, shift hours, or special requirements..." className="w-full bg-slate-50 dark:bg-[#040914]/80 border border-slate-300 dark:border-white/15 rounded-xl px-4 py-3 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none placeholder:text-slate-400 transition-colors" />
                </div>

                {/* UNIFIED GOLD SWEEP BUTTON */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="group relative w-full inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-[#0b1329] text-white font-black py-4 rounded-xl text-xs sm:text-sm transition-all duration-300 border border-slate-800 dark:border-white/20 backdrop-blur-md overflow-hidden shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#040914]">
                    {loading ? "Submitting Specification..." : "Submit Specification"}
                  </span>
                  <Send className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover:text-[#040914]" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}