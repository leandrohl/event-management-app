import { View, Text } from "react-native";
import Button from "../Buttons/Button";

import * as S from './styles'

interface INotLoggedProps {
  title?: string,
  describe?: string,
  navigation: any
}

export default function NotLogged(props: INotLoggedProps) {
  const { title, describe, navigation} = props
  return (
    <S.Container>
      <View>
        <S.TitleText>
          {title ? title : 'Faça o login para descobrir os melhores eventos'} 
        </S.TitleText>
        <S.DescribeText>
          {describe ? describe : 'Entre com uma conta para continuar'} 
        </S.DescribeText>
      </View>
      <S.LoginView>
        <Button 
          title="Login"
          variant="outlined"
          handleClick={() => navigation.navigate("Login")}
        />
        <View style={{ marginTop: 16 }}>
          <Button 
            title="Cadastrar"
            variant="outlined"
            handleClick={() => navigation.navigate("NewUser")}
          />
        </View>
      </S.LoginView>
    </S.Container>
  )
}