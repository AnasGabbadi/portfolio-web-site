import { Box, Typography, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from './Card';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card hover borderBottom>
      <CardContent sx={{ p: 4 }}>
        {/* Icon */}
        <Box
          sx={{
            width: 64,
            height: 64,
            bgcolor: 'rgba(16, 185, 129, 0.1)',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <i 
            className={service.icon} 
            style={{ fontSize: '2rem', color: '#4988C4' }}
          />
        </Box>

        {/* Title */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {service.title}
        </Typography>

        {/* Description */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 3, lineHeight: 1.7 }}
        >
          {service.description}
        </Typography>

        {/* Link */}
        {service.link && (
          <Box
            component="a"
            href={service.link}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'primary.main',
              fontWeight: 500,
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              '&:hover': {
                color: 'secondary.main',
                gap: 1.5,
              },
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Learn More
            </Typography>
            <ArrowForwardIcon fontSize="small" />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;