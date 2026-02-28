export interface Riddle {
  question: string;
  answer: string;
}

export type ResponseType = 'correct' | 'incorrect' | 'completion' | null;

export interface GameResponse {
  type: ResponseType;
  userGuess?: string;
  teasingLine?: string;
  correctAnswer?: string;
}

export interface GameState {
  currentIndex: number;
  userInput: string;
  response: GameResponse;
  submitted: boolean;
}
