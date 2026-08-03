import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { projects } from '@/data/projects';

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
  const gallery = project.gallery?.length ? project.gallery : project.image ? [project.image] : [];
  const projectsUrl = locale === 'en' ? '/#projects' : `/${locale}/#projects`;

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
            <Typography variant="h1" sx={{ fontSize: { xs: '2.1rem', md: '3rem' }, mb: 2 }}>
              {project.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.08rem' }}>
              {project.description}
            </Typography>

            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              {t('technologies')}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
              {project.technologies.map((technology) => (
                <Chip key={technology} label={technology} color="primary" variant="outlined" />
              ))}
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              {project.demoUrl && (
                <Button variant="contained" href={project.demoUrl} target="_blank" rel="noreferrer" startIcon={<LaunchIcon />}>
                  {t('liveDemo')}
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outlined" href={project.githubUrl} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />}>
                  {t('github')}
                </Button>
              )}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper elevation={0} sx={{ p: 2, borderRadius: 3, border: '1px solid', borderColor: 'grey.200' }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                {t('gallery')}
              </Typography>
              <Grid container spacing={2}>
                {gallery.map((image, index) => (
                  <Grid size={{ xs: 12 }} key={image}>
                    <Box sx={{ position: 'relative', height: { xs: 240, md: index === 0 ? 360 : 220 }, overflow: 'hidden', borderRadius: 2, bgcolor: 'grey.100' }}>
                      <Image
                        src={image}
                        alt={`${project.title} – ${t('gallery')} ${index + 1}`}
                        fill
                        sizes="(max-width: 900px) 100vw, 42vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
