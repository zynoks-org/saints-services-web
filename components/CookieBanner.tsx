"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, Check, ShieldCheck, X } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const consent = localStorage.getItem('saints_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('saints_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('saints_cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-8 sm:max-w-lg bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white p-6 sm:p-7 rounded-md shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-8 duration-300 overflow-hidden font-sans transition-colors duration-300">
      
      {/* Tactical Corner Brackets */}
      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#f59e0b] pointer-events-none" />
      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#f59e0b] pointer-events-none" />

      {/* Ambient Radial Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Header Tag & Title */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] shrink-0 shadow-xs">
              <Cookie className="w-6 h-6 text-[#f59e0b]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#f59e0b] text-[10px] font-mono font-bold uppercase tracking-widest mb-1">
                <ShieldCheck className="w-3 h-3 text-[#f59e0b]" />
                <span>DATA_PROTECTION // PECR</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Cookie & Privacy Consent
              </h3>
            </div>
          </div>
          
          <button 
            onClick={declineCookies}
            aria-label="Close cookie banner"
            className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Detailed Body Copy */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          Saints Services uses essential session cookies to enable core security dispatch features, optimize site performance, and ensure secure communication with our operational control desk.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={acceptCookies}
            className="group relative overflow-hidden flex-1 bg-[#f59e0b] text-slate-950 font-black py-3 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#f59e0b] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
            <Check className="relative z-10 w-4 h-4 stroke-[3]" />
            <span className="relative z-10">Accept All Cookies</span>
          </button>

          <button
            onClick={declineCookies}
            className="px-5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-bold py-3 rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all border border-slate-200 dark:border-slate-800 active:scale-95 cursor-pointer"
          >
            Essential Only
          </button>
        </div>

        {/* Footer Link */}
        <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left font-mono">
          Review details in our{' '}
          <Link href="/privacy-policy" className="text-[#f59e0b] underline hover:text-amber-500 font-bold">
            UK GDPR Privacy Policy
          </Link>.
        </div>
      </div>
    </div>
  );
}