import React from 'react';
import { Box, Typography } from '@mui/material';
import { TechStack } from '../../../Projects/components';

interface IdisTechStackProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const IdisTechStack: React.FC<IdisTechStackProps> = ({ forwardRef }) => {
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
        Technology Stack
      </Typography>
      <TechStack
        frontend={['React', 'TypeScript', 'Material UI']}
        backend={['REST APIs', 'JavaScript']}
      />
    </Box>
  );
};

export default IdisTechStack;
