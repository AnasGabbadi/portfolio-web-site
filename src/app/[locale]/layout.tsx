import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG, COLORS } from '@/lib/constants';
import { personalInfo } from '@/data/personal-info';
import { skillCategories } from '@/data/skills';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: COLORS.primary,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const path = locale === routing.defaultLocale ? '/' : `/${locale}`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: t('title'),
      template: `%s | ${personalInfo.name}`,
    },
    description: t('description'),
    keywords: t('keywords').split(', '),
    authors: [{ name: personalInfo.name, url: SITE_CONFIG.url }],
    creator: personalInfo.name,
    alternates: {
      canonical: path,
      languages: {
        en: '/',
        fr: '/fr',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: path,
      siteName: personalInfo.name,
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    // Si la locale n'existe pas, utiliser la locale par défaut
    messages = await getMessages({ locale: routing.defaultLocale });
  }

  const lang: 'fr' | 'en' = locale === 'fr' ? 'fr' : 'en';
  const knowsAbout = skillCategories.flatMap((category) => category.skills);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_CONFIG.url}/#person`,
        name: personalInfo.name,
        jobTitle: personalInfo.title,
        description: personalInfo.description,
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}${personalInfo.profileImage}`,
        email: personalInfo.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: personalInfo.location[lang],
        },
        knowsAbout,
        sameAs: personalInfo.socialLinks
          .filter((link) => link.platform !== 'Email')
          .map((link) => link.url),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        name: personalInfo.name,
        url: SITE_CONFIG.url,
        inLanguage: locale,
        publisher: { '@id': `${SITE_CONFIG.url}/#person` },
      },
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}