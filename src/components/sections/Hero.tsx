'use client';

import { useTranslations } from 'next-intl';
import { Box, Container, Typography, Button, Stack, IconButton, Tooltip } from '@mui/material';
import { personalInfo } from '@/data/personal-info';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import Image from 'next/image';

const Hero = () => {
  const t = useTranslations('hero');
  const typingWords = t.raw('typingWords') as string[];
  const typingText = useTypingEffect(typingWords);

  return (
    <Box
      id="home"
      component="section"
      sx={{
        pt: { xs: 14, md: 16 },
        pb: { xs: 8, md: 12 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(73,136,196,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,40,84,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Avatar - desktop only */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', position: 'relative' }}>
            {/* Floating decoration behind avatar */}
            <Box
              sx={{
                position: 'absolute',
                width: { xs: 320, md: 400 },
                height: { xs: 320, md: 400 },
                borderRadius: '50%',
                border: '2px solid',
                borderColor: 'primary.light',
                opacity: 0.3,
                animation: 'spin 20s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: { xs: 300, md: 380 },
                height: { xs: 300, md: 380 },
                borderRadius: '50%',
                border: '1px dashed',
                borderColor: 'primary.main',
                opacity: 0.15,
                animation: 'spin 30s linear infinite reverse',
              }}
            />

            <Box
              sx={{
                width: { xs: 260, md: 340 },
                height: { xs: 260, md: 340 },
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4988C4 0%, #0F2854 50%, #1C4D8D 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(73, 136, 196, 0.35)',
                position: 'relative',
                overflow: 'hidden',
                border: '4px solid',
                borderColor: 'background.paper',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #4988C4, #BDE8F5, #4988C4)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0.6,
                },
              }}
            >
              {personalInfo.profileImage ? (
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  style={{
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <i
                  className="fas fa-user"
                  style={{ fontSize: '7rem', color: 'white', opacity: 0.3 }}
                />
              )}
            </Box>

            {/* Badge Available for work - repositioned for mobile */}
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 20, md: 50 },
                right: { xs: -10, md: 50 },
                bgcolor: 'background.paper',
                px: 1.5,
                py: 1,
                borderRadius: '9999px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                zIndex: 10,
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    bgcolor: '#22C55E',
                    borderRadius: '50%',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.4 },
                    },
                  }}
                />
                <Typography variant="caption" fontWeight={600} sx={{ color: 'text.primary', whiteSpace: 'nowrap' }}>
                  {t('availableForWork')}
                </Typography>
              </Stack>
            </Box>
          </Box>

          {/* Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
              }}
            >
              {t('greeting')}{' '}
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                  background: 'linear-gradient(135deg, #4988C4, #1C4D8D)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {personalInfo.name.split(' ')[1]}
              </Box>
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: 'text.secondary',
                mb: 2,
                minHeight: { xs: '2.5rem', md: '3.5rem' },
                fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
                fontWeight: 500,
              }}
            >
              {typingText}
              <Box
                component="span"
                sx={{
                  animation: 'blink 1s step-end infinite',
                  '@keyframes blink': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                  },
                  ml: 0.5,
                  color: 'primary.main',
                  fontWeight: 300,
                }}
              >
                |
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: 'text.secondary',
                mb: 4,
                maxWidth: '560px',
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.8,
              }}
            >
              {t('description')}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              useFlexGap
              flexWrap="wrap"
              sx={{
                mb: 5,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button variant="contained" size="large" href="#contact">
                {t('hireMe')}
              </Button>
              <Button variant="outlined" size="large" href="#projects">
                {t('viewProjects')}
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              {personalInfo.socialLinks.map((social) => (
                <Tooltip key={social.platform} title={social.platform} arrow>
                  <IconButton
                    component="a"
                    href={social.url}
                    aria-label={social.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      bgcolor: 'rgba(73,136,196,0.08)',
                      width: 44,
                      height: 44,
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'rgba(73,136,196,0.15)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 4px 12px rgba(73,136,196,0.25)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <i className={social.icon} style={{ fontSize: '1.2rem' }} />
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
