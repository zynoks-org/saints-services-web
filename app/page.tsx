import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { TechFeatures } from '@/components/TechFeatures';
import { Testimonials } from '@/components/Testimonials';
import { Coverage } from '@/components/Coverage';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ComprehensiveSolutions } from '@/components/ComprehensiveSolutions';
import { SecurityBenefitsGrid } from '@/components/SecurityBenefitsGrid';
import { ServicesGrid } from '@/components/ServicesGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      <Hero />
      <ComprehensiveSolutions />
      <SecurityBenefitsGrid />
      <Services />
      <ServicesGrid />
      <WhyUs />
      <TechFeatures />
      <Testimonials />
      <Coverage />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}