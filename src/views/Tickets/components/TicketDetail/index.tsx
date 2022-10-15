import auth from '@react-native-firebase/auth';
import { Text, View, ScrollView } from 'react-native'
import { Modalize } from 'react-native-modalize';
import * as S from './styles'
import Button from '../../../../components/Buttons/Button';
import { IEvent } from '../../../../api/types';
import Icon from '../../../../assets/icons';
import { useTheme } from 'styled-components/native';
import IconButton from '../../../../components/Buttons/IconButton';

interface ITicketDetailsProps {
  modalizeRef: React.MutableRefObject<Modalize>;
  eventSelected: IEvent
}

export default function TicketDetails(props: ITicketDetailsProps) {
  const { modalizeRef, eventSelected } = props

  const theme = useTheme()


  const onClose = () => {
    modalizeRef.current?.close()
  }

  if (!eventSelected) return <Text> Erro</Text>

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={500}
      modalHeight={500}
      tapGestureEnabled
      scrollViewProps={{ 
        showsVerticalScrollIndicator: true, 
        scrollEnabled: true }}
      HeaderComponent={
        <S.HeaderView>
          <S.HeaderText> Ingresso </S.HeaderText>
          <IconButton iconName='Close' handleClick={onClose}/>
        </S.HeaderView>
      }
      modalStyle={{
        backgroundColor: theme.colors.background
      }}
    >
    <ScrollView style={{ height: 500 }}>
      <S.Container>
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
          </S.Content>
      </S.Container>
        </ScrollView>
    </Modalize>
  )
}
