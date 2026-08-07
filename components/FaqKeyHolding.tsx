"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqKeyHolding() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "Service Overview",
      question: "What is key holding and alarm response service?",
      answer: "Key holding and alarm response involves Saints Services Ltd securely storing a set of keys for your site while our 24/7 Alarm Receiving Centre (ARC) monitors your intruder alarm system. Upon alarm activation, our mobile security patrols immediately dispatch nationwide to inspect the property, investigate the cause, secure the venue, and reset the system if safe. This removes the danger and inconvenience of you or your staff attending middle-of-the-night callouts while ensuring full coordination with emergency services."
    },
    {
      category: "Rapid Response",
      question: "How do you ensure rapid response to alarms?",
      answer: "We maintain strategically deployed mobile security units across the UK, monitored in real time via GPS by our 24/7 Control Centre. When an alarm triggers, the ARC dispatches the nearest mobile key guard immediately. Our attendance guarantees align with National Police Chiefs' Council (NPCC) standards. Keys are transported in coded, tamper-proof vehicle safes, allowing officers to gain immediate entry, mitigate damage, and resolve security or fire threats."
    },
    {
      category: "Residential & Commercial",
      question: "Can you provide key holding services for residential properties?",
      answer: "Yes. We deliver professional keyholding for homeowners, landlords, and estate managers across the UK. Whether protecting a home during holidays or managing vacant rental properties, our mobile guards provide routine property checks, rapid alarm response, emergency service liaison, and contractor accompaniment, offering complete peace of mind while you are away."
    },
    {
      category: "Key Benefits",
      question: "What are the benefits of using professional key holding and alarm response services?",
      answer: "Keyholding through Saints Services provides crucial operational advantages: (1) Safety: Eliminates the risk of untrained staff confronting intruders. (2) Rapid Mitigation: Strategically stationed patrols minimize property damage and satisfy strict insurance response SLAs. (3) 24/7 Coverage: Round-the-clock ARC monitoring ensures alerts are acted upon instantly. (4) Reduced Liability: Professional handling lowers insurance risk profiles, manages false alarms, and maintains emergency service relationships."
    },
    {
      category: "Commercial Support",
      question: "Do you offer commercial alarm response services?",
      answer: "Commercial alarm response is a primary core service for Saints Services Ltd. We safeguard offices, logistics warehouses, retail outlets, industrial parks, construction sites, and multi-location commercial portfolios. In addition to emergency response for intruder, fire, and environmental alarms, we offer lock and unlock services, vacant site checks, and support for in-house security teams."
    },
    {
      category: "Key Security",
      question: "How are my keys kept secure?",
      answer: "Key security is handled under strict accreditation protocols. Keys are housed in CCTV-monitored facilities within electronic, audit-trailed safes. Keys carry no property address details—only unique encrypted codes known strictly to our ARC and dispatched Key Guards. During transit, keys remain locked in GPS-tracked vehicle safes, supported by comprehensive insurance coverage and regular supervisory audits."
    },
    {
      category: "Alarm Activation",
      question: "What happens during an alarm activation?",
      answer: "Within seconds of an alarm signal, our ARC verifies the alert and dispatches the nearest mobile officer with your coded keys. Upon arrival, the officer executes a perimeter sweep for signs of forced entry. If safe, they conduct an internal search, determine the cause (intruder, system fault, or environmental factor), reset the alarm, and notify emergency services if needed. A comprehensive digital report with photos and security recommendations is sent to you immediately after."
    },
    {
      category: "Vacant Properties",
      question: "Do you conduct vacant property checks?",
      answer: "Yes. We conduct scheduled internal and external inspections (weekly, bi-weekly, or monthly) for vacant commercial sites, holiday homes, or properties between tenancies. Our guards inspect for trespassers, squatters, vandalism, water leaks, and fire hazards. We can also manage mail collection, adjust lighting/heating, and verify lock integrity to fulfill strict vacant property insurance mandates."
    },
    {
      category: "Licensing & Vetting",
      question: "Are your key holders fully licensed and vetted?",
      answer: "100% of our key guards and mobile patrol officers hold active Security Industry Authority (SIA) licenses and undergo BS7858 5-year employment vetting, criminal background checks, and reference validation. Personnel complete rigorous internal training covering alarm protocols, property access, customer care, and emergency management, reinforced through routine supervisory field audits."
    },
    {
      category: "Onboarding",
      question: "How quickly can you set up a key holding service for my property?",
      answer: "Standard service onboarding takes 48 to 72 hours, covering an initial consultation, site survey, ARC integration, key collection/coding, patrol assignment, and protocol testing. For emergency requirements, we offer an expedited 24-hour fast-track dispatch to secure your premises immediately."
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
            <span>KEY_HOLDING // F.A.Q.</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2.5 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Quick answers regarding our 24/7 key holding, mobile patrols, and alarm response services.
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
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight mb-1 uppercase">Need 24/7 alarm response coverage?</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium max-w-md mx-auto mb-5">
            Speak with our mobile patrol dispatch team today to set up your keyholding account.
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