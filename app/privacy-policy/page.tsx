import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Saints Services Ltd',
  description: 'Privacy Policy and UK GDPR data processing compliance for Saints Services Ltd.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#070d1e] font-sans text-slate-300 flex flex-col justify-between">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-xs sm:text-sm leading-relaxed space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-slate-400 font-mono text-xs">Last Updated: August 2026</p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">1. Who We Are</h2>
          <p>
            Saints Services Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
          </p>
          <p>
            <strong>Registered Office:</strong> 20 Wenlock Road, London, England, N1 7GU<br />
            <strong>Contact Email:</strong> info@saintsservices.co.uk
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">2. Information We Collect</h2>
          <p>We collect personal information when you interact with our website forms, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Full Name, Company / Venue Name, Work Email, Phone Number.</li>
            <li>Site details, Postcodes, and event specifications provided in quote requests.</li>
            <li>SIA License Badge details and CV attachments submitted via our Careers portal.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">3. How We Use Your Data</h2>
          <p>Your data is processed strictly for:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Evaluating site specifications and responding with operational security quotes.</li>
            <li>Assessing recruitment applications, SIA license validation, and BS7858 vetting checks.</li>
            <li>Communicating dispatch logistics regarding booked services.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">4. Data Sharing & Storage</h2>
          <p>
            We do not sell or rent your personal data to third parties. Form data is securely processed via encrypted API dispatch services (Resend) and stored on secure cloud servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#f59e0b] uppercase">5. Your Rights</h2>
          <p>
            Under UK GDPR, you have the right to request access to, correction of, or deletion of your personal data held by us. To exercise these rights, please contact our dispatch desk at <a href="mailto:info@saintsservices.co.uk" className="text-[#f59e0b] underline">info@saintsservices.co.uk</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}