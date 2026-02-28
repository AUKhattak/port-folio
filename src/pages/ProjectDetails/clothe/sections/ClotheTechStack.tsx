import React from 'react';
import { Box, Typography } from '@mui/material';
import { TechStack } from '../../../Projects/components';

interface ClotheTechStackProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const ClotheTechStack: React.FC<ClotheTechStackProps> = ({ forwardRef }) => {
  return (
    <Box ref={forwardRef} id="techstack" sx={{ mb: 12 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#0F172A',
          mb: 4,
          fontWeight: 700,
        }}
      >
        Technology Stack
      </Typography>
      <TechStack
        frontend={[
          'Next.js 13',
          'React 18',
          'TypeScript',
          'Tailwind CSS',
          'Radix UI',
          'Zustand',
          'React Query',
          'React Hook Form',
          'Zod',
          'Axios',
        ]}
        backend={[
          'FastAPI',
          'Python',
          'SQLAlchemy (Async)',
          'PostgreSQL',
          'Redis',
          'JWT',
          'Pydantic',
          'Alembic',
        ]}
      />
    </Box>
  );
};

export default ClotheTechStack;
