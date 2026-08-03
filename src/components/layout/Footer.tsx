import Link from 'next/link';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton, 
  Stack,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import CodeIcon from '@mui/icons-material/Code';
import { personalInfo } from '@/data/personal-info';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
  ];

  const services = [
    { href: '#services', label: 'Web Development' },
    { href: '#services', label: 'Mobile Apps' },
    { href: '#services', label: 'UI/UX Design' },
    { href: '#services', label: 'Consulting' },
  ];

  const socialLinks = [
    { platform: 'GitHub', url: '#', icon: <GitHubIcon />, color: '#333' },
    { platform: 'LinkedIn', url: '#', icon: <LinkedInIcon />, color: '#0A66C2' },
    { platform: 'Twitter', url: '#', icon: <TwitterIcon />, color: '#1DA1F2' },
    { platform: 'Instagram', url: '#', icon: <InstagramIcon />, color: '#E4405F' },
  ];

  const contactInfo = [
    { icon: <EmailIcon sx={{ fontSize: 20 }} />, text: personalInfo.email },
    { icon: <PhoneIcon sx={{ fontSize: 20 }} />, text: personalInfo.phone },
    { icon: <LocationOnIcon sx={{ fontSize: 20 }} />, text: personalInfo.location },
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
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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
                  Building digital experiences that inspire and engage. Transforming ideas into reality through code.
                </Typography>
                
                {/* Social Links */}
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.platform}
                      component="a"
                      href={social.url}
                      aria-label={social.platform}
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
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography 
                variant="h6" 
                fontWeight={600} 
                sx={{ mb: 3, color: 'white' }}
              >
                Quick Links
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

            {/* Services */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography 
                variant="h6" 
                fontWeight={600} 
                sx={{ mb: 3, color: 'white' }}
              >
                Services
              </Typography>
              <Stack spacing={1.5}>
                {services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
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
                      {service.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography 
                variant="h6" 
                fontWeight={600} 
                sx={{ mb: 3, color: 'white' }}
              >
                Contact
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
            &copy; {currentYear} GABBADI Anas. All rights reserved. Crafted with{' '}
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
            by Alex Johnson
          </Typography>

          <Stack 
            direction="row" 
            spacing={3}
            sx={{
              color: '#64748B',
              fontSize: '0.875rem',
            }}
          >
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                variant="body2"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s',
                }}
              >
                Privacy Policy
              </Typography>
            </Link>
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                variant="body2"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s',
                }}
              >
                Terms of Service
              </Typography>
            </Link>
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                variant="body2"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s',
                }}
              >
                Cookie Policy
              </Typography>
            </Link>
          </Stack>
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