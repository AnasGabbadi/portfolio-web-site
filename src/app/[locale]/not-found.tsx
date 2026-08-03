'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
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
            404
          </Typography>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Sorry, the page you are looking for does not exist.
          </Typography>
          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
