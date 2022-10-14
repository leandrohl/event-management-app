import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
  border-radius: 30px;
  background: ${props => props.theme.colors.card}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`