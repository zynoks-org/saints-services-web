"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SERVICES_LIST } from '@/lib/servicesData';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function CustomServiceSelect({ value, onChange, placeholder = "Choose one", className = "" }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative font-sans ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-50 dark:bg-[#070d1e] border border-slate-300 dark:border-slate-800 rounded-sm px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#f59e0b] flex items-center justify-between transition-colors cursor-pointer text-left shadow-xs"
      >
        <span className={value ? "text-slate-900 dark:text-white font-medium" : "text-slate-400 dark:text-slate-500"}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#f59e0b] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-sm shadow-2xl z-50 max-h-60 overflow-y-auto overscroll-contain divide-y divide-slate-100 dark:divide-slate-800/50">
          {SERVICES_LIST.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => {
                onChange(service);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-xs transition-colors cursor-pointer flex items-center justify-between ${
                value === service 
                  ? 'bg-[#f59e0b]/20 text-[#f59e0b] font-bold' 
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{service}</span>
              {value === service && <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}