import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BACKGROUND, MAIN, WHITE } from '../../styles/colors';
import { getDeviceHeight, getDeviceWidth } from '../../utils/app-utils';

export interface QuizScreenStyles {
  marginTop?: string;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BACKGROUND};
`;

export const QuizContainer = styled.View`
  height: ${getDeviceHeight() - 100}px;
  width: ${getDeviceWidth()}px;
  background-color: ${MAIN};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: 100px;
`;

export const Instructions = styled.Text`
  text-align: center;
  color: ${WHITE};
  font-size: 16px;
  margin-top: 24px;
`;

export const BlankAnswer = styled.View`
  background-color: ${MAIN};
  width: 120px;
  max-width: 120px;
  height: 45px;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${WHITE};
`;

export const MainPhrase = styled.Text<QuizScreenStyles>`
  text-align: center;
  font-size: 28px;
  max-height: 45px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '24px')};
  color: ${WHITE};
`;

export const WordToTranslate = styled.Text`
  font-size: 32px;
  color: ${WHITE};
  font-weight: bold;
  text-decoration-line: underline;
`;

export const AnswerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  margin-top: 48px;
  max-height: 160px;
  max-width: ${getDeviceWidth() - 80}px;
  flex: 1;
`;
