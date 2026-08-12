"use client";

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What security and facility services does Saints Services Ltd provide?",
      a: "We provide comprehensive security and facilities solutions, including SIA manned guarding, mobile security patrols, gatehouse access control, retail loss prevention, event safety steward rotas, and commercial office cleaning services across the UK."
    },
    {
      q: "Are all security guards properly licensed and vetted?",
      a: "Yes. All security personnel deployed by Saints Services Ltd hold valid SIA licenses and undergo thorough BS7858 background vetting, including 5-year employment history verification, credit checks, and criminal history screening."
    },
    {
      q: "How quickly can you deploy security personnel to a new site?",
      a: "We maintain 24/7 UK dispatch operations and can deploy emergency manned guarding or mobile response officers to client sites within 2 hours of contract confirmation."
    },
    {
      q: "What UK regions and cities do you cover?",
      a: "We provide nationwide coverage including Greater London, Midlands (Birmingham), North West (Manchester & Liverpool), Yorkshire, South East, Wales, and Scotland."
    },
    {
      q: "How do you track guard attendance and patrol completion?",
      a: "We utilize real-time guard management software with GPS checkpoint logging. Clients receive verified digital shift logs and immediate incident escalation alerts."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs transition-colors">
            <HelpCircle className="w-3.5 h-3.5 text-[#f59e0b]" /> 
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase transition-colors">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-sm overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-slate-900 dark:text-white text-sm sm:text-base cursor-pointer transition-colors uppercase tracking-tight"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#f59e0b] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-4 transition-colors">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}