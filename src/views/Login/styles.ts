import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  padding: 0 32px;
`

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.interBold};
  font-size: 32px;
`

export const ContainerInputs = styled.View`
  width: 100%;
  margin-bottom: 32px;
  margin-top: 28px;
`

export const Subscribe = styled.Text`
   color: ${props => props.theme.colors.text};
   font-family: ${props => props.theme.fonts.interMedium};
   font-size: 12px;
   opacity: 0.7;

   text-align: center;
   margin-top: 24px;
`