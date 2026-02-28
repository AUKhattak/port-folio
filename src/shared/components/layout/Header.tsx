import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Link,
  Button,
  IconButton,
  Drawer,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NAVIGATION_LINKS } from '../../../config/navigation';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openMenu, setOpenMenu] = React.useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    setOpenMenu(false);
  };

  const handleLogoClick = () => {
    navigate('/about');
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.3)',
          color: '#0F172A',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 1,
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Logo */}
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleLogoClick();
              }}
              sx={{
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #0F172A 0%, #06B6D4 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              Ahmad Usman.
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: 'center',
                }}
              >
                {NAVIGATION_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path);
                    }}
                    sx={{
                      textDecoration: 'none',
                      color: '#64748B',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      px: 1.5,
                      py: 1,
                      transition: 'all 0.3s ease',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#06B6D4',
                        backgroundColor: 'rgba(6, 182, 212, 0.04)',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleNavClick('/contact')}
                  sx={{
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                    ml: 2,
                  }}
                >
                  Get in Touch
                </Button>
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setOpenMenu(true)}
                sx={{
                  color: '#0F172A',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#FFFFFF',
            borderLeft: '1px solid #E2E8F0',
          },
        }}
      >
        <Box
          sx={{
            width: 280,
            p: 2,
          }}
        >
          {/* Close Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mb: 3,
            }}
          >
            <IconButton
              onClick={() => setOpenMenu(false)}
              sx={{
                color: '#0F172A',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile Navigation Links */}
          <Stack spacing={2}>
            {NAVIGATION_LINKS.map((link, index) => (
              <Link
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
                sx={{
                  textDecoration: 'none',
                  color: '#64748B',
                  fontWeight: 500,
                  fontSize: '1rem',
                  py: 1,
                  px: 1.5,
                  transition: 'all 0.3s ease',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  display: 'block',
                  '&:hover': {
                    color: '#06B6D4',
                    backgroundColor: 'rgba(6, 182, 212, 0.04)',
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleNavClick('/contact')}
              sx={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                mt: 2,
              }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
