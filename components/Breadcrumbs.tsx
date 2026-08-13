'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on the homepage
  if (pathname === '/') return null;

  const paths = pathname.split('/').filter(path => path);

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ol className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-slate-400">
        <li>
          <Link href="/" className="hover:text-[#f59e0b] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;
          const formattedName = path.replace(/-/g, ' ').toUpperCase();

          return (
            <li key={path} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {isLast ? (
                <span className="text-[#f59e0b] font-bold" aria-current="page">
                  {formattedName}
                </span>
              ) : (
                <Link href={href} className="hover:text-[#f59e0b] transition-colors">
                  {formattedName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}