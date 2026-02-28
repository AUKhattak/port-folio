import React, { useState } from 'react';
import { Box, Container, Button, Typography, Stack, useMediaQuery, useTheme, Fade } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Project } from '../projectsConfig';
import { ComingSoonDialog } from '../../../features/live-demo';

interface BasicTemplateProps {
  project: Project;
  onBackClick: () => void;
}

const BasicTemplate: React.FC<BasicTemplateProps> = ({ project, onBackClick }) => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  return (
    <Box sx={{ pt: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Fade in={true}>
          <Box sx={{ py: 8 }}>
            {/* Header Section */}
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
                variant="body1"
                sx={{
                  color: '#64748B',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  maxWidth: '800px',
                  mb: 4,
                }}
              >
                {project.description}
              </Typography>

              {/* Tech Stack */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    color: '#0F172A',
                    mb: 2,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Technologies
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {project.technologies.map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: '#06B6D4',
                        color: '#FFFFFF',
                        px: 2,
                        py: 1,
                        borderRadius: '0.5rem',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Action Links */}
              <Stack direction={isMobile ? 'column' : 'row'} spacing={2} sx={{ mt: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  href={project.github}
                  target="_blank"
                  sx={{
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                    px: 4,
                  }}
                >
                  View Code
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    if (project.live && project.live !== '#') {
                      window.open(project.live, '_blank');
                    } else {
                      setIsComingSoonOpen(true);
                    }
                  }}
                  sx={{
                    borderColor: '#06B6D4',
                    color: '#06B6D4',
                    px: 4,
                    '&:hover': {
                      backgroundColor: 'rgba(6, 182, 212, 0.05)',
                    },
                  }}
                >
                  Live Demo
                </Button>
              </Stack>
            </Box>

            {/* Back to Projects CTA */}
            <Box sx={{ mt: 12, textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ArrowBackIosNewIcon />}
                onClick={onBackClick}
                sx={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                  px: 4,
                  py: 1.5,
                }}
              >
                Back to Projects
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>

      <ComingSoonDialog
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
        githubUrl={project?.github || '#'}
      />
    </Box>
  );
};

export default BasicTemplate;
