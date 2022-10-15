import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import auth from '@react-native-firebase/auth';

import * as S from './styles'

import { IAuth } from "../../api/types";
import IconButton from "../../components/Buttons/IconButton";
import { useTheme } from "styled-components/native";

export default function Login({ navigation }) {
  const [userInfo, setUserInfo] = useState<IAuth>(new IAuth())

  const theme = useTheme()

  async function handleLogin() {
    try {
      const { email, password } = userInfo
      const response = await auth().signInWithEmailAndPassword(email, password)

      navigation.navigate("Tickets", { userId: response.user.uid })

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <S.ViewGoBack>
        <IconButton iconName="ArrowBack" handleClick={() => navigation.goBack()}/>
      </S.ViewGoBack>
      <S.Container>
        <S.Title> Login </S.Title>
        <S.ContainerInputs>
          <View style={{ marginBottom: 20}}>
            <Input 
              value={userInfo.email}
              handleChange={(text) => setUserInfo({ ...userInfo, email: text })}
              placeholder="Entre com seu email"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <Input 
            value={userInfo.password}
            handleChange={(text) => setUserInfo({ ...userInfo, password: text })}
            placeholder="Entre com sua senha"
            secureTextEntry
            autoComplete="off"
            autoCorrect={false}
          />
        </S.ContainerInputs>
        <View style={{ width: '100%'}}>
          <Button title="Login" handleClick={handleLogin}/>
          <S.Subscribe>
            Não tem registro?
            <Text
              onPress={() => navigation.navigate("NewUser")}
              style={{ color: theme.colors.link }}
            >
              Se inscreva agora...
            </Text> 
          </S.Subscribe>
        </View>
      </S.Container>
    </SafeAreaView>
  );
}