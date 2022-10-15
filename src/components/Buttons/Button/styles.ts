import styled from "styled-components/native";
import { IVariant } from "./types";

export const ButtonStyled = styled.TouchableOpacity<{ variant: IVariant }>`
  border-radius: 10px;
  background: ${props => props.variant === 'filled' ? props.theme.colors.primary : props.theme.colors.background};
  border: ${props => props.variant === 'filled' ? 'none' : props.theme.colors.primary}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;

`

export const Title = styled.Text<{ variant: IVariant }>`
  margin: 0 8px;
  color: ${props => props.variant === 'filled' ? props.theme.colors.text : props.theme.colors.primary}
  font-family: ${props => props.theme.fonts.interBold}
`;
