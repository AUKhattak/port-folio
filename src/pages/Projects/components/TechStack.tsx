import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Chip,
  Stack,
} from '@mui/material';
import { EngineeringInsightsToggle, EngineeringInsightsPanel } from '../../Skills/components/EngineeringInsights';

interface TechStackProps {
  frontend: string[];
  backend: string[];
}

const TechStack: React.FC<TechStackProps> = ({ frontend, backend }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box>

      <Grid container spacing={4}>
        {/* Frontend */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#F8FAFC',
              borderRadius: '0.75rem',
              border: '1px solid #E2E8F0',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: '#06B6D4',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              🎨 Frontend
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {frontend.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  variant="filled"
                  sx={{
                    backgroundColor: '#06B6D4',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    '&:hover': {
                      backgroundColor: '#0891B2',
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Backend */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#F8FAFC',
              borderRadius: '0.75rem',
              border: '1px solid #E2E8F0',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: '#06B6D4',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              ⚙️ Backend
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {backend.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  variant="filled"
                  sx={{
                    backgroundColor: '#1E293B',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    '&:hover': {
                      backgroundColor: '#0F172A',
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <EngineeringInsightsToggle
        isExpanded={isExpanded}
        onClick={handleToggle}
      />

      <EngineeringInsightsPanel isExpanded={isExpanded} />
    </Box>
  );
};

export default TechStack;
