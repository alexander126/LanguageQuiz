import React from 'react';
import { Container, Answer, AnswerButtonStyles } from './styles';

/**
 * AnswerButton component
 *
 * @param {func} onPress - Handles onPress event of the button
 * @param {string} answer - Answer text shown by the component
 * @param {string} margin - Specified margin string
 */

interface Props extends AnswerButtonStyles {
  answer: string;
  onPress?: () => void;
}

const AnswerButton = ({ onPress, answer, margin }: Props) => {
  return (
    <Container margin={margin} onPress={onPress}>
      <Answer>{answer}</Answer>
    </Container>
  );
};

export default AnswerButton;
