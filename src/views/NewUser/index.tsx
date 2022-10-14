import { Button, Text, View } from "react-native";

import * as S from './styles'

export default function NewUser({ navigation }) {
  return (
    <View>
      <Text>Profile</Text>
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}