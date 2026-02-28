import React from 'react';
import { Box, Typography } from '@mui/material';
import { FeaturesList } from '../../../../shared/components/sections';

interface IdisFeaturesProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const IdisFeatures: React.FC<IdisFeaturesProps> = ({ forwardRef }) => {
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
            category: 'Vehicle Information',
            icon: '🚗',
            features: [
              { title: 'Car Database', description: 'Comprehensive database of vehicle dismantling data' },
              { title: 'Parts Catalog', description: 'Extensive catalog of available parts' },
            ],
          },
          {
            category: 'Data Management',
            icon: '📊',
            features: [
              { title: 'Real-time Tracking', description: 'Track and manage recycling inventory' },
              { title: 'Analytics', description: 'Data insights and reporting' },
            ],
          },
          {
            category: 'User Experience',
            icon: '✨',
            features: [
              { title: 'Search & Filter', description: 'Advanced search capabilities for parts' },
              { title: 'Responsive Design', description: 'Optimized for all devices' },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default IdisFeatures;
