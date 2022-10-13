import { ScrollView, View, Text } from "react-native";
import Card from "../../components/Card";
import { useEffect, useState } from "react"

import * as S from './styles'
import api from "../../api/axios";
import { IEvents } from "../../api/types";

export default function Home({ navigation }) {
  const [eventList, setEventList] = useState<IEvents[]>([])

  useEffect(() => {
    searchEvents()
  }, [])

  const searchEvents = async () => {
    try {
      const response = await api.get<IEvents[]>('/events')
      if (response) {
        setEventList(response.data)
      }
    } catch (err) {
      // console.log(err)
    }
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
                title={event.name}
                imageUrl={event.imageUrl}
                dateInicial={event.date}
                local={event.local}
              />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
