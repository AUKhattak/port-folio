import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider, theme } from '../theme';
import Footer from '../shared/components/layout/Footer';
import ClotheDetails from './ProjectDetails/clothe/ClotheDetails';
import IdisDetails from './ProjectDetails/idis/IdisDetails';
import EnTruckDetails from './ProjectDetails/entruck/EnTruckDetails';
import { projectsConfig } from './ProjectDetails/projectsConfig';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectId = parseInt(id || '0', 10);
  const project = projectsConfig.find((p) => p.id === projectId);

  if (!project) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: '#0F172A', textAlign: 'center' }}>
            Project not found
          </Typography>
        </Box>
        <Footer />
      </ThemeProvider>
    );
  }

  const handleBackClick = () => navigate('/projects');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Render project-specific component based on ID */}
      {projectId === 0 && <ClotheDetails onBackClick={handleBackClick} />}
      {projectId === 1 && <IdisDetails onBackClick={handleBackClick} />}
      {projectId === 2 && <EnTruckDetails onBackClick={handleBackClick} />}

      <Footer />
    </ThemeProvider>
  );
};

export default ProjectDetailsPage;
