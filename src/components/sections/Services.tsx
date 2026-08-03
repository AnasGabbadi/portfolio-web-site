'use client';

import { useTranslations } from 'next-intl';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { services } from '@/data/services';

const Services = () => {
  const t = useTranslations('services');

  return (
    <Box id="services" component="section" sx={{ py: { xs: 8, md: 12 } }}>
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

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.id}>
              <Card
                sx={{
                  height: '100%',
                  borderBottom: '4px solid',
                  borderColor: 'primary.main',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'primary.lighter',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <i className={`${service.icon} text-2xl`} style={{ color: '#1C4D8D' }}></i>
                  </Box>

                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>

                  {service.link && (
                    <Box
                      component="a"
                      href={service.link}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'primary.main',
                        fontWeight: 500,
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    >
                      {t('learnMore')}
                      <ArrowForwardIcon fontSize="small" />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;