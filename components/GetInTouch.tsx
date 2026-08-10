"use client";

import React, { useState } from 'react';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  PhoneCall, 
  Mail, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Lock
} from 'lucide-react';

export function GetInTouch() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('firstName') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value || 'N/A',
      service: selectedService || 'General Quotation',
      details: (form.elements.namedItem('enquiry') as HTMLTextAreaElement)?.value || 'N/A'
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
        alert('Failed to send quote request. Please try again.');
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
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden font-sans transition-colors duration-300">
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-widest shadow-xs transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                <span>DIRECT_DISPATCH // 24_7_SUPPORT</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">
                Get in Touch Today
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed transition-colors">
                Whether your security requirements are long-term or temporary, across single or multiple sites, we can tailor a rapid deployment solution just for your business.
              </p>

              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed transition-colors">
                Simply call us today on our control room line or complete our online form for a quick, no-obligation quotation within 2 hours.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-sm p-4 rounded-sm text-center flex flex-col items-center justify-center transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#f59e0b] mb-1.5" />
                <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">Top Rated</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">5-Star Vetted</span>
              </div>

              <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-sm p-4 rounded-sm text-center flex flex-col items-center justify-center transition-colors">
                <Building2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400 mb-1.5" />
                <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">98% Retention</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Enterprise Trust</span>
              </div>

              <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-sm p-4 rounded-sm text-center flex flex-col items-center justify-center transition-colors">
                <MapPin className="w-6 h-6 text-sky-500 dark:text-sky-400 mb-1.5" />
                <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">UK Wide</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Nationwide</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a 
                href="tel:07412733920" 
                className="flex items-center gap-3.5 p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#f59e0b] transition-all group"
              >
                <div className="p-3 rounded-sm bg-slate-100 dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Control Room Hotline</div>
                  <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">07412 733920</div>
                </div>
              </a>

              <a 
                href="mailto:info@saintsservices.co.uk" 
                className="flex items-center gap-3.5 p-4 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#f59e0b] transition-all group"
              >
                <div className="p-3 rounded-sm bg-slate-100 dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Enquiries Email</div>
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white">info@saintsservices.co.uk</div>
                </div>
              </a>
            </div>

          </div>

          <div className="lg:col-span-6 relative px-2">
            
            <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-12 h-12 border-t-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-12 h-12 border-b-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />

            <div className="bg-white dark:bg-[#0b1329] text-slate-900 dark:text-white p-6 sm:p-8 lg:p-10 rounded-sm border border-slate-200 dark:border-slate-800 shadow-2xl relative z-10 transition-colors">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-widest block">SECURE_DISPATCH_PORTAL</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Request a Quote</h3>
                </div>
                <div className="p-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800">
                  <Lock className="w-4 h-4" />
                </div>
              </div>

              {submitted ? (
                <div className="bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white p-8 rounded-sm text-center border border-slate-200 dark:border-slate-800 my-6">
                  <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                  <h4 className="text-xl font-black mb-1 uppercase tracking-tight">Request Dispatched</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium">Our dispatch manager is reviewing your requirements and will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required 
                        placeholder="e.g. John" 
                        className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required 
                        placeholder="e.g. 07123 456789" 
                        className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="john@company.co.uk" 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Company / Venue Name</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="e.g. Grand Venue Ltd" 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" 
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
                    <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Enquiry & Venue Details</label>
                    <textarea 
                      name="enquiry"
                      rows={3} 
                      placeholder="Specify venue location, dates, shift hours, or unique requirements..." 
                      className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors resize-none" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-4 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer mt-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    <span className="relative z-10">{loading ? "Submitting Quote Request..." : "Submit Quote Request"}</span>
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