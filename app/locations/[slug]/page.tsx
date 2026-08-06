"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { Map, Marker } from 'pigeon-maps';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { locationsData } from '@/lib/locationsData';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  MapPin, 
  ChevronRight, 
  Star, 
  ArrowRight, 
  CheckCircle2,
  ShieldCheck,
  Award,
  FileCheck,
  Building2,
  PhoneCall,
  Radio
} from 'lucide-react';

// Using CartoDB Positron (clean, crisp light-themed tactical tiles that match the white section background)
const lightMapProvider = (x: number, y: number, z: number, dpr?: number) => {
  return `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}${dpr && dpr >= 2 ? '@2x' : ''}.png`;
};

export default function LocationDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string)?.toLowerCase();
  const location = slug ? locationsData[slug] : undefined;
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);

  if (!location) {
    notFound();
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('firstName') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      company: `${location.name} Location Inquiry`,
      service: selectedService || 'General Location Quote',
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
    <div className="min-h-screen bg-[#070d1e] font-sans text-slate-300 flex flex-col justify-between">
      <Header />

      <main>
        {/* ========================================== */}
        {/* 1. HERO SECTION & QUOTE FORM */}
        {/* ========================================== */}
        <section className="relative bg-[#0b1329] border-b border-slate-800 overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none z-0">
            <Image 
              src="/images/security-services.jpg" 
              alt={`${location.name} Security Services`}
              fill
              className="object-cover object-[70%_center] opacity-25 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329] via-[#0b1329]/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b1329] to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono font-bold text-slate-400 mb-8 pb-4 border-b border-slate-800/60">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]"/> UK Wide Coverage</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]"/> 98% Retention Rate</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]"/> Available 24/7/365</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-slate-400">
                  <Link href="/" className="hover:text-[#f59e0b]">HOME</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <Link href="/locations" className="hover:text-[#f59e0b]">LOCATIONS</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#f59e0b] uppercase">{location.name}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
                  {location.name} Security Services <br/> & Security Guards
                </h1>

                <p className="text-sm sm:text-base font-medium leading-relaxed max-w-2xl text-slate-300">
                  {location.heroText}
                </p>

                <p className="text-sm sm:text-base font-medium leading-relaxed max-w-2xl text-slate-300">
                  As one of the UK&apos;s top-performing security companies, with an exceptional 98% client retention rate, we use our expertise to protect your premises, people and property with our bespoke {location.name} security services.
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <span className="text-white font-bold text-sm">5 Star Reviewed</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />)}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="#quote-form" className="inline-flex justify-center items-center bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-black px-8 py-3.5 rounded-xl text-sm transition-all uppercase tracking-wider">
                    Request a Quote
                  </a>
                  <a href="tel:07412733920" className="inline-flex justify-center items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all">
                    <PhoneCall className="w-4 h-4 text-[#f59e0b]" /> Talk to an expert
                  </a>
                </div>
              </div>

              {/* Form Card */}
              <div id="quote-form" className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10 text-slate-900">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-center text-[#0b1329]">
                  Request a Quote
                </h3>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-[#0b1329]">Request Sent!</h4>
                    <p className="text-sm text-slate-500 mt-2">Our {location.name} dispatcher will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="firstName" required placeholder="First name" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f59e0b]" />
                      <input type="tel" name="phone" required placeholder="Phone number" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f59e0b]" />
                    </div>
                    <input type="email" name="email" required placeholder="Email Address" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f59e0b]" />
                    <CustomServiceSelect 
                      value={selectedService} 
                      onChange={setSelectedService} 
                    />
                    <textarea name="enquiry" required rows={3} placeholder="Your enquiry (e.g. venue location, dates, times)" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f59e0b] resize-none" />
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-xl text-sm uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {loading ? "Submitting Request..." : "Submit Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION & CLEAN LIGHT REACT MAP */}
        {/* ========================================== */}
        <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl sm:text-4xl font-black text-[#0b1329] uppercase tracking-tight leading-tight">
                  Professional Security Services Throughout {location.name}
                </h2>
                <div className="space-y-4 text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                  <p>{location.introText}</p>
                  <p>All aspects of premise protection are handled by Saints Services&apos; security staff. These include access control, door security, event security services and emergency response.</p>
                  <p>In addition to simply monitoring your premises, our guards help prevent security incidents and mitigate potential threats throughout {location.name}.</p>
                </div>
              </div>

              {/* CLEAN CRISP LIGHT MAP CARD WITH SUBTLE SLATE BORDER */}
              <div className="lg:col-span-6 h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border border-slate-300 shadow-xl relative bg-slate-100 [&_.pigeon-attribution]:hidden">
                <Map 
                  defaultCenter={[location.coordinates.lat, location.coordinates.lng]} 
                  defaultZoom={10}
                  provider={lightMapProvider}
                  mouseEvents={false}
                  touchEvents={false}
                >
                  <Marker 
                    width={40} 
                    anchor={[location.coordinates.lat, location.coordinates.lng]}
                  >
                    <div className="relative flex flex-col items-center justify-center p-4 -m-4 pointer-events-none">
                      {/* Outer Pulse Ring */}
                      <span className="absolute w-10 h-10 rounded-full bg-[#f59e0b] animate-ping opacity-75" />
                      
                      {/* Core Pin Dot */}
                      <div className="w-5 h-5 rounded-full bg-[#f59e0b] border-2 border-white shadow-2xl relative z-10" />

                      {/* Clean Name Tag Pushed Safely Below the Dot */}
                      <div className="mt-2 whitespace-nowrap text-xs font-black font-mono tracking-wider bg-[#0b1329] text-[#f59e0b] px-3 py-1 rounded-lg border border-amber-500/40 shadow-2xl z-20">
                        {location.name}
                      </div>
                    </div>
                  </Marker>
                </Map>

                {/* Map Overlay Badge */}
                <div className="absolute top-4 left-4 bg-[#0b1329]/90 text-white backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3 z-30 pointer-events-none">
                  <div className="p-2 bg-[#f59e0b] rounded-xl text-[#0b1329]">
                    <MapPin className="w-4 h-4 font-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-wider block">
                      ACTIVE_COVERAGE_HUB
                    </span>
                    <h4 className="text-xs font-black uppercase text-white tracking-wide">
                      {location.name} Operations Centre
                    </h4>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 bg-[#0b1329]/95 text-white border border-slate-700 px-3.5 py-2 rounded-full text-[11px] font-mono font-bold flex items-center gap-2 shadow-md z-30 pointer-events-none">
                  <Radio className="w-3.5 h-3.5 text-green-400 animate-pulse" />
                  <span>24/7 PATROL DISPATCH ACTIVE</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. AREAS COVERED */}
        {/* ========================================== */}
        <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8">
              {location.name} Areas We Cover:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
              {location.areasCovered.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-600 border-b border-slate-200 pb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. CREDENTIALS & COMPLIANCE */}
        {/* ========================================== */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200 text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-12 text-center text-[#0b1329]">
              Credentials & Compliance
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "SIA-Licensed Security Personnel",
                  desc: `All security guards in ${location.name} are SIA-licensed and vetted prior to deployment. Every officer undergoes 5-year employment verification and criminal checks.`
                },
                {
                  icon: Award,
                  title: "Training & Accreditation",
                  desc: "Personnel receive continuous instruction in conflict resolution, physical intervention, first aid, fire safety, and emergency response across the county."
                },
                {
                  icon: FileCheck,
                  title: "Security Industry Certifications",
                  desc: `Saints Services holds standard-setting certifications as a security company that ${location.name} businesses use for manned guarding and door supervision.`
                },
                {
                  icon: Building2,
                  title: "Regulatory Compliance",
                  desc: `We provide compliant security services in ${location.name} that meet all legal requirements, Health and Safety regulations, and Data Protection laws.`
                }
              ].map((cred, idx) => (
                <div key={idx} className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 text-center shadow-sm">
                  <cred.icon className="w-12 h-12 text-[#f59e0b] mx-auto mb-6" />
                  <h3 className="text-lg font-black text-[#0b1329] mb-4">{cred.title}</h3>
                  <div className="w-12 h-1 bg-[#f59e0b] mx-auto mb-4" />
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{cred.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. KEY CRIME STATS BANNER */}
        {/* ========================================== */}
        <section className="bg-[#f59e0b] text-[#0b1329] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="py-16 sm:py-24 pr-8">
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">
                  Key Crime Stats For {location.name}
                </h2>
                <div className="flex gap-2 mb-8">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-6 h-1.5 bg-[#0b1329]" />)}
                </div>
                <p className="text-base sm:text-lg font-bold leading-relaxed mb-6">
                  {location.crimeDescription}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-white bg-[#0b1329] hover:bg-slate-800 px-6 py-3 rounded-xl transition-colors">
                  Discuss Local Security <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative h-64 md:h-full min-h-[400px] w-full hidden md:block">
                <div className="absolute inset-0 bg-[#0b1329] skew-x-12 transform origin-bottom-right translate-x-16 overflow-hidden border-l-8 border-white/20">
                  <Image 
                    src="/images/security-services.jpg" 
                    alt="Security Guard Patrol"
                    fill
                    className="object-cover -skew-x-12 origin-bottom-right opacity-60 mix-blend-luminosity scale-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. CLIENT TESTIMONIALS */}
        {/* ========================================== */}
        <section className="py-16 sm:py-24 bg-[#070d1e] border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-12">
              What Our {location.name} Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.testimonials.map((review, idx) => (
                <div key={idx} className="bg-[#0b1329] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                  <p className="text-sm font-medium text-slate-300 leading-relaxed mb-6">
                    &quot;{review.quote}&quot;
                  </p>
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />)}
                    </div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider border-t border-slate-700 pt-3">
                      — {review.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section className="py-16 sm:py-24 bg-[#0b1329] border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-400 font-medium">
                Answers to Frequently Asked Questions About Our Licensed and Professional Security Services in {location.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {location.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#070d1e] border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors group">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-slate-400 mt-3 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}