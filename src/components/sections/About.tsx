'use client';

import { useTranslations } from 'next-intl';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DownloadIcon from '@mui/icons-material/Download';
import { personalInfo } from '@/data/personal-info';

const About = () => {
  const t = useTranslations('about');

  const infoItems = [
    { icon: <SchoolIcon fontSize="small" />, label: t('degree'), value: personalInfo.degree },
    { icon: <WorkIcon fontSize="small" />, label: t('yearsExperience'), value: `${personalInfo.yearsExperience}+` },
  ];

  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'grey.50' }}>
      <Container maxWidth="md">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            {t('title')}{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              {t('highlight')}
            </Box>
          </Typography>
          <Box sx={{ width: 96, height: 4, bgcolor: 'primary.main', mx: 'auto' }} />
        </Box>

        {/* Centered Card */}
        <Card
          elevation={4}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          }}
        >
          {/* Top accent bar */}
          <Box sx={{ height: 4, bgcolor: 'primary.main', width: '100%' }} />

          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            {/* Profile intro */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              alignItems={{ xs: 'center', sm: 'flex-start' }}
              sx={{ mb: 4 }}
            >
              <Avatar
                src={personalInfo.profileImage || undefined}
                alt={personalInfo.name}
                sx={{
                  width: 80,
                  height: 80,
                  border: '3px solid',
                  borderColor: 'primary.light',
                  boxShadow: '0 4px 14px rgba(73,136,196,0.2)',
                  display: { xs: 'flex', md: 'none' },
                }}
              />
              <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {personalInfo.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 600 }}>
                  {t('description1')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
                  {t('description2')}
                </Typography>
              </Box>
            </Stack>

            {/* Info grid */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {infoItems.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: 'grey.50',
                      '&:hover': {
                        bgcolor: 'rgba(73,136,196,0.06)',
                      },
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        bgcolor: 'rgba(73,136,196,0.1)',
                        borderRadius: '50%',
                        p: 1,
                        display: 'flex',
                        lineHeight: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2 }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" fontWeight={600} noWrap>
                        {item.value}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            {/* Download CV */}
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                href="/cv/resume.pdf"
                startIcon={<DownloadIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '9999px',
                }}
              >
                {t('downloadCV')}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default About;
