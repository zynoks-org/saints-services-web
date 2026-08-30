// Shared hero/page background: two soft directional light blooms (warm from
// top-right, cool from bottom-left), a faint diagonal sheen, and fine grain
// texture - no lines, shapes, or motion. Approved design (Option B) at
// https://claude.ai/code/artifact/c97e8dde-b496-4e83-8e88-7720de4f82f5
// Theme-agnostic (low-opacity color washes read fine on both light and dark
// surfaces) - safe to render from server or client pages alike.
export function DirectionalLightBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute -inset-[20%]"
        style={{ background: 'radial-gradient(ellipse 900px 500px at 85% -10%, rgba(245,158,11,0.14), transparent 60%)' }}
      />
      <div
        className="absolute -inset-[20%]"
        style={{ background: 'radial-gradient(ellipse 700px 500px at 10% 120%, rgba(37,99,235,0.12), transparent 60%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.035) 50%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
