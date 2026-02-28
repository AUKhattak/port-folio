import React from 'react';
import { Button, Stack, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

interface EngineeringInsightsToggleProps {
  isExpanded: boolean;
  onClick: () => void;
}

const EngineeringInsightsToggle: React.FC<EngineeringInsightsToggleProps> = ({
  isExpanded,
  onClick,
}) => {
  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
      <Button
        onClick={onClick}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Hide engineering decisions' : 'Show engineering decisions'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 3,
          py: 1.5,
          backgroundColor: '#FFFFFF',
          border: '2px solid #FF6B6B',
          borderRadius: '0.75rem',
          color: '#FF6B6B',
          fontWeight: 700,
          fontSize: '0.95rem',
          transition: 'all 0.3s ease',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#FFF5F5',
            borderColor: '#E53935',
            color: '#E53935',
            boxShadow: '0 8px 16px rgba(255, 107, 107, 0.15)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&:focus-visible': {
            outline: '2px solid #FF6B6B',
            outlineOffset: '2px',
          },
        }}
      >
        <EmojiObjectsIcon
          sx={{
            fontSize: '1.25rem',
            transition: 'transform 0.3s ease',
            transform: isExpanded ? 'rotate(12deg)' : 'rotate(0deg)',
          }}
        />
        <Stack spacing={0} sx={{ textAlign: 'left' }}>
          <Typography sx={{ fontSize: '0.95rem', fontWeight: 700 }}>
            Curious why I chose this stack?
          </Typography>
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 500,
              opacity: 0.8,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            Behind the Scenes
          </Typography>
        </Stack>
        <ExpandMoreIcon
          sx={{
            fontSize: '1.25rem',
            ml: 'auto',
            transition: 'transform 0.3s ease',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </Button>
    </Box>
  );
};

export default EngineeringInsightsToggle;
