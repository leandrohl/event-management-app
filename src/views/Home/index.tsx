import { Button, Text, View } from "react-native";

import * as S from './styles'

export default function Home({ navigation }) {
  return (
    <S.Container>
      <Text>HOME</Text>
      <Button 
        title="Go to Search"
        onPress={() => navigation.navigate('Buscar')}
      />
    </S.Container>
  );
}
