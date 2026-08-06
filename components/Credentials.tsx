"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  BookOpen, 
  BadgeCheck, 
  ChevronRight,
  Building,
  Check
} from 'lucide-react';

interface CredentialItem {
  id: string;
  title: string;
  badgeTag: string;
  category: string;
  icon: React.ElementType;
  summary: string;
  protocols: string[];
  statusLabel: string;
}

export function Credentials() {
  const [activeId, setActiveId] = useState<string>("sia");

  const credentialsList: CredentialItem[] = [
    {
      id: "sia",
      title: "SIA-Licensed & BS7858 Vetted Personnel",
      badgeTag: "BS7858 Standard",
      category: "Personnel Screening",
      icon: ShieldCheck,
      summary: "Every deployed security operative undergoes multi-tier background vetting and statutory identity confirmation before deployment to any client site.",
      protocols: [
        "Comprehensive 5-year employment and history verification",
        "Active Security Industry Authority (SIA) license authentication",
        "Rigorous criminal record and background clearance checks",
        "Standardised pre-deployment site and safety inductions"
      ],
      statusLabel: "100% Fully Vetted"
    },
    {
      id: "training",
      title: "Advanced Training & Accredited Development",
      badgeTag: "Continuous Learning",
      icon: BookOpen,
      category: "Professional Standards",
      summary: "Through sister training frameworks, our officers complete advanced security programmes that exceed baseline industry competencies.",
      protocols: [
        "Professional conflict resolution and de-escalation training",
        "Regulated physical intervention and crowd management",
        "Proactive identification of prohibited or hazardous items",
        "Emergency response coordination and first-aid readiness"
      ],
      statusLabel: "Certified Programmes"
    },
    {
      id: "certifications",
      title: "Comprehensive Security Certifications",
      badgeTag: "Multi-Sector Mastery",
      category: "Operational Excellence",
      icon: Award,
      summary: "Saints Services maintains a diverse portfolio of security certifications, ensuring seamless adaptation to evolving regulatory and industry best practices.",
      protocols: [
        "Specialised compliance across retail, corporate, and events",
        "Regular supervisory audits and performance assessments",
        "Tailored gatehouse and access control protocols",
        "Continuous regulatory update integration for management"
      ],
      statusLabel: "Enterprise Verified"
    },
    {
      id: "compliance",
      title: "Strict Statutory Legal Compliance",
      badgeTag: "Full Regulatory Conformity",
      category: "Legal Framework",
      icon: FileCheck,
      summary: "We operate in strict adherence to all UK legal frameworks, shielding your organisation from operational risks and legal liabilities.",
      protocols: [
        "Full conformity with Health & Safety at Work regulations",
        "Data Protection Act and GDPR compliant incident logging",
        "Strict adherence to site-specific licensing laws",
        "Comprehensive public liability and employer indemnity insurance"
      ],
      statusLabel: "Fully Insured & Compliant"
    }
  ];

  const current = credentialsList.find(c => c.id === activeId) || credentialsList[0];
  const ActiveIcon = current.icon;

  return (
    <section className="py-16 sm:py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200 relative overflow-hidden font-sans">
      
      {/* Light Clean Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(11, 19, 41, 0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1329] text-[#f59e0b] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <BadgeCheck className="w-4 h-4 text-[#f59e0b]" />
            <span>Credentials & Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0b1329] tracking-tight mb-4 uppercase">
            Standards & Regulatory Framework
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Uncompromising professional standards, accredited training paths, and complete regulatory compliance across all security operations.
          </p>
        </div>

        {/* INTERACTIVE COMPLIANCE CONSOLE */}
        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: NAVIGATION TABS (5 COLS) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Select Compliance Standard:
              </div>

              {credentialsList.map((cred) => {
                const IconComponent = cred.icon;
                const isSelected = cred.id === activeId;
                return (
                  <button
                    key={cred.id}
                    type="button"
                    onClick={() => setActiveId(cred.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#0b1329] text-white border-[#0b1329] shadow-md scale-[1.01]'
                        : 'bg-[#f8fafc] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-lg shrink-0 ${isSelected ? 'bg-slate-800 text-[#f59e0b]' : 'bg-white text-[#0b1329] border border-slate-200'}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold leading-tight">{cred.title}</div>
                        <div className={`text-[11px] font-medium mt-0.5 ${isSelected ? 'text-[#f59e0b]' : 'text-slate-500'}`}>
                          {cred.category}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#f59e0b] translate-x-1' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT COLUMN: DETAIL CARD (7 COLS) */}
            <div className="lg:col-span-7 bg-[#0b1329] text-white border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[440px]">
              
              {/* Subtle Ambient Light */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-900 text-[#f59e0b] border border-slate-800">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider">{current.badgeTag}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    {current.statusLabel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3 leading-snug">
                  {current.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                  {current.summary}
                </p>

                {/* Protocols / Checklist */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Verified Operational Protocols:</div>
                  {current.protocols.map((protocol, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200">
                      <Check className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Trust Indicator */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Saints Services Quality Standard</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Fully Audited & Verified
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}