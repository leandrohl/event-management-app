import { useEffect, useState, useRef } from "react";
import { ScrollView, Text, View, SafeAreaView } from "react-native";
import { Modalize } from "react-native-modalize";
import api from "../../api/axios";
import { IEvent } from "../../api/types";
import Icon from "../../assets/icons";
import IconButton from "../../components/Buttons/IconButton";
import ModalizeBuyTicket from "./components/BuyTicket";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import * as S from './styles'

interface IParams {
  eventId: number
}

export default function DetailsEvent( { navigation, route }) {
  const { eventId } = route.params as IParams
  const [eventSelected, setEventSelected] = useState<IEvent>()
  const modalizeRef = useRef<Modalize>(null)
  const database = firestore();

  const user = auth().currentUser

  useEffect(() => {
    searchEventById(eventId)
  }, [])


  const searchEventById = async (id: number) => {
    try {
      const response = await api.get<IEvent[]>('/events')
      if (response) {
        const event = response.data.find(event => event.id === id)

        if (event) {
          setEventSelected(event)
        }
      }
    } catch (err) {
    }
  }
  
  const handleAddTicket = () => {
    if (!user) navigation.navigate("Login")
    database.collection(user.uid).add({
      ...eventSelected,
      dateBuy: new Date()
    })
    navigation.navigate("Tickets")
  }

  if (!eventSelected) return <Text> dsd </Text>

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <ScrollView>
          <IconButton iconName="ArrowBack" handleClick={() => navigation.goBack()}/>
          <S.Logo source={{
            uri: `${eventSelected.imageUrl}`
          }}/>
          <S.Content>
            <S.TextTitle> {eventSelected.name} </S.TextTitle>
            <S.Info>
              <Icon name="Calendar" height={20} width={20}/>
              <S.TextInfo>{eventSelected.date} </S.TextInfo>
            </S.Info>
            <S.Info>
              <Icon name="Location" height={20} width={20}/>
              <S.TextInfo>{eventSelected.local} </S.TextInfo>
            </S.Info>
            <S.Info>
              <Icon name="Groups" height={20} width={20}/>
              <S.TextInfo>{eventSelected.organization} </S.TextInfo>
            </S.Info>
            <S.Info>
              <Icon name="Payments" height={20} width={20}/>
              <S.TextInfo>{eventSelected.price} </S.TextInfo>
            </S.Info>
            <View>
              <S.TitleDescription> Descrição do evento </S.TitleDescription>
              <S.TextDescription> {eventSelected.description} </S.TextDescription>
            </View>
          </S.Content>
        </ScrollView>
      </S.Container>
      <S.ButtonBuy onPress={() => modalizeRef.current?.open()}>
        <S.TextBuy>Comprar Ingresso</S.TextBuy>
      </S.ButtonBuy>
      <ModalizeBuyTicket
        modalizeRef={modalizeRef}
        confirmBuyTicket={handleAddTicket}
      />
    </SafeAreaView>
  );
}
