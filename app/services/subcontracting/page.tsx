"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Badge } from '@/components/Badge';
import { Footer } from '@/components/Footer';
import { Credentials } from '@/components/Credentials';
import { Coverage } from '@/components/Coverage';
import { FaqSubcontracting } from '@/components/FaqSubcontracting';
import { SubcontractingVisual } from '@/components/SubcontractingVisual';
import { CertificationsBanner } from '@/components/CertificationsBanner';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import {
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Lock,
  Send,
  UserCheck,
  Users,
  LifeBuoy,
  Handshake,
  EyeOff,
  Scale,
  ClipboardCheck,
  TrendingUp,
  Zap,
  ChevronRight,
} from 'lucide-react';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Security Subcontracting",
  name: "Security Subcontracting Services",
  provider: {
    "@type": "Organization",
    name: "Saints Services Ltd",
    url: "https://saintsservices.co.uk",
    telephone: "+447412733920",
  },
  areaServed: ["England", "Scotland", "Wales"],
  description:
    "Saints Services Ltd supplies SIA-licensed, BS7858-vetted security officers to other security companies, principal contractors, and organisations that need extra manpower for sites, contracts, or events, on fair and transparent terms.",
  url: "https://saintsservices.co.uk/services/subcontracting",
};

const processSteps = [
  {
    icon: PhoneCall,
    title: "Tell Us What You Need",
    desc: "Share your site details, shift pattern, and the volume or duration of cover required — a single shortfall or an ongoing contract.",
  },
  {
    icon: UserCheck,
    title: "We Vet & Match Officers",
    desc: "We assign SIA-licensed, BS7858-vetted officers suited to your site profile, sector, and client expectations.",
  },
  {
    icon: Users,
    title: "Officers Deploy",
    desc: "Personnel deploy under your instruction, in whichever branding arrangement you prefer — visibly, or entirely under your name.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Account Support",
    desc: "A dedicated point of contact manages rotas, reporting, and rapid cover if a shortfall or cancellation comes up.",
  },
];

const benefits = [
  { icon: ClipboardCheck, title: "Reliable Shift & Contract Cover", desc: "Dependable officers for single shifts, rolling contracts, or one-off events." },
  { icon: TrendingUp, title: "Flexible, Scalable Manpower", desc: "Scale numbers up for a large contract or event, then back down without carrying the headcount." },
  { icon: ShieldCheck, title: "SIA-Licensed & BS7858 Vetted", desc: "Every officer we supply is licensed and background-checked to the same standard as your own team." },
  { icon: Zap, title: "Rapid Shortfall Response", desc: "Fast cover when a staff shortage or last-minute cancellation puts your contract at risk." },
  { icon: EyeOff, title: "Confidential, White-Label Option", desc: "Officers can operate entirely under your brand — the arrangement stays between us." },
  { icon: Scale, title: "Fair, Transparent Contracts", desc: "Clear rates and terms, built for a long-term working relationship rather than a single job." },
];

export default function SubcontractingPage() {
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
      company: 'Subcontracting Inquiry',
      service: selectedService || 'Subcontracting',
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
    <>
      <title>Security Subcontracting Services | Saints Services Ltd</title>
      <meta
        name="description"
        content="Subcontract SIA-licensed security officers from Saints Services Ltd. Flexible, fully vetted staffing support for security companies and principal contractors across the UK, on fair, transparent terms."
      />
      <meta
        name="keywords"
        content="Security Subcontracting UK, Subcontract Security Guards, SIA Staffing Support, Security Company Subcontractor, White Label Security Staff, Saints Services Subcontracting"
      />
      <link rel="canonical" href="https://saintsservices.co.uk/services/subcontracting" />
      <meta property="og:title" content="Security Subcontracting Services | Saints Services Ltd" />
      <meta
        property="og:description"
        content="Flexible, SIA-licensed subcontract security staff for security companies and principal contractors across the UK, on fair, transparent terms."
      />
      <meta property="og:url" content="https://saintsservices.co.uk/services/subcontracting" />
      <meta property="og:type" content="website" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] font-sans text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
        <Header />

        <main className="grow">

          {/* HERO — text-led, no embedded form/photo, distinct from the other service pages */}
          <section className="relative bg-slate-900 dark:bg-[#0b1329] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden transition-colors duration-300">
            {/* Schematic grid — reinforces the radar/dispatch motif instead of a plain dot pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.07] z-0"
              style={{
                backgroundImage:
                  'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                backgroundSize: '44px 44px',
                maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
              }}
            />
            <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-[#f59e0b]/15 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute -bottom-40 -left-40 w-[24rem] h-[24rem] bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 mb-6 sm:mb-8">
                <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <Link href="/services" className="hover:text-[#f59e0b] transition-colors">SERVICES</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-[#f59e0b]">SUBCONTRACTING</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                <div className="lg:col-span-7">
                  <Badge icon={Users} forceDark className="mb-6">Staffing Partner · SIA-Licensed Officers</Badge>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6 uppercase">
                    Manpower For Security Companies, <span className="text-[#f59e0b]">Not Competition</span>
                  </h1>

                  <p className="text-sm sm:text-lg text-slate-300 font-medium leading-relaxed mb-10 max-w-2xl">
                    Saints Services Ltd supplies trained, SIA-licensed security officers to other security companies, principal contractors, and organisations that need extra manpower for a site, contract, or event. We prioritise subcontracting work — acting as a seamless extension of your team, on equal terms, whether the arrangement is publicly known or kept strictly confidential.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                    <a
                      href="#quote-form"
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-slate-950 font-black px-7 py-3.5 rounded-md text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10">Request Subcontract Cover</span>
                      <ArrowRight className="relative z-10 w-4 h-4" />
                    </a>

                    <a
                      href="tel:07412733920"
                      className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-extrabold px-6 py-3.5 rounded-md text-xs sm:text-sm transition-all border border-white/20 shadow-md active:scale-95 uppercase tracking-wider"
                    >
                      <PhoneCall className="w-4 h-4 text-[#f59e0b]" />
                      <span>Talk to an Expert</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                    {[
                      "SIA-Licensed Officers",
                      "BS7858 Vetted",
                      "England, Scotland & Wales",
                      "Fair, Equal-Terms Contracts",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 px-3 py-2.5 rounded-sm bg-white/5 border border-white/10 text-[11px] font-bold text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <SubcontractingVisual />
                </div>
              </div>
            </div>
          </section>

          {/* WHAT IT MEANS */}
          <section className="py-16 sm:py-20 bg-white dark:bg-[#0b1329] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Badge icon={Handshake} className="mb-4">What Is Subcontracting</Badge>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight mb-5">
                An Extension of Your Team, Not a Second Vendor
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed mb-4">
                A subcontracting security company is hired by another security company, principal contractor, or organisation to deliver security services on its behalf. Rather than dealing directly with the end client, we supply trained and licensed officers for specific sites, contracts, events, or periods where additional manpower is required.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                It lets you take on larger contracts and cover staff shortages or demand spikes without carrying a bigger permanent headcount — while your client sees consistent, professional, on-brand coverage throughout.
              </p>
            </div>
          </section>

          {/* HOW IT WORKS — 4-step timeline */}
          <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Badge icon={ClipboardCheck} className="mb-4">Process</Badge>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                  How Subcontracting Works
                </h2>
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent z-0" />
                {processSteps.map((step, i) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.title} className="relative z-10 flex flex-col items-start lg:items-center lg:text-center bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-md p-6 shadow-md">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f59e0b] text-slate-950 font-black text-lg mb-4 shrink-0 shadow-lg">
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <div className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-1">Step {i + 1}</div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TWO WAYS WE WORK WITH YOU — transparency / confidentiality */}
          <section className="py-16 sm:py-24 bg-white dark:bg-[#0b1329] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge icon={Scale} className="mb-4">Equal Terms</Badge>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase mb-3">
                  Two Ways We Work With You
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                  We work with every partner on the same fair, transparent terms — the only thing that changes is how visible we are to your client.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 rounded-md p-6 sm:p-8 relative overflow-hidden">
                  <Handshake className="w-8 h-8 text-[#f59e0b] mb-4" />
                  <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Publicly Attributed</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    You&apos;re happy for Saints Services to be visibly part of the delivery team — straightforward for manpower top-ups where transparency is simplest for everyone involved.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 rounded-md p-6 sm:p-8 relative overflow-hidden">
                  <EyeOff className="w-8 h-8 text-[#f59e0b] mb-4" />
                  <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Fully Confidential</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Your brand stays front and centre and the subcontracting arrangement stays between us. A number of the companies we currently support choose exactly this — we treat that discretion as standard, not an exception.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BENEFITS GRID */}
          <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                  Why Contractors Subcontract to Us
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {benefits.map((b) => {
                  const BIcon = b.icon;
                  return (
                    <div key={b.title} className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-md p-5 sm:p-6 shadow-xs">
                      <BIcon className="w-6 h-6 text-[#f59e0b] mb-3" />
                      <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1.5">{b.title}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{b.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <Credentials />

          <CertificationsBanner />

          <Coverage />
          <FaqSubcontracting />

          {/* DEDICATED LEAD FORM SECTION */}
          <section id="quote-form" className="py-16 sm:py-24 bg-slate-900 dark:bg-[#0b1329] text-white border-b border-slate-800 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <Badge icon={Lock} forceDark>Confidential · Fair-Terms Staffing</Badge>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    Ready to Add Subcontract Cover?
                  </h2>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed">
                    Tell us about your sites, shift pattern, and volume of cover. We&apos;ll confirm availability and terms — publicly attributed or fully confidential, your choice.
                  </p>
                  <a
                    href="tel:07412733920"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#f59e0b] hover:text-amber-400 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>07412 733920</span>
                  </a>
                </div>

                <div className="lg:col-span-7 bg-white dark:bg-[#070d1e] text-slate-900 dark:text-white p-6 sm:p-8 rounded-md border border-white/10 shadow-2xl relative z-10">
                  {submitted ? (
                    <div className="bg-slate-50 dark:bg-[#0b1329] text-slate-900 dark:text-white p-6 rounded-md text-center border border-slate-200 dark:border-slate-800">
                      <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-2" />
                      <h4 className="text-lg font-black mb-1 uppercase tracking-tight">Request Dispatched</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs font-medium">Our team will review your requirements and get in touch shortly.</p>
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="text" name="firstName" required placeholder="First name *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        <input type="tel" name="phone" required placeholder="Phone number *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                      </div>

                      <input type="email" name="email" required placeholder="Email Address *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />

                      <CustomServiceSelect
                        value={selectedService}
                        onChange={setSelectedService}
                      />

                      <textarea name="enquiry" rows={3} placeholder="Your enquiry (e.g. sites, shift pattern, volume of cover)..." className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none transition-colors" />

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
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
