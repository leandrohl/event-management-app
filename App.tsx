import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import React from "react";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme, themeNavigation } from "./src/global/styles/theme";
import { useFonts } from "expo-font";
import { AuthProvider } from "./src/contexts/Auth";
import { LOCALE_YUP } from "./src/config/constants";
import { setLocale } from 'yup'
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf')
  })
  setLocale(LOCALE_YUP)

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={themeNavigation}>
        <AuthProvider>
          <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}