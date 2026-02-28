import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import { DeveloperRiddleGame } from '../../../features/riddle-game';

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showGame, setShowGame] = useState(false);

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Fade in={true} timeout={800}>
          <Box>
            {/* Section Header */}
            <Box sx={{ mb: 8, textAlign: isMobile ? 'center' : 'left' }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#0F172A',
                  mb: 1,
                  fontWeight: 700,
                }}
              >
                Hello, I am Ahmad Usman
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#06B6D4',
                  fontWeight: 600,
                  mb: 4,
                }}
              >
               & A Full-Stack Developer
              </Typography>
            </Box>

            {/* Main Content Grid */}
            <Grid container spacing={6} sx={{ mb: 8 }}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 3,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748B',
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                    }}
                  >
                    I enjoy building web-based applications that look good, run fast, and quietly do their job without drama. For more than five years, I've helped teams turn ideas into real, working products — focusing on clean code, thoughtful design, and the kind of details users don't notice (but definitely feel).
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748B',
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                    }}
                  >
                    Good software shouldn't demand attention. It should just work — and maybe even make someone's day a little easier.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: '#F8FAFC',
                    borderRadius: '1rem',
                    border: '1px solid #E2E8F0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 3, color: '#0F172A' }}>
                    Quick Facts
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box>
                      <Typography sx={{ color: '#06B6D4', fontWeight: 700 }}>
                        5+ Years
                      </Typography>
                      <Typography sx={{ color: '#64748B' }}>
                        Professional Development Experience
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#06B6D4', fontWeight: 700 }}>
                        20+ Cups
                      </Typography>
                      <Typography sx={{ color: '#64748B' }}>
                        Coffee In a Week
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#06B6D4', fontWeight: 700 }}>
                        ∞ Bugs 
                      </Typography>
                      <Typography sx={{ color: '#64748B' }}>
                        Squashed
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Riddle Game Section */}
            {!showGame ? (
              <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Button
                  onClick={() => setShowGame(true)}
                  sx={{
                    px: 4,
                    py: 2,
                    background: 'linear-gradient(135deg, #FF6B6B 0%, #FF5252 100%)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '0.75rem',
                    textTransform: 'none',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 8px 16px rgba(255, 107, 107, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.02)',
                      boxShadow: '0 16px 32px rgba(255, 107, 107, 0.4)',
                    },
                  }}
                >
                  🎮 Bored? Click me to play riddle game
                </Button>
              </Box>
            ) : (
              <Fade in={true} timeout={600}>
                <Box>
                  <DeveloperRiddleGame />
                  <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button
                      onClick={() => setShowGame(false)}
                      sx={{
                        px: 3,
                        py: 1,
                        color: '#64748B',
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'rgba(6, 182, 212, 0.05)',
                        },
                      }}
                    >
                      ← Back
                    </Button>
                  </Box>
                </Box>
              </Fade>
            )}
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default AboutSection;
