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
      { src: '/favicon_256.png', sizes: '256x256', type: 'image/png' },
      { src: '/favicon_1024.png', sizes: '1024x1024', type: 'image/png' },
    ],
  };
}
