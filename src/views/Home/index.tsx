import { ScrollView, View, Text } from "react-native";
import Card from "../../components/Card";
import { useEffect, useState } from "react"

import * as S from './styles'
import api from "../../api/axios";
import { IEvent } from "../../api/types";

export default function Home({ navigation }) {
  const [eventList, setEventList] = useState<IEvent[]>([])

  useEffect(() => {
    searchEvents()
  }, [])

  const searchEvents = async () => {
    try {
      const response = await api.get<IEvent[]>('/events')
      if (response) {
        setEventList(response.data)
      }
    } catch (err) {
      // console.log(err)
    }
  }

  const goToEventDetails = (id: number) => {
    navigation.navigate('Details', { eventId: id });
  }

  return (
    <View>
      <ScrollView>
        <S.Info>
          <S.TextTitle> Eventos </S.TextTitle>
          <S.TextDescription> 
            Que bom te ter de volta, que tal dar uma olhada nos próximos eventos! 
          </S.TextDescription>
        </S.Info>
        <View>
          {eventList.map(event => (
              <Card 
                key={event.id}
                id={event.id}
                title={event.name}
                imageUrl={event.imageUrl}
                dateInicial={event.date}
                local={event.local}
                onPress={() => goToEventDetails(event.id)}
              />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
