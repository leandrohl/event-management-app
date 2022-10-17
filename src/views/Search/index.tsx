import { View, ScrollView } from "react-native";
import Input from "../../components/Input";
import { useState, useEffect } from 'react'

import * as S from './styles'
import { IEvent } from "../../services/types";
import Card from "../../components/Card";
import Icon from "../../assets/icons";
import { useTheme } from "styled-components/native";
import firestore from '@react-native-firebase/firestore';

export default function Search({ navigation }) {
  const [search, setSearch] = useState('')
  const [eventList, setEventList] = useState<IEvent[]>([])
  const database = firestore();

  const theme = useTheme()

  const eventFiltered = search.length > 0
    ? eventList.filter(event => event.name.toLowerCase().includes(search.toLowerCase()))
    : []

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

  const renderNoResults = () => (
    <S.ContainerNoResults>
      <S.ContainerIcon>
        <Icon name='Search' height={40} width={40} fill={theme.colors.placeHolderInput}/>
      </S.ContainerIcon>
      <S.TextNoResults>
        Nenhum resultado encontrado
      </S.TextNoResults>
    </S.ContainerNoResults>
  )

  return (
    <S.Container>
      <Input 
        value={search}
        handleChange={(text) => setSearch(text)}
        placeholder="Pesquisar por "
        icon="Search"
      />
      <ScrollView style={{ marginTop: 16}}>
        <View>
          { eventFiltered.length > 0
            ? (
              eventFiltered.map(event => (
                <Card 
                  key={event.id}
                  id={event.id}
                  title={event.name}
                  imageUrl={event.imageUrl}
                  dateInicial={event.date}
                  local={event.local}
                  onPress={() => goToEventDetails(event)}
                />
              ))
            )
            : search.length > 0 
            ? renderNoResults()
            : (
              eventList.map(event => (
                <Card 
                  key={event.id}
                  id={event.id}
                  title={event.name}
                  imageUrl={event.imageUrl}
                  dateInicial={event.date}
                  local={event.local}
                  onPress={() => goToEventDetails(event)}
                />
              ))
            )
          }
        </View>  
      </ScrollView>
    </S.Container>
  );
}
