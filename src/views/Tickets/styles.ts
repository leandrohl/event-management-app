import styled from 'styled-components/native'

export const Container = styled.View`
  height: 100%;
  padding: 0 12px;
  margin-top: 16px;
`

export const TextTitle = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: 24px;
`

export const TextDescription = styled.Text`
  color: ${props => props.theme.colors.text}
  opacity: 0.6;
  font-family: ${props => props.theme.fonts.interMedium};
  font-size: 12px;
  margin-top: 4px;
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