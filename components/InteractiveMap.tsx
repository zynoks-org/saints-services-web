"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Shield, Crosshair, Map, ArrowRight } from 'lucide-react';
import { locationsData } from '@/lib/locationsData';

const MIN_LAT = 50.5;
const MAX_LAT = 53.5;
const MIN_LNG = -3.2;
const MAX_LNG = 0.8;

const getTop = (lat: number) => `${((MAX_LAT - lat) / (MAX_LAT - MIN_LAT)) * 100}%`;
const getLeft = (lng: number) => `${((lng - MIN_LNG) / (MAX_LNG - MIN_LNG)) * 100}%`;

export function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All UK");
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const allLocations = Object.values(locationsData);
  const regions = ["All UK", ...Array.from(new Set(allLocations.map(loc => loc.region)))];

  const filteredLocations = selectedRegion === "All UK" 
    ? allLocations 
    : allLocations.filter(loc => loc.region === selectedRegion);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] font-mono text-xs font-bold tracking-widest uppercase mb-3">
          <Crosshair className="w-3.5 h-3.5 animate-pulse" /> Live Regional Matrix
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Interactive UK <span className="text-[#f59e0b]">Coverage Map</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-medium">
          Select a region or hover over active hubs to inspect tactical operational units and response vectors across the UK.
        </p>
      </div>

      <div className="bg-[#0b1329] rounded-3xl shadow-2xl overflow-hidden border border-slate-800/80 flex flex-col lg:flex-row">
        
        <div className="relative w-full lg:w-7/12 bg-[#040814] min-h-[420px] lg:min-h-[640px] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-800 overflow-hidden">
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

          <div className="absolute inset-8 sm:inset-10 mt-6">
            {allLocations.map((loc) => {
              const isHovered = hoveredLocation === loc.slug;
              const isFaded = selectedRegion !== "All UK" && loc.region !== selectedRegion;
              
              return (
                <div 
                  key={loc.slug}
                  className={`absolute transition-all duration-300 z-20 ${isHovered ? 'z-40 scale-125' : 'scale-100'} ${isFaded ? 'opacity-25 grayscale' : 'opacity-100'}`}
                  style={{ top: getTop(loc.coordinates.lat), left: getLeft(loc.coordinates.lng) }}
                  onMouseEnter={() => setHoveredLocation(loc.slug)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <div className="relative -ml-2 -mt-2 cursor-pointer group">
                    <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#040814] shadow-lg transition-colors ${isHovered ? 'bg-white shadow-[0_0_12px_#fff]' : 'bg-[#f59e0b]'}`}></div>
                    
                    {!isFaded && (
                      <div className="absolute inset-0 rounded-full bg-[#f59e0b] animate-ping opacity-30"></div>
                    )}
                    
                    {isHovered && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-[#0b1329] rounded-xl shadow-2xl border border-slate-700 p-3 pointer-events-none animate-in fade-in zoom-in-95 duration-150 z-50">
                        <div className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-wider mb-0.5">{loc.region}</div>
                        <div className="text-sm font-black text-white leading-tight mb-1">{loc.name}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-2 leading-tight">{loc.introText}</div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-[#0b1329]"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-5/12 flex flex-col max-h-[640px] bg-[#0b1329]">
          
          <div className="p-5 border-b border-slate-800 shrink-0">
            <h2 className="text-base font-black text-white mb-3 flex items-center gap-2">
              <Map className="w-4 h-4 text-[#f59e0b]" />
              Filter By Region
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
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

          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5 custom-scrollbar">
            {filteredLocations.map((loc) => (
              <Link 
                href={`/locations/${loc.slug}`}
                key={loc.slug}
                onMouseEnter={() => setHoveredLocation(loc.slug)}
                onMouseLeave={() => setHoveredLocation(null)}
                className={`block p-3.5 rounded-xl border transition-all duration-200 ${
                  hoveredLocation === loc.slug 
                    ? 'bg-slate-800/80 border-[#f59e0b] translate-x-1' 
                    : 'bg-[#040814]/70 border-slate-800/80 hover:border-slate-700'
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
          </div>

        </div>
      </div>

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