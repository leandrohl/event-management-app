import { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import auth from '@react-native-firebase/auth';

import * as S from './styles'

import IconButton from "../../components/Buttons/IconButton";
import { useTheme } from "styled-components/native";
import { useAuth } from "../../contexts/Auth";
import * as yup from 'yup'

export class IUserInfo {
  email: string = ''
  password: string = ''
}

export default function Login({ navigation }) {
  const { signIn } = useAuth()

  const [userInfo, setUserInfo] = useState<IUserInfo>(new IUserInfo())
  const [error, setError] = useState<IUserInfo>(new IUserInfo())

  const [loading, setLoading] = useState(false)

  const theme = useTheme()

  const validateLogin = async () => {
    let schema = yup.object().shape({
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


  async function handleLogin() {
    setLoading(true)
    const validate = await validateLogin()
    if (typeof validate !== 'boolean') {
      setError(validate)
      setLoading(false)
      return 
    }
    const signed = await signIn(userInfo.email, userInfo.password) 
    if (signed) {
      navigation.navigate("Perfil")
    }
    setLoading(false)
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
              error={!!error.email}
              errorMessage={error.email}
            />
          </View>
          <Input 
            value={userInfo.password}
            handleChange={(text) => setUserInfo({ ...userInfo, password: text })}
            placeholder="Entre com sua senha"
            secureTextEntry
            autoComplete="off"
            autoCorrect={false}
            error={!!error.password}
            errorMessage={error.password}
          />
        </S.ContainerInputs>
        <View style={{ width: '100%'}}>
          <Button title="Login" handleClick={handleLogin} loading={loading}/>
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