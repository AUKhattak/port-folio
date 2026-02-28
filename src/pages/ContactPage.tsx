import React from 'react';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, theme } from '../theme';
import Header from '../shared/components/layout/Header';
import Footer from '../shared/components/layout/Footer';
import { ContactSection } from './Contact/components';

const ContactPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main style={{ marginTop: '64px' }}>
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default ContactPage;
