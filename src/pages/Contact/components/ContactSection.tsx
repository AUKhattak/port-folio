import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Link,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const socialLinks = [
    {
      icon: <EmailIcon sx={{ fontSize: '1.5rem' }} />,
      label: 'Email',
      href: 'mailto:myemail@example.com',
      text: 'myemail[at]example[dot]com',
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: { xs: '80vh', md: '70vh' },
        background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '-100px',
          left: '-100px',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(15, 23, 42, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: '-50px',
          right: '-50px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in={true} timeout={800}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            {/* Section Header */}
            <Box sx={{ mb: 8 }}>
                <Typography
                variant="h2"
                sx={{
                  color: '#0F172A',
                  mb: 3,
                }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748B',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: '500px',
                  mx: 'auto',
                }}
              >
                I'm always interested in hearing about new projects and opportunities. Feel free to reach
                out through any of the following channels.
              </Typography>
            </Box>

            {/* Social Links Grid */}
            <Stack
              direction={isMobile ? 'column' : 'row'}
              spacing={2}
              sx={{
                mb: 8,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    width: isMobile ? '100%' : 'auto',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      borderRadius: '0.75rem',
                      border: '2px solid #E2E8F0',
                      backgroundColor: '#FFFFFF',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: '#06B6D4',
                        backgroundColor: 'rgba(6, 182, 212, 0.05)',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(6, 182, 212, 0.15)',
                      },
                    }}
                  >
                    <Box sx={{ color: '#06B6D4', display: 'flex', alignItems: 'center' }}>
                      {social.icon}
                    </Box>
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#0F172A',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                        }}
                      >
                        {social.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#64748B',
                          fontSize: '0.95rem',
                        }}
                      >
                        {social.text}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ContactSection;
