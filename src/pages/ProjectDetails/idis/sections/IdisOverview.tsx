import React from 'react';
import { Box, Typography } from '@mui/material';
import { Project } from '../../projectsConfig';
import { ProjectLinks } from '../../../Projects/components';

interface IdisOverviewProps {
  project: Project;
  forwardRef: React.RefObject<HTMLDivElement>;
}

const IdisOverview: React.FC<IdisOverviewProps> = ({ project, forwardRef }) => {
  return (
    <Box ref={forwardRef} sx={{ mb: 8 }}>
      <Typography
        variant="h2"
        sx={{
          color: '#0F172A',
          mb: 3,
          fontWeight: 700,
        }}
      >
        {project.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: '#64748B',
          fontSize: '1.1rem',
          lineHeight: 1.8,
          mb: 4,
          maxWidth: '800px',
        }}
      >
        {project.description}
      </Typography>

      <ProjectLinks github={project.github} live={project.live} />
    </Box>
  );
};

export default IdisOverview;
