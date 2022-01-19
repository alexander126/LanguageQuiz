import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonStyles, Container, Title } from './styles';

/**
 * Button component
 *
 * @param {func} onPress - Handles onPress event of the button
 * @param {string} color - Button color prop
 * @param {string} title - Button title prop
 * @param {string} margin - Specified margin string
 * @param {boolean} isDisabled - Boolean indicating wether the button is disabled or no
 */

interface Props extends ButtonStyles, TouchableOpacityProps {
  title: string;
}

const Button = ({ title, color, onPress, margin, isDisabled }: Props) => {
  return (
    <Container
      margin={margin}
      isDisabled={isDisabled}
      disabled={isDisabled}
      color={color}
      onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
