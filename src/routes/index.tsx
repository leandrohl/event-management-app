import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Icon from '../assets/icons';
import { themeSC } from '../global/styles/theme';
import DetailsEvent from '../views/DetailsEvent';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Search from '../views/Search';
import Tickets from '../views/Tickets';
import Login from '../views/Login';
import NewUser from '../views/NewUser';

const isSignedIn = false

const HomeStack = createNativeStackNavigator();

function HomeStackView() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Events" component={Home}/>
      <HomeStack.Screen name="Search" component={Search}/>

      <HomeStack.Screen name="Details" component={DetailsEvent}/>
    </HomeStack.Navigator>
  )
}

const SearchStack = createNativeStackNavigator();

function SearchStackView() {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={Search}/>
      <SearchStack.Screen name="Details" component={DetailsEvent}/>
    </SearchStack.Navigator>
  )
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackView() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      { isSignedIn 
      ?  <ProfileStack.Screen name="Profile" component={Profile}/>
      : (
        <>
          <ProfileStack.Screen name="Login" component={Login}/>
          <ProfileStack.Screen name="NewUser" component={NewUser}/>
        </>
      )
      }
    </ProfileStack.Navigator>
  )
}

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
      <Tab.Screen name="Home" component={HomeStackView}/>
      <Tab.Screen name="Buscar" component={SearchStackView}/>
      <Tab.Screen name="Ingressos" component={Tickets}/>
      <Tab.Screen name="Perfil" component={ProfileStackView}/>
    </Tab.Navigator>
  );
}