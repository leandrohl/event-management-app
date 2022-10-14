import auth from '@react-native-firebase/auth';

import * as S from './styles'
import { useAuth } from "../../context";
import NotLogged from "../../components/NotLogged";


export default function Tickets({ navigation }) {
  const { user, signed } = useAuth()

  const renderTickets = () => (
    <S.Container>
    </S.Container>
  )


  return signed 
    ? renderTickets() 
    : <NotLogged 
      navigation={navigation}
      title="Faça o login para visualizar seus ingressos"
    />
}
