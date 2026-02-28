import React from 'react';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, theme } from '../theme';
import Header from '../shared/components/layout/Header';
import Footer from '../shared/components/layout/Footer';
import { SkillsSection } from './Skills/components';

const SkillsPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main style={{ marginTop: '64px', minHeight: '100vh' }}>
        <SkillsSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default SkillsPage;
