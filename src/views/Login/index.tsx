import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import firebase from "../../config/firebase";
import { themeSC } from "../../global/styles/theme";

import * as S from './styles'
import { UserInfo } from "./types";

import { Auth } from 'firebase/auth'

export default function Login({ navigation }) {
  const [userInfo, setUserInfo] = useState(new UserInfo())

  // const handleLogin = () => {
  //   Auth.
  // }

  return (
    <S.Container>
      <S.Title> Login </S.Title>
      <S.ContainerInputs>
        <Input 
          value={userInfo.email}
          handleChange={(text) => setUserInfo({ ...userInfo, email: text })}
          placeholder="Entre com seu email"
          autoComplete="off"
          autoCorrect={false}
          keyboardType="email-address"
        />
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
        <Button title="Login" handleClick={() => {}}/>
        <S.Subscribe>
          Não tem registro?
          <Text
            onPress={() => navigation.navigate("NewUser")}
            style={{ color: themeSC.colors.link }}
          >
            Se inscreva agora...
          </Text> 
        </S.Subscribe>
      </View>
    </S.Container>
  );
}