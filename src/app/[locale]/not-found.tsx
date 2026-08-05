'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Box, Container, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '8rem',
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
            }}
          >
            {t('code')}
          </Typography>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {t('title')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {t('description')}
          </Typography>
          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
          >
            {t('backHome')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
