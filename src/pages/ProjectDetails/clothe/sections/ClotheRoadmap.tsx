import React from 'react';
import { Box, Typography } from '@mui/material';
import { FutureImprovements } from '../../../../shared/components/sections';

interface ClotheRoadmapProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const ClotheRoadmap: React.FC<ClotheRoadmapProps> = ({ forwardRef }) => {
  return (
    <Box ref={forwardRef} id="roadmap" sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#0F172A',
          mb: 4,
          fontWeight: 700,
        }}
      >
        Future Roadmap
      </Typography>
      <FutureImprovements
        items={[
          'Mobile app development with React Native for iOS and Android platforms',
          'Advanced AI/ML integration for personalized product recommendations',
          'Augmented Reality (AR) virtual try-on experience',
          'Social commerce features (shopping with friends, wishlists)',
          'Subscription and loyalty program system',
          'Multi-language support with i18n',
          'GraphQL API for more flexible data querying',
          'Real-time inventory management system',
          'Analytics dashboard for business intelligence',
          'Integration with third-party logistics and shipping providers',
        ]}
      />
    </Box>
  );
};

export default ClotheRoadmap;
