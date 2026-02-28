import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { LiveDemoButton } from '../../../features/live-demo';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
}

const ProjectList: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 0,
      title: 'CLOTHE',
      description:
        'A full-stack online shopping platform, featuring a built-in size recommendation tool to help customers find their perfect fit, admin dashboards, and Stripe checkout.',
      technologies: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/AUKhattak',
    },
    {
      id: 1,
      title: 'IDIS',
      description:
        'International Dismantling Analysis System - A comprehensive platform for car dismantling information, parts catalog, and recycling data management.',
      technologies: ['React', 'JavaScript', 'REST APIs', 'Material UI'],
      image: '/images/idis.png',
      github: 'https://github.com/AUKhattak',
      live: '#',
    },
    {
      id: 2,
      title: 'EnTruck',
      description:
        'Real-time logistics tracking platform with vehicle monitoring capabilities. Track tire pressure, fuel capacity, and other vehicle metrics in real-time.',
      technologies: ['React', 'TypeScript', 'Material UI', 'Spring Boot', 'REST APIs'],
      image: '/images/entruck.png',
      github: 'https://github.com/AUKhattak',
      live: '#',
    },
  ];

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      {/* Decorative element */}
      <Box
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: '-200px',
          right: '-200px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in={true} timeout={800}>
          <Box>
            {/* Section Header */}
            <Box sx={{ mb: 8, textAlign: isMobile ? 'center' : 'left' }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#0F172A',
                  mb: 2,
                }}
              >
                Grab your coffee and Let me walk you through the Projects
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748B',
                  maxWidth: '600px',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                }}
              >
                
              </Typography>
            </Box>

            {/* Projects Grid */}
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <Card
                    onClick={() => navigate(`/projects/${project.id}`)}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: project.id === 0 ? '2px solid #06B6D4' : '1px solid #E2E8F0',
                      background:
                        project.id === 0
                          ? 'linear-gradient(135deg, #F0F9FF 0%, rgba(6, 182, 212, 0.05) 100%)'
                          : '#FFFFFF',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow:
                          project.id === 0
                            ? '0 20px 40px rgba(6, 182, 212, 0.2)'
                            : '0 12px 24px rgba(0, 0, 0, 0.1)',
                        borderColor: '#06B6D4',
                      },
                    }}
                  >
                    {/* Project Image Placeholder */}
                    <Box
                      sx={{
                        width: '100%',
                        height: '200px',
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(15, 23, 42, 0.05) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: '1px solid #E2E8F0',
                        overflow: 'hidden',
                      }}
                    >
                      {project.id === 0 || project.image ? (
                        <img
                          src={project.id === 0 ? '/images/clothe.png' : project.image}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      ) : (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#CBD5E1',
                            textAlign: 'center',
                          }}
                        >
                          Project Preview
                        </Typography>
                      )}
                    </Box>

                    {/* Project Content */}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#0F172A',
                          mb: 1,
                          fontWeight: 700,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#64748B',
                          mb: 3,
                          lineHeight: 1.6,
                          minHeight: '60px',
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <Box sx={{ mb: 2 }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Chip
                              key={index}
                              label={tech}
                              size="small"
                              variant={project.id === 0 ? 'filled' : 'outlined'}
                              sx={{
                                backgroundColor:
                                  project.id === 0 ? '#06B6D4' : project.id === 0 ? '#F8FAFC' : '#F8FAFC',
                                color: project.id === 0 ? '#FFFFFF' : '#0F172A',
                                borderColor: project.id === 0 ? '#06B6D4' : '#E2E8F0',
                                fontSize: '0.8rem',
                                fontWeight: project.id === 0 ? 600 : 400,
                              }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip
                              label={`+${project.technologies.length - 3}`}
                              size="small"
                              variant="outlined"
                              sx={{
                                backgroundColor: '#F8FAFC',
                                borderColor: '#E2E8F0',
                                color: '#06B6D4',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                              }}
                            />
                          )}
                        </Stack>
                      </Box>
                    </CardContent>

                    {/* Project Actions */}
                    <CardActions sx={{ flexDirection: 'column', gap: 1, p: 2 }}>
                      <Button
                        fullWidth
                        size="small"
                        endIcon={<ReadMoreIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/projects/${project.id}`);
                        }}
                        sx={{
                          background:
                            project.id === 0
                              ? 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)'
                              : 'transparent',
                          color: project.id === 0 ? '#FFFFFF' : '#06B6D4',
                          textTransform: 'none',
                          fontWeight: 600,
                          border: project.id === 0 ? 'none' : '1px solid #06B6D4',
                          '&:hover': {
                            backgroundColor:
                              project.id === 0 ? 'rgba(6, 182, 212, 0.9)' : 'rgba(6, 182, 212, 0.05)',
                          },
                        }}
                      >
                        View Details
                      </Button>

                      <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            flex: 1,
                            color: '#0F172A',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            '&:hover': {
                              backgroundColor: 'rgba(6, 182, 212, 0.04)',
                            },
                          }}
                        >
                          Code
                        </Button>
                        <LiveDemoButton
                          liveUrl={project.live}
                          githubUrl={project.github}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* More Projects Coming Section */}
            <Box
              sx={{
                mt: 12,
                p: 4,
                backgroundColor: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(15, 23, 42, 0.04) 100%)',
                borderRadius: '1rem',
                border: '2px dashed rgba(6, 182, 212, 0.3)',
                textAlign: 'center',
                mb: 6,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#0F172A',
                  mb: 2,
                  fontWeight: 700,
                }}
              >
                🚀 More Projects Coming Soon
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748B',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                I'm actively working on exciting new projects. These projects are currently in the building phase and will be showcased here soon. Stay tuned for updates!
              </Typography>
            </Box>

            {/* CTA Section */}
            <Box
              sx={{
                mt: 12,
                p: 4,
                backgroundColor: 'rgba(6, 182, 212, 0.05)',
                borderRadius: '1rem',
                border: '1px solid rgba(6, 182, 212, 0.1)',
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ color: '#0F172A', mb: 2 }}>
                See More Projects
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748B',
                  mb: 3,
                }}
              >
                Check out my GitHub profile for more projects and open-source contributions.
              </Typography>
              <Button
                variant="contained"
                endIcon={<GitHubIcon />}
                href="https://github.com/AUKhattak"
                target="_blank"
                sx={{
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  px: 3,
                }}
              >
                Visit GitHub
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ProjectList;
