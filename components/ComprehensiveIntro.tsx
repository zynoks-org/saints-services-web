"use client";

import React, { useState } from 'react';
import { SERVICES_LIST } from '@/lib/servicesData';
import { CustomServiceSelect } from '@/components/CustomServiceSelect';
import { 
  ShieldCheck, 
  Award, 
  BrainCircuit, 
  BadgePercent, 
  Send, 
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

export function ComprehensiveIntro() {
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
      service: selectedService || 'General Inquiry',
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

  const valueProps = [
    {
      icon: ShieldCheck,
      title: "Bespoke Tailored Solutions",
      desc: "Every commercial property has unique security challenges. We develop site-specific security protocols tailored to your industry, risk profile, and operational schedule."
    },
    {
      icon: BadgePercent,
      title: "Competitive & Transparent Rates",
      desc: "High-quality security shouldn't be cost-prohibitive. We provide clear, fixed hourly billing with zero hidden fees, ensuring top-tier protection that fits your budget."
    },
    {
      icon: BrainCircuit,
      title: "Highly Trained Experts",
      desc: "All Saints Services personnel are SIA-licensed and rigorously trained in emergency protocols, conflict de-escalation, physical access clearance, and customer care."
    },
    {
      icon: Award,
      title: "98% Client Retention Rate",
      desc: "Our high retention rate reflects our dedication to operational excellence, rapid control room backup, and consistent supervisory audits across every active shift."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP INTRO COPY + QUICK FORM ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* LEFT: SEO BRAND COPY */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0b1329] text-[#f59e0b] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" /> 
              <span>Comprehensive Protection</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0b1329] tracking-tight mb-6 leading-tight">
              Comprehensive Security Solutions for Every Business
            </h2>

            <div className="space-y-4 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              <p>
                Every day, UK businesses face security risks that can disrupt operations, threaten staff, and damage physical assets. Unmonitored access points, unvetted personnel, and delayed incident responses leave commercial premises vulnerable to theft, trespass, and vandalism.
              </p>
              <p>
                As a premier UK security provider, Saints Services Ltd delivers site-specific protection tailored to your exact operational requirements. Our SIA-licensed security officers provide gatehouse access control, static guarding, reception security, and mobile patrols across commercial, retail, construction, and event sectors.
              </p>
              <p>
                We manage every aspect of site safety—combining physical officer deployment with real-time GPS patrol tracking and rapid incident escalation to ensure total peace of mind for property managers nationwide.
              </p>
            </div>
          </div>

          {/* RIGHT: INLINE QUICK QUOTE CARD */}
          <div className="lg:col-span-5 bg-[#f8fafc] border border-slate-200/90 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md">
            <h3 className="text-xl font-black text-[#0b1329] mb-1">Request an Immediate Quote</h3>
            <p className="text-slate-500 text-xs font-medium mb-6">
              Fill in your site details below for a fast operational response from dispatch.
            </p>

            {submitted ? (
              <div className="bg-[#0b1329] text-white p-6 rounded-xl text-center border border-slate-800">
                <CheckCircle2 className="w-10 h-10 text-[#f59e0b] mx-auto mb-2" />
                <h4 className="text-base font-black mb-1">Request Received</h4>
                <p className="text-slate-300 text-xs">Our dispatch manager will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" name="firstName" required placeholder="First Name *" className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329]" />
                  <input type="tel" name="phone" required placeholder="Phone Number *" className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329]" />
                </div>

                <input type="email" name="email" required placeholder="Email Address *" className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329]" />
                <input type="text" name="company" placeholder="Company Name" className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329]" />
                
                <CustomServiceSelect 
                  value={selectedService} 
                  onChange={setSelectedService} 
                />

                <textarea name="enquiry" rows={3} placeholder="Enquiry details (e.g. location, dates, shift hours)..." className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0b1329] focus:outline-none focus:border-[#0b1329] resize-none" />

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#0b1329] hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 border border-slate-800 cursor-pointer"
                >
                  <span>{loading ? "Submitting Request..." : "Submit Request"}</span>
                  <Send className="w-4 h-4 text-[#f59e0b]" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 4 VALUE PROPOSITION BLOCKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-10 border-t border-slate-200">
          {valueProps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="flex items-start gap-5 p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/90 shadow-2xs">
                <div className="p-3 bg-[#0b1329] text-[#f59e0b] rounded-xl shrink-0 mt-1">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0b1329] mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}