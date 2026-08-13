import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/items/',
        '/?ND',
        '/processes/',
        '/wp-admin/',
        '/shop/',
        '/reserve/',
      ],
    },
    sitemap: 'https://www.saintsservices.co.uk/sitemap.xml',
  };
}