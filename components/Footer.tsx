"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

export function Footer() {
  const primaryServices = [
    { name: "Manned Security Guards", href: "/services/security-guards" },
    { name: "Door Supervision & Venues", href: "/services/door-supervision" },
    { name: "Event Security & Crowd Control", href: "/services/event-security" },
    { name: "Keyholding & Alarm Response", href: "/services/keyholding" },
  ];

  const industrySolutions = [
    { name: "Construction Site Security", href: "/services/security-guards" },
    { name: "Corporate & Reception Guarding", href: "/services/security-guards" },
    { name: "Retail Loss Prevention", href: "/services/security-guards" },
    { name: "Warehouse & Logistics Depots", href: "/services/security-guards" },
    { name: "Pubs, Clubs & Bar Security", href: "/services/door-supervision" },
    { name: "Festivals, Concerts & Galas", href: "/services/event-security" },
    { name: "Vacant Property Inspections", href: "/services/keyholding" },
    { name: "Gatehouse Access Control", href: "/services/security-guards" },
  ];

  const locations = [
    { name: "London", href: "/locations/london" },
    { name: "North London", href: "/locations/north-london" },
    { name: "East London", href: "/locations/east-london" },
    { name: "West London", href: "/locations/west-london" },
    { name: "South London", href: "/locations/south-london" },
    { name: "East Midlands", href: "/locations/east-midlands" },
    { name: "West Midlands", href: "/locations/west-midlands" },
    { name: "South East", href: "/locations/south-east" },
    { name: "South West", href: "/locations/south-west" },
  ];

  return (
    <footer className="bg-[#040914] text-white border-t border-white/10 pt-16 pb-12 font-sans relative overflow-hidden select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP CTA STRIP */}
        <div className="bg-[#080f22]/90 border border-white/10 p-6 sm:p-8 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#f59e0b] text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>24/7 Control Room Active</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              Ready to secure your site or venue?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              SIA approved personnel ready for rapid nationwide deployment within 2 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Primary Quote Button (Gold Sweep Matching Hero) */}
            <Link 
              href="/contact" 
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0b1329]/90 text-white font-black px-6 py-3 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-white/15 backdrop-blur-md overflow-hidden shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">
                Get Immediate Quote
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 text-[#f59e0b] transition-all duration-300 group-hover:text-[#080f22] group-hover:translate-x-1" />
            </Link>
            
            {/* Phone Button (Blue Sweep Matching Hero) */}
            <a 
              href="tel:07412733920" 
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0b1329]/60 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm transition-all duration-300 border border-white/20 backdrop-blur-md overflow-hidden shadow-lg active:scale-95 uppercase tracking-wider cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              <Phone className="relative z-10 w-4 h-4 text-sky-400 transition-colors duration-300 group-hover:text-white" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                07412 733920
              </span>
            </a>
          </div>
        </div>

        {/* MAIN NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* COLUMN 1: CORE SERVICES */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] pb-2 border-b border-white/10">
              Core Security Services
            </h4>
            
            <div className="space-y-2">
              {primaryServices.map((service, i) => (
                <Link 
                  key={i} 
                  href={service.href} 
                  className="flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-[#f59e0b] transition-all group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#f59e0b] group-hover:translate-x-1 transition-transform" />
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <h5 className="text-[11px] font-mono font-bold uppercase text-slate-400 mb-2">Specialist Applications</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-2 text-[11px] text-slate-400">
                {industrySolutions.map((item, i) => (
                  <Link key={i} href={item.href} className="hover:text-white transition-colors truncate">
                    • {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: REGIONAL COVERAGE WITH ACTIVE LINKS */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] pb-2 border-b border-white/10">
              UK Regional Coverage
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400 font-medium">
              {locations.map((loc, i) => (
                <Link 
                  key={i} 
                  href={loc.href} 
                  className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors group"
                >
                  <MapPin className="w-3 h-3 text-[#f59e0b] shrink-0" />
                  <span>{loc.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 3: QUICK NAVIGATION & LEGAL */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] pb-2 border-b border-white/10">
              Company
            </h4>
            
            <div className="space-y-2 text-xs font-bold text-slate-300">
              <div><Link href="/" className="hover:text-[#f59e0b] transition-colors">Home</Link></div>
              <div><Link href="/services" className="hover:text-[#f59e0b] transition-colors">Services Overview</Link></div>
              <div><Link href="/about" className="hover:text-[#f59e0b] transition-colors">About Saints Services</Link></div>
              <div><Link href="/careers" className="hover:text-[#f59e0b] transition-colors">Careers & Recruitment</Link></div>
              <div><Link href="/contact" className="hover:text-[#f59e0b] transition-colors">Contact & Quotes</Link></div>
            </div>

            <h5 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#f59e0b] pt-2 border-t border-white/10">
              Legal Compliance
            </h5>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div><Link href="/privacy-policy" className="hover:text-[#f59e0b] transition-colors">Privacy Policy</Link></div>
              <div><Link href="/terms" className="hover:text-[#f59e0b] transition-colors">Terms & Conditions</Link></div>
            </div>
          </div>

          {/* COLUMN 4: CONTACT & HEAD OFFICE */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] pb-2 border-b border-white/10">
              Head Office Contact
            </h4>

            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <span>20 Wenlock Road, London, N1 7GU, United Kingdom</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a href="tel:07412733920" className="hover:text-white transition-colors font-bold">
                  07412 733920
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a href="mailto:info@saintsservices.co.uk" className="hover:text-white transition-colors">
                  info@saintsservices.co.uk
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>SIA Approved Standards</span>
                </div>
                <p className="text-[10px] text-slate-400">
                  BS7858 Vetted Operatives • Fully Insured Public & Employee Liability
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2 text-white font-black text-base">
            <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />
            <span>SAINTS SERVICES LTD</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-[#f59e0b] transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="hover:text-[#f59e0b] transition-colors">Terms & Conditions</Link>
          </div>

          <div className="text-center md:text-right text-[11px]">
            © {new Date().getFullYear()} Saints Services Ltd. All rights reserved. Built for UK Security Excellence.
          </div>
        </div>

      </div>
    </footer>
  );
}