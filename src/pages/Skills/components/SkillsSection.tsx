import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import { SKILL_CATEGORIES } from '../../../config/skills';

const SkillsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        position: 'relative',
        overflow: 'hidden',
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
          top: '50%',
          left: '-200px',
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
                Technologies & Expertise
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
                A well-rounded developer with expertise across the full stack, from beautiful frontends
                to robust backends.
              </Typography>
            </Box>

            {/* Skills Grid */}
            <Grid container spacing={3}>
              {SKILL_CATEGORIES.map((categoryData, index) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardContent sx={{ pb: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#0F172A',
                          mb: 3,
                          fontWeight: 700,
                        }}
                      >
                        {categoryData.category}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {categoryData.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            variant="outlined"
                            sx={{
                              mb: 1,
                              backgroundColor: '#F8FAFC',
                              borderColor: '#E2E8F0',
                              color: '#0F172A',
                              fontWeight: 500,
                              '&:hover': {
                                backgroundColor: '#06B6D4',
                                borderColor: '#06B6D4',
                                color: '#FFFFFF',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Proficiency Section */}
            <Box sx={{ mt: 12 }}>
              <Typography
                variant="h3"
                sx={{
                  color: '#0F172A',
                  mb: 4,
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                Proficiency Highlights
              </Typography>
              <Grid container spacing={4}>
                {[
                  {
                    title: 'Frontend Development',
                    level: 'Expert',
                    description: 'Advanced React, modern CSS, responsive design, performance optimization',
                  },
                  {
                    title: 'Backend Development',
                    level: 'Advanced',
                    description: 'RESTful APIs, database design, microservices, cloud deployment',
                  },
                  {
                    title: 'UI/UX Design',
                    level: 'Intermediate',
                    description: 'Design systems, user research, wireframing, prototyping',
                  },
                  {
                    title: 'DevOps & Deployment',
                    level: 'Intermediate',
                    description: 'CI/CD pipelines, containerization, cloud platforms',
                  },
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <Box
                      sx={{
                        p: 3,
                        backgroundColor: 'rgba(6, 182, 212, 0.04)',
                        borderRadius: '1rem',
                        border: '1px solid rgba(6, 182, 212, 0.1)',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="h5" sx={{ color: '#0F172A', fontWeight: 700 }}>
                          {item.title}
                        </Typography>
                        <Chip
                          label={item.level}
                          size="small"
                          sx={{
                            backgroundColor: '#06B6D4',
                            color: '#FFFFFF',
                            fontWeight: 700,
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default SkillsSection;
