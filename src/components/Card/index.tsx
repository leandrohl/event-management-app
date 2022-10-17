import * as S from './styles'

interface IEventCard {
  id: string,
  imageUrl: string,
  title: string,
  local: string,
  dateInicial: string,
  onPress: () => void,
}

export default function Card(props: IEventCard) {
  const { title, imageUrl, local, dateInicial, onPress  } = props

  return (
    <S.Container onPress={onPress}>
      <S.Logo source={{
        uri: `${imageUrl}`
      }}/>

      <S.Content>
        <S.TextDate> {dateInicial} </S.TextDate>
        <S.TextTitle> {title} </S.TextTitle>
        <S.TextLocal> {local} </S.TextLocal>
      </S.Content>
    </S.Container>
  );
}
