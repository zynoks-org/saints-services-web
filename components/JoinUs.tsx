"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, Send, CheckCircle2 } from 'lucide-react';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';

export function JoinUs() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('fullName') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      company: 'Careers Application',
      service: selectedService || 'Security Officer / General Application',
      details: (form.elements.namedItem('siaDetails') as HTMLTextAreaElement)?.value || 'N/A'
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
        alert('Failed to send application. Please try again.');
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
    <section id="join-us" className="relative min-h-[100dvh] flex flex-col justify-center bg-white dark:bg-[#070d1e] text-slate-900 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 overflow-hidden py-12 lg:py-0 transition-colors duration-300">
      
      {/* DESKTOP BACKGROUND IMAGE */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image 
            src="https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png" 
            alt="Join Saints Services Recruitment" 
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85 -scale-x-100 filter brightness-95"
          />

          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(7,13,30,0.85) 0%, rgba(7,13,30,0.65) 40%, rgba(7,13,30,0.4) 75%, rgba(7,13,30,0.7) 100%)'
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-[#070d1e] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white dark:from-[#070d1e] to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 sm:mb-6 shadow-xs">
              <Briefcase className="w-4 h-4 text-[#f59e0b]" /> 
              <span>Careers At Saints Services</span>
            </div>

            <h2 className="text-2xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight uppercase">
              Join Our Security Personnel Team
            </h2>

            {/* MOBILE DEDICATED IMAGE CARD */}
            <div className="block lg:hidden relative w-full h-44 sm:h-56 rounded-sm overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md my-4">
              <Image 
                src="https://i.ibb.co/h1yTXxGY/Saints-Services-Recruitment-Team.png" 
                alt="Join Saints Services Recruitment" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center -scale-x-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>

            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 font-medium max-w-xl">
              We are actively recruiting licensed security guards, event stewards, and facilities cleaning specialists across the UK.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {[
                "Competitive Hourly Rates",
                "Flexible Shift Rotas",
                "Career Advancement Path",
                "Ongoing SIA Support"
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-tight">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6 relative px-2">
            
            {/* Tactical Corner Brackets */}
            <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-12 h-12 border-t-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-12 h-12 border-b-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />

            <div className="bg-white dark:bg-[#0b1329] text-slate-900 dark:text-white p-5 sm:p-8 rounded-sm shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10 transition-colors">
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">Apply Online Today</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-4 sm:mb-6">Fill out your details to connect with our HR dispatch desk.</p>

              {submitted ? (
                <div className="bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white p-6 sm:p-8 rounded-sm text-center border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-3" />
                  <h4 className="text-lg font-black mb-1 uppercase tracking-tight">Application Received</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs font-medium">Our recruitment team will review your submission and reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        required 
                        placeholder="John Doe" 
                        className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required 
                        placeholder="07412 733920" 
                        className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="john@example.co.uk" 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Position Desired *</label>
                    <CustomServiceSelect 
                      value={selectedService} 
                      onChange={setSelectedService} 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">SIA License Details / Cover Note *</label>
                    <textarea 
                      name="siaDetails"
                      rows={2} 
                      required 
                      placeholder="Include SIA badge details or relevant experience..." 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors resize-none" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-3 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer mt-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    <span className="relative z-10">{loading ? "Submitting Application..." : "Submit Job Application"}</span>
                    <Send className="relative z-10 w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}