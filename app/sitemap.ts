import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://saintsservices.co.uk';

  // Static routes
  const staticRoutes = [
    '',
    '/services',
    // Add other public pages like about, contact, etc.
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic service slugs
  const serviceSlugs = ['security-guards', 'keyholding', 'door-supervision', 'event-security'];
  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}