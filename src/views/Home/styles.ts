import styled from 'styled-components/native'

export const Container = styled.View`
`

export const Info = styled.View`
  padding: 16px 12px;
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