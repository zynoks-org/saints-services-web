import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Saints Services Ltd',
  description: 'Terms of Service and Operational Conditions for Saints Services Ltd.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#070d1e] font-sans text-slate-300 flex flex-col justify-between">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-xs sm:text-sm leading-relaxed space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-6">
          Terms & Conditions
        </h1>
        <p className="text-slate-400 font-mono text-xs">Last Updated: August 2026</p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">1. Introduction & Acceptance</h2>
          <p>
            Welcome to Saints Services Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing our website, utilizing our online quote calculators, or submitting inquiries for security and facilities management, you agree to be bound by these Terms & Conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">2. Services & Online Quotations</h2>
          <p>
            All online budget estimations, service availability matrices, and instant calculator figures provided on this website are non-binding operational estimates. Official contractual obligations and binding rates are subject to formal site risk assessments, signed Service Level Agreements (SLAs), and confirmation from our operational control desk.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">3. Intellectual Property</h2>
          <p>
            All content on this website—including logos, visual designs, brand names, interactive regional dispatch graphics, and text—is the exclusive property of Saints Services Ltd and protected under UK copyright and intellectual property laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">4. Recruitment & Careers Submissions</h2>
          <p>
            Submitting a job application or SIA badge information via our online recruitment portal does not guarantee employment. All potential operatives must undergo full BS7858 background vetting, identity verification, and right-to-work checks before deployment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">5. Limitation of Liability</h2>
          <p>
            While we strive to ensure all information on this website is accurate and up to date, Saints Services Ltd shall not be liable for any indirect or consequential loss arising out of website downtime or reliance on non-binding website information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">6. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800">
          <p className="text-slate-400">
            If you have any questions regarding these Terms, please contact our dispatch desk at{' '}
            <a href="mailto:info@saintsservices.co.uk" className="text-[#f59e0b] underline">
              info@saintsservices.co.uk
            </a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}