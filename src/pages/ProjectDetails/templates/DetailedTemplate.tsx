import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Fade,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Project } from '../projectsConfig';

interface DetailedTemplateProps {
  project: Project;
  onBackClick: () => void;
  sections: Array<{
    id: string;
    label: string;
    ref: React.RefObject<HTMLDivElement>;
  }>;
  content: React.ReactNode;
}

const DetailedTemplate: React.FC<DetailedTemplateProps> = ({
  project,
  onBackClick,
  sections,
  content,
}) => {
  // Smooth scroll to section with offset
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const headerOffset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Fade in={true}>
          <Box sx={{ py: 8 }}>
            {content}
            {/* Back to Projects CTA */}
            <Box sx={{ mt: 12, textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ArrowBackIosNewIcon />}
                onClick={onBackClick}
                sx={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                  px: 4,
                  py: 1.5,
                }}
              >
                Back to Projects
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default DetailedTemplate;
