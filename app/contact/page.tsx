"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Calculator, 
  ChevronRight, 
  AlertCircle,
  Plus,
  Minus,
  CheckCircle2,
  UsersRound,
  ShieldUser,
  KeyRound,
  FileBadge,
  Lock
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Quote Estimator State
  const [selectedService, setSelectedService] = useState('Security Guards');
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [guardsCount, setGuardsCount] = useState(1);

  // Dynamic fill percentage for slider tracks
  const hoursPercent = ((hoursPerWeek - 10) / (168 - 10)) * 100;
  const guardsPercent = ((guardsCount - 1) / (10 - 1)) * 100;

  // Hourly rate matrix (£/hr estimate)
  const rates: Record<string, number> = {
    'Security Guards': 16.50,
    'Event Security': 18.00,
    'Retail Security': 15.50,
    'Door Supervision': 17.00,
    'Key Holding & Alarm Response': 14.50,
    'Mobile Security Patrols': 16.00,
  };

  const currentRate = rates[selectedService] || 16.50;
  const estimatedWeeklyTotal = currentRate * hoursPerWeek * guardsCount;

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
      details: `Projected Budget: £${estimatedWeeklyTotal.toFixed(2)} (${hoursPerWeek} hrs/wk, ${guardsCount} officers) | Specs: ${(form.elements.namedItem('details') as HTMLTextAreaElement)?.value || 'N/A'}`
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
    <div className="min-h-screen bg-[#070d1e] font-sans text-slate-300 flex flex-col justify-between">
      <Header />

      <main>
        {/* ========================================== */}
        {/* 1. HERO HEADER WITH DARK TACTICAL STYLE    */}
        {/* ========================================== */}
        <section className="relative bg-[#0b1329] text-white py-12 sm:py-20 lg:py-24 border-b border-slate-800 overflow-hidden">
          
          {/* DESKTOP BACKGROUND IMAGE WITH NAVY GRADIENTS */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-2/3 pointer-events-none z-0">
            <div className="relative w-full h-full">
              <Image 
                src="/images/security-services.jpg" 
                alt="Saints Services Operational Control Desk"
                fill
                priority
                className="object-cover object-[80%_center] opacity-35 mix-blend-luminosity"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329] from-15% via-[#0b1329]/80 via-50% to-[#0b1329]/30 to-90%" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/60 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0b1329] via-[#0b1329]/40 to-transparent" />
            </div>
          </div>

          {/* Tactical Dot Grid Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 z-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.25) 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Ambient Amber Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-[#f59e0b]">CONTACT_&_QUOTE_DESK</span>
            </div>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs backdrop-blur-md">
                <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                <span>24/7 UK EMERGENCY CONTROL DESK</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-4 sm:mb-6 uppercase">
                Get in Touch with <br className="hidden sm:inline" />
                <span className="text-[#f59e0b]">Operational Dispatch</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
                Need immediate site protection, event stewards, or a commercial facilities contract? Speak directly with our London control room or generate an instant budget estimate below.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 2. DIRECT CONTACT METHOD CARDS             */}
        {/* ========================================== */}
        <section className="py-10 sm:py-16 bg-[#070d1e] border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
              
              <div className="bg-[#0b1329] border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900 text-[#f59e0b] border border-slate-800 shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Direct Dispatch Line</div>
                  <a href="tel:07412733920" className="text-sm sm:text-base font-black text-white hover:text-[#f59e0b] transition-colors">
                    07412 733920
                  </a>
                </div>
              </div>

              <div className="bg-[#0b1329] border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900 text-[#f59e0b] border border-slate-800 shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Operations Email</div>
                  <a href="mailto:info@saintsservices.co.uk" className="text-sm sm:text-base font-black text-white hover:text-[#f59e0b] transition-colors">
                    info@saintsservices.co.uk
                  </a>
                </div>
              </div>

              <div className="bg-[#0b1329] border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900 text-[#f59e0b] border border-slate-800 shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Headquarters</div>
                  <div className="text-xs sm:text-sm font-black text-white">
                    20 Wenlock Road, London, N1 7GU
                  </div>
                </div>
              </div>

            </div>

            {/* QUICK SERVICE FILTER GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Door Supervision", icon: FileBadge, key: 'Door Supervision' },
                { label: "Event Security", icon: UsersRound, key: 'Event Security' },
                { label: "Key Holding & Alarm Response", icon: KeyRound, key: 'Key Holding & Alarm Response' },
                { label: "Security Guards", icon: ShieldUser, key: 'Security Guards' },
              ].map((filter, idx) => {
                const FilterIcon = filter.icon;
                return (
                  <button 
                    key={idx}
                    onClick={() => {
                      setSelectedService(filter.key);
                      const element = document.getElementById('quote-section');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group bg-[#0b1329] hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl px-5 py-4 flex items-center gap-4 shadow-xl transition-all relative overflow-hidden text-left cursor-pointer"
                  >
                    <div className="absolute inset-y-0 left-0 w-1.5 bg-[#f59e0b] group-hover:w-2 transition-all rounded-l-xl" />
                    <FilterIcon className="w-5 h-5 text-[#f59e0b] shrink-0" />
                    <span className="text-xs font-black uppercase text-white tracking-wider">{filter.label}</span>
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 3. INTERACTIVE QUOTE ESTIMATOR + FORM      */}
        {/* ========================================== */}
        <section id="quote-section" className="py-16 sm:py-24 bg-[#0b1329] border-b border-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left: Interactive Estimator Widget framed with Tactical Brackets */}
              <div className="lg:col-span-5 relative px-2">
                
                {/* Tactical Corner Brackets */}
                <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-l-2 border-[#f59e0b] rounded-tl-2xl z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 border-b-2 border-r-2 border-[#f59e0b] rounded-br-2xl z-20 pointer-events-none" />

                {/* MAIN ESTIMATOR CONTAINER */}
                <div className="relative z-10 bg-[#070d1e] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
                    <Calculator className="w-3.5 h-3.5 text-[#f59e0b]" /> 
                    <span>INSTANT_ESTIMATOR_V2</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white mb-1.5 uppercase tracking-tight">
                    Calculate Projected Cost
                  </h2>
                  <p className="text-slate-400 text-xs font-medium mb-6">
                    Adjust parameters below to generate an estimated weekly budget for your site.
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1.5">Select Service Scope</label>
                      <CustomServiceSelect 
                        value={selectedService} 
                        onChange={setSelectedService} 
                      />
                    </div>

                    {/* Hours Slider */}
                    <div>
                      <div className="flex justify-between items-center text-xs font-bold mb-3">
                        <span className="text-slate-300 uppercase font-mono text-[11px]">Coverage Hours / Week</span>
                        <div className="flex items-center gap-2">
                          <button 
                            type="button"
                            onClick={() => setHoursPerWeek(prev => Math.max(10, prev - 2))}
                            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[#f59e0b] font-mono font-black min-w-[65px] text-right text-xs sm:text-sm">{hoursPerWeek} hrs/wk</span>
                          <button 
                            type="button"
                            onClick={() => setHoursPerWeek(prev => Math.min(168, prev + 2))}
                            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      <input 
                        type="range" 
                        min={10} 
                        max={168} 
                        step={2}
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none 
                                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#f59e0b] 
                                   [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#f59e0b] [&::-moz-range-track]:bg-transparent"
                        style={{
                          background: `linear-gradient(to right, #f59e0b ${hoursPercent}%, #1e293b ${hoursPercent}%)`
                        }}
                      />
                    </div>

                    {/* Personnel Count Slider */}
                    <div>
                      <div className="flex justify-between items-center text-xs font-bold mb-3">
                        <span className="text-slate-300 uppercase font-mono text-[11px]">Officers / Staff Required</span>
                        <div className="flex items-center gap-2">
                          <button 
                            type="button"
                            onClick={() => setGuardsCount(prev => Math.max(1, prev - 1))}
                            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[#f59e0b] font-mono font-black min-w-[65px] text-right text-xs sm:text-sm">{guardsCount} {guardsCount === 1 ? 'person' : 'people'}</span>
                          <button 
                            type="button"
                            onClick={() => setGuardsCount(prev => Math.min(10, prev + 1))}
                            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <input 
                        type="range" 
                        min={1} 
                        max={10} 
                        step={1}
                        value={guardsCount}
                        onChange={(e) => setGuardsCount(Number(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none 
                                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#f59e0b] 
                                   [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#f59e0b] [&::-moz-range-track]:bg-transparent"
                        style={{
                          background: `linear-gradient(to right, #f59e0b ${guardsPercent}%, #1e293b ${guardsPercent}%)`
                        }}
                      />
                    </div>

                    {/* Estimate Output Box */}
                    <div className="pt-6 border-t border-slate-800 bg-slate-900 p-5 rounded-2xl border border-slate-800 mt-6">
                      <div className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider mb-1">
                        Projected Weekly Budget
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-[#f59e0b] font-mono">
                        £{estimatedWeeklyTotal.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium mt-1">
                        Based on ~£{currentRate.toFixed(2)}/hr base operational rate.
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-[10px] sm:text-[11px] text-slate-400 font-medium pt-1">
                      <AlertCircle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                      <span>Final pricing varies based on risk level, location, and contract duration. Submit details for a binding quotation.</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right: Formal Contact & Quotation Form */}
              <div className="lg:col-span-7 bg-[#070d1e] border border-slate-800 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl relative">
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                      <Lock className="w-3 h-3 text-[#f59e0b]" /> 
                      <span>DIRECT_OPERATIONS_PORTAL</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-1">Official Quotation Request</h2>
                    <p className="text-slate-400 text-xs sm:text-sm font-medium">
                      Provide your site location and operational dates for a formal response within 2 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-[#0b1329] text-white p-8 sm:p-10 rounded-2xl text-center border border-slate-800 shadow-xl relative overflow-hidden">
                      <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                      <h3 className="text-xl font-black mb-1 uppercase tracking-tight">Quote Request Dispatched</h3>
                      <p className="text-slate-300 text-xs font-medium max-w-md mx-auto">
                        Our control desk has received your parameters (£{estimatedWeeklyTotal.toFixed(0)}/wk estimate) and is assigning a regional operational manager.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Full Name *</label>
                          <input type="text" name="fullName" required placeholder="John Smith" className="w-full bg-[#0b1329] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Company / Organization *</label>
                          <input type="text" name="company" required placeholder="Company Ltd" className="w-full bg-[#0b1329] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Work Email *</label>
                          <input type="email" name="email" required placeholder="john@company.co.uk" className="w-full bg-[#0b1329] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Phone Number *</label>
                          <input type="tel" name="phone" required placeholder="07412 733920" className="w-full bg-[#0b1329] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Site Postcode & Operational Scope *</label>
                        <textarea 
                          name="details"
                          rows={4} 
                          required 
                          placeholder="Include site postcode, preferred start date, or specific duties needed..." 
                          className="w-full bg-[#0b1329] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] resize-none" 
                        />
                      </div>

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-black py-4 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 uppercase tracking-wider cursor-pointer mt-2"
                      >
                        <span>{loading ? "Dispatching Quotation..." : "Submit Specification to Dispatch"}</span>
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