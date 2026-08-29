import Link from 'next/link';
import { Award, ArrowUpRight } from 'lucide-react';

/**
 * Cross-link banner pointing to /certifications. Drop into any page
 * between two full-width sections — matches the treatment first built
 * for the subcontracting page.
 */
export function CertificationsBanner() {
  return (
    <section className="py-10 bg-white dark:bg-[#0b1329] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/certifications"
          className="group flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 dark:bg-[#070d1e] border border-slate-200 dark:border-slate-800 rounded-md p-5 sm:p-6 hover:border-[#f59e0b] transition-colors"
        >
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-[#f59e0b] shrink-0" />
            <div>
              <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Backed by Official Accreditation</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">See our Disability Confident and Social Value certifications</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f59e0b] uppercase tracking-wider shrink-0">
            View Certifications
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </section>
  );
}
