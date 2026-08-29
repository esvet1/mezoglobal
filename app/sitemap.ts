import { MetadataRoute } from 'next';
import { SITE_URL, services, staticPages } from '@/lib/pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changefreq,
    priority: p.priority,
  }));

  const serviceEntries = services.map((s) => ({
    url: `${SITE_URL}/hizmetler/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: s.changefreq,
    priority: s.priority,
  }));

  return [
    ...staticEntries,
    { url: `${SITE_URL}/hizmetler`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...serviceEntries,
  ];
}
