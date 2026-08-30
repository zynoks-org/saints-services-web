// Careers-only hero background: a large outline of the Saints Services
// shield mark, sized and positioned so the recruitment photo card (the
// lg:col-span-5 card in the hero grid) sits inside its silhouette without
// moving the card itself. Approved design (Option B) at
// https://claude.ai/code/artifact/237730f0-5abd-46ed-a7ee-d8862aef588b
// About and Contact use their own marks (SealBackdrop, SignalBackdrop).
export function ShieldBackdrop() {
  return (
    <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none z-0 overflow-hidden">
      <div className="absolute right-[10px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[620px] lg:h-[620px] rounded-full bg-[#f59e0b]/10 dark:bg-[#f59e0b]/15 blur-[100px]" />

      <svg
        viewBox="0 0 200 240"
        fill="none"
        className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[280px] h-[336px] sm:w-[380px] sm:h-[456px] lg:w-[560px] lg:h-[672px] text-[#b45309] dark:text-[#f59e0b] opacity-70 dark:opacity-55"
      >
        <path
          d="M100 6 L188 42 V116 C188 172 152 210 100 234 C48 210 12 172 12 116 V42 Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M100 34 L164 60 V114 C164 158 136 188 100 206 C64 188 36 158 36 114 V60 Z"
          stroke="currentColor"
          strokeWidth="1.1"
          opacity="0.7"
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
