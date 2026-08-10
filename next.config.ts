import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:(.*)',
        headers: [
          // 1. Fixes "Content Security Policy (CSP) Header Not Set"
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https:;",
          },
          // 2. Fixes "Missing Anti-clickjacking Header"
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // 3. Fixes "X-Content-Type-Options Header Missing"
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // 4. Fixes "Cross-Domain Misconfiguration" (CORS restriction)
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Extra hardening: Forces HTTPS and prevents downgrades
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

export default nextConfig;