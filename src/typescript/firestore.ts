export type QuizQuestion = {
  answers: Answer[];
  id: string;
  phrase: string;
  translation: string;
  wordToTranslate: string;
};

export type Answer = {
  answer: string;
  isCorrect: boolean;
};
