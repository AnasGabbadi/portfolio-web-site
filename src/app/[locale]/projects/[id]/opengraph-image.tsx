import { projects } from '@/data/projects';
import { personalInfo } from '@/data/personal-info';
import { renderOgImage, OG_IMAGE_SIZE } from '@/lib/og-image';

export const alt = 'Anas Gabbadi - Project';
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const lang: 'fr' | 'en' = locale === 'fr' ? 'fr' : 'en';
  const project = projects.find((item) => item.id === id);

  const title = project?.title[lang] ?? personalInfo.name;
  const subtitle = project?.description[lang]?.slice(0, 110) ?? personalInfo.title;

  return renderOgImage(title, subtitle);
}
