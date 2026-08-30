import type { LucideIcon } from 'lucide-react';

type BadgeTone = 'amber' | 'emerald' | 'sky';

const toneClasses: Record<BadgeTone, string> = {
  amber: 'bg-[#f59e0b]/10 dark:bg-[#f59e0b]/15 text-[#b45309] dark:text-[#f59e0b]',
  emerald: 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400',
  sky: 'bg-sky-500/10 dark:bg-sky-500/15 text-sky-700 dark:text-sky-400',
};

// For badges sitting in a section that's dark regardless of the site's
// light/dark toggle (e.g. bg-slate-900 dark:bg-[#0b1329]) - the light-mode
// tone classes above would be unreadable there, so skip the dark: variant
// and just use it unconditionally.
const forceDarkToneClasses: Record<BadgeTone, string> = {
  amber: 'bg-[#f59e0b]/15 text-[#f59e0b]',
  emerald: 'bg-emerald-500/15 text-emerald-400',
  sky: 'bg-sky-500/15 text-sky-400',
};

interface BadgeProps {
  icon?: LucideIcon;
  tone?: BadgeTone;
  /** Use when the badge sits on a section that's always dark, not theme-aware. */
  forceDark?: boolean;
  children: React.ReactNode;
  className?: string;
}

// Soft-fill tag: tinted background in the badge's own colour, no border,
// sentence-style copy. Replaces the old mono/uppercase/underscore "CLI" tags
// site-wide - see the approved design at
// https://claude.ai/code/artifact/dfbfd027-ed80-4731-a770-2af8699cdffc (Option A).
export function Badge({ icon: Icon, tone = 'amber', forceDark = false, children, className = '' }: BadgeProps) {
  const colorClasses = forceDark ? forceDarkToneClasses[tone] : toneClasses[tone];
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold ${colorClasses} ${className}`}
    >
      {Icon ? <Icon className="w-3.5 h-3.5 shrink-0" /> : null}
      <span>{children}</span>
    </span>
  );
}
