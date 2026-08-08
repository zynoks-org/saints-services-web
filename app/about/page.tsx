"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Credentials } from '@/components/Credentials';
import { Testimonials } from '@/components/Testimonials';
import { Coverage } from '@/components/Coverage';
import { GetInTouch } from '@/components/GetInTouch';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  ShieldCheck, 
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
      title: "SIA Approved Standards",
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
    <>
      <title>About Us | Saints Services Ltd UK Security &amp; Facilities</title>
      <meta name="description" content="Learn about Saints Services Ltd, delivering BS7858 vetted, SIA-licensed manned guarding and commercial facilities management across the UK." />

      <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] font-sans text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
        <Header />

        <main className="grow">
          <section className="relative bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
            <div 
              className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20"
              style={{
                backgroundImage: 'radial-gradient(currentColor 1.2px, transparent 1.2px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
                <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                <span className="text-[#f59e0b]">ABOUT_US</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs backdrop-blur-md transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                    <span>Protection • Strength • Trust</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4 sm:mb-6 uppercase transition-colors">
                    Setting the Standard in <br className="hidden sm:inline" />
                    <span className="text-[#f59e0b]">UK Security &amp; Facilities</span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl transition-colors">
                    Saints Services Ltd was founded to give UK commercial property owners, event organizers, and retail brands dependable, SIA-licensed protection and high-level facilities management.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a 
                      href="#quote-form" 
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-slate-950 font-black px-7 py-3.5 rounded-md text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10">Request Corporate Quote</span>
                      <ArrowRight className="relative z-10 w-4 h-4" />
                    </a>

                    <a 
                      href="tel:07412733920" 
                      className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-extrabold px-6 py-3.5 rounded-md text-xs sm:text-sm transition-all border border-slate-300 dark:border-slate-800 shadow-md active:scale-95 uppercase tracking-wider"
                    >
                      <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>24/7 Desk (07412 733920)</span>
                    </a>
                  </div>
                </div>

                <div id="quote-form" className="lg:col-span-5 relative px-2 mt-6 lg:mt-0">
                  <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-12 h-12 border-t-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
                  <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-12 h-12 border-b-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />

                  <div className="bg-white dark:bg-[#070d1e] text-slate-900 dark:text-white p-6 sm:p-8 rounded-md border border-slate-200 dark:border-slate-800 shadow-2xl relative z-10 transition-colors duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                      <Lock className="w-3 h-3 text-[#f59e0b]" />
                      <span>DIRECT_DISPATCH // 2_HR_RESPONSE</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">Request a Quote</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-6">Get an immediate corporate security quotation.</p>

                    {submitted ? (
                      <div className="bg-slate-50 dark:bg-[#0b1329] text-slate-900 dark:text-white p-6 rounded-md text-center border border-slate-200 dark:border-slate-800">
                        <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-2" />
                        <h4 className="text-lg font-black mb-1 uppercase tracking-tight">Request Dispatched</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-xs font-medium">Our dispatch manager will review your specs and contact you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-3.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="firstName" required placeholder="First name *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                          <input type="tel" name="phone" required placeholder="Phone number *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="email" name="email" required placeholder="Email Address *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                          <input type="text" name="company" placeholder="Company Name" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        </div>
                        
                        <CustomServiceSelect 
                          value={selectedService} 
                          onChange={setSelectedService} 
                        />

                        <textarea name="enquiry" rows={3} placeholder="Your enquiry (e.g. venue location, dates, shift hours)..." className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none transition-colors" />

                        <button 
                          type="submit" 
                          disabled={loading}
                          className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-3.5 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                          <span className="relative z-10">{loading ? "Submitting Request..." : "Submit Request"}</span>
                          <Send className="relative z-10 w-4 h-4" />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 sm:py-16 bg-slate-50 dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-md shadow-xl text-left transition-colors">
                    <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-white dark:bg-[#0b1329] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-10 sm:mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-3">
                  <FileText className="w-3.5 h-3.5 text-[#f59e0b]" /> 
                  <span>VETTING_&amp;_COMPLIANCE</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4 uppercase">
                  Built on Transparency &amp; Security Assurance
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                  We understand that deploying personnel onto your premises requires absolute trust. Here is how we maintain service quality across every shift.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                {corePillars.map((pillar, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-md flex items-start gap-4 sm:gap-5 shadow-sm transition-colors">
                    <div className="p-3 bg-slate-200 dark:bg-slate-900 text-[#f59e0b] rounded-sm shrink-0 mt-0.5 border border-slate-300 dark:border-slate-800">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-1.5 uppercase tracking-tight">{pillar.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Credentials />
          <Coverage />
          <Testimonials />
          <GetInTouch />
        </main>

        <Footer />
      </div>
    </>
  );
}