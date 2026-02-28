import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Fade,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useRiddleGame } from '../hooks/useRiddleGame';
import { RIDDLES, TEASING_LINES } from '../constants/riddles';

const DeveloperRiddleGame: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const { gameState, currentRiddle, isGameComplete, progressPercentage, handleSubmit, handleNextRiddle, resetGame, handleInputChange } =
    useRiddleGame(RIDDLES, TEASING_LINES);

  const handleCloseGame = () => {
    setDialogOpen(false);
    resetGame();
  };

  if (isGameComplete && gameState.response.type === 'completion') {
    return (
      <>
        <Dialog
          open={true}
          onClose={handleCloseGame}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F7FF 100%)',
              border: '2px solid #06B6D4',
              boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3)',
            },
          }}
          BackdropProps={{
            sx: {
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <DialogContent sx={{ p: 4, textAlign: 'center', position: 'relative' }}>
            <IconButton
              onClick={handleCloseGame}
              size="small"
              sx={{
                position: 'absolute',
                right: 12,
                top: 12,
                color: '#0F172A',
                zIndex: 10,
                '&:hover': {
                  backgroundColor: 'rgba(15, 23, 42, 0.1)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Close fontSize="medium" />
            </IconButton>
            <Fade in={true} timeout={600}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '3rem',
                    mb: 2,
                    animation: 'bounce 1s ease-in-out infinite',
                    '@keyframes bounce': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-16px)' },
                    },
                  }}
                >
                  🎉
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#0F172A',
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  Game Complete!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#475569',
                    lineHeight: 1.8,
                    fontSize: '1rem',
                    mb: 3,
                  }}
                >
                  That was fun playing with you! 🎮
                  <br />
                  <br />
                  <span style={{ fontWeight: 700, color: '#FF6B6B' }}>
                    New games are on the way...
                  </span>
                  <br />
                  Wait for more! ⚡
                </Typography>
              </Box>
            </Fade>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '700px', mx: 'auto' }}>
      <Fade in={true} timeout={600}>
        <Card
          sx={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '1rem',
            p: 4,
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)',
          }}
        >
          <CardContent sx={{ p: 0 }}>
            {/* Riddle Number */}
            <Typography
              sx={{
                color: '#06B6D4',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Riddle {gameState.currentIndex + 1} of {RIDDLES.length} (Think Like a Developer 🤔)
            </Typography>

            {/* Riddle Question */}
            <Typography
              variant="h5"
              sx={{
                color: '#0F172A',
                fontWeight: 700,
                mb: 4,
                lineHeight: 1.8,
                whiteSpace: 'pre-line',
              }}
            >
              {currentRiddle?.question}
            </Typography>

            {/* Input Section */}
            {!gameState.submitted && (
              <Stack spacing={2} sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  placeholder="Type your answer..."
                  value={gameState.userInput}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && gameState.userInput.trim()) {
                      handleSubmit();
                    }
                  }}
                  disabled={gameState.submitted}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0.75rem',
                      '& fieldset': {
                        borderColor: '#E2E8F0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#06B6D4',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#06B6D4',
                      },
                    },
                  }}
                />
                <Button
                  onClick={handleSubmit}
                  disabled={!gameState.userInput.trim()}
                  sx={{
                    background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    py: 1.5,
                    borderRadius: '0.75rem',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover:not(:disabled)': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(6, 182, 212, 0.3)',
                    },
                    '&:disabled': {
                      background: '#CBD5E1',
                      color: '#94A3B8',
                    },
                  }}
                >
                  Submit Answer
                </Button>
              </Stack>
            )}

            {/* Response Section */}
            {gameState.submitted && (
              <Fade in={true} timeout={500}>
                <Box sx={{ mb: 3 }}>
                  {gameState.response.type === 'correct' && (
                    <Box sx={{ p: 3, backgroundColor: '#F0FDF4', borderRadius: '0.75rem', border: '1px solid #BBEE8A' }}>
                      <Typography
                        sx={{
                          color: '#166534',
                          fontWeight: 700,
                          fontSize: '1rem',
                          mb: 2,
                        }}
                      >
                        ✨ Correct! You've got it!
                      </Typography>
                      <Typography
                        sx={{
                          color: '#15803D',
                          fontWeight: 500,
                          lineHeight: 1.6,
                        }}
                      >
                        That's right. I'm impressed. Let's see if you can solve the next one.
                      </Typography>
                    </Box>
                  )}

                  {gameState.response.type === 'incorrect' && (
                    <Box sx={{ p: 3, backgroundColor: '#FEF2F2', borderRadius: '0.75rem', border: '1px solid #FCA5A5' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        <Typography
                          sx={{
                            fontSize: '1.8rem',
                            animation: 'shake 0.5s ease-in-out',
                            '@keyframes shake': {
                              '0%, 100%': { transform: 'translateX(0)' },
                              '25%': { transform: 'translateX(-8px)' },
                              '75%': { transform: 'translateX(8px)' },
                            },
                          }}
                        >
                          😢
                        </Typography>
                        <Typography
                          sx={{
                            color: '#7F1D1D',
                            fontWeight: 700,
                            fontSize: '1rem',
                          }}
                        >
                          Ohhh, not quite...
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: '#7F1D1D',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          mb: 2,
                        }}
                      >
                        Did you just guess: "{gameState.response.userGuess}"?
                      </Typography>
                      <Typography
                        sx={{
                          color: '#991B1B',
                          fontWeight: 500,
                          fontSize: '0.95rem',
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <span>😶</span>
                        {gameState.response.teasingLine}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#7F1D1D',
                          fontWeight: 600,
                          lineHeight: 1.6,
                          pt: 2,
                          borderTop: '1px solid #FECACA',
                        }}
                      >
                        The correct answer is: <span style={{ fontStyle: 'italic' }}>"{gameState.response.correctAnswer}"</span>
                      </Typography>
                    </Box>
                  )}

                  {/* Next Button */}
                  <Button
                    onClick={handleNextRiddle}
                    sx={{
                      width: '100%',
                      mt: 2,
                      background: '#0F172A',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      py: 1.5,
                      borderRadius: '0.75rem',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: '#1E293B',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {gameState.currentIndex + 1 >= RIDDLES.length ? 'See Results' : 'Next Riddle'}
                  </Button>
                </Box>
              </Fade>
            )}

            {/* Progress Bar */}
            <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #E2E8F0' }}>
              <Box
                sx={{
                  height: '4px',
                  background: '#E2E8F0',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #06B6D4 0%, #0891B2 100%)',
                    width: `${progressPercentage}%`,
                    transition: 'width 0.5s ease',
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
};

export default DeveloperRiddleGame;
