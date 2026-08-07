import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/private/'], // Add any private admin routes if applicable
    },
    sitemap: 'https://saintsservices.co.uk/sitemap.xml',
  };
}