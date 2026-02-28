export const normalizeAnswer = (answer: string): string => {
  return answer.toLowerCase().trim();
};

export const getRandomTeasingLine = (teasingLines: string[]): string => {
  return teasingLines[Math.floor(Math.random() * teasingLines.length)];
};

export const isAnswerCorrect = (userAnswer: string, correctAnswer: string): boolean => {
  return normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
};
