"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqSecurityGuards() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "Licensing & Vetting",
      question: "Are your security guards properly licensed and vetted?",
      answer: "Yes, every member of our security team holds an active Security Industry Authority (SIA) licence relevant to their role. Before deployment, officers undergo rigorous BS7858 background screening, including enhanced DBS criminal record checks, 5-year employment verification, right-to-work validation, and identity checks. All personnel complete ongoing SIA-approved training and supervisory field audits to ensure standard-setting professionalism."
    },
    {
      category: "Nationwide Coverage",
      question: "Which areas do you cover across the UK?",
      answer: "Saints Services Ltd provides full nationwide security coverage across England, Scotland, Wales, and Northern Ireland. With a deep roster of local officers stationed across major regional hubs—including London, Birmingham, Manchester, Leeds, Glasgow, Edinburgh, Bristol, Cardiff, and Belfast—we deploy SIA-licensed guards rapidly to urban commercial centres and remote industrial sites alike."
    },
    {
      category: "Rapid Deployment",
      question: "How quickly can you deploy security guards?",
      answer: "Our 24/7 Security Operations Centre dispatches planned guarding deployments within 24 to 48 hours nationwide. For urgent situations requiring immediate emergency cover, staff shortages, or active security threats, our fast-track response team can deploy SIA-licensed guards on the same day depending on site requirements."
    },
    {
      category: "Sector Expertise",
      question: "What industries and sectors do you specialise in?",
      answer: "We deliver tailored security strategies across corporate offices, construction sites, retail centers, logistics hubs, healthcare facilities, manufacturing plants, educational campuses, student accommodation, and private estates. Each operational blueprint is customized to address the specific risk profile and regulatory mandates of your sector."
    },
    {
      category: "24/7 Operations",
      question: "Do you provide 24/7 security coverage?",
      answer: "Yes. We offer continuous 24/7/365 on-site guarding, including day/night shift coverage, weekend protection, and bank holiday monitoring. Whether you require a permanent static guard presence, night-time security officers, or a hybrid combination with mobile patrols, we adapt shift rotas to keep your premises protected around the clock."
    },
    {
      category: "Quality Assurance",
      question: "How do you ensure consistent quality security services?",
      answer: "We enforce strict service quality through BS7858 vetting, mandatory SIA training, Continuous Professional Development (CPD) programs, and routine supervisory spot audits. Every guard is backed by real-time GPS patrol tracking, body-worn cameras (BWC), and digital incident logging software, offering complete operational transparency."
    },
    {
      category: "Multi-Site Management",
      question: "Can you provide security for multiple sites across different locations?",
      answer: "Yes. We manage multi-site enterprise accounts across the UK under a single centralized framework. You receive a dedicated Account Manager, standardized operating procedures, site-specific risk adaptations, and unified billing that leverages economies of scale to optimize your security expenditure."
    },
    {
      category: "Security Technology",
      question: "What technology do you use for security operations?",
      answer: "Our guards utilize our live Operations Platform featuring real-time GPS tracking, automated shift clock-ins, encrypted two-way radios, and body-worn cameras (BWC). Incident reports with photographic evidence are uploaded instantly to client web portals for complete visibility across all your locations."
    },
    {
      category: "Transparent Pricing",
      question: "How much do your security guard services cost?",
      answer: "Security pricing depends on the service model (static guarding, mobile patrols, reception security), shift hours (24/7 vs. night-only), guard headcount, and location. Saints Services provides transparent, competitive hourly rates with zero hidden charges. Contact us for a free quote tailored to your budget and operational needs."
    },
    {
      category: "The Saints Advantage",
      question: "What makes Saints Services different from other security companies?",
      answer: "Saints Services distinguishes itself through a 98% client retention rate, proprietary real-time GPS patrol oversight, 100% SIA-licensed local personnel, rapid emergency response guarantees, and transparent billing. We do not simply supply guards—we act as a dedicated, proactive security partner committed to protecting your assets."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden font-sans transition-colors duration-300">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs transition-colors">
            <HelpCircle className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>SECURITY_GUARDS // F.A.Q.</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2.5 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Quick answers regarding our manned guarding, SIA vetting standards, and nationwide security dispatch.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-sm transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white dark:bg-[#0b1329] border-[#f59e0b] shadow-md' 
                    : 'bg-white/80 dark:bg-[#0b1329]/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight uppercase">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-sm border shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#f59e0b] text-slate-950 border-[#f59e0b] rotate-180' : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-slate-200 dark:border-slate-800 mt-1">
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed pt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CALLOUT BOX */}
        <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-sm text-center shadow-xl relative overflow-hidden transition-colors">
          <ShieldCheck className="w-7 h-7 text-[#f59e0b] mx-auto mb-2" />
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight mb-1 uppercase">Need professional security guards for your site?</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium max-w-md mx-auto mb-5">
            Our control room dispatch managers are available 24/7 to structure your operational security plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="#quote-form" 
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-slate-950 font-black px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10">Request a Quote</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5" />
            </a>

            <a 
              href="tel:07412733920" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-black px-5 py-2.5 rounded-sm text-xs transition-all border border-slate-300 dark:border-slate-800 uppercase tracking-wider cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Call Control Room</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}