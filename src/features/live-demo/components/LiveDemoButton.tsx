import React, { useState } from 'react';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ComingSoonDialog from './ComingSoonDialog';

interface LiveDemoButtonProps {
  liveUrl?: string | null;
  githubUrl: string;
  onClick?: (e: React.MouseEvent) => void;
}

const LiveDemoButton: React.FC<LiveDemoButtonProps> = ({
  liveUrl,
  githubUrl,
  onClick,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.(e);

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
    <>
      <Button
        size="small"
        endIcon={<OpenInNewIcon />}
        onClick={handleClick}
        sx={{
          flex: 1,
          color: '#06B6D4',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.75rem',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(6, 182, 212, 0.04)',
          },
        }}
      >
        Live
      </Button>

      <ComingSoonDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        githubUrl={githubUrl}
      />
    </>
  );
};

export default LiveDemoButton;
