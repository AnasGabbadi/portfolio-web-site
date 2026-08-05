'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { personalInfo } from '@/data/personal-info';

const Contact = () => {
  const t = useTranslations('contact');
  const locale = useLocale() as 'fr' | 'en';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mode démo : aucun backend n'est branché sur ce formulaire.
    // On évite alert()/confirm() qui bloquent le thread JS de la page.
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialIconMap: Record<string, React.ReactNode> = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
    Email: <EmailIcon />,
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
      title: t('location'),
      value: personalInfo.location[locale],
      bgColor: '#4988C4',
      iconColor: '#F9FAFB',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 24 }} />,
      title: t('email'),
      value: personalInfo.email,
      bgColor: '#4988C4',
      iconColor: '#F9FAFB',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 24 }} />,
      title: t('phone'),
      value: personalInfo.phone,
      bgColor: '#4988C4',
      iconColor: '#F9FAFB',
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 24 }} />,
      title: t('website'),
      value: 'https://portfolio-web-site-cyan.vercel.app',
      bgColor: '#4988C4',
      iconColor: '#F9FAFB',
    },
  ];

  const socialLinks = personalInfo.socialLinks.map((social) => ({
    icon: socialIconMap[social.platform] ?? <LanguageIcon />,
    url: social.url,
    label: social.platform,
    external: !social.url.startsWith('mailto:'),
  }));

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#F3F4F6',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#1F2937',
              mb: 2,
            }}
          >
            {t('title')} <Box component="span" sx={{ color: '#1C4D8D' }}>{t('highlight')}</Box>
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: '#1C4D8D',
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            {t('description')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Side - Contact Information */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Card
              elevation={0}
              sx={{
                bgcolor: 'white',
                borderRadius: 3,
                height: '100%',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 4, color: '#1F2937' }}
                >
                  {t('contactInfo')}
                </Typography>

                <Stack spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Box key={index}>
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            minWidth: 48,
                            borderRadius: 2,
                            bgcolor: info.bgColor,
                            color: info.iconColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            sx={{ color: '#1F2937', mb: 0.5 }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: '#6B7280' }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  ))}
                </Stack>

                {/* Social Links */}
                <Box sx={{ mt: 6 }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ mb: 2, color: '#1F2937' }}
                  >
                    {t('followMe')}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        component="a"
                        href={social.url}
                        aria-label={social.label}
                        target={social.external ? '_blank' : undefined}
                        rel={social.external ? 'noopener noreferrer' : undefined}
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: '#F3F4F6',
                          color: '#1C4D8D',
                          '&:hover': {
                            bgcolor: '#1C4D8D',
                            color: 'white',
                            transform: 'translateY(-3px)',
                          },
                          transition: 'all 0.3s',
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Card
              elevation={0}
              sx={{
                bgcolor: 'white',
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 4, color: '#1F2937' }}
                >
                  {t('sendMessage')}
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        sx={{ mb: 1, color: '#374151' }}
                      >
                        {t('name')}
                      </Typography>
                      <TextField
                        fullWidth
                        name="name"
                        placeholder={t('yourName')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: '#F9FAFB',
                            '& fieldset': { borderColor: '#E5E7EB' },
                            '&:hover fieldset': { borderColor: '#1C4D8D' },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        sx={{ mb: 1, color: '#374151' }}
                      >
                        {t('email')}
                      </Typography>
                      <TextField
                        fullWidth
                        name="email"
                        type="email"
                        placeholder={t('yourEmail')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: '#F9FAFB',
                            '& fieldset': { borderColor: '#E5E7EB' },
                            '&:hover fieldset': { borderColor: '#1C4D8D' },
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        sx={{ mb: 1, color: '#374151' }}
                      >
                        {t('subject')}
                      </Typography>
                      <TextField
                        fullWidth
                        name="subject"
                        placeholder={t('subject')}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: '#F9FAFB',
                            '& fieldset': { borderColor: '#E5E7EB' },
                            '&:hover fieldset': { borderColor: '#1C4D8D' },
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        sx={{ mb: 1, color: '#374151' }}
                      >
                        {t('message')}
                      </Typography>
                      <TextField
                        fullWidth
                        name="message"
                        placeholder={t('yourMessage')}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: '#F9FAFB',
                            '& fieldset': { borderColor: '#E5E7EB' },
                            '&:hover fieldset': { borderColor: '#1C4D8D' },
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        fullWidth
                        sx={{
                          bgcolor: '#4988C4',
                          color: 'white',
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: '#1C4D8D',
                          },
                        }}
                      >
                        {t('send')}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSubmitted(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
          {t('send')} ✓
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;