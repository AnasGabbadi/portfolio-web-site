import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
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
  matcher: ['/', '/(fr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};