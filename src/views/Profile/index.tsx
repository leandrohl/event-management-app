import { useEffect, useReducer, useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/Buttons/Button";
import auth from '@react-native-firebase/auth';

import * as S from './styles'
import { useAuth } from "../../context";
import NotLogged from "../../components/NotLogged";

interface IUserInfo {
  name: string;
  email: string;
}

export default function Profile({ navigation }) {
  const { user, signed } = useAuth()


  const logout = () => {
    try {
      auth().signOut()
      navigation.navigate("Login")
    } catch (error) {

    }
    navigation.navigate("Login")
  }

  const renderProfile = () => (
    <S.Container>
      <S.InfoUser>
        <S.Avatar>
          <S.TextAvatar> LS </S.TextAvatar>
        </S.Avatar>
        <S.TextName> Leandro Henrique </S.TextName>
        <S.TextEmail> {user.email} </S.TextEmail>
        <Button 
          title="Editar Perfil" 
          handleClick={() => {}} 
          variant="outlined"
        />
      </S.InfoUser>
      <View style={{ width: '100%'}}>
        <Button 
        title="Terminar Sessão" 
        handleClick={logout} 
        variant="outlined"
        />
      </View>
    </S.Container>
  )


  return signed ? renderProfile() : <NotLogged navigation={navigation}/>
}
