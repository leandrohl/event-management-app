import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
  border-radius: 10px;
  background: ${props => props.theme.colors.primary}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;

`

export const Title = styled.Text`
  margin: 0 8px;
  color: ${props => props.theme.colors.text}
  font-family: ${props => props.theme.fonts.interBold}
`;
