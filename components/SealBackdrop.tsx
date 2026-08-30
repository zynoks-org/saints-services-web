// About-only hero background: an accreditation-seal mark (two concentric
// rings + a checkmark) - ties to the page's actual content (BS7858 vetting,
// SIA licensing, "setting the standard") rather than a generic pattern.
// Sized and positioned so the quote-form card (the lg:col-span-5 card in the
// hero grid) sits inside its ring without moving the card itself - same grid
// as Careers' ShieldBackdrop, so the same position math applies.
export function SealBackdrop() {
  return (
    <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none z-0 overflow-hidden">
      <div className="absolute right-[30px] top-1/2 -translate-y-1/2 w-[460px] h-[460px] lg:w-[620px] lg:h-[620px] rounded-full bg-[#f59e0b]/10 dark:bg-[#f59e0b]/15 blur-[100px]" />

      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="absolute right-[-48px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[640px] lg:h-[640px] text-[#b45309] dark:text-[#f59e0b] opacity-70 dark:opacity-55"
      >
        <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="1.1" opacity="0.7" />
        <path
          d="M74 100 L92 118 L128 78"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
      </svg>

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 dark:from-[#0b1329] via-slate-100/85 dark:via-[#0b1329]/85 to-transparent" />
    </div>
  );
}
