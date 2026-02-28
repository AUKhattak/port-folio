import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface Highlight {
  title: string;
  description: string;
  points: string[];
}

interface TechnicalHighlightsProps {
  highlights: Highlight[];
}

const TechnicalHighlights: React.FC<TechnicalHighlightsProps> = ({ highlights }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#0F172A',
          mb: 3,
        }}
      >
        Technical Highlights
      </Typography>

      <Grid container spacing={3}>
        {highlights.map((highlight, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#06B6D4',
                  boxShadow: '0 8px 16px rgba(6, 182, 212, 0.1)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#06B6D4',
                    mb: 1,
                  }}
                >
                  {highlight.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  {highlight.description}
                </Typography>

                <List sx={{ p: 0 }}>
                  {highlight.points.map((point, pointIndex) => (
                    <ListItem
                      key={pointIndex}
                      sx={{
                        py: 0.75,
                        px: 0,
                        minHeight: 'auto',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 24,
                          color: '#06B6D4',
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{
                            fontSize: '0.5rem',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={point}
                        primaryTypographyProps={{
                          variant: 'caption' as const,
                        }}
                        sx={{
                          '& .MuiTypography-root': {
                            color: '#64748B',
                            lineHeight: 1.5,
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnicalHighlights;
