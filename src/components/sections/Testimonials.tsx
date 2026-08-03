'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Container, Typography, Card, CardContent, IconButton, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  const t = useTranslations('testimonials');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box id="testimonials" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'grey.50' }}>
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

        {/* Testimonials Slider */}
        <Box sx={{ position: 'relative' }}>
          {/* Left Arrow */}
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              left: { xs: -8, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          {/* Testimonials Container */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                sx={{
                  minWidth: { xs: '100%', sm: 400 },
                  scrollSnapAlign: 'start',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Rating Stars */}
                  <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: 'warning.main', fontSize: 20 }} />
                    ))}
                  </Stack>

                  {/* Testimonial Content */}
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontStyle: 'italic' }}>
                    "{testimonial.content}"
                  </Typography>

                  {/* Client Info */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role} at {testimonial.company}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              right: { xs: -8, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;