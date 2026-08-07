"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqEventSecurity() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "Event Planning",
      question: "What types of events do you provide security for?",
      answer: "Saints Services provides nationwide security coverage across all event formats and scales. Our team manages security for corporate conferences, product launches, festivals, concerts, sporting fixtures, weddings, private galas, and community gatherings. From 50-person executive meetings to 10,000+ capacity outdoor festivals, we deliver tailored static security guarding and dynamic crowd management."
    },
    {
      category: "Tailored Protection",
      question: "How do you tailor your security services to my event?",
      answer: "We carry out an in-depth operational review of your event, evaluating venue layout, access points, attendee profiles, and potential security risks. Based on this audit, we engineer a bespoke security strategy balancing SIA-licensed guards with customer stewards, precise access-control protocols, and emergency response procedures to match your exact standards."
    },
    {
      category: "Licensing & Vetting",
      question: "Are your security guards fully licensed?",
      answer: "Yes, absolutely. Every security operative deployed by Saints Services Ltd holds an active Security Industry Authority (SIA) license and undergoes rigorous BS7858 background screening. Our operatives combine formal SIA certifications with extensive practical experience managing private and public event security across the UK."
    },
    {
      category: "Crowd Control",
      question: "Are your security personnel trained in crowd management?",
      answer: "Crowd dynamics management is a core competency of our event team. Our security guards and stewards complete specialist training in queue management, ingress/egress control, bottleneck prevention, emergency evacuation procedures, and conflict de-escalation to safeguard attendees while maintaining a positive event atmosphere."
    },
    {
      category: "VIP & Executive",
      question: "Can you provide VIP security and Close Protection services?",
      answer: "Yes. Our team includes Close Protection Officers trained in executive protection, threat assessment, and discreet surveillance. We provide VIP security for corporate executives, celebrity performers, and high-profile guests at public functions or private events, ensuring complete safety with total discretion."
    },
    {
      category: "Deployment",
      question: "How do I hire security for my event?",
      answer: "You can reach our Security Management Team via phone, email, or our online quote form. After discussing your venue layout, headcount, dates, and site specifics, we issue a detailed proposal outlining your deployment plan and pricing. Upon approval, a Dedicated Security Coordinator manages your deployment from planning through to post-event reporting."
    },
    {
      category: "Technology",
      question: "What technology do you provide for event security management?",
      answer: "Clients receive access to our live Security Operations Platform featuring real-time GPS tracking, deployment schedules, and digital incident reporting. Guards are equipped with Body-Worn Cameras (BWC), encrypted radio networks, and mobile reporting devices to ensure complete operational oversight across multi-stage or complex venue zones."
    },
    {
      category: "Rapid Scaling",
      question: "Can you handle last-minute event security requirements?",
      answer: "Our 24/7 Security Operations Centre can deploy licensed event security within 24 to 48 hours nationwide, with standby teams available for same-day emergency callouts for existing clients. We encourage early bookings where possible to allow time for detailed site surveys and custom team briefings."
    },
    {
      category: "Integrated Services",
      question: "Do you provide security and stewarding services together?",
      answer: "Yes, we offer an all-in-one integrated security and stewarding service. SIA-licensed security guards manage access control, bag searches, and incident escalation, while trained event stewards handle customer hospitality, directions, and crowd guidance—delivering complete protection with a welcoming atmosphere."
    },
    {
      category: "Quality Assurance",
      question: "What makes Saints Services different from other event security providers?",
      answer: "Our 98% client retention rate reflects our sustained operational performance. We distinguish ourselves through proprietary real-time GPS patrol tracking, a nationwide roster of SIA-vetted local guards, multi-sector experience, and a collaborative approach where we act as a dedicated business partner to ensure your event runs without incident."
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
            <span>EVENT_SECURITY // F.A.Q.</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2.5 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our event security, crowd management, and festival safety solutions.
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
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight mb-1 uppercase">Have questions about your upcoming event?</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium max-w-md mx-auto mb-5">
            Our event security deployment team is available 24/7 to structure your operational plan.
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