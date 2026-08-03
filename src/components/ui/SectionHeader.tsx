import { Box, Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  highlight: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  highlight, 
  description,
  align = 'center' 
}) => {
  return (
    <Box sx={{ textAlign: align, mb: 8 }}>
      <Typography 
        variant="h2" 
        fontWeight={700} 
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          color: 'text.primary',
        }}
      >
        {title}{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          {highlight}
        </Box>
      </Typography>
      
      <Box
        sx={{
          width: 96,
          height: 4,
          bgcolor: 'primary.main',
          mx: align === 'center' ? 'auto' : 0,
          mb: description ? 3 : 0,
        }}
      />
      
      {description && (
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            maxWidth: 700, 
            mx: align === 'center' ? 'auto' : 0,
            mt: 3,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;