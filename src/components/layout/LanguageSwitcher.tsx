'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { MenuItem, Select, SelectChangeEvent, Box } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: SelectChangeEvent) => {
    const newLocale = event.target.value as 'en' | 'fr';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LanguageIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
      <Select
        value={locale}
        onChange={handleChange}
        size="small"
        sx={{
          minWidth: 80,
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      >
        <MenuItem value="en">🇬🇧 EN</MenuItem>
        <MenuItem value="fr">🇫🇷 FR</MenuItem>
      </Select>
    </Box>
  );
};

export default LanguageSwitcher;