import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity `
  margin: 16px 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: ${props => props.theme.colors.card};
  border-radius: 4px;
`

export const Logo = styled.Image`
  width: 100%;
  height: 140px;
  object-fit: cover;
`

export const Content = styled.View`
  padding: 12px 16px;
`

export const TextDate = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.interMedium};
`

export const TextTitle = styled.Text`
  color: ${props => props.theme.colors.text}
  font-size: 18px;
  font-family: ${props => props.theme.fonts.interMedium};
`

export const TextLocal = styled.Text`
  color: ${props => props.theme.colors.text}
  opacity: 0.4;
  font-family: ${props => props.theme.fonts.interMedium};
  font-size: 10px;
  margin-top: 4px;
`