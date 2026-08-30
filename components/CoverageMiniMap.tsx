import Image from 'next/image';
import { locationsData } from '@/lib/locationsData';

const UNCOVERED_REGIONS = new Set(['Scotland', 'Wales']);

// Calibrated against the real uk-coverage-map.png asset (285x309, cropped to
// England + Wales from the user-supplied UK silhouette). Verified by
// rendering the composite locally before shipping - every dot lands inside
// the outline, in the right relative region, not out in the sea.
const IMAGE_WIDTH = 285;
const IMAGE_HEIGHT = 309;
function project(lat: number, lng: number) {
  const x = ((lng + 10.5) / 12.25) * 480 - 195;
  const y = ((59 - lat) / 9.1) * 579 - 270;
  return { x, y };
}

export function CoverageMiniMap() {
  const dots = Object.values(locationsData)
    .filter((loc) => !UNCOVERED_REGIONS.has(loc.region))
    .map((loc) => ({
      slug: loc.slug,
      region: loc.region,
      ...project(loc.coordinates.lat, loc.coordinates.lng),
    }));

  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/uk-coverage-map.png"
        alt="Map of England and Wales showing Saints Services' coverage areas"
        fill
        sizes="240px"
        className="object-contain"
      />
      <svg
        viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {dots.map((dot) => (
          <circle
            key={`${dot.slug}-glow`}
            cx={dot.x}
            cy={dot.y}
            r={dot.region === 'London' ? 11 : 7}
            fill={dot.region === 'London' ? '#f87171' : '#f59e0b'}
            fillOpacity="0.35"
          />
        ))}
        {dots.map((dot) => (
          <circle
            key={`${dot.slug}-core`}
            cx={dot.x}
            cy={dot.y}
            r="2.2"
            fill={dot.region === 'London' ? '#fca5a5' : '#fbbf24'}
          />
        ))}
      </svg>
    </div>
  );
}
