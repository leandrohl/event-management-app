import * as S from './styles'

interface IEventCard {
  imageUrl: string,
  title: string,
  local: string,
  dateInicial: string,
}

export default function Card(props: IEventCard) {
  const { title, imageUrl, local, dateInicial  } = props

  return (
    <S.Container>
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
