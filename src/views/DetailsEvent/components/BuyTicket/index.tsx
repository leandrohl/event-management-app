import { Modalize } from 'react-native-modalize';
import * as S from './styles'
import Button from '../../../../components/Buttons/Button';
import { useTheme } from 'styled-components/native';

interface IBuyTicket {
  modalizeRef: React.MutableRefObject<Modalize>;
  confirmBuyTicket: () => void;
}

export default function BuyTicket(props: IBuyTicket) {
  const { modalizeRef, confirmBuyTicket } = props
  const theme = useTheme()

  const onClose = () => {
    modalizeRef.current?.close()
  }

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={300}
      modalHeight={300}
      modalStyle={{
        backgroundColor: theme.colors.background
      }}
      HeaderComponent={
        <S.HeaderView>
          <S.HeaderText> Adquirir Ingresso </S.HeaderText>
        </S.HeaderView>
      }
    >
      <S.Container>
        <S.ContentText>
          Para garantir sua presença nesse evento, compre agora seu ingresso!
        </S.ContentText>
        <S.ButtonsView>
          <Button 
            title='Cancelar' 
            handleClick={onClose}
            variant-
          />
          <Button 
            title='Adquirir Ingresso'
            handleClick={() => {
              confirmBuyTicket()
              onClose()
            }}
          />
        </S.ButtonsView>
      </S.Container>
    </Modalize>
  )
}
