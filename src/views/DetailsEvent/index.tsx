import { useEffect, useState } from "react";
import { ScrollView, Text, View, SafeAreaView } from "react-native";
import api from "../../api/axios";
import { IEvent } from "../../api/types";
import Icon from "../../assets/icons";
import IconButton from "../../components/Buttons/IconButton";

import * as S from './styles'

interface IParams {
  eventId: number
}

export default function DetailsEvent( { navigation, route }) {
  const { eventId } = route.params as IParams
  const [eventSelected, setEventSelected] = useState<IEvent>()

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
      <S.ButtonBuy>
        <S.TextBuy>Comprar Ingresso</S.TextBuy>
      </S.ButtonBuy>
    </SafeAreaView>
  );
}
