import { useState, useCallback } from 'react';
import type { Riddle, GameState, ResponseType } from '../types/riddle.types';
import { normalizeAnswer, getRandomTeasingLine, isAnswerCorrect } from '../utils/gameHelpers';

export const useRiddleGame = (riddles: Riddle[], teasingLines: string[]) => {
  const [gameState, setGameState] = useState<GameState>({
    currentIndex: 0,
    userInput: '',
    response: { type: null },
    submitted: false,
  });

  const currentRiddle = riddles[gameState.currentIndex];
  const isGameComplete = gameState.currentIndex >= riddles.length;

  const handleSubmit = useCallback(() => {
    if (!currentRiddle) return;

    const userAnswer = normalizeAnswer(gameState.userInput);
    const correctAnswer = normalizeAnswer(currentRiddle.answer);
    const isCorrect = isAnswerCorrect(gameState.userInput, currentRiddle.answer);

    if (isCorrect) {
      setGameState((prev) => ({
        ...prev,
        response: { type: 'correct' },
        submitted: true,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        response: {
          type: 'incorrect',
          userGuess: gameState.userInput,
          teasingLine: getRandomTeasingLine(teasingLines),
          correctAnswer: currentRiddle.answer,
        },
        submitted: true,
      }));
    }
  }, [currentRiddle, gameState.userInput, teasingLines]);

  const handleNextRiddle = useCallback(() => {
    if (gameState.currentIndex + 1 < riddles.length) {
      setGameState((prev) => ({
        currentIndex: prev.currentIndex + 1,
        userInput: '',
        response: { type: null },
        submitted: false,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        currentIndex: riddles.length,
        response: { type: 'completion' },
      }));
    }
  }, [gameState.currentIndex, riddles.length]);

  const resetGame = useCallback(() => {
    setGameState({
      currentIndex: 0,
      userInput: '',
      response: { type: null },
      submitted: false,
    });
  }, []);

  const handleInputChange = useCallback((value: string) => {
    setGameState((prev) => ({
      ...prev,
      userInput: value,
    }));
  }, []);

  const progressPercentage = ((gameState.currentIndex + 1) / riddles.length) * 100;

  return {
    gameState,
    currentRiddle,
    isGameComplete,
    progressPercentage,
    handleSubmit,
    handleNextRiddle,
    resetGame,
    handleInputChange,
  };
};
