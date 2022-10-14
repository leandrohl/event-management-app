import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 12px;
  padding: 0 8px;
  margin-bottom: 48px;
`

export const Logo = styled.Image`
  width: 100%;
  height: 160px;
  object-fit: cover;
  margin-top: 16px;
`

export const Content = styled.View`
  margin-top: 12px;
`

export const TextTitle = styled.Text`
  color: ${props => props.theme.colors.text}
  font-size: 24px;
  font-family: ${props => props.theme.fonts.interBold};
  margin-bottom: 16px;
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 12px 0;
`

export const TextInfo = styled.Text`
  margin-left: 16px;
  color: ${props => props.theme.colors.text}
  font-family: ${props => props.theme.fonts.interMedium};
`

export const TitleDescription = styled.Text`
  color: ${props => props.theme.colors.text}
  font-family: ${props => props.theme.fonts.interBold};
  font-size: 16px;
  margin-top: 28px;
`

export const TextDescription = styled.Text`
  font-family: ${props => props.theme.fonts.interMedium};
  color: ${props => props.theme.colors.text};
  opacity: 0.4;
  text-align: justify;
  line-height: 20px;
  margin-top: 12px;
`

export const ButtonBuy = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary};
`

export const TextBuy = styled.Text`
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.text};
`
