import React from 'react';
import { Box, Grid, Typography, Stack, Collapse } from '@mui/material';
import InsightCard from './InsightCard';

interface EngineeringInsightsPanelProps {
  isExpanded: boolean;
}

const engineeringDecisions = [
  {
    title: '⚡ Performance-First Architecture',
    description:
      'Next.js App Router combined with FastAPI async endpoints ensures fast rendering and scalable backend performance.',
  },
  {
    title: '🔐 Secure Authentication Design',
    description:
      'JWT access & refresh tokens with Redis blacklist provide secure logout and token invalidation.',
  },
  {
    title: '📦 Lightweight State Management',
    description:
      'Zustand was chosen over Redux to reduce boilerplate and enable simple persisted cart state.',
  },
  {
    title: '📊 Role-Based Access Control (RBAC)',
    description:
      'Clear separation between Admin, Moderator, and Customer roles using permission-based logic.',
  },
  {
    title: '🧩 Modular API Architecture',
    description:
      'Centralized API services with Axios interceptors ensure consistent authentication handling and error management.',
  },
  {
    title: '🧠 Fit & Size Intelligence',
    description:
      'Measurement-driven size recommendation logic enhances personalization and user experience.',
  },
];

const EngineeringInsightsPanel: React.FC<EngineeringInsightsPanelProps> = ({
  isExpanded,
}) => {
  return (
    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
      <Box
        sx={{
          mt: 4,
          p: 3.5,
          backgroundColor: 'rgba(6, 182, 212, 0.04)',
          borderRadius: '0.875rem',
          border: '1px solid #E0F2FE',
          animation: isExpanded ? 'fadeInUp 0.5s ease-out' : undefined,
          '@keyframes fadeInUp': {
            from: {
              opacity: 0,
              transform: 'translateY(16px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        <Stack spacing={3}>
          <Typography
            sx={{
              fontWeight: 700,
              color: '#0F172A',
              fontSize: '1.25rem',
              lineHeight: 1.3,
            }}
          >
            🧠 Engineering Decisions
          </Typography>

          <Grid container spacing={2.5}>
            {engineeringDecisions.map((decision, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <InsightCard
                  title={decision.title}
                  description={decision.description}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Collapse>
  );
};

export default EngineeringInsightsPanel;
