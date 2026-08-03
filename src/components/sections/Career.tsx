'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { education, professionalExperience, type CareerItem } from '@/data/career';

const Timeline = ({ items }: { items: CareerItem[] }) => (
  <Box sx={{ borderLeft: '2px solid', borderColor: 'primary.light', ml: 1, pl: 3.5 }}>
    {items.map((item, index) => (
      <Box key={`${item.title}-${index}`} sx={{ position: 'relative', pb: index === items.length - 1 ? 0 : 4 }}>
        <Box
          sx={{
            position: 'absolute',
            left: -32,
            top: 5,
            width: 13,
            height: 13,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            border: '3px solid',
            borderColor: 'background.paper',
            boxShadow: '0 0 0 2px rgba(73,136,196,0.18)',
          }}
        />
        <Typography variant="subtitle2" fontWeight={700} color="primary.dark" sx={{ mb: 0.75 }}>
          {item.period}
        </Typography>
        <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.35, mb: 0.5 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" fontWeight={600} color="text.secondary" sx={{ mb: 1 }}>
          {item.organization}
        </Typography>
        {item.location && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {item.location}
          </Typography>
        )}
        {item.description && (
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {item.description}
          </Typography>
        )}
        {item.highlights && (
          <Box component="ul" sx={{ m: 0, pl: 2.25, color: 'text.secondary' }}>
            {item.highlights.map((highlight) => (
              <Typography component="li" variant="body2" key={highlight} sx={{ lineHeight: 1.65, mb: 0.35 }}>
                {highlight}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    ))}
  </Box>
);

const Career = () => {
  const t = useTranslations('career');
  const [showAllExperience, setShowAllExperience] = useState(false);
  const visibleExperience = showAllExperience ? professionalExperience : professionalExperience.slice(0, 3);

  const panels = [
    { title: t('educationTitle'), icon: <SchoolIcon />, items: education },
    { title: t('experienceTitle'), icon: <WorkIcon />, items: visibleExperience, expandable: professionalExperience.length > 3 },
  ];

  return (
    <Box id="career" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            {t('title')} <Box component="span" sx={{ color: 'primary.main' }}>{t('highlight')}</Box>
          </Typography>
          <Box sx={{ width: 96, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 3, borderRadius: 2 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            {t('description')}
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {panels.map((panel) => (
            <Grid size={{ xs: 12, md: 6 }} key={panel.title} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4.5 },
                  width: '100%',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'rgba(73,136,196,0.2)',
                  bgcolor: 'rgba(73,136,196,0.035)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 14px 32px rgba(28,77,141,0.12)' },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 4 }}>
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>{panel.icon}</Box>
                  <Typography variant="h4" fontWeight={700} sx={{ fontSize: { xs: '1.55rem', md: '1.8rem' } }}>
                    {panel.title}
                  </Typography>
                </Stack>
                <Timeline items={panel.items} />
                {panel.expandable && (
                  <Button
                    size="small"
                    onClick={() => setShowAllExperience((isExpanded) => !isExpanded)}
                    sx={{ mt: 3, px: 0, textTransform: 'none' }}
                  >
                    {showAllExperience ? t('showLess') : t('showMore')}
                  </Button>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Career;
