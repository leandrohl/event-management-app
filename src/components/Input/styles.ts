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
    props.isActive 
    ? props.theme.colors.primary 
    : props.theme.colors.borderInput
  };
`;

export const ContainerInput = styled.View`
  flex:1;
  margin-left: 8px;
`;

export const TextInputStyled = styled(TextInput)`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-family: ${props => props.theme.fonts.interRegular};
  font-weight: bold;
`;



// export const ContainerTextInput = styled.View`
//   flex: 1;
//   justify-content: center;
// `;

// export const RightButton = styled.TouchableOpacity`
//   width: 42px;
//   height: 42px;
//   margin-left: 8px;
//   justify-content: center;
//   align-items:center;
// `;

// export const ErrorMessage = styled(Typography).attrs({ size: 12, color: theme.colors.danger })`
//   margin-top: 2px; 
//   margin-bottom: 8px;
// `;

// export const Label = styled(Typography).attrs({ size: 12, font: theme.fonts.robotoRegular })<InputStyle>`
//   padding-top: 4px;
//   color: ${props => props.withError ? theme.colors.danger : theme.colors.secondary};
// `;
