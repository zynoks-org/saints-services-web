const CENTER = { x: 260, y: 240 };
const NODE_RADIUS = 175;
const RING_RADIUS = 196;

// Six officer nodes evenly spaced around the shield, starting from the top.
const nodes = Array.from({ length: 6 }, (_, i) => {
  const angle = (-90 + i * 60) * (Math.PI / 180);
  return {
    x: Math.round(CENTER.x + NODE_RADIUS * Math.cos(angle)),
    y: Math.round(CENTER.y + NODE_RADIUS * Math.sin(angle)),
    r: i % 2 === 0 ? 12 : 9,
    color: i % 3 === 0 ? '#f59e0b' : '#38bdf8',
    delay: `${i * 0.4}s`,
  };
});

// Tick marks around the outer radar ring, every 30 degrees.
const ticks = Array.from({ length: 12 }, (_, i) => {
  const angle = i * 30 * (Math.PI / 180);
  const inner = RING_RADIUS - 8;
  const outer = i % 3 === 0 ? RING_RADIUS + 10 : RING_RADIUS + 4;
  return {
    x1: Math.round(CENTER.x + inner * Math.cos(angle)),
    y1: Math.round(CENTER.y + inner * Math.sin(angle)),
    x2: Math.round(CENTER.x + outer * Math.cos(angle)),
    y2: Math.round(CENTER.y + outer * Math.sin(angle)),
  };
});

const VIEW_W = 520;
const VIEW_H = 480;

// Fixed-corner HUD readouts — anchored to the container edges (never to a
// node's coordinates) so they can never overflow/clip regardless of screen width.
const readouts = [
  { text: 'SIA-LICENSED STAFF', className: 'top-2 left-2 sm:top-4 sm:left-4' },
  { text: 'BS7858 VETTED', className: 'top-2 right-2 sm:top-4 sm:right-4' },
  { text: 'RAPID DISPATCH', className: 'bottom-2 left-2 sm:bottom-4 sm:left-4' },
  { text: '24/7 CONTROL ROOM', className: 'bottom-2 right-2 sm:bottom-4 sm:right-4' },
];

/**
 * Tactical "extended workforce" radar motif: a central shield linked to
 * six officer nodes on a rotating scan ring, sitting inside a soft ambient
 * glow so it reads as part of the hero's lighting rather than a floating
 * sticker. Pure inline SVG/CSS — no photo asset required.
 */
export function SubcontractingVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] pointer-events-none select-none"
    >
      {/* Ambient background glow — grounds the emblem in the hero's lighting */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_46%,rgba(245,158,11,0.22)_0%,rgba(245,158,11,0.08)_40%,transparent_72%)] blur-[70px]" />
      <div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[55%] bg-[#f59e0b]/10 rounded-full blur-[90px]" />
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] bg-sky-500/10 rounded-full blur-[100px]" />

      <div
        className="absolute inset-0"
        style={{
          maskImage: 'radial-gradient(circle at 55% 48%, black 45%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(circle at 55% 48%, black 45%, transparent 82%)',
        }}
      >
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="scGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="scShield" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#111a33" />
              <stop offset="100%" stopColor="#0b1329" />
            </linearGradient>
            <filter id="scSoftBlur" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="scGlowFilter" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Ambient glow */}
          <circle cx={CENTER.x} cy={CENTER.y} r="190" fill="url(#scGlow)" />

          {/* Radar rings */}
          {[110, 150, RING_RADIUS].map((r) => (
            <circle
              key={r}
              cx={CENTER.x}
              cy={CENTER.y}
              r={r}
              fill="none"
              stroke="#f59e0b"
              strokeOpacity={r === RING_RADIUS ? 0.22 : 0.12}
              strokeDasharray={r === RING_RADIUS ? undefined : '2 7'}
            />
          ))}

          {/* Compass tick marks */}
          {ticks.map((t, i) => (
            <line
              key={i}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke="#f59e0b"
              strokeOpacity="0.35"
              strokeWidth={i % 3 === 0 ? 1.5 : 1}
            />
          ))}

          {/* Rotating scan sweep */}
          <path
            d={`M${CENTER.x},${CENTER.y} L${CENTER.x + 200},${CENTER.y - 70} A200,200 0 0,1 ${CENTER.x + 200},${CENTER.y + 70} Z`}
            fill="#f59e0b"
            fillOpacity="0.09"
            filter="url(#scSoftBlur)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${CENTER.x} ${CENTER.y}`}
              to={`360 ${CENTER.x} ${CENTER.y}`}
              dur="16s"
              repeatCount="indefinite"
            />
          </path>

          {/* Connecting lines to each node */}
          {nodes.map((n, i) => (
            <line
              key={`l-${i}`}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={n.x}
              y2={n.y}
              stroke="#f59e0b"
              strokeOpacity="0.32"
              strokeWidth="1.5"
            />
          ))}

          {/* Officer nodes */}
          {nodes.map((n, i) => (
            <g key={`n-${i}`}>
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r + 8}
                fill={n.color}
                fillOpacity="0.12"
                className="animate-pulse"
                style={{ animationDelay: n.delay, animationDuration: '3.5s' }}
              />
              <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} stroke="#0b1329" strokeWidth="2.5" />
            </g>
          ))}

          {/* Central shield emblem */}
          <g filter="url(#scGlowFilter)">
            <circle cx={CENTER.x} cy={CENTER.y} r="54" fill="url(#scShield)" stroke="#f59e0b" strokeWidth="2" />
            <circle cx={CENTER.x} cy={CENTER.y} r="44" fill="none" stroke="#f59e0b" strokeOpacity="0.35" strokeWidth="1" />
            <path
              d={`M${CENTER.x} ${CENTER.y - 25} l18.5 8 v16 c0 14 -9.5 22.5 -18.5 27 c-9.5 -4.5 -18.5 -13 -18.5 -27 v-16 z`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.3"
              strokeLinejoin="round"
            />
            <path
              d={`M${CENTER.x - 9.5} ${CENTER.y + 1} l7 7 l14 -15`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* Fixed-corner HUD readouts — never clip, regardless of container width */}
      {readouts.map((r) => (
        <div
          key={r.text}
          className={`absolute flex items-center gap-1.5 px-2 py-1 rounded-sm bg-[#0b1329]/70 border border-[#f59e0b]/25 text-[8px] sm:text-[9px] font-mono font-bold text-slate-300 uppercase tracking-wider whitespace-nowrap backdrop-blur-sm ${r.className}`}
        >
          <span className="w-1 h-1 rounded-full bg-[#f59e0b] shrink-0" />
          {r.text}
        </div>
      ))}
    </div>
  );
}
