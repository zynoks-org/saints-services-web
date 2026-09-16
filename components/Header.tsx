"use client";

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Phone, MapPin, Menu, X, Briefcase, ChevronRight, Mail, ChevronDown, Compass, ShieldCheck, Sun, MoonStar, Search, LocateFixed, Map as MapIcon, ShieldAlert, UserCheck, Calendar, KeyRound, Users, ArrowRight, CheckCircle2, Clock, Layers, Newspaper } from 'lucide-react';
import { locationsData } from '@/lib/locationsData';
import { CoverageMiniMap } from '@/components/CoverageMiniMap';
import { SocialLinks } from '@/components/SocialLinks';
import { WhatsAppIcon, WHATSAPP_URL } from '@/components/WhatsAppButton';

const UNCOVERED_REGIONS = new Set(['Scotland', 'Wales']);
const REGION_ORDER = ['London', 'South East', 'South West', 'West Midlands', 'East Midlands'];

function haversineDistanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [locatingNearMe, setLocatingNearMe] = useState(false);
  const [hoveredServiceSlug, setHoveredServiceSlug] = useState('security-guards');
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Overlay menu, not in-flow: lock background scroll while it's open so the
  // page behind it can't be scrolled (and doesn't get pushed down by it).
  useEffect(() => {
    if (mobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [mobileMenuOpen]);

  const locationLinks = Object.values(locationsData)
    .filter((loc) => !UNCOVERED_REGIONS.has(loc.region))
    .map(loc => ({
      name: loc.name,
      slug: loc.slug,
      region: loc.region,
      coordinates: loc.coordinates,
    }));

  const groupedLocations = useMemo(() => {
    const query = locationSearch.trim().toLowerCase();
    const filtered = query
      ? locationLinks.filter((loc) => loc.name.toLowerCase().includes(query))
      : locationLinks;

    const groups = new Map<string, typeof locationLinks>();
    for (const loc of filtered) {
      const bucket = groups.get(loc.region) ?? [];
      bucket.push(loc);
      groups.set(loc.region, bucket);
    }

    return REGION_ORDER.map((region) => ({ region, locations: groups.get(region) ?? [] })).filter(
      (g) => g.locations.length > 0
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSearch]);

  const handleLocationsNearMe = () => {
    if (!navigator.geolocation) {
      router.push('/locations');
      setLocationsDropdownOpen(false);
      return;
    }

    setLocatingNearMe(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const here = { lat: position.coords.latitude, lng: position.coords.longitude };
        let nearest = locationLinks[0];
        let nearestDistance = Infinity;
        for (const loc of locationLinks) {
          const distance = haversineDistanceKm(here, loc.coordinates);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearest = loc;
          }
        }
        setLocatingNearMe(false);
        setLocationsDropdownOpen(false);
        if (nearest) router.push(`/locations/${nearest.slug}`);
      },
      () => {
        setLocatingNearMe(false);
        router.push('/locations');
        setLocationsDropdownOpen(false);
      },
      { timeout: 8000 }
    );
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setLocationsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setLocationsDropdownOpen(false);
      setLocationSearch('');
    }, 150);
  };

  const handleAboutMouseEnter = () => {
    if (aboutDropdownTimeoutRef.current) clearTimeout(aboutDropdownTimeoutRef.current);
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutDropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  const handleServicesMouseEnter = () => {
    if (servicesDropdownTimeoutRef.current) clearTimeout(servicesDropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesDropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const serviceLinks = [
    {
      name: "Manned Guarding & Patrols",
      slug: "security-guards",
      icon: ShieldAlert,
      badge: "SIA Licensed Officers",
      image: "https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/manned-guarding.jpg",
      description: "Continuous protection, access monitoring, and deterrence for your premises.",
      highlights: [
        "Static Guarding & Mobile Patrol Units",
        "Gatehouse & Access Control Management",
        "Real-Time Incident & Patrol Logging",
      ],
    },
    {
      name: "Door Supervision & Venue Security",
      slug: "door-supervision",
      icon: UserCheck,
      badge: "SIA Licensed Supervisors",
      image: "https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/door-supervision.jpg",
      description: "Maintaining order, managing guest entry, and resolving conflicts at venues and high-profile premises.",
      highlights: [
        "Professional ID & Search Verification",
        "Conflict De-escalation Specialists",
        "Venue Capacity & Safety Compliance",
      ],
    },
    {
      name: "Event Security & Safety",
      slug: "event-security",
      icon: Calendar,
      badge: "Rapid Deployment",
      image: "https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/event-security.png",
      description: "Guest flow, entry control, and emergency response to guarantee a safe event.",
      highlights: [
        "Crowd Control & Queue Management",
        "VIP & Speaker Protection Services",
        "Emergency Evacuation Response Teams",
      ],
    },
    {
      name: "Keyholding & Alarm Response",
      slug: "keyholding",
      icon: KeyRound,
      badge: "24/7 Mobile Response",
      image: "https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/Keyholding-%26-Alarm-Response.png",
      description: "Round-the-clock keyholding and rapid emergency alarm response, out of hours.",
      highlights: [
        "Rapid Emergency Mobile Dispatch",
        "Scheduled Site Lock & Unlock Services",
        "Secure Off-Site Vault Key Storage",
      ],
    },
    {
      name: "Security Subcontracting",
      slug: "subcontracting",
      icon: Users,
      badge: "Staffing Partner",
      image: "https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/manned-guarding.jpg",
      description: "Trained SIA-licensed officers supplied to other security companies, on fair, transparent terms.",
      highlights: [
        "Flexible Manpower You Can Scale Up or Down",
        "Confidential, Fair-Contract Terms as Standard",
        "Rapid Cover for Shortfalls & Cancellations",
      ],
    },
  ];

  const handleLogoClick = () => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full font-sans shadow-xl">
      <div className="relative z-40 bg-slate-100 dark:bg-[#050811] text-[11px] py-1.5 px-4 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800/80 font-mono transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
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
            
            <span className="hidden lg:inline-block h-3 w-[1px] bg-slate-300 dark:bg-slate-800" />
            
            <div className="hidden lg:flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                SIA-Licensed Security Guards • 24/7 Operations
              </span>
            </div>
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
            <span className="h-3 w-[1px] bg-slate-300 dark:bg-slate-800" />
            <SocialLinks variant="bar" />
          </div>
        </div>
      </div>

      <header className="relative bg-white dark:bg-[#080f22] border-b border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white transition-colors duration-300">
        <div className="relative z-40 bg-white dark:bg-[#080f22] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">

          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 shrink-0">
              <Image
                src="https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/saintsserviceslogo.png"
                alt="Saints Services Icon"
                fill
                className="object-contain dark:filter-none filter brightness-0"
                priority
              />
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white block leading-none font-sans uppercase">
                Saints <span className="text-[#f59e0b]">Services</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            <div
              className="relative py-6"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link
                href="/services"
                className="flex items-center gap-1.5 hover:text-[#f59e0b] transition-colors py-2 group"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#f59e0b] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] lg:w-[900px] bg-white dark:bg-[#080f22]/95 border border-slate-200 dark:border-white/15 rounded-md shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-2xl text-slate-900 dark:text-white transition-colors">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f59e0b] shadow-[0_0_12px_#f59e0b]" />

                  <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_220px] gap-5">
                    {/* Service list */}
                    <div onMouseLeave={() => setHoveredServiceSlug('security-guards')}>
                      {serviceLinks.map((service) => {
                        const Icon = service.icon;
                        const isActive = hoveredServiceSlug === service.slug;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            onMouseEnter={() => setHoveredServiceSlug(service.slug)}
                            className={`relative flex items-center gap-2.5 px-3 py-2.5 rounded-sm text-[11px] font-bold normal-case leading-tight transition-colors ${
                              isActive
                                ? 'text-slate-900 dark:text-white bg-[#f59e0b]/10'
                                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                            }`}
                          >
                            {isActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4/5 rounded-full bg-[#f59e0b]" />
                            )}
                            <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#f59e0b]' : 'text-slate-400 dark:text-slate-500'}`} />
                            <span>{service.name}</span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Featured panel */}
                    {serviceLinks
                      .filter((service) => service.slug === hoveredServiceSlug)
                      .map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group relative rounded-md overflow-hidden min-h-[320px] flex flex-col justify-end"
                        >
                          <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            sizes="460px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080f22] via-[#080f22]/75 to-[#080f22]/15" />
                          <div className="relative z-10 p-5">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#f59e0b] bg-[#f59e0b]/15 mb-3">
                              {service.badge}
                            </span>
                            <h4 className="text-lg font-black uppercase tracking-tight text-white mb-2">
                              {service.name}
                            </h4>
                            <p className="text-xs font-medium text-slate-300 leading-relaxed mb-3 max-w-md">
                              {service.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-4">
                              {service.highlights.map((point) => (
                                <li key={point} className="flex items-start gap-1.5 text-[11px] font-medium text-slate-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#080f22] bg-[#f59e0b] px-3.5 py-2 rounded-sm group-hover:brightness-110 transition-all">
                              View Service
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </Link>
                      ))}

                    {/* Trust panel */}
                    <div className="hidden lg:flex flex-col bg-slate-50 dark:bg-[#0b1329] border border-slate-200 dark:border-white/10 rounded-md p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                        <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                          Why Saints Services
                        </span>
                      </div>
                      <ul className="space-y-2.5 mb-4">
                        <li className="flex items-start gap-2 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                          SIA-Licensed Security Officers
                        </li>
                        <li className="flex items-start gap-2 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                          <Clock className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                          Under 2-Hour Response
                        </li>
                        <li className="flex items-start gap-2 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                          <Compass className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                          Nationwide Coverage
                        </li>
                      </ul>
                      <Link
                        href="/contact"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="mt-auto flex items-center justify-center gap-1.5 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#f59e0b] transition-colors"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-white/10">
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="group relative overflow-hidden flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-[#0b1329] rounded-sm border border-slate-300 dark:border-white/20 transition-all shadow-md uppercase tracking-wider"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#080f22]">
                        View All Services
                      </span>
                      <ChevronRight className="relative z-10 w-3.5 h-3.5 text-[#f59e0b] group-hover:text-[#080f22] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

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

              {locationsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] lg:w-[900px] bg-white dark:bg-[#080f22]/95 border border-slate-200 dark:border-white/15 rounded-md shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-2xl text-slate-900 dark:text-white transition-colors">

                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f59e0b] shadow-[0_0_12px_#f59e0b]" />

                  {/* Search + Near Me */}
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5 mb-4">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                        placeholder="Search all locations..."
                        className="w-full bg-slate-50 dark:bg-[#0b1329] border border-slate-200 dark:border-white/10 rounded-sm pl-9 pr-3 py-2.5 text-xs font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#f59e0b] transition-colors"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleLocationsNearMe}
                      disabled={locatingNearMe}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-[#0b1329] border border-slate-200 dark:border-white/10 hover:border-[#f59e0b] transition-colors disabled:opacity-60 cursor-pointer whitespace-nowrap"
                    >
                      <LocateFixed className={`w-3.5 h-3.5 text-[#f59e0b] ${locatingNearMe ? 'animate-pulse' : ''}`} />
                      {locatingNearMe ? 'Locating...' : 'Locations Near Me'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-5">
                    {/* Region groups */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
                      {groupedLocations.length === 0 && (
                        <p className="col-span-full text-xs text-slate-500 dark:text-slate-400 py-6 text-center">
                          No locations match &ldquo;{locationSearch}&rdquo;.
                        </p>
                      )}
                      {groupedLocations.map(({ region, locations }, i) => (
                        <div
                          key={region}
                          className={i > 0 ? 'pl-4 border-l border-slate-200 dark:border-white/10' : ''}
                        >
                          <h3 className="text-[11px] font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-2">
                            {region}
                          </h3>
                          <ul className="space-y-0.5">
                            {locations.map((loc) => (
                              <li key={loc.slug}>
                                <Link
                                  href={`/locations/${loc.slug}`}
                                  onClick={() => setLocationsDropdownOpen(false)}
                                  className="group/loc flex items-center gap-1.5 truncate px-2 py-1.5 rounded-sm text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#f59e0b] hover:bg-[#f59e0b]/5 hover:translate-x-0.5 transition-all"
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#f59e0b] opacity-0 scale-0 group-hover/loc:opacity-100 group-hover/loc:scale-100 transition-all shrink-0" />
                                  <span className="truncate">{loc.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Coverage promo panel */}
                    <div className="hidden lg:flex flex-col bg-slate-50 dark:bg-[#0b1329] border border-slate-200 dark:border-white/10 rounded-md p-4 overflow-hidden">
                      <div className="flex items-center gap-2 mb-2">
                        <MapIcon className="w-4 h-4 text-[#f59e0b]" />
                        <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                          UK Coverage
                        </span>
                      </div>

                      <div className="relative h-36 -mx-1 mb-2">
                        <CoverageMiniMap />
                      </div>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                        {locationLinks.length} active deployment areas across 5 regions.
                      </p>

                      <Link
                        href="/locations"
                        onClick={() => setLocationsDropdownOpen(false)}
                        className="mt-auto flex items-center justify-center gap-1.5 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#f59e0b] transition-colors"
                      >
                        <Compass className="w-3.5 h-3.5 text-[#f59e0b]" />
                        View Map
                      </Link>
                    </div>
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

            <Link href="/blog" className="hover:text-[#f59e0b] transition-colors relative py-2 group">
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all group-hover:w-full" />
            </Link>
            <div
              className="relative py-6"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <Link
                href="/about"
                className="flex items-center gap-1.5 hover:text-[#f59e0b] transition-colors py-2 group"
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#f59e0b] transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white dark:bg-[#080f22]/95 border border-slate-200 dark:border-white/15 rounded-md shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-2xl text-slate-900 dark:text-white transition-colors">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f59e0b] shadow-[0_0_12px_#f59e0b]" />

                  <Link
                    href="/about"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-sm text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group"
                  >
                    <span>About Us</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-[#f59e0b] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </Link>
                  <Link
                    href="/certifications"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-sm text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group"
                  >
                    <span>Certifications</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-[#f59e0b] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </Link>
                </div>
              )}
            </div>
            <Link href="/careers" className="hover:text-[#f59e0b] transition-colors relative py-2 group">
              <span>Careers</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all group-hover:w-full" />
            </Link>
            <Link href="/contact" className="hover:text-[#f59e0b] transition-colors relative py-2 group">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f59e0b] transition-all group-hover:w-full" />
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 hover:opacity-70 transition-opacity cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-[18px] h-[18px] text-[#f59e0b]" />
                ) : (
                  <MoonStar className="w-[18px] h-[18px] text-[#b45309]" />
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
              className="md:hidden p-2.5 text-slate-700 dark:text-slate-200 hover:text-[#f59e0b] dark:hover:text-[#f59e0b] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-20"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-30 border-t border-slate-200 dark:border-white/10 p-4 bg-white dark:bg-[#0b1329] shadow-2xl max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain">
            <nav className="space-y-0.5">
              {/* Services */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileServicesOpen(!mobileServicesOpen);
                    setMobileLocationsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-3 rounded-lg text-sm font-bold transition-colors ${
                    mobileServicesOpen ? 'text-[#f59e0b] bg-[#f59e0b]/10' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 shrink-0" />
                    Services
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pr-1 py-1 space-y-0.5">
                    {serviceLinks.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:text-[#f59e0b] hover:bg-[#f59e0b]/5 transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
                          {service.name}
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-1.5 py-2.5 px-3 text-[13px] font-bold text-[#f59e0b]"
                    >
                      View All Services
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Locations */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileLocationsOpen(!mobileLocationsOpen);
                    setMobileServicesOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-3 rounded-lg text-sm font-bold transition-colors ${
                    mobileLocationsOpen ? 'text-[#f59e0b] bg-[#f59e0b]/10' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 shrink-0" />
                    Locations
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLocationsOpen && (
                  <div className="pl-4 pr-1 py-1 max-h-64 overflow-y-auto custom-scrollbar">
                    {REGION_ORDER.map((region) => {
                      const regionLocations = locationLinks.filter((loc) => loc.region === region);
                      if (regionLocations.length === 0) return null;
                      return (
                        <div key={region} className="mb-2">
                          <h4 className="px-3 pt-1.5 pb-1 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                            {region}
                          </h4>
                          {regionLocations.map((loc) => (
                            <Link
                              key={loc.slug}
                              href={`/locations/${loc.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 px-3 rounded-lg text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:text-[#f59e0b] hover:bg-[#f59e0b]/5 transition-colors"
                            >
                              {loc.name}
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                    <Link
                      href="/locations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-1.5 py-2.5 px-3 text-[13px] font-bold text-[#f59e0b]"
                    >
                      View Coverage Map
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <Newspaper className="w-4 h-4 shrink-0" />
                Blog
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 shrink-0" />
                About
              </Link>

              <Link
                href="/certifications"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 pl-9 pr-3 py-2 rounded-lg text-[13px] font-semibold text-slate-500 dark:text-slate-400 hover:text-[#f59e0b] hover:bg-[#f59e0b]/5 transition-colors"
              >
                Certifications
              </Link>

              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <Briefcase className="w-4 h-4 shrink-0" />
                Careers
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                Contact
              </Link>
            </nav>

            <div className="pt-4 mt-3 border-t border-slate-200 dark:border-white/10 space-y-2.5">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-bold py-3.5 rounded-lg text-sm uppercase tracking-wide active:scale-[0.98] transition-transform"
              >
                <ShieldCheck className="w-4 h-4" />
                Request Protection
              </Link>

              <a
                href="tel:07412733920"
                className="flex items-center justify-center gap-2 w-full bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-lg text-sm active:scale-[0.98] transition-transform"
              >
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                Call 07412 733920
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-lg text-sm active:scale-[0.98] transition-transform"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                WhatsApp Us
              </a>

              <div className="flex items-center justify-center pt-1">
                <SocialLinks variant="bar" className="gap-7" iconClassName="w-6 h-6" />
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}