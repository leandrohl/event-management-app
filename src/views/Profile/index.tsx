import { View } from "react-native";
import Button from "../../components/Buttons/Button";

import * as S from './styles'
import NotLogged from "../../components/NotLogged";
import { useAuth } from "../../contexts/Auth";

export default function Profile({ navigation, route }) {
  const {user, signOut, signed} = useAuth()

  const userName = route.params?.userName || user?.name || ''
   
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
          <S.TextAvatar> {getInitialLetters(userName, true)} </S.TextAvatar>
        </S.Avatar>
        <S.TextName> {userName} </S.TextName>
        <S.TextEmail> {user.email} </S.TextEmail>
        <Button 
          title="Editar perfil" 
          handleClick={() => navigation.navigate("EditUser", { userName })} 
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
