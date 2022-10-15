import { Button, Text, View, ScrollView } from "react-native";
import Input from "../../components/Input";
import { useState, useEffect } from 'react'

import * as S from './styles'
import { IEvent } from "../../api/types";
import api from "../../api/axios";
import Card from "../../components/Card";
import Icon from "../../assets/icons";
import { useTheme } from "styled-components/native";

export default function Search({ navigation }) {
  const [search, setSearch] = useState('')
  const [eventList, setEventList] = useState<IEvent[]>([])

  const theme = useTheme()

  const eventFiltered = search.length > 0
    ? eventList.filter(event => event.name.toLowerCase().includes(search.toLowerCase()))
    : []

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
        <View >
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
                  onPress={() => goToEventDetails(event.id)}
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
                  onPress={() => goToEventDetails(event.id)}
                />
              ))
            )
          }
        </View>  
      </ScrollView>
    </S.Container>
  );
}
