import * as S from './styles'
import NotLogged from "../../components/NotLogged";
import { View, ScrollView } from 'react-native'
import {useEffect, useRef, useState} from 'react'
import TickedCard from './components/TicketCard';
import TicketDetail from './components/TicketDetail';
import { Modalize } from 'react-native-modalize';
import firestore from '@react-native-firebase/firestore';
import Icon from '../../assets/icons';
import { useAuth } from '../../contexts/Auth';
import { ITicket } from '../../services/types';

export default function Tickets({ navigation }) {
  const [ticketList, setTicketList] = useState<ITicket[]>([])
  const [ticketSelected, setTicketSelected] = useState<ITicket>()
  const database = firestore();

  const { user, signed } = useAuth()

  const modalizeRef = useRef<Modalize>(null)

  useEffect(() => {
    searchTickets()
  }, [])

  const searchTickets = async () => {
    if (signed) {
      database.collection(user.userId).onSnapshot(( query ) => {
        const list = []
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id })
        })
        setTicketList(list)
      })
    } else setTicketList([])
  }


  const renderNoResults = () => (
    <S.ContainerNoResults>
      <S.ContainerIcon>
        <Icon name='Ticket' height={40} width={40}/>
      </S.ContainerIcon>
      <S.TextNoResults>
        Nenhum ingresso ainda
      </S.TextNoResults>
    </S.ContainerNoResults>
  )

  const renderTickets = () => (
    <S.Container>
      <ScrollView >
        <View>
          <S.TextTitle> Ingressos </S.TextTitle>
          <S.TextDescription> 
            Fico feliz que esteja aqui. Que tal dar uma olhada nos seus próximos eventos! 
          </S.TextDescription>
        </View>
        <View>
          { ticketList.length > 0 
            ? (
              ticketList.map(ticket => (
                <TickedCard 
                  key={ticket.id}
                  id={ticket.id}
                  title={ticket.event.name}
                  imageUrl={ticket.event.imageUrl}
                  dateInicial={ticket.event.date}
                  local={ticket.event.local}
                  onPress={() => {
                    setTicketSelected(ticket)
                    modalizeRef.current?.open()
                  }}
                />
              ))
            ) : renderNoResults()
        }
        </View>
      </ScrollView>
      <TicketDetail 
        modalizeRef={modalizeRef} 
        ticketSelected={ticketSelected}
      />
    </S.Container>
  )

  return signed 
    ? renderTickets() 
    : <NotLogged 
      navigation={navigation}
      title="Faça o login para visualizar seus ingressos"
    />
}
