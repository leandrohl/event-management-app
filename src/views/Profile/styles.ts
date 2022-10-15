import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding: 32px 16px;
`

export const InfoUser = styled.View`
  align-items: center;
`

export const Avatar = styled.View`
  background: ${props => props.theme.colors.card};
  padding: 24px;
  border-radius: 40px;
`

export const TextAvatar = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: 20px;
`

export const TextName = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: 24px;
  margin-top: 20px;
`

export const TextEmail = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 16px;
`
