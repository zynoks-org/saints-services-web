"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Upload, 
  Send, 
  ChevronRight,
  Sparkles,
  Building2,
  Users,
  ArrowRight,
  FileCheck,
  Lock
} from 'lucide-react';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState("Security Officer / Manned Guard");
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const openPositions = [
    {
      id: "guarding",
      title: "SIA Security Officer / Manned Guard",
      location: "London & South East (Mobile Deployment)",
      type: "Full-Time / Part-Time Rotas",
      badge: "SIA Door Supervisor / Guarding Required",
      icon: ShieldCheck,
      desc: "Providing static site protection, access gatehouse clearance, and perimeter patrols for commercial headquarters and industrial parks."
    },
    {
      id: "event",
      title: "Event Safety Steward & Response Guard",
      location: "Nationwide UK Events",
      type: "Flexible Shift / Event Basis",
      badge: "SIA Badge Preferred • Steward Training Provided",
      icon: Users,
      desc: "Managing entry screening, VIP escorting, and crowd control protocols for festivals, galas, and stadium venues."
    },
    {
      id: "retail",
      title: "Retail Loss Prevention Specialist",
      location: "High Street & Shopping Centers",
      type: "Full-Time Shifts",
      badge: "SIA License Required",
      icon: Building2,
      desc: "Front-of-house store security focused on crime deterrence, staff protection, conflict de-escalation, and loss prevention reporting."
    },
    {
      id: "facilities",
      title: "Commercial Cleaning & Facilities Specialist",
      location: "Regional Office Complexes",
      type: "Evening & Overnight Shifts",
      badge: "COSHH Trained • Background Checked",
      icon: Sparkles,
      desc: "Delivering scheduled commercial office rotas, high-footfall sanitization, and post-event deep cleaning."
    }
  ];

  const recruitmentSteps = [
    { step: "01", title: "Online Application", desc: "Submit your details, region, and 16-digit SIA badge details via our portal.", icon: Send },
    { step: "02", title: "BS7858 Vetting", desc: "5-year background, credit, and employment history screening conducted.", icon: FileCheck },
    { step: "03", title: "Induction & Briefing", desc: "Site-specific risk training and mobile app patrol briefing.", icon: ShieldCheck },
    { step: "04", title: "Shift Deployment", desc: "Rostered onto active shifts with dedicated operational dispatch management.", icon: CheckCircle2 }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('fullName') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      company: `Region: ${(form.elements.namedItem('region') as HTMLInputElement)?.value || 'N/A'}`,
      service: `CAREERS: ${selectedJob}`,
      details: `SIA License: ${(form.elements.namedItem('siaLicense') as HTMLInputElement)?.value || 'N/A'} | Attachment: ${fileName || 'None'} | Cover Note: ${(form.elements.namedItem('coverNote') as HTMLTextAreaElement)?.value || 'N/A'}`
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
        alert('Failed to submit application. Please try again.');
        console.error(result.error);
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Network error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <title>Careers & Vacancies | Saints Services Ltd Security Jobs UK</title>
      <meta 
        name="description" 
        content="Apply for SIA security guard jobs, event safety stewarding, and facilities roles across the UK. Join Saints Services Ltd with flexible shifts and BS7858 vetting." 
      />
      <meta 
        name="keywords" 
        content="SIA Security Jobs UK, Security Guard Vacancies, Event Security Careers, Manned Guarding Recruitment, Saints Services Careers" 
      />
      <meta property="og:title" content="Careers & Vacancies | Saints Services Ltd" />
      <meta 
        property="og:description" 
        content="Build your career in UK security and facilities management with Saints Services Ltd. Explore open SIA security and event steward positions." 
      />
      <meta property="og:url" content="https://saintsservices.co.uk/careers" />
      <meta property="og:type" content="website" />

      <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] font-sans text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
        <Header />

        <main className="grow">
          {/* ========================================== */}
          {/* 1. CAREERS HERO WITH TACTICAL DARK STYLE    */}
          {/* ========================================== */}
          <section className="relative bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
            
            {/* Tactical Dot Grid Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20"
              style={{
                backgroundImage: 'radial-gradient(currentColor 1.2px, transparent 1.2px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Ambient Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
                <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                <span className="text-[#f59e0b]">CAREERS</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-xs backdrop-blur-md transition-colors">
                    <Briefcase className="w-4 h-4 text-[#f59e0b] shrink-0" /> 
                    <span>JOIN SAINTS SERVICES LTD // HR DISPATCH</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4 sm:mb-6 uppercase transition-colors">
                    Build Your Career in <br className="hidden sm:inline" />
                    <span className="text-[#f59e0b]">UK Security & Facilities</span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl transition-colors">
                    We are actively expanding our nationwide field team. Explore vacancies for licensed SIA security officers, event stewards, and facilities specialists with structured rotas and ongoing professional support.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a 
                      href="#application-form" 
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-slate-950 font-black px-7 py-3.5 rounded-md text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10">Apply Online Now</span>
                      <ArrowRight className="relative z-10 w-4 h-4" />
                    </a>

                    <a 
                      href="#vacancies" 
                      className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-extrabold px-6 py-3.5 rounded-md text-xs sm:text-sm transition-all border border-slate-300 dark:border-slate-800 shadow-md active:scale-95 uppercase tracking-wider"
                    >
                      <span>Browse 4 Open Roles</span>
                    </a>
                  </div>
                </div>

                {/* RIGHT COLUMN: RECRUITMENT MEDIA CONTAINER WITH BRACKETS */}
                <div className="lg:col-span-5 relative mt-6 lg:mt-0 px-2">
                  
                  {/* Tactical Corner Brackets */}
                  <div className="absolute -top-3 -left-1 sm:-top-3 sm:-left-3 w-12 h-12 border-t-2 border-l-2 border-[#f59e0b] z-20 pointer-events-none" />
                  <div className="absolute -bottom-3 -right-1 sm:-bottom-3 sm:-right-3 w-12 h-12 border-b-2 border-r-2 border-[#f59e0b] z-20 pointer-events-none" />

                  <div className="relative z-10 w-full h-64 sm:h-80 lg:h-[420px] rounded-md overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-[#0b1329]">
                    <Image 
                      src="/images/joinus.png" 
                      alt="Saints Services Recruitment Team" 
                      fill
                      priority
                      className="object-cover object-center -scale-x-100 filter brightness-95"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-[#0b1329] via-slate-900/40 dark:via-[#0b1329]/40 to-transparent" />
                    
                    {/* Floating Glassmorphism Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-md bg-white/95 dark:bg-[#0b1329]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] shrink-0">
                          <Briefcase className="w-5 h-5 text-[#f59e0b]" />
                        </div>
                        <div>
                          <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Join the UK&apos;s Premier Team</h3>
                          <p className="text-[10px] sm:text-[11px] font-mono font-bold text-[#f59e0b] tracking-wider uppercase mt-0.5">
                            Professional Environment • Flexible Rotas • SIA Support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* ========================================== */}
          {/* 2. WHY WORK WITH US BENEFITS               */}
          {/* ========================================== */}
          <section className="py-12 sm:py-16 bg-slate-50 dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { title: "Structured Development", desc: "Clear career pathways with ongoing training and skill development programs.", icon: ShieldCheck },
                  { title: "Flexible Shift Rotas", desc: "Day, night, weekend, or event-based shifts designed to fit your schedule.", icon: Clock },
                  { title: "SIA Support", desc: "Career guidance and assistance with SIA licensing renewals and certifications.", icon: ShieldCheck },
                  { title: "Dedicated HR Desk", desc: "Direct communication with responsive HR and operational managers.", icon: CheckCircle2 }
                ].map((perk, idx) => {
                  const PerkIcon = perk.icon;
                  return (
                    <div key={idx} className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-md shadow-xl transition-colors">
                      <div className="p-2.5 bg-slate-100 dark:bg-slate-900 text-[#f59e0b] rounded-md w-fit mb-3 border border-slate-200 dark:border-slate-800">
                        <PerkIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-1 uppercase tracking-tight">{perk.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">{perk.desc}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ========================================== */}
          {/* 3. RECRUITMENT & VETTING PROCESS TIMELINE  */}
          {/* ========================================== */}
          <section className="py-16 sm:py-20 bg-white dark:bg-[#0b1329] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-3">
                  <FileCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>ONBOARDING_PROCESS</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                  4-Step Onboarding Pipeline
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium mt-2">
                  We maintain strict compliance to BS7858 vetting standards while ensuring a fast recruitment path for qualified personnel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recruitmentSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={idx} className="bg-slate-50 dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 p-6 rounded-md relative flex flex-col justify-between shadow-xs transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-extrabold text-[#f59e0b] bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-sm">
                            STEP_{step.step}
                          </span>
                          <StepIcon className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <h3 className="text-base font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{step.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ========================================== */}
          {/* 4. OPEN POSITIONS BOARD                    */}
          {/* ========================================== */}
          <section id="vacancies" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="max-w-3xl mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-widest mb-3">
                  <Briefcase className="w-3.5 h-3.5 text-[#f59e0b]" /> 
                  <span>ACTIVE_VACANCIES</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                  Active Openings Across the UK
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium mt-2">
                  Select any open position below to pre-fill your application form directly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {openPositions.map((job) => {
                  const IconComp = job.icon;
                  return (
                    <div 
                      key={job.id} 
                      className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-md flex flex-col justify-between shadow-xl hover:border-[#f59e0b]/50 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="p-3 bg-slate-100 dark:bg-slate-900 text-[#f59e0b] rounded-md border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform">
                            <IconComp className="w-5 h-5" />
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{job.title}</h3>
                        
                        <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#f59e0b]" /> {job.type}
                          </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                          {job.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">{job.badge}</span>
                        <button 
                          onClick={() => handleApplyClick(job.title)}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#f59e0b] hover:text-amber-500 transition-colors uppercase tracking-wider shrink-0 cursor-pointer"
                        >
                          <span>Apply</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ========================================== */}
          {/* 5. INTERACTIVE APPLICATION FORM            */}
          {/* ========================================== */}
          <section id="application-form" className="py-16 sm:py-24 bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="bg-white dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 p-6 sm:p-12 rounded-md shadow-2xl relative">
                
                <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                    <Lock className="w-3 h-3 text-[#f59e0b]" />
                    <span>SECURE_RECRUITMENT_PORTAL</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                    Online Application Portal
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">
                    Submit your details and CV to connect directly with our HR recruitment desk.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-slate-50 dark:bg-[#0b1329] text-slate-900 dark:text-white p-8 sm:p-10 rounded-md text-center border border-slate-200 dark:border-slate-800">
                    <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                    <h3 className="text-xl font-black mb-1 uppercase tracking-tight">Application Dispatched</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs font-medium max-w-md mx-auto">
                      Our HR compliance team will evaluate your submission and contact you shortly regarding active shift availability in your area.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Full Name *</label>
                        <input type="text" name="fullName" required placeholder="e.g. John Smith" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Phone Number *</label>
                        <input type="tel" name="phone" required placeholder="e.g. 07412 733920" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Email Address *</label>
                        <input type="email" name="email" required placeholder="john@example.co.uk" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">City / Deployment Region *</label>
                        <input type="text" name="region" required placeholder="e.g. Greater London, Birmingham" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Applying For Position *</label>
                        <CustomServiceSelect 
                          value={selectedJob} 
                          onChange={setSelectedJob} 
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">SIA License Number (If applicable)</label>
                        <input type="text" name="siaLicense" placeholder="16-digit SIA License Badge #" className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] transition-colors" />
                      </div>
                    </div>

                    {/* File Upload Box */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Attach CV / Experience Document</label>
                      <div className="border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-[#0b1329] rounded-sm p-6 text-center hover:border-[#f59e0b] transition-colors cursor-pointer relative">
                        <Upload className="w-7 h-7 text-[#f59e0b] mx-auto mb-2" />
                        <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1">
                          {fileName ? `Attached: ${fileName}` : "Click to select CV or drag file here"}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">PDF, DOC, DOCX (Max 10MB)</span>
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx" 
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase mb-1">Cover Note / Shift Availability</label>
                      <textarea name="coverNote" rows={3} placeholder="Provide details regarding your previous security experience or preferred shift hours..." className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] resize-none transition-colors" />
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-4 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer mt-2"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10">{loading ? "Submitting Application..." : "Submit Careers Application"}</span>
                      <Send className="relative z-10 w-4 h-4" />
                    </button>

                  </form>
                )}

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}