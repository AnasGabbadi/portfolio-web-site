import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { projects } from '@/data/projects';
import ProjectGallery from '@/components/ui/ProjectGallery';
import { routing } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {};
  }

  const lang: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const title = project.title[lang];
  const description = project.description[lang];
  const path = locale === routing.defaultLocale ? `/projects/${id}` : `/${locale}/projects/${id}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      title,
      description,
      url: path,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const t = await getTranslations('projects');
  const lang: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const title = project.title[lang];
  const description = project.description[lang];
  const gallery = project.gallery?.length ? project.gallery : project.image ? [project.image] : [];
  const projectsUrl = locale === 'en' ? '/#projects' : `/${locale}/#projects`;
  const contactUrl = locale === 'en' ? '/#contact' : `/${locale}/#contact`;

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default', minHeight: '70vh' }}>
      <Container maxWidth="lg">
        <Button
          component="a"
          href={projectsUrl}
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4, px: 0, color: 'primary.main' }}
        >
          {t('backToProjects')}
        </Button>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={0} sx={{ p: { xs: 1.5, sm: 2 }, borderRadius: 4, border: '1px solid', borderColor: 'rgba(73,136,196,0.18)', bgcolor: 'background.paper' }}>
              <ProjectGallery
                images={gallery}
                projectTitle={title}
                previousLabel={t('previousImage')}
                nextLabel={t('nextImage')}
                imageLabel={t('image')}
                zoomHint={t('zoomHint')}
                closeLabel={t('closeGallery')}
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ pt: { md: 2 } }}>
              <Typography variant="overline" color="primary.main" fontWeight={700} sx={{ letterSpacing: 1.2 }}>
                {t(project.category)}
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.1rem', md: '3rem' }, mb: 2, lineHeight: 1.15 }}>
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.08rem' }}>
                {description}
              </Typography>

              <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                {t('technologies')}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
                {project.technologies.map((technology) => (
                  <Chip key={technology} label={technology} color="primary" variant="outlined" />
                ))}
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} useFlexGap flexWrap="wrap">
                {project.category === 'professional' && project.demoUrl && (
                  <Button variant="contained" href={project.demoUrl} target="_blank" rel="noreferrer" startIcon={<LaunchIcon />}>
                    {t('liveDemo')}
                  </Button>
                )}
                <Button variant="outlined" href={contactUrl} startIcon={<RequestQuoteIcon />}>
                  {t('requestQuote')}
                </Button>
                {project.category === 'school' && project.githubUrl && (
                  <Button variant="outlined" href={project.githubUrl} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />}>
                    {t('github')}
                  </Button>
                )}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
