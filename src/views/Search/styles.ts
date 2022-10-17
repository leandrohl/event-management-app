import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 12px;
  margin-top: 24px;
  margin-bottom: 48px;
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
  font-family: ${props => props.theme.fonts.interRegular};
  opacity: 0.5;
  margin-top: 12px;
`