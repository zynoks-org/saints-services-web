// Contact-only hero background: a dispatch pin with broadcasting signal arcs
// - ties to the page's "24/7 control desk / operational dispatch" copy.
// Contact's hero is single-column (no side card), so this sits generously in
// the empty right-hand space rather than framing anything specific.
export function SignalBackdrop() {
  return (
    <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none z-0 overflow-hidden">
      <div className="absolute right-[60px] top-1/2 -translate-y-1/2 w-[380px] h-[380px] lg:w-[460px] lg:h-[460px] rounded-full bg-[#f59e0b]/10 dark:bg-[#f59e0b]/15 blur-[100px]" />

      <svg
        viewBox="0 0 240 220"
        fill="none"
        className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[220px] h-[202px] sm:w-[320px] sm:h-[293px] lg:w-[460px] lg:h-[422px] text-[#b45309] dark:text-[#f59e0b] opacity-70 dark:opacity-55"
      >
        <path
          d="M90 20 C57.2 20 30 47.2 30 80 C30 124 90 200 90 200 C90 200 150 124 150 80 C150 47.2 122.8 20 90 20 Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle cx="90" cy="80" r="22" stroke="currentColor" strokeWidth="1.1" opacity="0.7" />
        <path d="M150 50 A30 30 0 0 1 150 110" stroke="currentColor" strokeWidth="1.4" opacity="0.65" />
        <path d="M150 25 A55 55 0 0 1 150 135" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
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
