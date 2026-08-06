"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhyChooseUsTabs } from '@/components/WhyChooseUsTabs';
import { Testimonials } from '@/components/Testimonials';
import { Coverage } from '@/components/Coverage';
import { Credentials } from '@/components/Credentials';
import { FrequentlyQuestions } from '@/components/FaqDoorSupervision';
import { GetInTouch } from '@/components/GetInTouch';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2,
  Lock,
  Radio,
  FileBadge
} from 'lucide-react';

export default function DoorSupervisionPage() {
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
      company: 'Door Supervision Inquiry',
      service: selectedService || 'Door Supervision',
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

  return (
    <div className="min-h-screen bg-[#070d1e] font-sans text-slate-900 flex flex-col justify-between">
      <Header />

      <main>
        {/* ========================================== */}
        {/* 1. HERO HEADER WITH HEAVY DARK TACTICAL STYLE */}
        {/* ========================================== */}
        <section className="relative bg-[#0b1329] text-white py-12 sm:py-20 lg:py-24 border-b border-slate-800 overflow-hidden">
          
          {/* DESKTOP BACKGROUND IMAGE WITH NAVY GRADIENT */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-2/3 pointer-events-none z-0">
            <div className="relative w-full h-full">
              <Image 
                src="/images/security-services.jpg" 
                alt="Saints Services Door Supervision Operations"
                fill
                priority
                className="object-cover object-[80%_center] opacity-35 mix-blend-luminosity"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329] from-15% via-[#0b1329]/80 via-50% to-[#0b1329]/30 to-90%" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/60 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0b1329] via-[#0b1329]/40 to-transparent" />
            </div>
          </div>

          {/* Dot Grid Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 z-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.25) 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Amber Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/services" className="hover:text-[#f59e0b] transition-colors">SERVICES</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-[#f59e0b]">DOOR_SUPERVISION</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: HERO COPY */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                  <span>SIA APPROVED // DOOR SUPERVISORS</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4 sm:mb-6 uppercase">
                  Door Supervision <br className="hidden sm:inline" />
                  <span className="text-[#f59e0b]">Services</span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                  Saints Services Ltd provides SIA-licensed door supervisors to commercial venues and licensed premises across the UK. With a 98% client retention rate, our trained security personnel maintain strict safety standards while acting as a welcoming, professional face for your brand.
                </p>

                {/* Rating & Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                  <Link 
                    href="#quote-form" 
                    className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-extrabold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95 border border-amber-400 uppercase tracking-wider"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a 
                    href="tel:07412733920" 
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all border border-slate-700 shadow-md active:scale-95 uppercase tracking-wider"
                  >
                    <PhoneCall className="w-4 h-4 text-[#f59e0b]" />
                    <span>Talk to an Expert</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400">
                  <span className="text-white">5 STAR CLIENT REVIEWED</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: INLINE QUOTE CARD WITH TACTICAL CORNER BRACKETS */}
              <div id="quote-form" className="lg:col-span-5 relative px-2">
                
                {/* Tactical Corner Brackets */}
                <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-16 h-16 border-t-2 border-l-2 border-[#f59e0b] rounded-tl-2xl z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-16 h-16 border-b-2 border-r-2 border-[#f59e0b] rounded-br-2xl z-20 pointer-events-none" />

                <div className="bg-[#0b1329] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                    <Lock className="w-3 h-3 text-[#f59e0b]" />
                    <span>FAST_DISPATCH // 2_HR_RESPONSE</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1 uppercase tracking-tight">Request a Quote</h3>
                  <p className="text-slate-400 text-xs font-medium mb-6">
                    Get a bespoke operational quotation for your site within 2 hours.
                  </p>

                  {submitted ? (
                    <div className="bg-slate-900 text-white p-6 rounded-2xl text-center border border-slate-800">
                      <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-2" />
                      <h4 className="text-lg font-black mb-1">Request Dispatched</h4>
                      <p className="text-slate-300 text-xs font-medium">Our dispatch manager will review your specs and get in touch shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="text" name="firstName" required placeholder="First name *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                        <input type="tel" name="phone" required placeholder="Phone number *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                      </div>

                      <input type="email" name="email" required placeholder="Email Address *" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b]" />
                      
                      <CustomServiceSelect 
                        value={selectedService} 
                        onChange={setSelectedService} 
                      />

                      <textarea name="enquiry" rows={3} placeholder="Your enquiry (e.g. venue location, dates, shift hours)..." className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] resize-none" />

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-black py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer uppercase tracking-wider"
                      >
                        {loading ? "Submitting Request..." : "Submit Request"}
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 2. DETAILED SERVICE EXPLANATION & BENEFITS */}
        {/* ========================================== */}
        <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* LEFT: DETAILED TEXT */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0b1329] text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest">
                  <FileBadge className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>LICENSED_VENUE_SECURITY</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#0b1329] tracking-tight uppercase leading-tight">
                  Professional SIA Door Supervision for Licensed Premises
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  High-capacity licensed venues require security expertise beyond standard perimeter watching. When managing busy hospitality operations, corporate galas, or premium leisure establishments, your venue needs SIA-licensed door supervisors who excel in complex, high-footfall environments.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Saints Services Ltd specializes in door supervision for businesses operating critical hospitality venues. We deploy SIA-licensed Door Supervisors trained in crowd management, conflict de-escalation, entry screening, and regulatory compliance to protect your premises across England, Scotland, and Wales.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Our door supervisors serve as the primary point of contact for every visitor. They manage potential security threats before escalation occurs while preserving the welcoming atmosphere your brand demands. All personnel undergo continuous supervisory audits and hold valid Security Industry Authority licensing.
                </p>
              </div>

              {/* RIGHT: BENEFIT HIGHLIGHT CARD */}
              <div className="lg:col-span-5 bg-[#0b1329] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
                
                {/* Tactical Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/10 blur-2xl rounded-full pointer-events-none" />

                {/* Dark Metallic Callout Badge */}
                <div className="bg-slate-900 border border-slate-800 text-white p-5 rounded-2xl mb-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-1">
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    <span>STATUS // ACTIVE_UK_COVERAGE</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">Nationwide Dispatch</div>
                </div>

                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wider">
                  Door Supervisor Business Benefits
                </h3>

                <p className="text-slate-400 text-xs font-medium leading-relaxed mb-6">
                  With years of experience protecting UK venues, Saints Services Ltd provides dependable door security tailored to your operational needs:
                </p>

                <div className="space-y-3.5 text-xs font-bold text-slate-200">
                  {[
                    "Bespoke Tailored Security Architecture",
                    "Highly Trained & Vetted SIA Personnel",
                    "98% Client Retention Rate Nationwide",
                    "Rapid Control Room Emergency Response",
                    "Transparent Competitive Hourly Billing"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 3. WHY CHOOSE US TABS */}
        {/* ========================================== */}
        <WhyChooseUsTabs />

        {/* ========================================== */}
        {/* 4. CREDENTIALS & COMPLIANCE */}
        {/* ========================================== */}
        <Credentials />

        {/* ========================================== */}
        {/* 5. TESTIMONIALS */}
        {/* ========================================== */}
        <Testimonials />

        {/* ========================================== */}
        {/* 6. COVERAGE MAP */}
        {/* ========================================== */}
        <Coverage />

        {/* ========================================== */}
        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <FrequentlyQuestions />

        {/* ========================================== */}
        {/* 8. GET IN TOUCH TODAY & DETAILED QUOTE FORM */}
        {/* ========================================== */}
        <GetInTouch />
      </main>

      <Footer />
    </div>
  );
}