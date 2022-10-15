import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  height: 220px;
  justify-content: space-between;
  align-items: center;
`

export const HeaderView = styled.View`
  padding: 16px 16px;
`

export const HeaderText = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.interBold}
  font-size: 20px;
`

export const ContentText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.interMedium};
  font-size: 14px;
  padding: 0 16px;
  line-height: 28px;
  opacity: 0.8;
`

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`