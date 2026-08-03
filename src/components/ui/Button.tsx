'use client';

import Link from 'next/link';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = 'primary',
  icon,
  fullWidth = false,
  size = 'large',
  onClick,
}) => {
  const muiVariant: MuiButtonProps['variant'] = variant === 'primary' ? 'contained' : 'outlined';

  return (
    <MuiButton
      component={Link}
      href={href}
      variant={muiVariant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      endIcon={icon}
      sx={{
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: '9999px',
        px: 4,
        py: 1.5,
        ...(variant === 'primary' && {
          bgcolor: 'primary.main',
          color: 'white',
          boxShadow: 3,
          '&:hover': {
            bgcolor: 'secondary.main',
            boxShadow: 6,
          },
        }),
        ...(variant === 'outline' && {
          borderColor: 'primary.main',
          borderWidth: 2,
          color: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'white',
            borderWidth: 2,
          },
        }),
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
