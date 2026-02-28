import React from 'react';
import { Box, Typography } from '@mui/material';
import { FutureImprovements } from '../../../../shared/components/sections';

interface EnTruckRoadmapProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const EnTruckRoadmap: React.FC<EnTruckRoadmapProps> = ({ forwardRef }) => {
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
          'Mobile app for drivers',
          'Advanced analytics and reporting',
          'Predictive maintenance alerts',
          'Multi-language support',
          'IoT sensor integration',
          'Enhanced notification system',
        ]}
      />
    </Box>
  );
};

export default EnTruckRoadmap;
