import Link from 'next/link';
import { Header } from '@/components/Header';
import { DirectionalLightBackdrop } from '@/components/DirectionalLightBackdrop';
import { Services } from '@/components/Services';
import { CertificationsBanner } from '@/components/CertificationsBanner';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ChevronRight, CheckCircle2, ShieldAlert, UserCheck, KeyRound, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Our Services',
  description: 'Explore our full range of SIA-licensed security and facility management solutions across the UK.',
  keywords: 'UK Security Services, SIA Manned Guarding, Keyholding, Door Supervision, Event Security, Saints Services',
  openGraph: {
    title: 'Our Services | Saints Services Ltd',
    description: 'Explore our full range of SIA-licensed security and facility management solutions across the UK.',
    url: 'https://saintsservices.co.uk/services',
    siteName: 'Saints Services Ltd',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
      {/* 1. Global Navigation */}
      <Header />

      <main className="grow">
        {/* 2. Page Intro Hero */}
        <section className="relative bg-slate-100 dark:bg-[#0b1329] text-slate-900 dark:text-white py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden font-sans transition-colors duration-300">
          <DirectionalLightBackdrop />

          {/* Core service icons - stands in for the old corner shards */}
          <div className="absolute top-8 right-8 hidden sm:flex items-center gap-2 opacity-80 pointer-events-none">
            {[ShieldAlert, UserCheck, KeyRound, Calendar].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-[#f59e0b]/10 dark:bg-[#f59e0b]/15 border border-[#f59e0b]/20 flex items-center justify-center"
              >
                <Icon className="w-4 h-4 text-[#f59e0b]" />
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-[#f59e0b] transition-colors">HOME</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span className="text-[#f59e0b]">SERVICES</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono font-bold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-6 mb-8 text-center">
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                <span>SIA-LICENSED OFFICERS</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                <span>UNDER 2-HOUR RESPONSE</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                <span>NATIONWIDE DEPLOYMENT</span>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
                Full-Spectrum <br />
                <span className="text-[#f59e0b]">Security Solutions</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
                From static guarding to rapid alarm response, every service is delivered by SIA-licensed officers and tailored to your site, sector, and risk profile.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Services Carousel */}
        <Services />
      </main>

      {/* 4. Bottom Sections */}
      <div>
        <CertificationsBanner />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}