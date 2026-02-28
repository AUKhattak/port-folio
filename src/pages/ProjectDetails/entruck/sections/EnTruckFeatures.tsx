import React from 'react';
import { Box, Typography } from '@mui/material';
import { FeaturesList } from '../../../../shared/components/sections';

interface EnTruckFeaturesProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const EnTruckFeatures: React.FC<EnTruckFeaturesProps> = ({ forwardRef }) => {
  return (
    <Box ref={forwardRef} sx={{ mb: 12 }}>
      <Typography
        variant="h3"
        sx={{
          color: '#0F172A',
          mb: 4,
          fontWeight: 700,
        }}
      >
        Key Features
      </Typography>
      <FeaturesList
        categories={[
          {
            category: 'Vehicle Tracking',
            icon: '📍',
            features: [
              { title: 'Real-time Tracking', description: 'Monitor vehicle location and status' },
              { title: 'GPS Integration', description: 'Accurate positioning and route tracking' },
            ],
          },
          {
            category: 'Monitoring',
            icon: '⚙️',
            features: [
              { title: 'Tire Pressure', description: 'Real-time alerts for tire variations' },
              { title: 'Fuel Capacity', description: 'Monitor fuel levels and consumption' },
            ],
          },
          {
            category: 'Logistics',
            icon: '🚚',
            features: [
              { title: 'Route Planning', description: 'Comprehensive logistics management' },
              { title: 'Data Visualization', description: 'Interactive dashboards for metrics' },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default EnTruckFeatures;
