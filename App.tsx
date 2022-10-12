import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import React from "react";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { themeSC, themeNavigation } from "./src/config/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={themeSC}>
      <NavigationContainer theme={themeNavigation}>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}