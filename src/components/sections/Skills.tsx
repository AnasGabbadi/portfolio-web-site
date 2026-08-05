'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Box, Button, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { skillCategories } from '@/data/skills';

const categoryAccents = [
  { iconBg: 'rgba(99,102,241,0.15)', iconColor: '#818CF8', border: 'rgba(99,102,241,0.3)' },
  { iconBg: 'rgba(34,211,238,0.15)', iconColor: '#22D3EE', border: 'rgba(34,211,238,0.3)' },
  { iconBg: 'rgba(52,211,153,0.15)', iconColor: '#34D399', border: 'rgba(52,211,153,0.3)' },
  { iconBg: 'rgba(251,191,36,0.15)', iconColor: '#FBBF24', border: 'rgba(251,191,36,0.3)' },
  { iconBg: 'rgba(248,113,113,0.15)', iconColor: '#F87171', border: 'rgba(248,113,113,0.3)' },
  { iconBg: 'rgba(196,181,253,0.15)', iconColor: '#C4B5FD', border: 'rgba(196,181,253,0.3)' },
];

const Skills = () => {
  const t = useTranslations('skills');
  const locale = useLocale() as 'fr' | 'en';
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'grey.50',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            {t('title')}{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              {t('highlight')}
            </Box>
          </Typography>
          <Box sx={{ width: 96, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 3, borderRadius: 2 }} />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            {t('description')}
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Grid container spacing={3} alignItems="flex-start">
          {skillCategories.map((category, catIndex) => {
            const accent = categoryAccents[catIndex % categoryAccents.length];
            const categoryTitle = category.title[locale];
            const isExpanded = expandedCategories[category.id] ?? false;
            const visibleSkills = isExpanded ? category.skills : category.skills.slice(0, 6);
            const hasMoreSkills = category.skills.length > 6;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.id}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    minHeight: 270,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      borderColor: accent.iconColor,
                    },
                  }}
                >
                  {/* Card header: Icon + Title */}
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 1.5,
                        bgcolor: accent.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <i className={category.icon} style={{ fontSize: '1rem', color: accent.iconColor }} />
                    </Box>
                    <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1rem' }}>
                      {categoryTitle}
                    </Typography>
                  </Stack>

                  {/* Skill tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {visibleSkills.map((skill) => (
                      <Box
                        key={skill}
                        sx={{
                          px: 1.5,
                          py: 0.6,
                          borderRadius: '999px',
                          border: '1px solid',
                          borderColor: 'grey.300',
                          color: 'text.secondary',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          transition: 'all 0.2s',
                          '&:hover': {
                            bgcolor: accent.iconBg,
                            borderColor: accent.iconColor,
                            color: accent.iconColor,
                          },
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>

                  {hasMoreSkills && (
                    <Button
                      size="small"
                      onClick={() => setExpandedCategories((expanded) => ({
                        ...expanded,
                        [category.id]: !isExpanded,
                      }))}
                      sx={{ alignSelf: 'flex-start', mt: 2, px: 0, textTransform: 'none', color: accent.iconColor }}
                    >
                      {isExpanded ? t('showLess') : t('showMore')}
                    </Button>
                  )}
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
