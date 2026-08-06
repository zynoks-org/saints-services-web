"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Credentials } from '@/components/Credentials';
import { Testimonials } from '@/components/Testimonials';
import { Coverage } from '@/components/Coverage';
import { GetInTouch } from '@/components/GetInTouch';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Clock,
  ArrowRight,
  FileText,
  Lock,
  Send
} from 'lucide-react';

export default function AboutPage() {
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
      service: selectedService || 'Corporate Enquiry (About Page)',
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

  const stats = [
    { label: "SIA Licensed Guards", value: "100%", sub: "Vetted to BS7858 Standards" },
    { label: "Emergency Response", value: "< 2 Hrs", sub: "Nationwide Rapid Dispatch" },
    { label: "Public Liability", value: "£10M", sub: "Fully Insured Operations" },
    { label: "Dispatch Desk", value: "24/7/365", sub: "Live UK Control Room" }
  ];

  const corePillars = [
    {
      title: "BS7858 Vetting Compliance",
      desc: "Every officer undergoes a rigorous 5-year background, credit, and employment check prior to stepping onto any client site."
    },
    {
      title: "SIA Approved ACS Standards",
      desc: "Our management and field operations strictly adhere to Security Industry Authority codes of conduct and security protocols."
    },
    {
      title: "Transparent Digital Patrol Logs",
      desc: "We utilize real-time guard tour tracking so clients receive detailed shift activity logs and instant incident escalation alerts."
    },
    {
      title: "Integrated Facilities Operations",
      desc: "By pairing manned guarding with commercial cleaning rotas under one roof, we eliminate vendor overlap for asset managers."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070d1e] font-sans text-slate-300 flex flex-col justify-between">
      <Header />

      <main>
        {/* ========================================== */}
        {/* 1. HERO HEADER WITH INLINE QUOTE FORM      */}
        {/* ========================================== */}
        <section className="relative bg-[#0b1329] text-white py-12 sm:py-20 lg:py-24 border-b border-slate-800 overflow-hidden">
          
          {/* Subtle Tactical Dot Grid Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.25) 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Ambient Amber Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-[#f59e0b]">ABOUT_US</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: HERO COPY */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                  <span>Protection • Strength • Trust</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-4 sm:mb-6 uppercase">
                  Setting the Standard in <br className="hidden sm:inline" />
                  <span className="text-[#f59e0b]">UK Security & Facilities</span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                  Saints Services Ltd was founded to give UK commercial property owners, event organizers, and retail brands dependable, SIA-licensed protection and high-level facilities management.
                </p>

                {/* Mobile Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a 
                    href="#quote-form" 
                    className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-extrabold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95 border border-amber-400 uppercase tracking-wider"
                  >
                    <span>Request Corporate Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a 
                    href="tel:07412733920" 
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all border border-slate-700 shadow-md active:scale-95 uppercase tracking-wider"
                  >
                    <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span>24/7 Desk (07412 733920)</span>
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: INLINE QUOTE CARD WITH TACTICAL BRACKETS */}
              <div id="quote-form" className="lg:col-span-5 relative px-2 mt-6 lg:mt-0">
                
                {/* Tactical Corner Brackets */}
                <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-16 h-16 border-t-2 border-l-2 border-[#f59e0b] rounded-tl-2xl z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-16 h-16 border-b-2 border-r-2 border-[#f59e0b] rounded-br-2xl z-20 pointer-events-none" />

                <div className="bg-[#0b1329] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                    <Lock className="w-3 h-3 text-[#f59e0b]" />
                    <span>DIRECT_DISPATCH // 2_HR_RESPONSE</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1 uppercase tracking-tight">Request a Quote</h3>
                  <p className="text-slate-400 text-xs font-medium mb-6">Get an immediate corporate security quotation.</p>

                  {submitted ? (
                    <div className="bg-slate-900 text-white p-6 rounded-2xl text-center border border-slate-800">
                      <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-2" />
                      <h4 className="text-lg font-black mb-1">Request Dispatched</h4>
                      <p className="text-slate-300 text-xs font-medium">Our dispatch manager will review your specs and contact you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="text" name="firstName" required placeholder="First name *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                        <input type="tel" name="phone" required placeholder="Phone number *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="email" name="email" required placeholder="Email Address *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                        <input type="text" name="company" placeholder="Company Name" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                      </div>
                      
                      <CustomServiceSelect 
                        value={selectedService} 
                        onChange={setSelectedService} 
                      />

                      <textarea name="enquiry" rows={3} placeholder="Your enquiry (e.g. venue location, dates, shift hours)..." className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] resize-none" />

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-black py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        <span>{loading ? "Submitting Request..." : "Submit Request"}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 2. CORE STATS BAR                          */}
        {/* ========================================== */}
        <section className="py-10 sm:py-16 bg-[#070d1e] border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#0b1329] border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xl text-left">
                  <div className="text-2xl sm:text-4xl font-black text-white font-mono mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-tight">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. OPERATIONAL PILLARS & VETTING           */}
        {/* ========================================== */}
        <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0b1329] text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-3">
                <FileText className="w-3.5 h-3.5 text-[#f59e0b]" /> 
                <span>VETTING_&_COMPLIANCE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0b1329] tracking-tight mb-3 sm:mb-4 uppercase">
                Built on Transparency & Security Assurance
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                We understand that deploying personnel onto your premises requires absolute trust. Here is how we maintain service quality across every shift.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="bg-[#f8fafc] border border-slate-200/90 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex items-start gap-4 sm:gap-5 shadow-2xs">
                  <div className="p-3 bg-[#0b1329] text-[#f59e0b] rounded-xl shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#0b1329] mb-1.5">{pillar.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 4. CREDENTIALS & COMPLIANCE SECTION        */}
        {/* ========================================== */}
        <Credentials />

        {/* ========================================== */}
        {/* 5. NATIONWIDE COVERAGE COMPONENT           */}
        {/* ========================================== */}
        <Coverage />

        {/* ========================================== */}
        {/* 6. CLIENT TESTIMONIALS                     */}
        {/* ========================================== */}
        <Testimonials />

        {/* ========================================== */}
        {/* 7. GET IN TOUCH DISPATCH SECTION           */}
        {/* ========================================== */}
        <GetInTouch />
      </main>

      <Footer />
    </div>
  );
}