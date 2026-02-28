import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { FOOTER_LINKS, FOOTER_LEGAL_LINKS } from '../../../config/navigation';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: '#0F172A',
        color: '#E2E8F0',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={4}
          sx={{
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
            mb: 4,
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* Brand/Logo */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 1,
              }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#94A3B8',
              }}
            >
              Crafting digital experiences with passion
            </Typography>
          </Box>

          {/* Quick Links */}
          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={3}
          >
            {FOOTER_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={(e) => {
                  if (link.path?.startsWith('http')) {
                    return; // Allow external links to open normally
                  }
                  e.preventDefault();
                  const element = document.querySelector(link.path);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                target={link.path?.startsWith('http') ? '_blank' : undefined}
                rel={link.path?.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  color: '#94A3B8',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#06B6D4',
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          {/* Scroll to Top Button */}
          <Box
            onClick={scrollToTop}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              color: '#94A3B8',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#06B6D4',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Back to Top
            </Typography>
            <ArrowUpwardIcon sx={{ fontSize: '1rem' }} />
          </Box>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(226, 232, 240, 0.1)', my: 3 }} />

        {/* Bottom Section */}
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'flex-end',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#64748B',
            }}
          >
            © {currentYear} Portfolio. Designed & built with React & Material UI.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
          >
            {FOOTER_LEGAL_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{
                  color: '#64748B',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#06B6D4',
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
