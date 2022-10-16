import { ScrollView, View } from "react-native";
import Card from "../../components/Card";
import { useEffect, useState } from "react"

import * as S from './styles'
import api from "../../services/axios";
import { IEvent } from "../../services/types";
import Snackbar from "react-native-snackbar";

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
      Snackbar.show({
        text: 'Houve um erro ao buscar os eventos!',
        duration: Snackbar.LENGTH_SHORT
      })
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
