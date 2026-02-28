import React from 'react';
import { Box, Typography } from '@mui/material';
import { FutureImprovements } from '../../../../shared/components/sections';

interface IdisRoadmapProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const IdisRoadmap: React.FC<IdisRoadmapProps> = ({ forwardRef }) => {
  return (
    <Box ref={forwardRef} sx={{ mb: 8 }}>
      <Typography
        variant="h3"
        sx={{
          color: '#0F172A',
          mb: 4,
          fontWeight: 700,
        }}
      >
        Future Improvements
      </Typography>
      <FutureImprovements
        items={[
          'Advanced analytics dashboard',
          'Mobile app for on-the-go access',
          'Integration with more data sources',
          'AI-powered parts recommendations',
          'Enhanced reporting capabilities',
          'User authentication system',
        ]}
      />
    </Box>
  );
};

export default IdisRoadmap;
