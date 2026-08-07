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
import { GetInTouch } from '@/components/GetInTouch';
import { FaqEventSecurity } from '@/components/FaqEventSecurity';
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
  FileBadge,
  Send
} from 'lucide-react';

export default function EventSecurityPage() {
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
      company: 'Event Security Inquiry',
      service: selectedService || 'Event Security',
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
    <>
      <title>Event Security & Crowd Safety | Saints Services Ltd</title>
      <meta 
        name="description" 
        content="Professional SIA-licensed event security guards, stewards, and crowd safety management for festivals, corporate galas, and private events across the UK." 
      />
      <meta 
        name="keywords" 
        content="Event Security UK, Crowd Safety Stewards, SIA Event Guards, Festival Security Services, Saints Services Event Security" 
      />
      <meta property="og:title" content="Event Security & Crowd Safety | Saints Services Ltd" />
      <meta 
        property="og:description" 
        content="Tailored event security and crowd management services for UK corporate gatherings, festivals, and high-capacity venues." 
      />
      <meta property="og:url" content="https://saintsservices.co.uk/services/event-security" />
      <meta property="og:type" content="website" />

      <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] font-sans text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
        <Header />

        <main className="grow">
          {/* HERO SECTION */}
          <section className="relative bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
            <div className="hidden lg:block absolute inset-y-0 right-0 w-2/3 pointer-events-none z-0">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/security-services.jpg" 
                  alt="Saints Services Event Security Operations"
                  fill
                  priority
                  className="object-cover object-[80%_center] opacity-15 dark:opacity-35 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 dark:from-[#0b1329] from-15% via-slate-100/80 dark:via-[#0b1329]/80 via-50% to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-100 dark:from-[#0b1329] via-slate-100/60 dark:via-[#0b1329]/60 to-transparent" />
              </div>
            </div>

            <div 
              className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 z-0" 
              style={{ 
                backgroundImage: 'radial-gradient(currentColor 1.2px, transparent 1.2px)', 
                backgroundSize: '24px 24px' 
              }} 
            />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
                <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                <Link href="/services" className="hover:text-[#f59e0b] transition-colors">SERVICES</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                <span className="text-[#f59e0b]">EVENT_SECURITY</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs backdrop-blur-md transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                    <span>LICENSED // EVENT GUARDS & STEWARDS</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4 sm:mb-6 uppercase transition-colors">
                    Event Security <br className="hidden sm:inline" />
                    <span className="text-[#f59e0b]">Services</span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl transition-colors">
                    Saints Services Ltd delivers professional event security and crowd management solutions across the UK. From corporate conferences and festivals to private functions and sporting venues, our licensed personnel protect your attendees and safeguard your reputation.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                    <Link 
                      href="#quote-form" 
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-slate-950 font-black px-7 py-3.5 rounded-md text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10">Request a Quote</span>
                      <ArrowRight className="relative z-10 w-4 h-4" />
                    </Link>

                    <a 
                      href="tel:07412733920" 
                      className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-extrabold px-6 py-3.5 rounded-md text-xs sm:text-sm transition-all border border-slate-300 dark:border-slate-800 shadow-md active:scale-95 uppercase tracking-wider"
                    >
                      <PhoneCall className="w-4 h-4 text-[#f59e0b]" />
                      <span>Talk to an Expert</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    <span className="text-slate-900 dark:text-white">5 STAR CLIENT REVIEWED</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />))}
                    </div>
                  </div>
                </div>

                {/* QUOTE CARD */}
                <div id="quote-form" className="lg:col-span-5 relative px-2">
                  <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-12 h-12 border-t-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
                  <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-12 h-12 border-b-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />

                  <div className="bg-white dark:bg-[#070d1e] text-slate-900 dark:text-white p-6 sm:p-8 rounded-md border border-slate-200 dark:border-slate-800 shadow-2xl relative z-10 transition-colors duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                      <Lock className="w-3 h-3 text-[#f59e0b]" />
                      <span>FAST_DISPATCH // 2_HR_RESPONSE</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">Request a Quote</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-6">Get an event security quotation within 2 hours.</p>

                    {submitted ? (
                      <div className="bg-slate-50 dark:bg-[#0b1329] text-slate-900 dark:text-white p-6 rounded-md text-center border border-slate-200 dark:border-slate-800">
                        <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-2" />
                        <h4 className="text-lg font-black mb-1 uppercase tracking-tight">Request Dispatched</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-xs font-medium">Our dispatch manager will review your event specs shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-3.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="firstName" required placeholder="First name *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                          <input type="tel" name="phone" required placeholder="Phone number *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        </div>
                        <input type="email" name="email" required placeholder="Email Address *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        
                        <CustomServiceSelect 
                          value={selectedService} 
                          onChange={setSelectedService} 
                        />

                        <textarea name="enquiry" rows={3} placeholder="Event details (location, capacity, dates)..." className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none transition-colors" />
                        
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

          {/* OVERVIEW SECTION */}
          <section className="py-16 sm:py-24 bg-white dark:bg-[#0b1329] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest">
                    <FileBadge className="w-3.5 h-3.5 text-[#f59e0b]" />
                    <span>PROFESSIONAL_EVENT_PROTECTION</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight">
                    Professional Event Security Services Across the UK
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                    Events are at risk of being undermined by security breaches, which could destroy weeks to months of planning in minutes. Poor crowd management, inadequate access control, or unprepared security staff transform successful events into disasters that damage reputations and endanger attendees.
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                    Saints Services specialises in security services for events in the UK for organisations running business-critical functions. We provide trained security personnel, including event security guards, event stewards, and security operatives, for a range of events, including corporate gatherings, festivals, concerts, weddings, sports events, and private parties.
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                    Our team manages every aspect of event protection, from crowd control and perimeter security to VIP protection and emergency response coordination. From 50-person corporate gatherings to 10,000+ capacity festivals, we ensure your event runs smoothly without incident.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-white dark:bg-[#070d1e] text-slate-900 dark:text-white p-6 sm:p-8 rounded-md border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/10 blur-2xl rounded-full pointer-events-none" />

                  <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white p-5 rounded-md mb-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-1">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      <span>STATUS // NATIONWIDE_DEPLOYMENT</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Security Business Benefits</div>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed mb-6">
                    With years of experience, you can rely on Saints Services to protect your event:
                  </p>

                  <div className="space-y-3.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                    {[
                      "Bespoke Tailored Solutions",
                      "Highly Trained Experts",
                      "98% Customer Retention Rate",
                      "Rapid Emergency Response",
                      "Competitive Rates & Transparent Billing"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <WhyChooseUsTabs />
          <Credentials />
          <Testimonials />
          <Coverage />
          <FaqEventSecurity />
          <GetInTouch />
        </main>

        <Footer />
      </div>
    </>
  );
}