import Button from '../../../../components/Buttons/Button';
import * as S from './styles'
import {View} from 'react-native'

interface ITicketCard {
  id: number,
  imageUrl: string,
  title: string,
  local: string,
  dateInicial: string,
  onPress: () => void,
}

export default function TickeCard(props: ITicketCard) {
  const { title, imageUrl, local, dateInicial, onPress  } = props

  return (
    <S.Container>
      <S.Logo source={{
        uri: `${imageUrl}`
      }}/>

      <S.Content>
        <S.TextDate> {dateInicial} </S.TextDate>
        <S.TextTitle> {title} </S.TextTitle>
        <S.TextLocal> {local} </S.TextLocal>
        <View style={{ marginTop: 12 }}>
          <Button 
            title='Vizualizar Ingresso'
            handleClick={onPress}
            variant="outlined"
          />
        </View>
      </S.Content>
    </S.Container>
  );
}
