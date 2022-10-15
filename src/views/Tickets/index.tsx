import auth from '@react-native-firebase/auth';

import * as S from './styles'
import NotLogged from "../../components/NotLogged";
import { View, ScrollView } from 'react-native'
import {useEffect, useRef, useState} from 'react'
import { IEvent } from '../../api/types';
import TickedCard from './components/TicketCard';
import TicketDetail from './components/TicketDetail';
import { Modalize } from 'react-native-modalize';
import firestore from '@react-native-firebase/firestore';
import Icon from '../../assets/icons';
import { useTheme } from 'styled-components/native';

export default function Tickets({ navigation }) {
  const user = auth().currentUser
  const [ticketList, setTicketList] = useState<IEvent[]>([])
  const [eventSelected, setEventSelected] = useState<IEvent>()
  const database = firestore();

  const modalizeRef = useRef<Modalize>(null)

  useEffect(() => {
    if (user) {
      database.collection(user.uid).onSnapshot(( query ) => {
        const list = []
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id })
        })
        setTicketList(list)
      })
    } else setTicketList([])
  }, [])

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
              ticketList.map(event => (
                <TickedCard 
                  key={event.id}
                  id={event.id}
                  title={event.name}
                  imageUrl={event.imageUrl}
                  dateInicial={event.date}
                  local={event.local}
                  onPress={() => {
                    setEventSelected(event)
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
        eventSelected={eventSelected}
      />
    </S.Container>
  )

  return user 
    ? renderTickets() 
    : <NotLogged 
      navigation={navigation}
      title="Faça o login para visualizar seus ingressos"
    />
}
