import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // 'en' ne sera pas dans l'URL, 'fr' oui
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);