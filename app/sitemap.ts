import { MetadataRoute } from 'next';
import { locationsData } from '@/lib/locationsData';
import { getPublishedPosts } from '@/lib/posts';

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

  // 3. Blog Articles (DB-backed - every published post, old and new alike)
  const posts = await getPublishedPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
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