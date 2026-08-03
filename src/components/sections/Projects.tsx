'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Container, Typography, Button, Card, Grid, Chip, Stack } from '@mui/material';
import { projects } from '@/data/projects';
import { useProjectFilter } from '@/hooks/useProjectFilter';
import { ProjectCategory } from '@/types/project';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const Projects = () => {
  const t = useTranslations('projects');
  const { activeFilter, setActiveFilter, filteredProjects } = useProjectFilter(projects);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  const filters: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: t('all') },
    { value: 'school', label: t('school') },
    { value: 'professional', label: t('professional') },
  ];

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            {t('title')} <Box component="span" sx={{ color: 'primary.main' }}>{t('highlight')}</Box>
          </Typography>
          <Box sx={{ width: 96, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 3 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            {t('description')}
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
          {filters.map((filter) => (
            <Chip
              key={filter.value}
              label={filter.label}
              onClick={() => {
                setActiveFilter(filter.value);
                setShowAllProjects(false);
              }}
              color={activeFilter === filter.value ? 'primary' : 'default'}
              sx={{
                px: 2,
                py: 3,
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {visibleProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.id}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover .project-overlay': {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    height: 256,
                    position: 'relative',
                    bgcolor: 'grey.200',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <i className="fas fa-image" style={{ fontSize: '4rem', color: '#9CA3AF' }}></i>
                  )}
                </Box>

                <Box
                  className="project-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: '#4988C4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                >
                  <Box sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="h6" color="white" fontWeight={700} gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{
                        mb: 3,
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 4,
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <Button
                        component={Link}
                        href={`/projects/${project.id}`}
                        variant="contained"
                        size="small"
                        sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                      >
                        {t('viewDetails')}
                      </Button>
                      {project.demoUrl && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          sx={{ borderColor: 'white', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                        >
                          {t('liveDemo')}
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          startIcon={<i className="fab fa-github" />}
                          sx={{ borderColor: 'white', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                        >
                          {t('github')}
                        </Button>
                      )}
                    </Stack>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length > 6 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => setShowAllProjects((isExpanded) => !isExpanded)}
              sx={{ px: 4, py: 1.5, borderRadius: 2, textTransform: 'none' }}
            >
              {showAllProjects ? t('showLess') : t('showMore')}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Projects;
