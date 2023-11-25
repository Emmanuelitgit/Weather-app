import React from 'react';
import UpcomingWeather from '../Screens/UpcomingWeather';
import CurrentWeather from '../Screens/CurrentWeather';
import City from '../Screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tabs = () => {

  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'grey',
        headerTitleStyle:{
            color:'tomato'
        },
        tabBarStyle:{
            backgroundColor:'lightblue',
        },
        headerStyle:{
            backgroundColor:'lightblue'
        }
      }}
      >
        <Tab.Screen name={'current'} component={CurrentWeather}
        options={{
          tabBarIcon:({focused}) =>(
            <Feather 
            name={'droplet'} 
            size={25} 
            color={focused?'tomato':'grey'}/>
          )
        }}
        />
        <Tab.Screen name={'upcoming'} component={UpcomingWeather}
        options={{
          tabBarIcon:({focused}) =>(
            <Feather 
            name={'clock'} 
            size={25} 
            color={focused?'tomato':'black'}/>
          )
        }}
        />
        <Tab.Screen name={'city'} component={City}
        options={{
          tabBarIcon:({focused}) =>(
            <Feather 
            name={'home'} 
            size={25} 
            color={focused?'tomato':'black'}/>
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs