import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Saints Services Ltd',
  description: 'Explore our full range of SIA-licensed security and facility management solutions across the UK.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
      {/* 1. Global Navigation */}
      <Header />

      {/* 2. Main Services Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 w-full">
        {/* Back Navigation Button */}
        <div className="mb-2">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2 px-3.5 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#f59e0b]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Back to Home</span>
          </Link>
        </div>

        <Services />
      </main>

      {/* 3. Bottom Sections */}
      <div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}