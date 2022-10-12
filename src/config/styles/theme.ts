import { DefaultTheme } from "@react-navigation/native";

export const themeSC = {
  colors: {
    primary: '#d8532a',
    secondary: '#10495c',
    background: '#121212',
    text: "#fafafa",
    card: "#121212"
  },
  fonts: {
    montSerratRegular: 'Montserrat-Regular',
    montSerratMedium: 'Montserrat-Medium',
    montSerratBold: 'Montserrat-Bold',
    robotoRegular: 'Roboto-Regular',
    robotoMedium: 'Roboto-Medium',
    robotoBold: 'Roboto-Bold'
  }
}


export const themeNavigation: typeof DefaultTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    ...themeSC.colors
  }
};