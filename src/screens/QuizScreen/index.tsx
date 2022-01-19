import React, { useEffect, useState } from 'react';

import AnswerButton from '../../components/AnswerButton';
import Button from '../../components/Button';
import { getQuestions } from '../../services/quiz-services';

import { QuizQuestion } from '../../typescript/firestore';
import { alertWrapper } from '../../utils/app-utils';

import {
  Container,
  QuizContainer,
  Instructions,
  MainPhrase,
  WordToTranslate,
  AnswerContainer,
  BlankAnswer,
} from './styles';

const QuizScreen = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setIndex] = useState<number>(0);
  const [currentAnswer, setAnswer] = useState<string>('');

  const getQuiz = async () => {
    try {
      const response = await getQuestions();
      if (response) {
        setQuestions(response);
      }
    } catch (e) {
      console.log({ e });
    }
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const checkAnswer = () => {
    const correctAnswer = questions[currentIndex].answers.find(
      (x) => x.isCorrect,
    );

    alertWrapper(
      currentAnswer === correctAnswer?.answer ? 'Hooray!' : 'Oooh!',
      currentAnswer === correctAnswer?.answer
        ? `${currentAnswer} is the correct answer!`
        : `${currentAnswer} is not the correct answer! ${correctAnswer?.answer} is!`,
      [
        currentIndex === questions.length - 1
          ? {
              text: 'Start Over',
              style: 'cancel',
              onPress: () => {
                setIndex(0);
                setAnswer('');
              },
            }
          : {
              text: 'Next Question',
              onPress: () => {
                setIndex(currentIndex + 1);
                setAnswer('');
              },
            },
      ],
    );
  };
  const getStringToTranslate = () => {
    if (questions[currentIndex]) {
      const currentPhrase = questions[currentIndex].phrase.split('blank');

      return { start: currentPhrase[0], end: currentPhrase[1] };
    }
  };
  const getTranslationString = () => {
    if (questions[currentIndex]) {
      const currentPhrase = questions[currentIndex].translation.split('blank');

      return { start: currentPhrase[0], end: currentPhrase[1] };
    }
  };
  const phrase = getStringToTranslate();
  const translation = getTranslationString();

  return (
    <Container>
      <QuizContainer>
        <Instructions>Fill in the missing word</Instructions>
        <MainPhrase>
          {phrase?.start}
          <WordToTranslate>
            {questions[currentIndex]?.wordToTranslate}
          </WordToTranslate>
          {phrase?.end}
        </MainPhrase>
        <MainPhrase marginTop="84px">
          {translation?.start}
          {currentAnswer === '' ? (
            <BlankAnswer />
          ) : (
            <AnswerButton answer={currentAnswer} />
          )}
          {translation?.end}
        </MainPhrase>
        <AnswerContainer>
          {questions[currentIndex]?.answers.map((x, index) => {
            return (
              <AnswerButton
                key={index}
                onPress={() => setAnswer(x.answer)}
                answer={x.answer}
                margin="6px"
              />
            );
          })}
        </AnswerContainer>

        <Button
          title="CHECK ANSWER"
          isDisabled={currentAnswer === ''}
          onPress={() => checkAnswer()}
        />
      </QuizContainer>
    </Container>
  );
};
export default QuizScreen;
