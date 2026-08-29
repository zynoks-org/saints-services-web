"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Award, Calendar, ChevronLeft, ChevronRight, Hash } from 'lucide-react';

export interface CertificateEntry {
  id: string;
  title: string;
  issuer: string;
  imageSrc: string;
  refLabel: string;
  refValue: string;
  validity: string;
  description: string;
}

export function CertificatesCarousel({ certificates }: { certificates: CertificateEntry[] }) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const currentDrag = useRef(0);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    currentDrag.current = 0;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startX.current;
    currentDrag.current = delta;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60;
    if (currentDrag.current < -threshold) {
      handleNext();
    } else if (currentDrag.current > threshold) {
      handlePrev();
    }

    setDragOffset(0);
    currentDrag.current = 0;
  };

  return (
    <div>
      <div className="relative flex items-center justify-center gap-3 sm:gap-5">
        <button
          onClick={handlePrev}
          aria-label="Previous certificate"
          className="hidden sm:flex shrink-0 p-3 rounded-sm bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-md hover:bg-[#f59e0b] hover:text-slate-950 hover:border-[#f59e0b] transition-all active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div
          className="w-full max-w-xl overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translate3d(calc(-${index * 100}% + ${dragOffset}px), 0, 0)`,
              transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {certificates.map((cert, idx) => (
              <div key={cert.id} className="w-full shrink-0 px-1">
                <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-md p-6 sm:p-8 shadow-xl dark:shadow-2xl relative transition-colors">
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#f59e0b] pointer-events-none" />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#f59e0b] pointer-events-none" />

                  <div className="relative w-full aspect-[3/4] mb-6 rounded-sm overflow-hidden border border-slate-200 dark:border-slate-800 bg-white pointer-events-none">
                    <Image
                      src={cert.imageSrc}
                      alt={`${cert.title} certificate for Saints Services Ltd`}
                      fill
                      sizes="(max-width: 640px) 100vw, 576px"
                      className="object-contain"
                      draggable={false}
                      priority={idx === 0}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#f59e0b] shrink-0" />
                    <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-snug transition-colors">
                      {cert.title}
                    </h2>
                  </div>

                  <p className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 transition-colors">
                    {cert.issuer}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-sm bg-slate-50 dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors">
                      <Hash className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>{cert.refLabel} {cert.refValue}</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-sm bg-slate-50 dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors">
                      <Calendar className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>{cert.validity}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next certificate"
          className="hidden sm:flex shrink-0 p-3 rounded-sm bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-md hover:bg-[#f59e0b] hover:text-slate-950 hover:border-[#f59e0b] transition-all active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Mobile prev/next (no room beside the card on small screens) */}
      <div className="flex sm:hidden items-center justify-center gap-4 mt-5">
        <button
          onClick={handlePrev}
          aria-label="Previous certificate"
          className="p-2.5 rounded-sm bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-md active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next certificate"
          className="p-2.5 rounded-sm bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-md active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2.5 mt-6">
        {certificates.map((cert, idx) => (
          <button
            key={cert.id}
            onClick={() => setIndex(idx)}
            aria-label={`Go to ${cert.title}`}
            className={`h-2 rounded-sm transition-all duration-300 cursor-pointer ${
              index === idx
                ? 'w-8 bg-[#f59e0b] shadow-[0_0_10px_#f59e0b]'
                : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
