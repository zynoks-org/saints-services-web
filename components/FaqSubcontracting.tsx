"use client";

import { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { Badge } from '@/components/Badge';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqSubcontracting() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "How It Works",
      question: "What does it mean to subcontract security staff through Saints Services?",
      answer: "We supply trained, SIA-licensed security officers to other security companies, principal contractors, and organisations that need extra manpower for a site, contract, or event. Your business remains the main point of contact for your client — our officers operate as a seamless extension of your existing team, not a separate visible provider."
    },
    {
      category: "Confidentiality & Branding",
      question: "Will our client know Saints Services is providing the cover?",
      answer: "That's entirely your call. We work with every partner on equal, fair-contract terms — whether you want the additional cover to be publicly attributed to Saints Services or kept strictly confidential. A number of the companies we currently support choose to stay anonymous, and we treat that discretion as standard practice, not an exception."
    },
    {
      category: "Compliance & Standards",
      question: "Are your officers vetted and licensed to the same standard as our own staff?",
      answer: "Yes. Every officer we supply holds an active SIA licence and has completed BS7858 background screening, including a 5-year employment history check and criminal record clearance. Our aim is for your client to see no difference in professionalism between your permanent staff and our subcontracted officers."
    },
    {
      category: "Contract Terms",
      question: "What kind of terms do you offer subcontracting partners?",
      answer: "Straightforward, transparent contracts with clear rates, clear cover windows, and no hidden margins. We build our subcontracting relationships to last, so terms are structured to be fair to both sides rather than weighted in our favour for a single job."
    },
    {
      category: "Response Time",
      question: "How quickly can you cover a staff shortage or last-minute cancellation?",
      answer: "We keep a pool of vetted, available officers specifically for shortfall cover, so we can typically mobilise emergency cover within hours rather than days. Let us know your usual notice period and we'll agree a response commitment as part of your subcontracting agreement."
    },
    {
      category: "Scale & Capacity",
      question: "Can you support large or multi-site contracts, not just single shifts?",
      answer: "Yes. We support everything from a single-officer shortfall to ongoing manpower across multiple sites, as well as short-term surges for large events. This gives you the flexibility to take on bigger contracts without carrying the cost of a larger permanent headcount."
    },
    {
      category: "Coverage",
      question: "Which parts of the UK can you provide subcontract staff for?",
      answer: "We dispatch SIA-licensed officers across England, Scotland, and Wales. Get in touch with your site locations and we'll confirm coverage and availability for your specific contract."
    },
    {
      category: "Getting Started",
      question: "How do we start working with Saints Services as a subcontracting partner?",
      answer: "Reach out via the form or phone below with a rough idea of the sites, shift patterns, and volume of cover you need. We'll talk through your requirements, agree terms, and can typically have officers ready to deploy in a short space of time."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden font-sans transition-colors duration-300">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge icon={HelpCircle} className="mb-3">Subcontracting FAQs</Badge>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2.5 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Quick answers on how our subcontract staffing works, confidentiality, and compliance standards.
          </p>
        </div>

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

        <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-sm text-center shadow-xl relative overflow-hidden transition-colors">
          <ShieldCheck className="w-7 h-7 text-[#f59e0b] mx-auto mb-2" />
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight mb-1 uppercase">Looking for a subcontracting partner?</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium max-w-md mx-auto mb-5">
            Tell us about your sites, shift patterns, and volume of cover — we&apos;ll confirm availability and terms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#quote-form"
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-slate-950 font-black px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10">Discuss Subcontracting</span>
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
