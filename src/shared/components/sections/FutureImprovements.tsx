import React from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface FutureImprovementsProps {
  items: string[];
}

const FutureImprovements: React.FC<FutureImprovementsProps> = ({ items }) => {
  return (
    <Box>
      <Accordion
        sx={{
          boxShadow: 'none',
          border: '1px solid #E2E8F0',
          borderRadius: '0.75rem',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: 'rgba(6, 182, 212, 0.04)',
            borderRadius: '0.75rem',
            '&:hover': {
              backgroundColor: 'rgba(6, 182, 212, 0.08)',
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#0F172A',
            }}
          >
            🚀 Future Improvements & Roadmap
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 3 }}>
          <List sx={{ width: '100%' }}>
            {items.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  pl: 0,
                  mb: 1,
                  alignItems: 'flex-start',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 32,
                    color: '#06B6D4',
                    mt: 0.5,
                  }}
                >
                  <CheckCircleOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  sx={{
                    '& .MuiTypography-root': {
                      color: '#64748B',
                      lineHeight: 1.6,
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FutureImprovements;
