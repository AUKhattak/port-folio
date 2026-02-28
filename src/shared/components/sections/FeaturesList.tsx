import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

interface Feature {
  title: string;
  description: string;
}

interface FeatureCategory {
  category: string;
  icon: string;
  features: Feature[];
}

interface FeaturesListProps {
  categories: FeatureCategory[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ categories }) => {
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
        Key Features
      </Typography>

      <Grid container spacing={3}>
        {categories.map((category, categoryIndex) => (
          <Grid item xs={12} sm={6} md={4} key={categoryIndex}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: 'rgba(6, 182, 212, 0.05)',
                border: '1px solid rgba(6, 182, 212, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(6, 182, 212, 0.3)',
                  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.1)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: '#0F172A',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <span>{category.icon}</span>
                  {category.category}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {category.features.map((feature, featureIndex) => (
                    <Box key={featureIndex}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: '#06B6D4',
                          fontSize: '0.9rem',
                        }}
                      >
                        • {feature.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748B',
                          lineHeight: 1.5,
                          display: 'block',
                          ml: 1.5,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesList;
