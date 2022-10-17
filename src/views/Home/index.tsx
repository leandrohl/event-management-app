import { ScrollView, View } from "react-native";
import Card from "../../components/Card";
import { useEffect, useState } from "react"

import * as S from './styles'
import { IEvent } from "../../services/types";
import firestore from '@react-native-firebase/firestore';

export default function Home({ navigation }) {
  const [eventList, setEventList] = useState<IEvent[]>([])
  const database = firestore();

  useEffect(() => {
    searchEvents()
  }, [])

  const searchEvents = async () => {
    database.collection('Events').onSnapshot(( query ) => {
      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setEventList(list)
    }) 
  }

  const goToEventDetails = (event: IEvent) => {
    navigation.navigate('Details', { event });
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
                onPress={() => goToEventDetails(event)}
              />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
