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
  Radio,
  Clock,
  Send,
  Lock
} from 'lucide-react';

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
    <>
      <title>{`${location.name} Security Guarding & Services | Saints Services Ltd`}</title>
      <meta 
        name="description" 
        content={`Hire SIA-licensed security guards and manned guarding services in ${location.name}. Fast 2-hour response and 24/7 patrol dispatch from Saints Services Ltd.`} 
      />
      <meta 
        name="keywords" 
        content={`Security Guards ${location.name}, Manned Guarding ${location.name}, SIA Security ${location.name}, Keyholding ${location.name}, Saints Services ${location.name}`} 
      />
      <meta property="og:title" content={`${location.name} Security Services | Saints Services Ltd`} />
      <meta 
        property="og:description" 
        content={`SIA-licensed security guarding and emergency patrol dispatch across ${location.name} and surrounding areas.`} 
      />
      <meta property="og:url" content={`https://saintsservices.co.uk/locations/${slug}`} />
      <meta property="og:type" content="website" />

      <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] font-sans text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
        <Header />

        <main className="grow">
          <section className="relative bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800/80 overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 transition-colors duration-300">
            
            <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none z-0 opacity-20 dark:opacity-30">
              <Image 
                src="https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/security-services.jpg" 
                alt={`${location.name} Security Services`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-[70%_center] mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 dark:from-[#0b1329] via-slate-100/90 dark:via-[#0b1329]/90 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100 dark:from-[#0b1329] to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono font-bold text-slate-600 dark:text-slate-400 mb-8 pb-4 border-b border-slate-300 dark:border-slate-800/60">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]"/> UK Wide Coverage</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]"/> 98% Client Retention Rate</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]"/> Available 24/7/365</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                    <Link href="/locations" className="hover:text-[#f59e0b] transition-colors">LOCATIONS</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                    <span className="text-[#f59e0b] uppercase">{location.name}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest shadow-xs backdrop-blur-md">
                    <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                    <span>{location.name.toUpperCase()} REGIONAL CONTROL DESK</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-[1.12]">
                    {location.name} Security Services <br/>
                    <span className="text-[#f59e0b]">& Security Guards</span>
                  </h1>

                  <p className="text-sm sm:text-base font-medium leading-relaxed max-w-2xl text-slate-600 dark:text-slate-300">
                    {location.heroText}
                  </p>

                  <p className="text-sm sm:text-base font-medium leading-relaxed max-w-2xl text-slate-600 dark:text-slate-300">
                    As one of the UK&apos;s top-performing security companies with an exceptional 98% client retention rate, we deploy SIA-licensed security officers to protect your premises, staff, and assets with bespoke {location.name} security solutions.
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-slate-900 dark:text-white font-bold text-sm">5-Star Rated Service</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />)}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button 
                      type="button"
                      onClick={() => {
                        const element = document.getElementById('quote-form');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group relative overflow-hidden inline-flex justify-center items-center gap-2 bg-[#f59e0b] text-slate-950 font-black px-8 py-3.5 rounded-md text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10">Request a Quote</span>
                      <ArrowRight className="relative z-10 w-4 h-4" />
                    </button>

                    <a 
                      href="tel:07412733920" 
                      className="inline-flex justify-center items-center gap-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold px-8 py-3.5 rounded-md text-xs sm:text-sm transition-all shadow-md uppercase tracking-wider"
                    >
                      <PhoneCall className="w-4 h-4 text-[#f59e0b]" /> 
                      <span>Talk to an Expert</span>
                    </a>
                  </div>
                </div>

                <div id="quote-form" className="lg:col-span-5 bg-white dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 rounded-md p-6 sm:p-8 shadow-2xl relative z-10 text-slate-900 dark:text-white transition-colors duration-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                    <Lock className="w-3 h-3 text-[#f59e0b]" /> 
                    <span>FAST_DISPATCH // 2_HR_RESPONSE</span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-slate-900 dark:text-white">
                    Request a Quote
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-6">
                    Get a tailored operational budget for your {location.name} site within 2 hours.
                  </p>
                  
                  {submitted ? (
                    <div className="text-center py-8 bg-slate-50 dark:bg-[#0b1329] rounded-md border border-slate-200 dark:border-slate-800">
                      <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">Request Dispatched!</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Our {location.name} operational manager will contact you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" name="firstName" required placeholder="First name *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                        <input type="tel" name="phone" required placeholder="Phone number *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                      </div>
                      
                      <input type="email" name="email" required placeholder="Work Email *" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                      
                      <CustomServiceSelect 
                        value={selectedService} 
                        onChange={setSelectedService} 
                      />

                      <textarea name="enquiry" required rows={3} placeholder="Your site specs (postcode, shift hours, dates required)..." className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none transition-colors" />
                      
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-4 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                        <span className="relative z-10">{loading ? "Dispatching Request..." : "Submit Specification to Dispatch"}</span>
                        <Send className="relative z-10 w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" /> 
                    <span>LOCAL_OPERATIONS_ZONE</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                    Professional Security Services Throughout {location.name}
                  </h2>
                  <div className="space-y-4 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>{location.introText}</p>
                    <p>All aspects of site protection are managed by Saints Services&apos; security teams, including static guarding, gatehouse clearance, event crowd safety, and emergency alarm response.</p>
                    <p>In addition to continuous perimeter monitoring, our SIA-licensed security officers act as a highly visible deterrent against unauthorized intrusion, vandalism, and theft across {location.name}.</p>
                  </div>
                </div>

                <div className="lg:col-span-6 h-[380px] sm:h-[420px] rounded-md overflow-hidden border border-slate-300 dark:border-slate-800 shadow-xl relative bg-slate-100 dark:bg-slate-900 [&_.pigeon-attribution]:hidden transition-colors">
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
                        <span className="absolute w-10 h-10 rounded-full bg-[#f59e0b] animate-ping opacity-75" />
                        <div className="w-5 h-5 rounded-full bg-[#f59e0b] border-2 border-white shadow-2xl relative z-10" />

                        <div className="mt-2 whitespace-nowrap text-xs font-black font-mono tracking-wider bg-[#0b1329] text-[#f59e0b] px-3 py-1 rounded-sm border border-amber-500/40 shadow-2xl z-20">
                          {location.name}
                        </div>
                      </div>
                    </Marker>
                  </Map>

                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#0b1329]/90 text-slate-900 dark:text-white backdrop-blur-md border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-sm shadow-lg flex items-center gap-3 z-30 pointer-events-none transition-colors">
                    <div className="p-2 bg-[#f59e0b] rounded-sm text-[#0b1329]">
                      <MapPin className="w-4 h-4 font-black" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-wider block">
                        ACTIVE_COVERAGE_HUB
                      </span>
                      <h4 className="text-xs font-black uppercase tracking-wide">
                        {location.name} Control Centre
                      </h4>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-[#0b1329]/95 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-sm text-[11px] font-mono font-bold flex items-center gap-2 shadow-md z-30 pointer-events-none transition-colors">
                    <Radio className="w-3.5 h-3.5 text-green-500 animate-pulse" />
                    <span>24/7 PATROL DISPATCH ACTIVE</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="py-16 bg-slate-100 dark:bg-[#0b1329] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8">
                {location.name} Areas We Cover:
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
                {location.areasCovered.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" /> 
                  <span>QUALIFIED_SECURITY_STANDARDS</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
                  Credentials & Compliance
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "SIA-Licensed Security Personnel",
                    desc: `All security guards in ${location.name} are SIA-licensed and vetted to BS7858 prior to deployment. Every officer undergoes 5-year employment and background checks.`
                  },
                  {
                    icon: Award,
                    title: "Training & Accreditation",
                    desc: "Personnel receive continuous training in conflict resolution, physical intervention, first aid, fire safety, and emergency escalation protocols."
                  },
                  {
                    icon: FileCheck,
                    title: "Industry Certifications",
                    desc: `Saints Services holds standard-setting certifications trusted by ${location.name} businesses for manned guarding, keyholding, and venue protection.`
                  },
                  {
                    icon: Building2,
                    title: "Regulatory Compliance",
                    desc: `We provide compliant security operations in ${location.name} meeting all legal requirements, Health and Safety regulations, and Data Protection laws.`
                  }
                ].map((cred, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-md p-8 text-center shadow-md transition-colors">
                    <cred.icon className="w-12 h-12 text-[#f59e0b] mx-auto mb-6" />
                    <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">{cred.title}</h3>
                    <div className="w-12 h-1 bg-[#f59e0b] mx-auto mb-4" />
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{cred.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f59e0b] text-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="py-16 sm:py-24 md:pr-8">
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6 text-slate-950">
                    Key Crime Stats For {location.name}
                  </h2>
                  <div className="flex gap-2 mb-8">
                    {[...Array(4)].map((_, i) => <div key={i} className="w-6 h-1.5 bg-slate-950" />)}
                  </div>
                  <p className="text-sm sm:text-base font-bold leading-relaxed mb-6 text-slate-900">
                    {location.crimeDescription}
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-900 px-6 py-3.5 rounded-md transition-all shadow-md active:scale-95 text-xs sm:text-sm">
                    <span>Discuss Local Security</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="relative h-64 md:h-full min-h-[400px] w-full hidden md:block">
                  <div className="absolute inset-0 bg-slate-950 skew-x-12 transform origin-bottom-right translate-x-16 overflow-hidden border-l-8 border-white/20">
                    <Image 
                      src="https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/security-services.jpg" 
                      alt="Security Guard Patrol"
                      fill
                      sizes="50vw"
                      className="object-cover -skew-x-12 origin-bottom-right opacity-60 mix-blend-luminosity scale-125"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-12">
                What Our {location.name} Clients Say
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.testimonials.map((review, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-md p-6 sm:p-8 flex flex-col justify-between shadow-md transition-colors">
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      &quot;{review.quote}&quot;
                    </p>
                    <div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />)}
                      </div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-t border-slate-200 dark:border-slate-800 pt-3">
                        — {review.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-slate-100 dark:bg-[#0b1329] border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-xs sm:text-sm">
                  Answers to common questions about our licensed security operations in {location.name}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 rounded-md p-5 hover:border-[#f59e0b]/60 transition-colors group shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#f59e0b] transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium leading-relaxed">
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
    </>
  );
}