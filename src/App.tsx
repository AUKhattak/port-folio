import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, theme } from './theme';
import Header from './shared/components/layout/Header';
import { AboutSection } from './pages/Home/components';
import { SkillsSection } from './pages/Skills/components';
import { ProjectList } from './pages/Projects/components';
import { ContactSection } from './pages/Contact/components';
import Footer from './shared/components/layout/Footer';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '64px' }}>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
