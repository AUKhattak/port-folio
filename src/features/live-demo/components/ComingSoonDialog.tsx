import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Fade,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

interface ComingSoonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  githubUrl: string;
}

const ComingSoonDialog: React.FC<ComingSoonDialogProps> = ({
  isOpen,
  onClose,
  githubUrl,
}) => {
  const handleGitHubClick = () => {
    window.open(githubUrl, '_blank');
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={400}
      PaperProps={{
        sx: {
          borderRadius: '1rem',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3)',
          maxWidth: '420px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
          border: '1px solid #E2E8F0',
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <DialogTitle
          sx={{
            fontWeight: 800,
            fontSize: '1.5rem',
            color: '#0F172A',
            pb: 1,
          }}
        >
          Under Construction 
        </DialogTitle>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#64748B',
            '&:hover': {
              backgroundColor: 'rgba(6, 182, 212, 0.05)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ py: 2 }}>
        <Typography
          variant="body1"
          sx={{
            color: '#475569',
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          The live version is on its way.
          <br />
          <br />
          I'm currently polishing the final details before deployment.
          <br />
          <br />
          Feel free to explore the code on GitHub in the meantime.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ gap: 1, p: 2, pt: 0 }}>
        <Button
          onClick={onClose}
          sx={{
            color: '#64748B',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'rgba(6, 182, 212, 0.05)',
            },
          }}
        >
          Close
        </Button>
        <Button
          onClick={handleGitHubClick}
          startIcon={<GitHubIcon />}
          variant="contained"
          sx={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            textTransform: 'none',
            fontWeight: 600,
            color: '#FFFFFF',
            '&:hover': {
              background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
            },
          }}
        >
          View on GitHub
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComingSoonDialog;
