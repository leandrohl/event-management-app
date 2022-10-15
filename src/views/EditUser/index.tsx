import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import auth from '@react-native-firebase/auth';

import * as S from './styles'

import IconButton from "../../components/Buttons/IconButton";
import { useTheme } from "styled-components/native";

export interface INewUser {
  name: string
  email: string
  newPassword: string
}

export default function EditUser({ navigation, route }) {
  const { userName } = route.params 
  const [userInfo, setUserInfo] = useState<INewUser>({
    name: userName,
    email: '',
    newPassword: ''
  })


  const handleEditUser = async () => {
    try {
      await auth().currentUser.updateProfile({
        displayName: userInfo.name
      })
      // await user.updateEmail(userInfo.email)
      // await user.updateEmail(userInfo.newPassword)
      navigation.goBack()
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
        <S.Title> Editar perfil </S.Title>
        <S.ContainerInputs>
          <Input 
            value={userInfo.name}
            handleChange={(text) => setUserInfo({ ...userInfo, name: text })}
            placeholder="Nome"
            autoComplete="off"
            autoCorrect={false}
          />
          {/* <View style={{ marginTop: 20, marginBottom: 20}}>
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
            value={userInfo.newPassword}
            handleChange={(text) => setUserInfo({ ...userInfo, newPassword: text })}
            placeholder="Nova senha"
            secureTextEntry
            autoComplete="off"
            autoCorrect={false}
          /> */}
        </S.ContainerInputs>
        <View style={{ width: '100%'}}>
          <Button title="Salvar" handleClick={handleEditUser}/>
        </View>
      </S.Container>
    </SafeAreaView>
  );
}