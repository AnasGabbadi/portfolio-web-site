import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

interface CardProps extends MuiCardProps {
  children: React.ReactNode;
  hover?: boolean;
  borderBottom?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  hover = false, 
  borderBottom = false,
  sx,
  ...props 
}) => {
  return (
    <MuiCard
      elevation={2}
      {...props}
      sx={{
        borderRadius: 2,
        height: '100%',
        ...(borderBottom && {
          borderBottom: '4px solid',
          borderColor: 'primary.main',
        }),
        ...(hover && {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 6,
          },
        }),
        ...sx,
      }}
    >
      {children}
    </MuiCard>
  );
};

export default Card;