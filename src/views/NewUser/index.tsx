import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import auth from '@react-native-firebase/auth';
import * as yup from 'yup'
 
import * as S from './styles'

import IconButton from "../../components/Buttons/IconButton";
import { useTheme } from "styled-components";
import Snackbar from "react-native-snackbar";

export class IUserInfo {
  name: string = ''
  email: string = ''
  password: string = ''
}

export default function NewUser({ navigation }) {
  const [userInfo, setUserInfo] = useState<IUserInfo>(new IUserInfo())
  const [error, setError] = useState<IUserInfo>(new IUserInfo())
  const [loading, setLoading] = useState(false)

  const theme = useTheme()

  const validateRegisterNewUser = async () => {
    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required()
    })

    const validate = await schema.validate(userInfo, { abortEarly: false })
    .then((e) => true)
    .catch((err) => {
      const errors = new IUserInfo()
      err.inner.forEach((item) => {
        errors[item.path] = item.message
      })
      return errors
    });
    return validate
  }

  const handleRegister = async () => {
    setLoading(true)
    try {
      const validate = await validateRegisterNewUser()
      if (typeof validate !== 'boolean') {
        setError(validate)
        setLoading(false)
        return 
      }
      const response = await auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      await auth().currentUser.updateProfile({
        displayName: userInfo.name
      })
      navigation.navigate("Perfil", { userId: response.user.uid})
    } catch (error) {
      Snackbar.show({
        text: 'Houve um erro ao realizar o cadastro, tente novamente!',
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
        <S.Title> Crie uma conta na MB.Events </S.Title>
        <S.ContainerInputs>
          <Input 
            value={userInfo.name}
            handleChange={(text) => setUserInfo({ ...userInfo, name: text })}
            placeholder="Nome"
            autoComplete="off"
            autoCorrect={false}
            error={!!error.name}
            errorMessage={error.name}
          />
          <View style={{ marginTop: 20, marginBottom: 20}}>
            <Input 
              value={userInfo.email}
              handleChange={(text) => setUserInfo({ ...userInfo, email: text })}
              placeholder="Email"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
              error={!!error.email}
              errorMessage={error.email}
            />
          </View>
          <Input 
            value={userInfo.password}
            handleChange={(text) => setUserInfo({ ...userInfo, password: text })}
            placeholder="Senha"
            secureTextEntry
            autoComplete="off"
            autoCorrect={false}
            error={!!error.password}
            errorMessage={error.password}
          />
        </S.ContainerInputs>
        <View style={{ width: '100%'}}>
          <Button title="Cadastrar" handleClick={handleRegister} loading={loading}/>
          <S.Login>
            Já tem um registro?
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ color: theme.colors.link }}
            >
              Login...
            </Text> 
          </S.Login>
        </View>
      </S.Container>
    </SafeAreaView>
  );
}