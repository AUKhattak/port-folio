import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0F172A', // Deep slate
      light: '#1E293B',
      dark: '#020617',
      contrastText: '#fff',
    },
    secondary: {
      main: '#06B6D4', // Cyan
      light: '#22D3EE',
      dark: '#0891B2',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FAFC',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
    divider: '#E2E8F0',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.375rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.95rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          padding: '0.75rem 1.5rem',
          transition: 'all 0.3s ease',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
          },
        },
        contained: {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
        outlined: {
          borderColor: '#CBD5E1',
          '&:hover': {
            borderColor: '#06B6D4',
            backgroundColor: 'rgba(6, 182, 212, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          border: '1px solid #E2E8F0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
            borderColor: 'rgba(6, 182, 212, 0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          fontWeight: 500,
          fontSize: '0.85rem',
          height: 'auto',
          padding: '0.5rem 1rem',
          backgroundColor: '#F1F5F9',
          border: '1px solid #E2E8F0',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: { xs: '1rem', sm: '2rem', md: '2rem' },
          paddingRight: { xs: '1rem', sm: '2rem', md: '2rem' },
        },
      },
    },
  },
  spacing: 8,
});

export { ThemeProvider };
