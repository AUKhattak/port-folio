import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

interface InsightCardProps {
  title: string;
  description: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        p: 2.5,
        backgroundColor: '#FFFFFF',
        borderRadius: '0.75rem',
        border: '1px solid #E2E8F0',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#F8FAFC',
          borderColor: '#CBD5E1',
          boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Stack spacing={1}>
        <Typography
          sx={{
            fontWeight: 700,
            color: '#0F172A',
            fontSize: '0.95rem',
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: '#64748B',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export default InsightCard;
