import { Button, Text, View } from "react-native";

import * as S from './styles'

export default function Tickets({ navigation }) {
  return (
    <S.Container>
      <Text>Profile</Text>
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </S.Container>
  );
}
