import { Box, Typography, Card, CardContent, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Testimonial } from '@/types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card
      sx={{
        minWidth: { xs: '100%', sm: 400 },
        scrollSnapAlign: 'start',
        height: '100%',
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
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 3, 
            fontStyle: 'italic',
            lineHeight: 1.7,
          }}
        >
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
  );
};

export default TestimonialCard;