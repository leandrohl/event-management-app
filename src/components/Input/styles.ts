import { TextInput } from 'react-native';

import styled from 'styled-components/native';

import { InputStyle } from './types';



export const Container = styled.View<InputStyle>`
  flex-direction: row;
  align-items:center;
  border-radius: 4px;
  padding: 8px 8px;
  margin-top: 2px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => 
    props.error 
    ? props.theme.colors.error 
    : props.isActive ? props.theme.colors.primary : props.theme.colors.borderInput
  };
`;

export const ContainerInput = styled.View`
  flex:1;
  margin-left: 8px;
`;

export const TextInputStyled = styled(TextInput)`
  color: ${props => props.theme.colors.borderInput};
  font-size: 18px;
  font-family: ${props => props.theme.fonts.interRegular};
  font-weight: bold;
`;


export const ErrorMessage = styled.Text`
  margin-top: 2px; 
  color: ${props => props.theme.colors.error}
`;
