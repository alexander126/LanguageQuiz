import styled from 'styled-components/native';
import { AQUAMARINE, GRAY_100, WHITE } from '../../styles/colors';
import { getDeviceWidth } from '../../utils/app-utils';

export interface ButtonStyles {
  color?: string;
  margin?: string;
  isDisabled?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonStyles>`
  height: 65px;
  flex-direction: row;
  width: ${getDeviceWidth() - 48}px;
  background-color: ${({ color, isDisabled }) =>
    isDisabled ? GRAY_100 : color ? color : AQUAMARINE};
  align-self: center;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => (margin ? margin : '0')};
`;

export const Title = styled.Text`
  text-align: center;
  color: ${WHITE};
  font-size: 18px;
  font-weight: bold;
`;
