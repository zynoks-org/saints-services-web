"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationsCoverage } from '@/components/LocationsCoverage';

export default function LocationsPage() {
  return (
    <>
      <title>UK Coverage & Operating Regions | Saints Services Ltd</title>
      <meta 
        name="description" 
        content="Explore Saints Services Ltd nationwide UK coverage. SIA-licensed security guards, keyholding, and facilities management deployed across London, Manchester, Birmingham, and major UK regions." 
      />
      <meta 
        name="keywords" 
        content="UK Security Coverage, Nationwide Security Guards, SIA Guarding Regions, London Security Company, Saints Services Coverage" 
      />
      <meta property="og:title" content="UK Operating Regions & Coverage | Saints Services Ltd" />
      <meta 
        property="og:description" 
        content="Nationwide SIA-licensed security personnel and facilities management operating across major hubs in the UK with 2-hour rapid dispatch." 
      />
      <meta property="og:url" content="https://saintsservices.co.uk/locations" />
      <meta property="og:type" content="website" />

      <div className="min-h-screen bg-[#070d1e] font-sans text-white flex flex-col justify-between">
        <Header />

        <main>
          <LocationsCoverage />
        </main>

        <Footer />
      </div>
    </>
  );
}