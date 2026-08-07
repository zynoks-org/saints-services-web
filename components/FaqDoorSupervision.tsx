"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqDoorSupervision() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "Licensing & Qualifications",
      question: "What qualifications and training do your door supervisors hold?",
      answer: "All Saints Services Ltd door supervisors are fully certified professionals holding active licenses from the Security Industry Authority (SIA). Our comprehensive training curriculum goes beyond baseline requirements, encompassing advanced Conflict Management, First Aid, and premium Customer Service."
    },
    {
      category: "Venue Tailoring",
      question: "How do you tailor your door supervision service to individual venues?",
      answer: "We begin with an in-depth security assessment of your premises to analyze your unique operational challenges. From there, we design bespoke security solutions tailored to your business objectives and brand identity, ensuring a welcoming first impression for your visitors."
    },
    {
      category: "Availability & Scheduling",
      question: "Can you provide professional door supervision for events outside regular hours?",
      answer: "Yes. Our professional door supervision service operates 24/7. Security requirements can arise at any hour, and our team is structured to provide reliable support for late-night hospitality, private functions, weekend events, or standard day-to-day venue operations."
    },
    {
      category: "Nationwide Reach",
      question: "Do you cover multiple locations and venues across the UK?",
      answer: "Absolutely. With robust nationwide coverage, we deploy SIA-licensed door supervision teams across England, Scotland, Wales, and Northern Ireland, maintaining consistent quality and strict regulatory adherence across all client sites."
    },
    {
      category: "Quality Assurance",
      question: "How do you ensure the high quality and professional standard of your personnel?",
      answer: "We maintain rigorous hiring and vetting standards through accredited training frameworks. Every operative undergoes regular performance assessments to guarantee they maintain a smart, authoritative, yet approachable appearance."
    },
    {
      category: "Reliability & Dispatch",
      question: "What happens if a scheduled door supervisor encounters an emergency or fails to show?",
      answer: "We monitor supervisor deployments in real time via GPS tracking from our central dispatch office. In the event of an unexpected disruption, our on-call response teams mobilize within 1 hour, ensuring your premises remain fully secured during peak trading hours."
    },
    {
      category: "Enterprise Management",
      question: "Can you manage door supervision across multiple venues simultaneously?",
      answer: "Yes. We manage large-scale security deployments for clients operating between 12 to 150+ units across the UK. Utilizing our proprietary operational software, we handle scheduling, deployment, and incident reporting so clients can onboard new premises within days."
    },
    {
      category: "Technology & Oversight",
      question: "What technology do you provide for management oversight and incident tracking?",
      answer: "Clients gain access to our Operations Platform featuring real-time GPS tracking and shift logs. Additionally, supervisors are equipped with Body-Worn Cameras (BWC) and encrypted radios. Footage automatically uploads to incident reports for quick next-day review."
    },
    {
      category: "Specialized Training",
      question: "Are your door supervisors trained for specific venue types?",
      answer: "Yes. Personnel receive venue-specific briefings: pub staff receive training on managing intoxicated patrons; hotel security focus on guest hospitality and concierge interactions; and nightclub teams specialize in high-density crowd control."
    },
    {
      category: "Extended Services",
      question: "What range of security services do you offer beyond door supervision?",
      answer: "Saints Services Ltd provides a full spectrum of security solutions, including manned guarding, keyholding & alarm response, CCTV monitoring, event security, mobile patrols, and specialist construction or retail security."
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
            <span>DOOR_SUPERVISION // F.A.Q.</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2.5 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Saints Services Ltd delivers high-calibre, fully vetted security deployments tailored to protect commercial interests across the UK. Our specialized teams manage site security, front-of-house concierge management, and mobile patrol units for clients across commercial real estate, active construction sites, high-street retail, educational campuses, and large-scale event venues.          </p>
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
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight mb-1 uppercase">Have a specific question about your venue?</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium max-w-md mx-auto mb-5">
            Our security dispatch managers are available 24/7 to discuss your bespoke operational requirements.
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

// Export alias for backward compatibility
export { FaqDoorSupervision as FrequentlyQuestions };