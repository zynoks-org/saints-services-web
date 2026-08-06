"use client";

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShieldAlert, ArrowLeft, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col justify-between">
      <Header />

      <section className="py-20 sm:py-32 bg-[#0f172a] text-white flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 inline-block mb-6 shadow-xl">
            <ShieldAlert className="w-12 h-12 text-[#f59e0b]" />
          </div>

          <span className="text-sm font-black text-[#f59e0b] uppercase tracking-widest font-mono block mb-2">
            Error 404 • Location Not Found
          </span>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Out of Operational Bounds
          </h1>

          <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-xl mx-auto">
            The page or operational route you are looking for doesn&apos;t exist or has been relocated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="w-full sm:w-auto bg-[#f59e0b] hover:bg-amber-600 text-[#0f172a] font-extrabold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Command Center</span>
            </Link>

            <a 
              href="tel:07412733920" 
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#f59e0b]" />
              <span>Contact Control Desk</span>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}