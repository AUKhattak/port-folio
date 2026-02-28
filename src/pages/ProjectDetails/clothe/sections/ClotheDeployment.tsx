import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';

interface ClotheDeploymentProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const ClotheDeployment: React.FC<ClotheDeploymentProps> = ({ forwardRef }) => {
  return (
    <Box ref={forwardRef} id="deployment" sx={{ mb: 12 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#0F172A',
          mb: 4,
          fontWeight: 700,
        }}
      >
        Deployment & CI/CD Pipeline
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h6"
          sx={{
            color: '#06B6D4',
            fontWeight: 700,
            mb: 3,
          }}
        >
          GitHub Actions Automation
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#64748B',
            lineHeight: 1.8,
            mb: 4,
            fontSize: '1rem',
          }}
        >
          Implemented a comprehensive CI/CD pipeline using GitHub Actions to automate testing,
          building, and deployment across development, staging, and production environments. This
          ensures code quality, reduces manual errors, and enables rapid deployment cycles.
        </Typography>
      </Box>

      {/* CI/CD Stages */}
      <Box sx={{ mb: 8 }}>
        <Stack spacing={3}>
          {/* Development Stage */}
          <Paper
            sx={{
              p: 3,
              border: '1px solid #E2E8F0',
              borderLeft: '4px solid #06B6D4',
              background: 'linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 100%)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <BuildIcon sx={{ color: '#06B6D4', mt: 0.5 }} />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#0F172A',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Development Pipeline
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    mb: 2,
                  }}
                >
                  Triggered on every push to develop branch
                </Typography>
              </Box>
            </Box>
            <List sx={{ pl: 4 }}>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#06B6D4', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Unit & Integration Tests"
                  secondary="Jest and pytest with 85%+ coverage"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#06B6D4', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Linting & Code Quality"
                  secondary="ESLint, Prettier, MyPy with strict mode"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#06B6D4', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Build Verification"
                  secondary="Verify frontend builds successfully"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#06B6D4', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Deploy to Dev Environment"
                  secondary="Deployed to dev.clothe.app"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
            </List>
          </Paper>

          {/* Testing Stage */}
          <Paper
            sx={{
              p: 3,
              border: '1px solid #E2E8F0',
              borderLeft: '4px solid #8B5CF6',
              background: 'linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <CodeIcon sx={{ color: '#8B5CF6', mt: 0.5 }} />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#0F172A',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Staging Pipeline
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    mb: 2,
                  }}
                >
                  Manual approval required for release branches
                </Typography>
              </Box>
            </Box>
            <List sx={{ pl: 4 }}>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#8B5CF6', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="E2E Tests"
                  secondary="Cypress tests simulating user workflows"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#8B5CF6', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Performance Testing"
                  secondary="Lighthouse score >= 90, Load testing with k6"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#8B5CF6', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Security Scanning"
                  secondary="OWASP Top 10 and dependency vulnerability checks"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#8B5CF6', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Deploy to Staging"
                  secondary="Deployed to staging.clothe.app for QA"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
            </List>
          </Paper>

          {/* Production Stage */}
          <Paper
            sx={{
              p: 3,
              border: '1px solid #E2E8F0',
              borderLeft: '4px solid #10B981',
              background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <SecurityIcon sx={{ color: '#10B981', mt: 0.5 }} />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#0F172A',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Production Pipeline
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    mb: 2,
                  }}
                >
                  Deployment protection rules enabled with manual approval
                </Typography>
              </Box>
            </Box>
            <List sx={{ pl: 4 }}>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#10B981', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Final Quality Gate"
                  secondary="All staging tests must pass, human code review required"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#10B981', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Blue-Green Deployment"
                  secondary="Zero-downtime deployment with traffic shift"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#10B981', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Health Checks & Monitoring"
                  secondary="Datadog and New Relic integration for real-time monitoring"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#10B981', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Rollback Strategy"
                  secondary="Automated rollback on error rate spike"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
            </List>
          </Paper>

          {/* Infrastructure & Tools */}
          <Paper
            sx={{
              p: 3,
              border: '1px solid #E2E8F0',
              borderLeft: '4px solid #F59E0B',
              background: 'linear-gradient(135deg, #FFFBF0 0%, #FFFFFF 100%)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <StorageIcon sx={{ color: '#F59E0B', mt: 0.5 }} />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#0F172A',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Infrastructure & Tools
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    mb: 2,
                  }}
                >
                  Modern DevOps stack for scalable deployment
                </Typography>
              </Box>
            </Box>
            <List sx={{ pl: 4 }}>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#F59E0B', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Container Orchestration"
                  secondary="Docker & Kubernetes for consistent environments"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#F59E0B', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Cloud Hosting"
                  secondary="AWS (EC2, RDS, S3, CloudFront, Lambda)"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#F59E0B', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Database Migration"
                  secondary="Alembic for versioned schema migrations"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#F59E0B', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Log Aggregation"
                  secondary="ELK Stack for centralized logging"
                  primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 600 }}
                  secondaryTypographyProps={{ fontSize: '0.85rem', color: '#64748B' }}
                />
              </ListItem>
            </List>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
};

export default ClotheDeployment;
