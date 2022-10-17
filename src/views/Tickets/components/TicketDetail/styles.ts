import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const HeaderView = styled.View`
  padding: 16px 16px;
  justify-content: space-between;
  flex-direction: row;
`

export const HeaderText = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.interBold}
  font-size: 20px;
`

export const Logo = styled.Image`
  height: 160px;
  width: 100%;

  object-fit: cover;
`

export const Content = styled.View`
  margin-top: 12px;
  width: 100%;
  padding: 0 12px;
`

export const TextTitle = styled.Text`
  color: ${props => props.theme.colors.text}
  font-size: 20px;
  font-family: ${props => props.theme.fonts.interBold};
  margin-bottom: 16px;
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 8px 0;
`

export const TextInfo = styled.Text`
  margin-left: 16px;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.interMedium};
`

export const QRCodeView = styled.View`
  margin-top: 16px;
  align-items: center;
`

export const ContainerNoResults = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
`

export const ContainerIcon = styled.View`
  background-color: ${props => props.theme.colors.card};
  padding: 16px;
  border-radius: 40px;
`

export const TextNoResults = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  opacity: 0.5;
  margin-top: 12px;
`