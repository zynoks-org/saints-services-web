import { MetadataRoute } from 'next';
import { locationsData } from '@/lib/locationsData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.saintsservices.co.uk';

  // 1. Static Pages
  const staticPages = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/services',
    '/blog',
    '/locations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Services Pages
  const serviceSlugs = [
    'security-guards',
    'keyholding',
    'door-supervision',
    'event-security',
  ];
  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Blog Articles
  const blogSlugs = [
    'close-protection-threat-dynamics-uk',
    'construction-site-security-loss-prevention',
    'keyholding-alarm-response-sla-guide',
    'london-crime-rates-by-borough-2026',
    'maritime-port-security-uk-guide',
    'martyns-law-event-safety-compliance',
    'retail-loss-prevention-uk-guide',
    'sia-security-guard-responsibilities',
    'uk-stadium-security-disorder-guide',
  ];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 4. Dynamic Location Pages
  const locationRoutes = Object.keys(locationsData).map((key) => ({
    url: `${baseUrl}/locations/${locationsData[key].slug || key}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...serviceRoutes, ...blogRoutes, ...locationRoutes];
}