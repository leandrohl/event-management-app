import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  padding: 16px 12px; 

  height: 100%;
`

export const TitleText = styled.Text`
  color: ${props => props.theme.colors.text}
  font-family: ${props => props.theme.fonts.interBold};
  font-size: 24px;
  margin-top: 16px;
`

export const DescribeText = styled.Text`
  color: ${props => props.theme.colors.text}
  font-family: ${props => props.theme.fonts.interMedium};
  opacity: 0.6;
  margin-top: 8px;
`

export const LoginView = styled.View`
`