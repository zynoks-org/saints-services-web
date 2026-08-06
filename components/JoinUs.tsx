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
    <section id="join-us" className="relative min-h-[100dvh] flex flex-col justify-center bg-[#0b1329] text-white border-b border-slate-800 overflow-hidden py-12 lg:py-0">
      
      {/* DESKTOP BACKGROUND IMAGE */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image 
            src="/images/joinus.png" 
            alt="Join Saints Services Recruitment" 
            fill
            priority
            className="object-cover object-center opacity-85 -scale-x-100 filter brightness-95"
          />

          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(11,19,41,0.75) 0%, rgba(11,19,41,0.45) 40%, rgba(11,19,41,0.2) 75%, rgba(11,19,41,0.5) 100%)'
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b1329] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0b1329] to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-[#f59e0b]/40 text-[#f59e0b] text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
              <Briefcase className="w-4 h-4 text-[#f59e0b]" /> 
              <span>Careers At Saints Services</span>
            </div>

            <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight mb-4 sm:mb-6 leading-tight">
              Join the UK&apos;s Premier Security Team
            </h2>

            {/* MOBILE DEDICATED IMAGE CARD */}
            <div className="block lg:hidden relative w-full h-44 sm:h-56 rounded-2xl overflow-hidden border border-slate-800 shadow-lg my-4">
              <Image 
                src="/images/joinus.png" 
                alt="Join Saints Services Recruitment" 
                fill
                priority
                className="object-cover object-center -scale-x-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329]/80 to-transparent" />
            </div>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8 font-medium max-w-xl">
              We are actively recruiting licensed security guards, event stewards, and facilities cleaning specialists across the UK.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {[
                "Competitive Hourly Rates",
                "Flexible Shift Rotas",
                "Career Advancement Path",
                "Ongoing SIA Support"
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span className="text-xs font-bold text-slate-100">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6 bg-white text-[#0b1329] p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
            <h3 className="text-lg sm:text-2xl font-black text-[#0b1329] mb-1">Apply Online Today</h3>
            <p className="text-slate-500 text-xs font-medium mb-4 sm:mb-6">Fill out your details to connect with our HR dispatch desk.</p>

            {submitted ? (
              <div className="bg-[#0b1329] text-white p-6 sm:p-8 rounded-2xl text-center border border-slate-800">
                <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-3" />
                <h4 className="text-lg font-black mb-1">Application Received</h4>
                <p className="text-slate-300 text-xs font-medium">Our recruitment team will review your submission and reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required 
                      placeholder="John Doe" 
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329]" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      placeholder="07412 733920" 
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329]" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="john@example.co.uk" 
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329]" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Position Desired *</label>
                  <CustomServiceSelect 
                    value={selectedService} 
                    onChange={setSelectedService} 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">SIA License Details / Cover Note *</label>
                  <textarea 
                    name="siaDetails"
                    rows={2} 
                    required 
                    placeholder="Include SIA badge details or relevant experience..." 
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329] resize-none" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#0b1329] hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 border border-slate-800 cursor-pointer"
                >
                  <span>{loading ? "Submitting Application..." : "Submit Job Application"}</span>
                  <Send className="w-4 h-4 text-[#f59e0b]" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}