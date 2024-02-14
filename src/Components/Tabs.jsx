import React from 'react';
import UpcomingWeather from '../Screens/UpcomingWeather';
import CurrentWeather from '../Screens/CurrentWeather';
import City from '../Screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tabs = ({weather}) => {

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
        <Tab.Screen name={'Current'}
        options={{
          tabBarIcon:({focused}) =>(
            <Feather 
            name={'droplet'} 
            size={25} 
            color={focused?'tomato':'grey'}/>
          )
        }}
        >
          {()=> <CurrentWeather weatherData={weather.list[0]}/>}
        </Tab.Screen>
        <Tab.Screen name={'Upcoming'}
        options={{
          tabBarIcon:({focused}) =>(
            <Feather 
            name={'clock'} 
            size={25} 
            color={focused?'tomato':'black'}/>
          )
        }}
        >
          {()=> <UpcomingWeather weatherData={weather.list}/>}
        </Tab.Screen>
        <Tab.Screen name={'City'}
        options={{
          tabBarIcon:({focused}) =>(
            <Feather 
            name={'home'} 
            size={25} 
            color={focused?'tomato':'black'}/>
          )
        }}
        >
        {()=> <City weatherData={weather.city}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs