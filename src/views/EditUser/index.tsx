import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import auth from '@react-native-firebase/auth';

import * as S from './styles'

import IconButton from "../../components/Buttons/IconButton";
import { useTheme } from "styled-components/native";
import Snackbar from "react-native-snackbar";
import { useAuth } from "../../contexts/Auth";

export interface INewUser {
  name: string
  email: string
  newPassword: string
}

export default function EditUser({ navigation, route }) {
  const { userName } = route.params 
  const { updateUserName } = useAuth()

  const [name, setName] = useState(userName)
  const [erroName, setErrorName] = useState('')

  const [loading, setLoading] = useState(false)

  const handleEditUser = async () => {
    setLoading(true)
    try {
      if (name === '') {
        setErrorName("Campo obrigatório")
        setLoading(false)
        return
      }

      await auth().currentUser.updateProfile({
        displayName: name
      })
      updateUserName(name)
      navigation.navigate("Perfil")
    } catch (error) {
      Snackbar.show({
        text: 'Houve um erro ao editar seu perfil, tente novamente!',
        duration: Snackbar.LENGTH_SHORT
      })
    }
    setLoading(false)
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
            value={name}
            handleChange={(text) => setName(text)}
            placeholder="Nome"
            autoComplete="off"
            autoCorrect={false}
            error={!!erroName}
            errorMessage={erroName}
          />
        </S.ContainerInputs>
        <View style={{ width: '100%'}}>
          <Button 
            title="Salvar" 
            handleClick={handleEditUser} 
            loading={loading}
          />
        </View>
      </S.Container>
    </SafeAreaView>
  );
}