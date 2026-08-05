'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import { personalInfo } from '@/data/personal-info';

const socialIconMap: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
  Email: <EmailIcon />,
};

const Footer = () => {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale() as 'fr' | 'en';
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: tNav('home') },
    { href: '#about', label: tNav('about') },
    { href: '#skills', label: tNav('skills') },
    { href: '#projects', label: tNav('projects') },
    { href: '#contact', label: tNav('contact') },
  ];

  const socialLinks = personalInfo.socialLinks.map((social) => ({
    platform: social.platform,
    url: social.url,
    icon: socialIconMap[social.platform] ?? <LanguageIcon />,
    external: !social.url.startsWith('mailto:'),
  }));

  const contactInfo = [
    { icon: <EmailIcon sx={{ fontSize: 20 }} />, text: personalInfo.email },
    { icon: <PhoneIcon sx={{ fontSize: 20 }} />, text: personalInfo.phone },
    { icon: <LocationOnIcon sx={{ fontSize: 20 }} />, text: personalInfo.location[locale] },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0F172A',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #0F2854, transparent)',
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Box sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  <CodeIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Typography variant="h5" fontWeight={700}>
                    <Box component="span" sx={{ color: 'primary.main' }}>GABBADI</Box>
                    <Box component="span" sx={{ color: 'white' }}>Anas</Box>
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#94A3B8',
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {t('description')}
                </Typography>

                {/* Social Links */}
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.platform}
                      component="a"
                      href={social.url}
                      aria-label={social.platform}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        color: 'white',
                        width: 40,
                        height: 40,
                        '&:hover': {
                          bgcolor: 'primary.main',
                          transform: 'translateY(-3px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ mb: 3, color: 'white' }}
              >
                {t('quickLinks')}
              </Typography>
              <Stack spacing={1.5}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#94A3B8',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        '&:hover': {
                          color: 'primary.main',
                          paddingLeft: '8px',
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ mb: 3, color: 'white' }}
              >
                {t('contact')}
              </Typography>
              <Stack spacing={2}>
                {contactInfo.map((info, index) => (
                  <Stack 
                    key={index} 
                    direction="row" 
                    spacing={1.5} 
                    alignItems="center"
                  >
                    <Box sx={{ color: 'primary.main' }}>
                      {info.icon}
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ color: '#94A3B8', fontSize: '0.875rem' }}
                    >
                      {info.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Bar */}
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box
          sx={{
            py: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#64748B',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            &copy; {currentYear}. {t('rights')}{' '}
            <Box
              component="span"
              sx={{
                color: 'primary.main',
                animation: 'heartbeat 1.5s ease-in-out infinite',
                '@keyframes heartbeat': {
                  '0%, 100%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.1)' },
                },
                display: 'inline-block',
              }}
            >
              ♥
            </Box>{' '}
            {t('by')} GABBADI Anas
          </Typography>
        </Box>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, #0F2854 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default Footer;