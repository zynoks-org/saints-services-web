"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';
import { Testimonials } from '@/components/Testimonials';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ChevronRight, 
  CheckCircle2, 
  UsersRound, 
  ShieldUser, 
  KeyRound, 
  FileBadge, 
  Lock,
  ShieldCheck,
  Zap,
  Building2,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState('Security Guards');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('fullName') as HTMLInputElement)?.value || '',
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      service: selectedService,
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] font-sans text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
      <Header />

      <main className="grow">
        {/* ========================================== */}
        {/* 1. HERO HEADER                             */}
        {/* ========================================== */}
        <section className="relative bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
          
          {/* Tactical Dot Grid Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 z-0"
            style={{
              backgroundImage: 'radial-gradient(currentColor 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Ambient Amber Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span className="text-[#f59e0b]">CONTACT_&_DESK</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs backdrop-blur-md transition-colors">
                <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                <span>24/7 UK EMERGENCY CONTROL DESK</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4 sm:mb-6 uppercase transition-colors">
                Get in Touch with <br className="hidden sm:inline" />
                <span className="text-[#f59e0b]">Operational Dispatch</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl transition-colors">
                Need immediate site protection, event security, or commercial facilities maintenance? Connect directly with our dispatch unit or request an official binding quotation below.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 2. DIRECT CONTACT CARDS                    */}
        {/* ========================================== */}
        <section className="py-10 sm:py-16 bg-slate-50 dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              
              <a 
                href="tel:07412733920" 
                className="group bg-white dark:bg-[#0b1329] hover:border-[#f59e0b]/50 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-md shadow-xl flex items-center gap-4 transition-all duration-300"
              >
                <div className="p-3.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Direct Dispatch Line</div>
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors">
                    07412 733920
                  </div>
                </div>
              </a>

              <a 
                href="mailto:info@saintsservices.co.uk" 
                className="group bg-white dark:bg-[#0b1329] hover:border-[#f59e0b]/50 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-md shadow-xl flex items-center gap-4 transition-all duration-300"
              >
                <div className="p-3.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Operations Email</div>
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors">
                    info@saintsservices.co.uk
                  </div>
                </div>
              </a>

              <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-md shadow-xl flex items-center gap-4 transition-colors">
                <div className="p-3.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Headquarters</div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    20 Wenlock Road, London, N1 7GU
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 3. FORM & OPERATIONAL OVERVIEW SECTION     */}
        {/* ========================================== */}
        <section id="contact-form" className="py-16 sm:py-24 bg-slate-100 dark:bg-[#0b1329] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
              
              {/* Left Column: Operational Guarantees */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3 transition-colors">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" /> 
                    <span>RAPID_DISPATCH_GUARANTEE</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-3">
                    Fast Response <br />
                    <span className="text-[#f59e0b]">Guaranteed Service</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    Every deployment request is handled directly by an operational manager. We guarantee rapid turnarounds for urgent security requirements across the UK.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="bg-white dark:bg-[#070d1e] p-5 rounded-md border border-slate-200 dark:border-slate-800 shadow-md flex items-start gap-4 transition-colors">
                    <div className="p-2.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[#f59e0b] shrink-0 border border-slate-200 dark:border-slate-800">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white mb-1">Under 2-Hour Response</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                        Our control desk processes all quotation requests and emergency calls within 120 minutes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#070d1e] p-5 rounded-md border border-slate-200 dark:border-slate-800 shadow-md flex items-start gap-4 transition-colors">
                    <div className="p-2.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[#f59e0b] shrink-0 border border-slate-200 dark:border-slate-800">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white mb-1">SIA Approved Personnel</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                        Fully vetted, insured, and licensed security officers equipped for immediate assignment.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#070d1e] p-5 rounded-md border border-slate-200 dark:border-slate-800 shadow-md flex items-start gap-4 transition-colors">
                    <div className="p-2.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[#f59e0b] shrink-0 border border-slate-200 dark:border-slate-800">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white mb-1">Nationwide Coverage</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                        Active hubs in London, Manchester, Birmingham, Leeds, Glasgow, and major regional UK hubs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Tactical Form */}
              <div className="lg:col-span-7 bg-white dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-md shadow-2xl relative transition-colors duration-300">
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                      <Lock className="w-3 h-3 text-[#f59e0b]" /> 
                      <span>DIRECT_OPERATIONS_PORTAL</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1">Official Quotation Request</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">
                      Fill in your project requirements below for a formal tailored response.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-slate-50 dark:bg-[#0b1329] text-slate-900 dark:text-white p-8 sm:p-10 rounded-md text-center border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden transition-colors">
                      <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                      <h3 className="text-xl font-black mb-1 uppercase tracking-tight">Quote Request Dispatched</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs font-medium max-w-md mx-auto">
                        Thank you! Our control desk has received your request and an operational manager will be in contact shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Full Name *</label>
                          <input type="text" name="fullName" required placeholder="John Smith" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Company / Organization *</label>
                          <input type="text" name="company" required placeholder="Company Ltd" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Work Email *</label>
                          <input type="email" name="email" required placeholder="john@company.co.uk" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Phone Number *</label>
                          <input type="tel" name="phone" required placeholder="07412 733920" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Required Service *</label>
                        <CustomServiceSelect 
                          value={selectedService} 
                          onChange={setSelectedService} 
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Site Postcode & Project Specifications *</label>
                        <textarea 
                          name="details"
                          rows={4} 
                          required 
                          placeholder="Include site location/postcode, start date, number of officers required, or specific duties..." 
                          className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none transition-colors" 
                        />
                      </div>

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-3.5 rounded-sm text-xs sm:text-sm transition-all shadow-md active:scale-95 uppercase tracking-wider cursor-pointer mt-2"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                        <span className="relative z-10">{loading ? "Dispatching Quotation..." : "Submit Specification to Dispatch"}</span>
                        <Send className="relative z-10 w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>

            {/* MANLY TACTICAL SERVICE SELECTOR BUTTONS */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-4 text-center sm:text-left">
                Select Service Scope To Pre-Fill Form
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Door Supervision", icon: FileBadge, key: 'Door Supervision' },
                  { label: "Event Security", icon: UsersRound, key: 'Event Security' },
                  { label: "Key Holding & Alarm", icon: KeyRound, key: 'Key Holding & Alarm Response' },
                  { label: "Manned Guarding", icon: ShieldUser, key: 'Security Guards' },
                ].map((filter, idx) => {
                  const FilterIcon = filter.icon;
                  const isActive = selectedService === filter.key;

                  return (
                    <button 
                      key={idx}
                      onClick={() => {
                        setSelectedService(filter.key);
                        const element = document.getElementById('contact-form');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`group relative overflow-hidden bg-white dark:bg-[#070d1e] rounded-sm px-5 py-4 flex items-center justify-between border transition-all duration-300 shadow-md cursor-pointer active:scale-98 ${
                        isActive 
                          ? 'border-[#f59e0b]' 
                          : 'border-slate-200 dark:border-slate-800 hover:border-[#f59e0b]/60'
                      }`}
                    >
                      <div className="absolute inset-y-0 left-0 w-1 bg-[#f59e0b] z-20" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                      <div className="relative z-10 flex items-center gap-3.5 pl-2">
                        <FilterIcon className="w-4 h-4 shrink-0 text-[#f59e0b] group-hover:text-[#0b1329] transition-colors duration-300" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-[#0b1329] transition-colors duration-300">
                          {filter.label}
                        </span>
                      </div>

                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-[#0b1329] group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-2" />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 4. SOCIAL PROOF & TESTIMONIALS             */}
        {/* ========================================== */}
        <Testimonials />

        {/* ========================================== */}
        {/* 5. FAQ SECTION                             */}
        {/* ========================================== */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}