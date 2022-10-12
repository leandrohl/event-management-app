import { Button, Text, View } from "react-native";

import * as S from './styles'

export default function Search({ navigation }) {
  return (
    <S.Container>
      <Text>Search Event</Text>
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </S.Container>
  );
}
