"use client";

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';

export function ComprehensiveSolutions() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);
  const [formRenderedAt] = useState(() => Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('firstName') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value || 'N/A',
      service: selectedService || 'Enterprise Security Solution',
      details: (form.elements.namedItem('enquiry') as HTMLTextAreaElement)?.value || 'N/A',
      website: (form.elements.namedItem('website') as HTMLInputElement)?.value || '',
      formRenderedAt,
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
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden font-sans select-none transition-colors duration-300">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: EXECUTIVE COPY (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs transition-colors">
              <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
              <span className="text-[11px] font-bold font-mono uppercase tracking-widest text-[#f59e0b]">
                COMPREHENSIVE SECURITY // ENTERPRISE PROTECTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08] transition-colors uppercase">
              Enterprise Security Solutions Built for <br />
              <span className="text-[#f59e0b]">
                UK Businesses.
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed transition-colors">
              <p>
                Modern commercial operations face persistent security threats that compromise workforce safety, physical assets, and daily continuity. Lax guarding, unvetted personnel, and poorly structured defense protocols leave properties vulnerable to intrusion, vandalism, theft, and operational disruption—carrying severe financial and reputational fallout.
              </p>

              <p>
                Saints Services Ltd delivers high-calibre, SIA-licensed security deployments tailored to protect commercial interests across the UK. Our specialized teams manage site security, front-of-house concierge management, and mobile patrol units for clients across commercial real estate, active construction sites, high-street retail, educational campuses, and large-scale event venues.
              </p>

              <p>
                Backed by extensive industry experience, we handle every layer of operational defense—including access control management, active CCTV surveillance, rapid mobile response, and emergency escalation protocols. Whether safeguarding a single flagship facility or coordinating multi-site enterprise portfolios, we act as a dedicated partner focused on total peace of mind.
              </p>

              <p className="text-slate-900 dark:text-slate-100 font-bold pt-2 transition-colors">
                We set the benchmark for commercial guarding standards across the United Kingdom. Our officers do far more than monitor boundaries—they proactively deter threats, eliminate risk factors, and maintain a commanding yet professional presence so your enterprise can operate without disruption.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: QUOTE REQUEST FORM CARD (5 COLS) */}
          <div className="lg:col-span-5 relative px-2">
            
            {/* Tactical Corner Brackets matching design tone */}
            <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-12 h-12 border-t-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-12 h-12 border-b-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />

            <div className="bg-white dark:bg-[#0b1329] backdrop-blur-xl text-slate-900 dark:text-white p-6 sm:p-8 rounded-sm border border-slate-200 dark:border-slate-800 shadow-2xl relative z-10 transition-colors">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-widest block">QUICK_ENQUIRY</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Request a Quote</h3>
                </div>
                <div className="p-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800">
                  <Lock className="w-4 h-4" />
                </div>
              </div>

              {submitted ? (
                <div className="bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white p-8 rounded-sm text-center border border-slate-200 dark:border-slate-800 my-6 backdrop-blur-md">
                  <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                  <h4 className="text-xl font-black mb-1 uppercase tracking-tight">Request Dispatched</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium">Our dispatch manager will review your specs and contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] w-px h-px opacity-0 overflow-hidden"
                  />
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required 
                      placeholder="e.g. John" 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      placeholder="e.g. 07123 456789" 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="john@company.co.uk" 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Company / Venue Name</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="e.g. Grand Commercial Ltd" 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Service Required *</label>
                    <CustomServiceSelect 
                      value={selectedService} 
                      onChange={setSelectedService} 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Enquiry Details</label>
                    <textarea 
                      name="enquiry"
                      rows={3} 
                      placeholder="Venue location, dates, shift hours..." 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors" 
                    />
                  </div>

                  {/* Standard Gold Sweep Button */}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-4 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer mt-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    <span className="relative z-10">{loading ? "Submitting Request..." : "Submit Request"}</span>
                    <ArrowRight className="relative z-10 w-4 h-4" />
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