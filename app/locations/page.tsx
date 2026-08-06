"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationsCoverage } from '@/components/LocationsCoverage';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#070d1e] font-sans text-white flex flex-col justify-between">
      <Header />

      <main>
        <LocationsCoverage />
      </main>

      <Footer />
    </div>
  );
}