"use client";

import React, { useState } from 'react';
import { SERVICES_LIST } from '@/lib/servicesData';
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
    <section className="py-16 sm:py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200 relative overflow-hidden font-sans">
      
      {/* Light Clean Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(11, 19, 41, 0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: COPY, TRUST BADGES & CONTACT INFO */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1329] text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                <span>DIRECT_DISPATCH // 24_7_SUPPORT</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black text-[#0b1329] uppercase tracking-tight">
                Get in Touch Today
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                Whether your security requirements are long-term or temporary, across single or multiple sites, we can tailor a rapid deployment solution just for your business.
              </p>

              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                Simply call us today on our control room line or complete our online form for a quick, no-obligation quotation within 2 hours.
              </p>
            </div>

            {/* TRUST BADGES ROW (Clean White Cards, Minimal Borders) */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white border border-slate-200/80 shadow-sm p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#f59e0b] mb-1.5" />
                <span className="text-xs font-black text-[#0b1329] uppercase">Top Rated</span>
                <span className="text-[10px] text-slate-500 font-mono">5-Star Vetted</span>
              </div>

              <div className="bg-white border border-slate-200/80 shadow-sm p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                <Building2 className="w-6 h-6 text-emerald-600 mb-1.5" />
                <span className="text-xs font-black text-[#0b1329] uppercase">98% Retention</span>
                <span className="text-[10px] text-slate-500 font-mono">Enterprise Trust</span>
              </div>

              <div className="bg-white border border-slate-200/80 shadow-sm p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                <MapPin className="w-6 h-6 text-sky-600 mb-1.5" />
                <span className="text-xs font-black text-[#0b1329] uppercase">UK Wide</span>
                <span className="text-[10px] text-slate-500 font-mono">Nationwide</span>
              </div>
            </div>

            {/* DIRECT CONTACT TELEMETRY */}
            <div className="space-y-3 pt-2">
              <a 
                href="tel:07412733920" 
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#0b1329] text-[#f59e0b] group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Control Room Hotline</div>
                  <div className="text-base sm:text-lg font-black text-[#0b1329]">07412 733920</div>
                </div>
              </a>

              <a 
                href="mailto:info@saintsservices.co.uk" 
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#0b1329] text-[#f59e0b] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Enquiries Email</div>
                  <div className="text-sm sm:text-base font-black text-[#0b1329]">info@saintsservices.co.uk</div>
                </div>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: CLEAN WHITE QUOTE CARD */}
          <div className="lg:col-span-6 relative">
            
            <div className="bg-white text-slate-900 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-xl relative z-10">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-widest block">SECURE_DISPATCH_PORTAL</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0b1329] uppercase tracking-tight">Request a Quote</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 text-[#0b1329]">
                  <Lock className="w-4 h-4" />
                </div>
              </div>

              {submitted ? (
                <div className="bg-slate-50 text-slate-900 p-8 rounded-2xl text-center border border-slate-200 my-6">
                  <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                  <h4 className="text-xl font-black mb-1 uppercase tracking-tight">Request Dispatched</h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">Our dispatch manager is reviewing your requirements and will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required 
                        placeholder="e.g. John" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0b1329] focus:bg-white transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required 
                        placeholder="e.g. 07123 456789" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0b1329] focus:bg-white transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="john@company.co.uk" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0b1329] focus:bg-white transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Company / Venue Name</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="e.g. Grand Venue Ltd" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0b1329] focus:bg-white transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Service Required *</label>
                    <CustomServiceSelect 
                      value={selectedService} 
                      onChange={setSelectedService} 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">Enquiry & Venue Details</label>
                    <textarea 
                      name="enquiry"
                      rows={3} 
                      placeholder="Specify venue location, dates, shift hours, or unique requirements..." 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0b1329] focus:bg-white transition-colors resize-none" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0b1329] hover:bg-slate-800 text-white font-extrabold py-4 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 uppercase tracking-wider cursor-pointer mt-2"
                  >
                    <span>{loading ? "Submitting Quote Request..." : "Submit Quote Request"}</span>
                    <ArrowRight className="w-4 h-4 text-[#f59e0b]" />
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