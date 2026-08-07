"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Phone, MapPin, Menu, X, Briefcase, ChevronRight, Mail, ChevronDown, Compass, ShieldCheck, Sun, Moon } from 'lucide-react';
import { locationsData } from '@/lib/locationsData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const locationLinks = Object.values(locationsData).map(loc => ({
    name: loc.name,
    slug: loc.slug,
    region: loc.region
  }));

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setLocationsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setLocationsDropdownOpen(false);
    }, 150);
  };

  const handleLogoClick = () => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full font-sans shadow-xl">
      {/* 1. TACTICAL TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-100 dark:bg-[#050811] text-[11px] py-1.5 px-4 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800/80 font-mono transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="tel:07412733920" 
              className="flex items-center gap-2 text-[#f59e0b] font-bold hover:text-amber-500 transition-colors tracking-wider"
            >
              <Phone className="w-3 h-3 shrink-0 text-[#f59e0b]" /> 
              <span>07412 733920</span>
            </a>
            <a 
              href="mailto:info@saintsservices.co.uk" 
              className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#f59e0b]" /> 
              <span>info@saintsservices.co.uk</span>
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#f59e0b]" /> 20 Wenlock Road, London, N1 7GU
            </span>
            <span className="h-3 w-[1px] bg-slate-300 dark:bg-slate-800" />
            <Link 
              href="/careers" 
              className="hover:text-[#f59e0b] transition-colors flex items-center gap-1 font-semibold uppercase tracking-wider"
            >
              <Briefcase className="w-3 h-3 text-[#f59e0b]" /> Recruitment
            </Link>
          </div>
        </div>
      </div>

      {/* 2. COMMAND MAIN NAVIGATION */}
      <header className="relative bg-white/95 dark:bg-[#080f22]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo Container */}
          <Link 
            href="/" 
            onClick={handleLogoClick}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div>
              <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white block leading-none font-sans uppercase">
                Saints <span className="text-[#f59e0b]">Services</span>
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase block">
                  SIA Approved • 24/7 Operations
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            <Link 
              href="/services" 
              className="hover:text-[#f59e0b] transition-colors relative py-2 group"
            >
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all group-hover:w-full" />
            </Link>
            
            {/* LOCATIONS MEGA DROPDOWN */}
            <div 
              className="relative py-6"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/locations" 
                className="flex items-center gap-1.5 hover:text-[#f59e0b] transition-colors py-2 group"
              >
                <span>Locations</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#f59e0b] transition-transform duration-200 ${locationsDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Floating Mega Dropdown Box */}
              {locationsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] lg:w-[800px] bg-white dark:bg-[#080f22]/95 border border-slate-200 dark:border-white/15 rounded-md shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-2xl text-slate-900 dark:text-white transition-colors">
                  
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f59e0b] shadow-[0_0_12px_#f59e0b]" />

                  <div className="flex items-center justify-between px-2 pb-3 border-b border-slate-200 dark:border-white/10 mb-3">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#f59e0b]" />
                      <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                        Active UK Deployment Zones
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-2.5 py-1 rounded-sm border border-[#f59e0b]/30">
                      {locationLinks.length} Active Hubs
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-x-2 gap-y-1 max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
                    {locationLinks.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        onClick={() => setLocationsDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-sm text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group"
                      >
                        <span className="truncate flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#f59e0b] group-hover:scale-125 transition-transform shrink-0" />
                          {loc.name}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-[#f59e0b] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                      </Link>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 mt-3">
                    <Link 
                      href="/locations"
                      onClick={() => setLocationsDropdownOpen(false)}
                      className="group relative overflow-hidden flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-[#0b1329] rounded-sm border border-slate-300 dark:border-white/20 transition-all shadow-md uppercase tracking-wider"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">
                        Launch Interactive Coverage Map
                      </span>
                      <ChevronRight className="relative z-10 w-3.5 h-3.5 text-[#f59e0b] group-hover:text-[#080f22] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-[#f59e0b] transition-colors relative py-2 group">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all group-hover:w-full" />
            </Link>
            <Link href="/blog" className="hover:text-[#f59e0b] transition-colors relative py-2 group">
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all group-hover:w-full" />
            </Link>
            <Link href="/careers" className="hover:text-[#f59e0b] transition-colors relative py-2 group">
              <span>Careers</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all group-hover:w-full" />
            </Link>
            <Link href="/contact" className="hover:text-[#f59e0b] transition-colors relative py-2 group">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-sm bg-slate-100 dark:bg-[#0b1329] text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-[#f59e0b] transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#f59e0b]" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            ) : (
              <div className="w-9 h-9" />
            )}

            <Link 
              href="/contact" 
              className="group relative overflow-hidden hidden sm:inline-flex bg-slate-900 dark:bg-[#0b1329] text-white font-black px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-300 border border-slate-700 dark:border-white/20 backdrop-blur-md shadow-lg active:scale-95 items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <ShieldCheck className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">
                Request Protection
              </span>
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-sm bg-slate-100 dark:bg-[#0b1329] text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-[#0b1329] space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
            <nav className="space-y-1 font-mono">
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block px-4 py-3 rounded-sm text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 uppercase tracking-wider"
              >
                Services & Operations
              </Link>

              <div className="px-4 py-3 rounded-sm bg-slate-50 dark:bg-[#080f22] border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <Link 
                    href="/locations" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider"
                  >
                    Coverage Regions
                  </Link>
                </div>
                <div className="pl-3 border-l-2 border-[#f59e0b] space-y-1.5 pt-1 max-h-56 overflow-y-auto font-sans">
                  {locationLinks.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      • {loc.name} Security
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block px-4 py-3 rounded-sm text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 uppercase tracking-wider"
              >
                About & Compliance
              </Link>
              <Link 
                href="/blog" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block px-4 py-3 rounded-sm text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 uppercase tracking-wider"
              >
                Blog & Insights
              </Link>
              <Link 
                href="/careers" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block px-4 py-3 rounded-sm text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 uppercase tracking-wider"
              >
                Careers / Join Us
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block px-4 py-3 rounded-sm text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 uppercase tracking-wider"
              >
                Contact & Instant Quote
              </Link>
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-slate-900 dark:bg-[#080f22] text-white font-black py-3.5 rounded-sm text-xs uppercase tracking-wider border border-slate-700 dark:border-white/20 backdrop-blur-md shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <ShieldCheck className="relative z-10 w-4 h-4 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#080f22]" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">
                  Request Protection
                </span>
              </Link>

              <a 
                href="tel:07412733920" 
                className="flex items-center justify-center gap-2 w-full bg-slate-100 dark:bg-[#080f22] text-slate-800 dark:text-slate-200 font-mono font-bold py-3 rounded-sm text-xs border border-slate-300 dark:border-slate-800"
              >
                <Phone className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>Call 07412 733920</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}