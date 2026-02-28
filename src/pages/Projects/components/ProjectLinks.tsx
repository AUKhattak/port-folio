import React, { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ComingSoonDialog } from '../../../features/live-demo';

interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ githubUrl = '#', liveUrl = '#' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLiveDemoClick = () => {
    if (liveUrl && liveUrl !== '#') {
      window.open(liveUrl, '_blank');
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 6,
        pb: 4,
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={2}
        sx={{
          width: isMobile ? '100%' : 'auto',
        }}
      >
        <Button
          size="large"
          startIcon={<OpenInNewIcon />}
          onClick={handleLiveDemoClick}
          sx={{
            background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
            color: '#FFFFFF',
            px: 3,
            py: 1.5,
            boxShadow: '0 4px 16px rgba(6, 182, 212, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(6, 182, 212, 0.4)',
            },
            width: isMobile ? '100%' : 'auto',
          }}
        >
          View Live Demo
        </Button>

        <Button
          variant="outlined"
          size="large"
          startIcon={<GitHubIcon />}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderColor: '#0F172A',
            color: '#0F172A',
            px: 3,
            py: 1.5,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              transform: 'translateY(-2px)',
            },
            width: isMobile ? '100%' : 'auto',
          }}
        >
          View on GitHub
        </Button>
      </Stack>

      <ComingSoonDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        githubUrl={githubUrl}
      />
    </Box>
  );
};

export default ProjectLinks;
