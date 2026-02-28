import React from 'react';
import { Box, Typography } from '@mui/material';
import { TechnicalHighlights } from '../../../../shared/components/sections';

interface ClotheArchitectureProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const ClotheArchitecture: React.FC<ClotheArchitectureProps> = ({ forwardRef }) => {
  return (
    <Box ref={forwardRef} id="highlights" sx={{ mb: 12 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#0F172A',
          mb: 4,
          fontWeight: 700,
        }}
      >
        Architecture & Technical Highlights
      </Typography>
      <TechnicalHighlights
        highlights={[
          {
            title: 'Advanced State Management',
            description:
              'Leveraged Zustand for lightweight, predictable global state management with middleware support for persistence.',
            points: [
              'Zustand patterns with slices for modular state',
              'localStorage persistence for shopping cart',
              'DevTools integration for debugging',
            ],
          },
          {
            title: 'API Architecture',
            description:
              'Built scalable FastAPI backend with async SQLAlchemy, Redis caching, and optimized query patterns.',
            points: [
              'Async/await patterns for concurrency',
              'Redis caching layer for frequently accessed data',
              'Efficient database queries with relationship loading',
            ],
          },
          {
            title: 'Authentication & Authorization',
            description:
              'Implemented robust dual JWT authentication system with role-based access control across 5 permission tiers.',
            points: [
              '5-tier RBAC system (User, Moderator, Admin, SuperAdmin, System)',
              'JWT tokens with refresh and access token rotation',
              'Middleware-based permission enforcement',
            ],
          },
          {
            title: 'Fit Analysis Engine',
            description:
              'Developed ML-ready infrastructure for size recommendations with algorithms based on body measurements.',
            points: [
              'Measurement-based sizing algorithm',
              'ML model integration ready for TensorFlow/PyTorch',
              'Historical data collection for model training',
            ],
          },
          {
            title: 'Frontend-First Design',
            description:
              'Implemented end-to-end TypeScript with Zod validation, ensuring type safety across entire stack.',
            points: [
              'Zod schema validation for API responses',
              'Full TypeScript type inference from backend',
              'Form validation with React Hook Form',
            ],
          },
          {
            title: 'Data Persistence & Caching',
            description:
              'Multi-layer caching strategy combining Redis, browser caching, and localStorage for optimal performance.',
            points: [
              'Redis for server-side caching',
              'HTTP cache headers for CDN optimization',
              'React Query for client-side state and caching',
            ],
          },
        ]}
      />
    </Box>
  );
};

export default ClotheArchitecture;
