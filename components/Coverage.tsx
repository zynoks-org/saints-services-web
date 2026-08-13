"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Map, Marker } from 'pigeon-maps';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Radio,
  ExternalLink
} from 'lucide-react';

interface KeyHub {
  name: string;
  slug?: string;
}

interface RegionData {
  id: string;
  name: string;
  regionTag: string;
  coordinates: [number, number]; // [latitude, longitude]
  dispatchSla: string;
  activeGuards: string;
  keyHubs: KeyHub[];
  description: string;
}

// Custom Dark Mode Map Tiles (CartoDB Dark Matter)
const darkMapProvider = (x: number, y: number, z: number, dpr?: number) => {
  return `https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/${z}/${x}/${y}${dpr && dpr >= 2 ? '@2x' : ''}.png`;
};

// Helper to convert hub names to valid URL slugs if explicit slug isn't provided
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export function Coverage() {
  const [activeRegionId, setActiveRegionId] = useState<string>("london");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // UPDATED: Now matches your exact locationsData slugs to prevent 404s
  const regions: RegionData[] = [
    {
      id: "london",
      name: "Greater London Area",
      regionTag: "Headquarters & Primary Hub",
      coordinates: [51.5074, -0.1278],
      dispatchSla: "< 30 Min Deployment",
      activeGuards: "200+ SIA Officers",
      keyHubs: [
        { name: "Central London", slug: "london" },
        { name: "Croydon", slug: "croydon" },
        { name: "Southwark", slug: "southwark" },
        { name: "Newham", slug: "newham" },
        { name: "Lambeth", slug: "lambeth" },
        { name: "Wandsworth", slug: "wandsworth" }
      ],
      description: "Our main operational command center coordinates rapid static guarding, front-of-house concierge, and emergency response across all London boroughs."
    },
    {
      id: "southeast",
      name: "South East England",
      regionTag: "Southern Division",
      coordinates: [51.2787, -0.5377],
      dispatchSla: "< 45 Min Deployment",
      activeGuards: "155+ SIA Officers",
      keyHubs: [
        { name: "South East Overview", slug: "south-east" },
        { name: "Reading", slug: "reading" },
        { name: "Portsmouth", slug: "portsmouth" },
        { name: "Southampton", slug: "southampton" },
        { name: "Oxford", slug: "oxford" },
        { name: "Brighton", slug: "brighton" }
      ],
      description: "Delivering 24/7 key holding, event stewarding, and commercial defense across Kent, Surrey, Sussex, Hampshire, and Berkshire."
    },
    {
      id: "southwest",
      name: "South West England",
      regionTag: "South West Command",
      coordinates: [50.7202, -1.8794],
      dispatchSla: "< 60 Min Deployment",
      activeGuards: "110+ SIA Officers",
      keyHubs: [
        { name: "South West Overview", slug: "south-west" },
        { name: "Bournemouth", slug: "bournemouth" },
        { name: "Poole", slug: "poole" },
        { name: "Dorset Region", slug: "dorset" }
      ],
      description: "Specialized venue security stewards and gatehouse personnel serving regional infrastructure and leisure hubs."
    },
    {
      id: "west-midlands",
      name: "Birmingham & West Midlands",
      regionTag: "West Midlands Sector",
      coordinates: [52.4862, -1.8904],
      dispatchSla: "< 45 Min Deployment",
      activeGuards: "140+ SIA Officers",
      keyHubs: [
        { name: "West Midlands", slug: "west-midlands" },
        { name: "Birmingham", slug: "birmingham" },
        { name: "Coventry", slug: "coventry" },
        { name: "Wolverhampton", slug: "wolverhampton" },
        { name: "Walsall", slug: "walsall" }
      ],
      description: "Mobile patrol units and manned guards protecting commercial hubs, retail centers, and manufacturing parks across the West Midlands."
    },
    {
      id: "east-midlands",
      name: "Nottingham & East Midlands",
      regionTag: "East Midlands Sector",
      coordinates: [52.9548, -1.1581],
      dispatchSla: "< 45 Min Deployment",
      activeGuards: "125+ SIA Officers",
      keyHubs: [
        { name: "East Midlands", slug: "east-midlands" },
        { name: "Nottingham", slug: "nottingham" },
        { name: "Leicester", slug: "leicester" },
        { name: "Derby", slug: "derby" }
      ],
      description: "Tailored door supervision for hospitality venues and corporate office security for enterprise accounts throughout the East Midlands."
    },
    {
      id: "scotland",
      name: "Scotland",
      regionTag: "Scottish Operations",
      coordinates: [55.9533, -3.1883],
      dispatchSla: "< 60 Min Deployment",
      activeGuards: "95+ SIA Officers",
      keyHubs: [
        { name: "Scotland National Hub", slug: "scotland" }
      ],
      description: "Static protection, event safety, and loss prevention teams deployed across Scotland's commercial corridor."
    },
    {
      id: "wales",
      name: "Wales",
      regionTag: "Welsh Division",
      coordinates: [51.4815, -3.1790],
      dispatchSla: "< 60 Min Deployment",
      activeGuards: "85+ SIA Officers",
      keyHubs: [
        { name: "Wales National Hub", slug: "wales" }
      ],
      description: "Specialized venue security stewards and gatehouse personnel serving regional infrastructure and leisure hubs across Wales."
    }
  ];

  const currentRegion = regions.find(r => r.id === activeRegionId) || regions[0];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden font-sans transition-colors duration-300">
      
      {/* INDUSTRIAL SVG CORNER RETICLES & DOT MATRIX BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f59e0b]/5 rounded-full blur-[160px]" />
        
        {/* Engineering Dot Matrix Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.10]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }}
        />

        {/* SVG Tactical Reticle / Crosshair Markers in Corners */}
        <svg className="absolute top-6 left-6 w-8 h-8 text-slate-400/30 dark:text-slate-600/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <svg className="absolute top-6 right-6 w-8 h-8 text-slate-400/30 dark:text-slate-600/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <svg className="absolute bottom-6 left-6 w-8 h-8 text-slate-400/30 dark:text-slate-600/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <svg className="absolute bottom-6 right-6 w-8 h-8 text-slate-400/30 dark:text-slate-600/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs backdrop-blur-md transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Nationwide Dispatch Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4 transition-colors">
            Service Coverage Throughout the UK
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed transition-colors">
            Saints Services Ltd maintains an active dispatch network of SIA-licensed personnel across England, Scotland, Wales, and Northern Ireland for rapid site mobilization.
          </p>
        </div>

        {/* 4 STAT CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {[
            { title: "24/7 Dispatch Control", detail: "London Operational Control Room", icon: Clock },
            { title: "Rapid SLA Response", detail: "Sub-2 Hour Emergency Deployment", icon: ShieldCheck },
            { title: "98% Client Retention", detail: "Enterprise Trust Nationwide", icon: Building2 },
            { title: "100% SIA Vetted", detail: "BS7858 Screened Security Personnel", icon: CheckCircle2 }
          ].map((item, i) => {
            const IconComp = item.icon;
            return (
              <div key={i} className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 p-4 rounded-md flex items-center gap-3.5 shadow-md backdrop-blur-md transition-colors">
                <div className="p-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 text-[#f59e0b] shrink-0 border border-slate-200 dark:border-slate-800">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white transition-colors uppercase tracking-tight">{item.title}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium transition-colors">{item.detail}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN INTERACTIVE MAP & REGION DISPLAY */}
        <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-md p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-colors relative">
          
          {/* Tactical Corner Brackets */}
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#f59e0b] pointer-events-none" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#f59e0b] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: PIGEON MAP CANVAS (7 COLS) */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 rounded-md p-3 sm:p-6 relative flex flex-col justify-between overflow-hidden shadow-inner transition-colors">
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 gap-1 sm:gap-0 border-b border-slate-200 dark:border-slate-800 z-20 relative bg-slate-50 dark:bg-[#070d1e] transition-colors">
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>Interactive Regional Dispatch</span>
                </span>
                <span className="text-[11px] text-[#f59e0b] font-mono font-bold uppercase">Click any node on map</span>
              </div>

              {/* Map Container with Gold Accent Border */}
              <div className="relative w-full h-[320px] sm:h-[450px] my-4 rounded-sm overflow-hidden border border-[#f59e0b]/50 bg-slate-900 z-10 [&_.pigeon-attribution]:hidden">
                {mounted ? (
                  <Map 
                    defaultCenter={[54.8, -2.5]} 
                    defaultZoom={5.7}
                    provider={darkMapProvider}
                    mouseEvents={false}
                    touchEvents={false}
                  >
                    {regions.map((reg) => {
                      const isSelected = reg.id === activeRegionId;
                      return (
                        <Marker 
                          key={reg.id} 
                          width={40} 
                          anchor={reg.coordinates} 
                          onClick={() => setActiveRegionId(reg.id)}
                          style={{ pointerEvents: 'auto' }}
                        >
                          <div 
                            style={{ pointerEvents: 'auto' }}
                            className="relative flex flex-col items-center justify-center cursor-pointer group p-3 -m-3"
                          >
                            {isSelected && (
                              <span className="absolute w-8 h-8 rounded-full bg-[#f59e0b] animate-ping opacity-60 pointer-events-none" />
                            )}
                            
                            <div className={`relative w-4 h-4 rounded-full border-2 border-slate-900 transition-all duration-300 shadow-2xl ${
                              isSelected ? "bg-[#f59e0b] scale-125 shadow-[0_0_12px_#f59e0b]" : "bg-sky-500 group-hover:scale-110"
                            }`} />

                            {/* Node Label Pin Tag */}
                            <div className={`absolute top-9 whitespace-nowrap text-[10px] font-bold font-mono tracking-wider bg-slate-900/95 text-slate-100 px-2.5 py-1 rounded-sm border border-[#f59e0b]/40 pointer-events-none transition-all duration-200 z-30 shadow-xl ${
                              isSelected ? 'text-[#f59e0b] opacity-100 translate-y-0' : 'text-slate-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                            }`}>
                              {reg.name.split("&")[0].trim()}
                            </div>
                          </div>
                        </Marker>
                      );
                    })}
                  </Map>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 font-mono text-xs gap-2 bg-[#070d1e]">
                    <span className="w-4 h-4 rounded-full border-2 border-[#f59e0b] border-t-transparent animate-spin" />
                    <span>LOADING RADAR GRID...</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 z-20 relative bg-slate-50 dark:bg-[#070d1e] transition-colors font-mono">
                <span>Real-Time Geographic Dispatch</span>
                <span className="text-[#f59e0b] font-bold">{regions.length} Active Hubs</span>
              </div>

            </div>

            {/* RIGHT: TELEMETRY & CLICKABLE AREAS COVERED PANEL (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[450px]">
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider block mb-1">
                    {currentRegion.regionTag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">
                    {currentRegion.name}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed transition-colors">
                  {currentRegion.description}
                </p>

                {/* SLA & OFFICER METRICS */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
                    <div className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Emergency SLA</div>
                    <div className="text-sm sm:text-base font-black text-[#f59e0b] mt-0.5">{currentRegion.dispatchSla}</div>
                  </div>

                  <div className="p-3.5 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
                    <div className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Field Force</div>
                    <div className="text-sm sm:text-base font-black text-emerald-500 dark:text-emerald-400 mt-0.5">{currentRegion.activeGuards}</div>
                  </div>
                </div>

                {/* CLICKABLE AREAS COVERED IN THIS NODE */}
                <div className="pt-1">
                  <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between transition-colors">
                    <span className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 animate-pulse" />
                      <span>Click Area Page to View Hub:</span>
                    </span>
                    <span className="text-[10px] text-slate-400 lowercase font-normal">(select area below)</span>
                  </div>

                  <div className="max-h-[200px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    {currentRegion.keyHubs.map((hub, hIdx) => {
                      const targetSlug = hub.slug || slugify(hub.name);
                      return (
                        <Link 
                          key={hIdx} 
                          href={`/locations/${targetSlug}`}
                          className="flex items-center justify-between p-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-[#f59e0b] text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all group cursor-pointer shadow-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 group-hover:scale-110 transition-transform" />
                            <span>{hub.name}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase group-hover:text-[#f59e0b]">View Page</span>
                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#f59e0b] transition-colors" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CALL TO ACTION (WITH GOLD SWEEP ANIMATION) */}
              <div className="pt-6">
                <a
                  href="#quote-form"
                  className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#f59e0b] text-slate-950 font-black py-4 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  
                  <span className="relative z-10">
                    Request Deployment in {currentRegion.name.split("&")[0].trim()}
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.6);
        }
      `}} />
    </section>
  );
}