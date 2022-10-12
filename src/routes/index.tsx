import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from '../assets/icons';
import { themeSC } from '../config/styles/theme';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Search from '../views/Search';
import Tickets from '../views/Tickets';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator 
      initialRouteName="Home" 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          const colorIcon = focused ? themeSC.colors.primary : color

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
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Buscar" component={Search}/>
      <Tab.Screen name="Ingressos" component={Tickets}/>
      <Tab.Screen name="Perfil" component={Profile}/>
    </Tab.Navigator>
  );
}