"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Map, Overlay } from 'pigeon-maps';
import { 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  ChevronRight, 
  Shield, 
  Crosshair, 
  Map as MapIcon,
  Search,
  X,
  Plus,
  Minus
} from 'lucide-react';
import { locationsData } from '@/lib/locationsData';

// CartoDB Dark Matter tile provider
const darkTileProvider = (x: number, y: number, z: number, dpr?: number) => {
  return `https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/${z}/${x}/${y}${dpr && dpr >= 2 ? '@2x' : ''}.png`;
};

export function LocationsCoverage() {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("All UK");
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Map view controls
  const [center, setCenter] = useState<[number, number]>([52.5, -1.5]); // Central UK
  const [zoom, setZoom] = useState<number>(6.5);

  // Prevent Next.js SSR hydration mismatch for pigeon-maps cleanly
  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const allLocations = Object.values(locationsData);
  const regions = ["All UK", ...Array.from(new Set(allLocations.map(loc => loc.region)))];

  // Filter locations by selected region AND search input query
  const filteredLocations = allLocations.filter(loc => {
    const matchesRegion = selectedRegion === "All UK" || loc.region === selectedRegion;
    const matchesSearch = searchQuery.trim() === "" || 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.slug.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  const activeHoveredLoc = allLocations.find(loc => loc.slug === hoveredLocation);

  // Handle region filter change & re-center map
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    if (region === "All UK") {
      setCenter([52.5, -1.5]);
      setZoom(6.5);
    } else if (region === "London") {
      setCenter([51.5074, -0.1278]);
      setZoom(9.5);
    } else if (region === "Scotland") {
      setCenter([56.4907, -4.2026]);
      setZoom(7);
    } else if (region === "Wales") {
      setCenter([52.1307, -3.7837]);
      setZoom(7.5);
    } else if (region === "East Midlands") {
      setCenter([52.8, -1.2]);
      setZoom(8.5);
    } else if (region === "West Midlands") {
      setCenter([52.48, -1.89]);
      setZoom(8.5);
    } else if (region === "South East") {
      setCenter([51.0, -0.8]);
      setZoom(8);
    } else if (region === "South West") {
      setCenter([50.7, -2.2]);
      setZoom(8.5);
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 1, 14));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 1, 4));

  const mainRegions = [
    {
      region: "East Midlands",
      slug: "east-midlands",
      places: [
        { name: "Derbyshire", slug: "derbyshire" },
        { name: "Derby", slug: "derby" },
        { name: "Leicestershire", slug: "leicestershire" },
        { name: "Leicester", slug: "leicester" },
        { name: "Nottinghamshire", slug: "nottinghamshire" },
        { name: "Nottingham", slug: "nottingham" }
      ]
    },
    {
      region: "West Midlands",
      slug: "west-midlands",
      places: [
        { name: "Birmingham", slug: "birmingham" },
        { name: "Coventry", slug: "coventry" },
        { name: "Walsall", slug: "walsall" },
        { name: "Wolverhampton", slug: "wolverhampton" }
      ]
    },
    {
      region: "South East",
      slug: "south-east",
      places: [
        { name: "Berkshire", slug: "berkshire" },
        { name: "Reading", slug: "reading" },
        { name: "Hampshire", slug: "hampshire" },
        { name: "Portsmouth", slug: "portsmouth" },
        { name: "Southampton", slug: "southampton" },
        { name: "Oxfordshire", slug: "oxfordshire" },
        { name: "Oxford", slug: "oxford" },
        { name: "Sussex", slug: "sussex" },
        { name: "Brighton", slug: "brighton" },
        { name: "Worthing", slug: "worthing" }
      ]
    },
    {
      region: "South West",
      slug: "south-west",
      places: [
        { name: "Dorset", slug: "dorset" },
        { name: "Bournemouth", slug: "bournemouth" },
        { name: "Poole", slug: "poole" }
      ]
    },
    {
      region: "London Regions",
      slug: "london",
      places: [
        { name: "North London", slug: "north-london" },
        { name: "East London", slug: "east-london" },
        { name: "West London", slug: "west-london" },
        { name: "South London", slug: "south-london" }
      ]
    }
  ];

  const londonBoroughs = [
    {
      zone: "North London",
      slug: "north-london",
      districts: [
        { name: "Barnet", slug: "barnet" },
        { name: "Brent", slug: "brent" },
        { name: "Enfield", slug: "enfield" }
      ]
    },
    {
      zone: "East London",
      slug: "east-london",
      districts: [
        { name: "Newham", slug: "newham" },
        { name: "Southwark", slug: "southwark" }
      ]
    },
    {
      zone: "West London",
      slug: "west-london",
      districts: [
        { name: "Ealing", slug: "ealing" },
        { name: "Wandsworth", slug: "wandsworth" }
      ]
    },
    {
      zone: "South London",
      slug: "south-london",
      districts: [
        { name: "Bromley", slug: "bromley" },
        { name: "Croydon", slug: "croydon" },
        { name: "Lambeth", slug: "lambeth" }
      ]
    }
  ];

  const nationalDeploys = [
    {
      region: "Scotland",
      slug: "scotland",
      places: [
        "Glasgow City", "Edinburgh", "Aberdeen City", "Dundee City", 
        "Central Belt", "Fife", "Highland", "North Lanarkshire", 
        "South Lanarkshire", "Renfrewshire", "Falkirk", "Perth & Kinross"
      ]
    },
    {
      region: "Wales",
      slug: "wales",
      places: [
        "Cardiff", "Swansea", "Newport", "Wrexham", 
        "Rhondda Cynon Taf", "Carmarthenshire", "Caerphilly", "Flintshire", 
        "Bridgend", "Vale of Glamorgan", "Conwy", "Pembrokeshire"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#070d1e] text-white border-b border-slate-800 font-sans relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f59e0b]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP BANNER / HEADER */}
        <div className="bg-[#0b1329] border border-slate-800 rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 hidden sm:flex gap-1.5 opacity-80 pointer-events-none transform translate-x-4 -translate-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-6 h-16 bg-[#f59e0b] -skew-x-12" />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 hidden sm:flex gap-1.5 opacity-80 pointer-events-none transform -translate-x-4 translate-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-6 h-16 bg-[#f59e0b] -skew-x-12" />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono font-bold text-slate-300 border-b border-slate-800 pb-6 mb-8 text-center">
            <div className="flex items-center gap-1.5 text-amber-400">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>UK WIDE COVERAGE</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>98% RETENTION RATE</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>AVAILABLE 24/7/365</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none">
              SAINTS SERVICES <br />
              <span className="text-[#f59e0b]">LOCATIONS</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Comprehensive Security Solutions Across the UK – Discover Saints Services Locations Near You, Providing Tailored Protection for Every Sector and Region.
            </p>
          </div>

        </div>

        {/* INTERACTIVE PIGEON-MAPS CARD */}
        <div className="mb-12 bg-[#0b1329] rounded-3xl shadow-2xl overflow-hidden border border-slate-800 p-3 sm:p-4 flex flex-col lg:flex-row gap-4">
          
          {/* LEFT: Live Interactive Map */}
          <div className="relative w-full lg:w-7/12 min-h-[480px] lg:min-h-[620px] bg-[#090f1d] rounded-2xl border-2 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.15)] overflow-hidden">
            
            {/* Header Badge */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2 text-[#f59e0b] font-mono text-[11px] font-bold tracking-widest uppercase bg-[#0b1329]/95 px-3.5 py-1.5 rounded-xl border border-amber-500/40 shadow-xl backdrop-blur-md pointer-events-none">
              <Crosshair className="w-4 h-4 animate-pulse text-[#f59e0b]" />
              Interactive Deployment Map
            </div>

            {/* Custom + / - Zoom Controls */}
            <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-1.5 bg-[#0b1329]/95 border border-amber-500/40 p-1.5 rounded-xl shadow-2xl backdrop-blur-md">
              <button
                onClick={handleZoomIn}
                aria-label="Zoom in"
                className="p-2 rounded-lg bg-[#040814] hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 active:scale-95"
              >
                <Plus className="w-4 h-4 text-[#f59e0b]" />
              </button>
              <button
                onClick={handleZoomOut}
                aria-label="Zoom out"
                className="p-2 rounded-lg bg-[#040814] hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 active:scale-95"
              >
                <Minus className="w-4 h-4 text-[#f59e0b]" />
              </button>
            </div>

            {/* Map Canvas with Hydration Guard */}
            <div 
              className="w-full h-full [&_.pigeon-tiles]:filter [&_.pigeon-tiles]:brightness-150 [&_.pigeon-tiles]:contrast-125"
              onWheelCapture={(e) => {
                e.stopPropagation();
              }}
            >
              {hasMounted ? (
                <Map
                  height={620}
                  center={center}
                  zoom={zoom}
                  provider={darkTileProvider}
                  attribution={false}
                  attributionPrefix={false}
                  metaWheelZoom={false}
                  onBoundsChanged={({ center }) => {
                    setCenter(center);
                  }}
                >
                  {/* 1. Render all standard pins first */}
                  {allLocations.map((loc) => {
                    const isHovered = hoveredLocation === loc.slug;
                    const matchesFilter = filteredLocations.some(item => item.slug === loc.slug);

                    if (!matchesFilter) return null;

                    return (
                      <Overlay 
                        key={loc.slug} 
                        anchor={[loc.coordinates.lat, loc.coordinates.lng]}
                        offset={[12, 12]}
                      >
                        <div 
                          className={`relative cursor-pointer group ${isHovered ? 'z-50' : 'z-10'}`}
                          onMouseEnter={() => setHoveredLocation(loc.slug)}
                          onMouseLeave={() => setHoveredLocation(null)}
                        >
                          {/* Glowing Marker Pin */}
                          <div className={`rounded-full border-2 border-[#0b1329] transition-all duration-200 ${
                            isHovered 
                              ? 'w-6 h-6 bg-white shadow-[0_0_20px_#fff] scale-125' 
                              : 'w-4 h-4 bg-[#f59e0b] shadow-[0_0_12px_#f59e0b]'
                          }`} />

                          {isHovered && (
                            <div className="absolute -inset-1.5 rounded-full bg-[#f59e0b] animate-ping opacity-60 pointer-events-none"></div>
                          )}
                        </div>
                      </Overlay>
                    );
                  })}

                  {/* 2. Render active tooltip OVERLAY LAST so it sits on top of all pins */}
                  {activeHoveredLoc && (
                    <Overlay 
                      anchor={[activeHoveredLoc.coordinates.lat, activeHoveredLoc.coordinates.lng]}
                      offset={[100, 130]}
                    >
                      <div className="relative z-[9999] pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                        <div className="w-52 bg-[#0b1329]/95 backdrop-blur-md rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-amber-500/60 p-3.5">
                          <div className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-0.5">{activeHoveredLoc.region}</div>
                          <div className="text-sm font-black text-white leading-tight mb-1">{activeHoveredLoc.name}</div>
                          <div className="text-[11px] text-slate-300 line-clamp-2 leading-tight">{activeHoveredLoc.introText}</div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-amber-500/60"></div>
                      </div>
                    </Overlay>
                  )}
                </Map>
              ) : (
                <div className="w-full h-[620px] bg-[#090f1d] animate-pulse rounded-2xl" />
              )}
            </div>
          </div>

          {/* RIGHT: Region Controls & Location List Panel */}
          <div className="w-full lg:w-5/12 flex flex-col max-h-[620px] bg-[#0b1329] rounded-2xl border border-slate-800">
            <div className="p-4 sm:p-5 border-b border-slate-800 shrink-0 space-y-3.5">
              
              {/* Location Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search city or location (e.g. London, Derby)..."
                  className="w-full bg-[#040814] border border-slate-700/80 rounded-xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Region Filter Buttons */}
              <div>
                <h2 className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                  <MapIcon className="w-3.5 h-3.5 text-[#f59e0b]" />
                  Filter Active Hubs
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {regions.map(region => (
                    <button
                      key={region}
                      onClick={() => handleRegionChange(region)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        selectedRegion === region 
                          ? 'bg-[#f59e0b] text-[#0b1329] border-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
                          : 'bg-[#040814] text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Scrollable Location List */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-2.5 custom-scrollbar">
              {filteredLocations.map((loc) => (
                <Link 
                  href={`/locations/${loc.slug}`}
                  key={loc.slug}
                  onMouseEnter={() => {
                    setHoveredLocation(loc.slug);
                    setCenter([loc.coordinates.lat, loc.coordinates.lng]);
                  }}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={`block p-3.5 rounded-xl border transition-all duration-200 ${
                    hoveredLocation === loc.slug 
                      ? 'bg-slate-800/80 border-[#f59e0b] translate-x-1' 
                      : 'bg-[#040814]/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${hoveredLocation === loc.slug ? 'bg-[#f59e0b]/20 text-[#f59e0b]' : 'bg-slate-800 text-slate-400'}`}>
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm flex items-center gap-2">
                          {loc.name} Security
                        </h3>
                        <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#f59e0b]" /> {loc.region}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`transition-transform duration-200 ${hoveredLocation === loc.slug ? 'text-[#f59e0b] translate-x-1' : 'text-slate-600'}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}

              {filteredLocations.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-slate-400 text-xs font-medium">No active hubs matching &quot;{searchQuery}&quot;</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* INTRO CARD */}
        <div className="bg-[#0b1329] border border-slate-800 rounded-3xl p-6 sm:p-10 mb-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#f59e0b] text-[11px] font-mono font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>NATIONWIDE_DISPATCH</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                Our Locations
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Saints Services Ltd operates across the UK, delivering specialized security solutions tailored to meet the unique needs of each region. From the bustling streets of London to the industrial hubs in the West Midlands, explore our locations to find reliable, technology-driven security services in your area.
              </p>
            </div>

            <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-800">
              <Image 
                src="/images/security-services.jpg" 
                alt="Saints Services UK Locations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* REGIONAL LOCATIONS GRID */}
        <div className="bg-[#0b1329]/80 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {mainRegions.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                  <Link 
                    href={`/locations/${item.slug}`}
                    className="hover:text-[#f59e0b] transition-colors"
                  >
                    {item.region}
                  </Link>
                </h3>
                <ul className="space-y-1 text-xs text-slate-300 font-medium">
                  {item.places.map((place, i) => (
                    <li key={i}>
                      <Link 
                        href={`/locations/${place.slug}`} 
                        className="flex items-center gap-1 hover:text-[#f59e0b] transition-colors py-0.5 group"
                      >
                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#f59e0b] group-hover:translate-x-0.5 transition-all shrink-0" />
                        <span>{place.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* LONDON BOROUGHS GRID */}
        <div className="bg-[#0b1329]/80 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="mb-6">
            <h3 className="text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-1">
              GREATER_LONDON_COVERAGE
            </h3>
            <h4 className="text-xl font-extrabold text-white uppercase tracking-tight">
              London Borough Focus
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {londonBoroughs.map((zone, index) => (
              <div key={index} className="space-y-3">
                <h5 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-2">
                  <Link 
                    href={`/locations/${zone.slug}`}
                    className="hover:text-[#f59e0b] transition-colors"
                  >
                    {zone.zone}
                  </Link>
                </h5>
                <ul className="space-y-1 text-xs text-slate-300 font-medium">
                  {zone.districts.map((district, i) => (
                    <li key={i}>
                      <Link 
                        href={`/locations/${district.slug}`} 
                        className="flex items-center gap-1 hover:text-[#f59e0b] transition-colors py-0.5 group"
                      >
                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#f59e0b] group-hover:translate-x-0.5 transition-all shrink-0" />
                        <span>{district.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SCOTLAND & WALES COVERAGE GRID */}
        <div className="bg-[#0b1329]/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-1">
              NATIONAL_DISPATCH_REGIONS
            </h3>
            <h4 className="text-xl font-extrabold text-white uppercase tracking-tight">
              Scotland & Wales Coverage
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nationalDeploys.map((item, index) => (
              <div key={index} className="space-y-3">
                <h5 className="text-base font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
                  <Link 
                    href={`/locations/${item.slug}`}
                    className="hover:text-[#f59e0b] transition-colors flex items-center gap-2"
                  >
                    <span>{item.region}</span>
                    <ArrowRight className="w-4 h-4 text-[#f59e0b]" />
                  </Link>
                </h5>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-300 font-medium">
                  {item.places.map((placeName, i) => (
                    <li key={i} className="flex items-center gap-1 py-0.5 text-slate-400 hover:text-slate-200 transition-colors cursor-default">
                      <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                      <span>{placeName}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-[#0b1329] to-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <ShieldCheck className="w-8 h-8 text-[#f59e0b] mx-auto mb-2" />
          <h3 className="text-lg font-extrabold text-white uppercase tracking-tight mb-1">
            Don&apos;t see your exact location listed?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-lg mx-auto mb-5">
            We operate nationwide across all UK postcodes. Contact our central control room to confirm immediate guard dispatch in your town or county.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-amber-500 text-[#0b1329] font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md uppercase tracking-wider"
            >
              <span>Request Location Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a 
              href="tel:07412733920" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition-all border border-slate-700 uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 text-[#f59e0b]" />
              <span>07412 733920</span>
            </a>
          </div>
        </div>

      </div>

      {/* Embedded CSS for custom scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b1329;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}} />
    </section>
  );
}