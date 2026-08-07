import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { projects } from '@/data/projects';
import { SITE_CONFIG } from '@/lib/constants';

function localePath(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${SITE_CONFIG.url}${prefix}${path}`;
}

function languagesFor(path: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, localePath(locale, path)])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homeEntries: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: localePath(locale, ''),
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages: languagesFor('') },
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.flatMap((project) =>
    routing.locales.map((locale) => ({
      url: localePath(locale, `/projects/${project.id}`),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: { languages: languagesFor(`/projects/${project.id}`) },
    }))
  );

  return [...homeEntries, ...projectEntries];
}
