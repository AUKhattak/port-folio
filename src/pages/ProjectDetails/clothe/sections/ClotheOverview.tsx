import React from 'react';
import { Box, Typography } from '@mui/material';
import { Project } from '../../projectsConfig';
import { ProjectLinks } from '../../../Projects/components';

interface ClotheOverviewProps {
  project: Project;
  forwardRef: React.RefObject<HTMLDivElement>;
}

const ClotheOverview: React.FC<ClotheOverviewProps> = ({ project, forwardRef }) => {
  return (
    <Box ref={forwardRef} id="overview" sx={{ mb: 12 }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            color: '#0F172A',
            mb: 2,
            fontWeight: 700,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#06B6D4',
            fontWeight: 500,
            mb: 3,
          }}
        >
          Full-Stack E-Commerce Platform
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#64748B',
            lineHeight: 1.8,
            fontSize: '1.05rem',
            maxWidth: '800px',
          }}
        >
          A sophisticated e-commerce platform featuring customer storefront, shopping cart,
          Stripe checkout, dual authentication, admin dashboards with role-based access control,
          and an innovative AI-powered virtual try-on system with size recommendations based on
          body measurements.
        </Typography>
      </Box>

      {/* Project Links */}
      <ProjectLinks githubUrl={project.github} liveUrl={project.live} />
    </Box>
  );
};

export default ClotheOverview;
