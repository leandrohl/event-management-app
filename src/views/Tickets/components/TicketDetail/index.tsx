import { ScrollView } from 'react-native'
import { Modalize } from 'react-native-modalize';
import * as S from './styles'
import Icon from '../../../../assets/icons';
import { useTheme } from 'styled-components/native';
import IconButton from '../../../../components/Buttons/IconButton';
import { ITicket } from '../../../../services/types';
import QRCode from 'react-native-qrcode-svg';
import { format } from 'date-fns';
interface ITicketDetailsProps {
  modalizeRef: React.MutableRefObject<Modalize>;
  ticketSelected: ITicket
}

export default function TicketDetails(props: ITicketDetailsProps) {
  const { modalizeRef, ticketSelected } = props
  const theme = useTheme()

  const onClose = () => {
    modalizeRef.current?.close()
  }

  const renderNoResults = () => (
    <S.ContainerNoResults>
      <S.ContainerIcon>
        <Icon name='Ticket' height={40} width={40}/>
      </S.ContainerIcon>
      <S.TextNoResults>
        Erro ao processar ingresso
      </S.TextNoResults>
    </S.ContainerNoResults>
  )


  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={500}
      modalHeight={500}
      tapGestureEnabled
      scrollViewProps={{ 
        scrollEnabled: true 
    }}
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
    <ScrollView style={{ height: 400 }}>
      {
        ticketSelected
        ? (
          <S.Container>
            <S.Logo source={{
                uri: `${ticketSelected.event.imageUrl}`
            }}/>
              <S.Content>
                <S.TextTitle> {ticketSelected.event.name} </S.TextTitle>
                <S.Info>
                  <Icon name="Calendar" height={20} width={20}/>
                  <S.TextInfo>{ticketSelected.event.date} </S.TextInfo>
                </S.Info>
                <S.Info>
                  <Icon name="Location" height={20} width={20}/>
                  <S.TextInfo>{ticketSelected.event.local} </S.TextInfo>
                </S.Info>
                <S.Info>
                  <Icon name="Groups" height={20} width={20}/>
                  <S.TextInfo> {ticketSelected.event.organization} </S.TextInfo>
                </S.Info>
                <S.Info>
                  <Icon name="Payments" height={20} width={20}/>
                  <S.TextInfo> Valor do ingresso: {ticketSelected.event.price} </S.TextInfo>
                </S.Info>
                <S.Info>
                  <Icon name="Payments" height={20} width={20}/>
                  <S.TextInfo> Data da compra: {format(new Date(ticketSelected.dateBuy), "dd/MM/yyyy")} </S.TextInfo>
                </S.Info>
                <S.QRCodeView>
                  <QRCode 
                    value={ticketSelected.id} 
                    size={150}
                  /> 
                </S.QRCodeView>
              </S.Content>
            </S.Container>
        ) : renderNoResults()
      }
      </ScrollView>
    </Modalize>
  )
}
