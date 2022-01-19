import styled from 'styled-components/native';
import { MAIN, WHITE } from '../../styles/colors';

export interface AnswerButtonStyles {
  margin?: string;
}

export const Container = styled.TouchableOpacity<AnswerButtonStyles>`
  background-color: ${WHITE};
  justify-content: center;
  height: 45px;
  width: 120px;
  max-width: 120px;
    margin:${({ margin }) => (margin ? margin : '0px')}
  align-items: center;
  border-radius: 10px;
`;

export const Answer = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${MAIN};
`;
