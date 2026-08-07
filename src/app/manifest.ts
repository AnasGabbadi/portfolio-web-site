import type { MetadataRoute } from 'next';
import { SITE_CONFIG, COLORS } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.title,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: COLORS.light,
    theme_color: COLORS.primary,
    icons: [
      { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
