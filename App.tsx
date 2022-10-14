import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import React from "react";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { themeSC, themeNavigation } from "./src/global/styles/theme";
import { useFonts } from "expo-font";
import { AuthProvider } from "./src/context";


export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={themeSC}>
      <NavigationContainer theme={themeNavigation}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}