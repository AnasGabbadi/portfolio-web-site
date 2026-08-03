import { Box, Typography, LinearProgress } from '@mui/material';

interface ProgressBarProps {
  skill: string;
  percentage: number;
  color?: 'primary' | 'secondary';
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  skill, 
  percentage,
  color = 'primary',
  showPercentage = true,
}) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" fontWeight={500}>
          {skill}
        </Typography>
        {showPercentage && (
          <Typography variant="body2" color="text.secondary">
            {percentage}%
          </Typography>
        )}
      </Box>
      <LinearProgress
        variant="determinate"
        value={percentage}
        color={color}
        sx={{
          height: 10,
          borderRadius: 5,
          bgcolor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            borderRadius: 5,
            transition: 'transform 1s ease-in-out',
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;