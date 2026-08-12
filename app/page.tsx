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

export const metadata = {
  title: 'Saints Services Ltd | SIA-Licensed Security Guards & Facilities Management UK',
  description: 'Leading provider of SIA-licensed security guards, keyholding, 24/7 alarm response, door supervision, and facility management services across the UK.',
  keywords: 'UK Security Company, SIA Licensed Guards, Manned Guarding, Keyholding UK, Event Security, Door Supervision, Facility Management London',
  openGraph: {
    title: 'Saints Services Ltd | SIA-Licensed Security Guards & Facilities UK',
    description: 'Trusted SIA-licensed security guarding, rapid alarm response, and facility management across major UK regions.',
    url: 'https://saintsservices.co.uk',
    siteName: 'Saints Services Ltd',
    locale: 'en_GB',
    type: 'website',
  },
};

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