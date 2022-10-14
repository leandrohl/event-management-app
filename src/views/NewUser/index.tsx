import { useState } from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import { themeSC } from "../../global/styles/theme";
import auth from '@react-native-firebase/auth';

import * as S from './styles'

import IconButton from "../../components/Buttons/IconButton";
import { INewUser } from "./types";

export default function NewUser({ navigation }) {
  const [userInfo, setUserInfo] = useState<INewUser>(new INewUser())

  const handleRegister = async () => {
    try {
      const response = await auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      response.additionalUserInfo.username = userInfo.name
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <S.ViewGoBack>
        <IconButton iconName="ArrowBack" handleClick={() => navigation.goBack()}/>
      </S.ViewGoBack>
      <S.Container>
        <S.Title> Crie uma conta na MB.Events </S.Title>
        <S.ContainerInputs>
          <Input 
            value={userInfo.name}
            handleChange={(text) => setUserInfo({ ...userInfo, name: text })}
            placeholder="Nome"
            autoComplete="off"
            autoCorrect={false}
          />
          <View style={{ marginTop: 20, marginBottom: 20}}>
            <Input 
              value={userInfo.email}
              handleChange={(text) => setUserInfo({ ...userInfo, email: text })}
              placeholder="Email"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <Input 
            value={userInfo.password}
            handleChange={(text) => setUserInfo({ ...userInfo, password: text })}
            placeholder="Senha"
            secureTextEntry
            autoComplete="off"
            autoCorrect={false}
          />
        </S.ContainerInputs>
        <View style={{ width: '100%'}}>
          <Button title="Cadastrar" handleClick={handleRegister}/>
          <S.Login>
            Já tem um registro?
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ color: themeSC.colors.link }}
            >
              Login...
            </Text> 
          </S.Login>
        </View>
      </S.Container>
    </SafeAreaView>
  );
}