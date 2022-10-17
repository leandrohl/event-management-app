import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Icon from '../assets/icons';
import DetailsEvent from '../views/DetailsEvent';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Search from '../views/Search';
import Tickets from '../views/Tickets';
import Login from '../views/Login';
import NewUser from '../views/NewUser';
import EditUser from '../views/EditUser';
import { useTheme } from '@react-navigation/native';
import { useAuth } from '../contexts/Auth';
import Loading from '../components/Loading';

const AppStack = createNativeStackNavigator();
const AppTab = createBottomTabNavigator();

export default function Routes() {
  const { loadingScreen } = useAuth()

  if (loadingScreen) {
    return <Loading />
  }

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Events" component={AppTabs}/>
      <AppStack.Screen name="Search" component={AppTabs}/>
      <AppStack.Screen name="Tickets" component={AppTabs}/>
      <AppStack.Screen name="Profile" component={AppTabs}/>
      <AppStack.Screen name="Details" component={DetailsEvent}/>
      <AppStack.Screen name="Login" component={Login}/>
      <AppStack.Screen name="NewUser" component={NewUser}/>
      <AppStack.Screen name="EditUser" component={EditUser}/>
    </AppStack.Navigator>
  )
}


function AppTabs() {
  const theme = useTheme()
  return (
    <AppTab.Navigator 
      initialRouteName="Home" 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          const colorIcon = focused ? theme.colors.primary : color

          const routesIcon = {
            Home: <Icon name='Home' fill={colorIcon}/>,
            Buscar: <Icon name='Search' fill={colorIcon} />,
            Ingressos: <Icon name="Ticket" fill={colorIcon}/>,
            Perfil: <Icon name="Person" fill={colorIcon}/>
          }

          return routesIcon[route.name]
        }
      })}
    >
      <AppTab.Screen name="Home" component={Home}/>
      <AppTab.Screen name="Buscar" component={Search}/>
      <AppTab.Screen name="Ingressos" component={Tickets}/>
      <AppTab.Screen name="Perfil" component={Profile}/>
    </AppTab.Navigator>
  );
}