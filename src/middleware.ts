import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Laisser passer les routes de métadonnées générées par Next (og:image, etc.)
  // sans les faire transiter par la logique de locale, sinon next-intl les
  // redirige vers "/" et casse l'aperçu de partage sur les réseaux sociaux.
  if (/\/(opengraph-image|twitter-image|icon|apple-icon)(\.[a-zA-Z0-9]+)?$/.test(pathname)) {
    return NextResponse.next();
  }

  // Extraire la locale du pathname
  const locale = pathname.split('/')[1];
  
  // Vérifier si c'est une locale invalide
  if (locale && !routing.locales.includes(locale as any)) {
    // Rediriger vers la locale par défaut
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(`/${locale}`, '');
    return NextResponse.redirect(url);
  }
  
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(fr|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};