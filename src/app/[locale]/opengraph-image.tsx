import { personalInfo } from '@/data/personal-info';
import { renderOgImage, OG_IMAGE_SIZE } from '@/lib/og-image';

export const alt = 'Anas Gabbadi - Full Stack Developer';
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: 'fr' | 'en' = locale === 'fr' ? 'fr' : 'en';
  const subtitle =
    lang === 'fr'
      ? 'Développeur Full Stack & Étudiant Ingénieur'
      : 'Full Stack Developer & Engineering Student';

  return renderOgImage(personalInfo.name, subtitle);
}
