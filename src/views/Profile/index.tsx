import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Button from "../../components/Buttons/Button";
import auth from '@react-native-firebase/auth';

import * as S from './styles'
import NotLogged from "../../components/NotLogged";
import { useAuth } from "../../contexts/Auth";

export default function Profile({ navigation }) {
  const {user, signOut, signed} = useAuth()
  
  const getInitialLetters = (text: string, withUppercase = false) => {
    if (!text) return ''
    const arrayText = text.split(' ')
    if (arrayText.length === 1) return arrayText[0][0]
    const letters = arrayText[0][0] + arrayText[arrayText.length - 1][0]
    return withUppercase ? letters.toUpperCase() : letters
  }

  const renderProfile = () => (
    <S.Container>
      <S.InfoUser>
        <S.Avatar>
          <S.TextAvatar> {getInitialLetters(user.name, true)} </S.TextAvatar>
        </S.Avatar>
        <S.TextName> {user.name} </S.TextName>
        <S.TextEmail> {user.email} </S.TextEmail>
        <Button 
          title="Editar perfil" 
          handleClick={() => navigation.navigate("EditUser", { userName: user.name })} 
          variant="outlined"
        />
      </S.InfoUser>
      <View style={{ width: '100%'}}>
        <Button 
        title="Terminar Sessão" 
        handleClick={signOut} 
        variant="outlined"
        />
      </View>
    </S.Container>
  )
  
  return signed ? renderProfile() : <NotLogged navigation={navigation}/>
}
