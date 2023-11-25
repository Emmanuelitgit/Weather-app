import React from 'react';
import { StyleSheet } from 'react-native';
import UpcomingWeather from './src/Screens/UpcomingWeather';
import CurrentWeather from './src/Screens/CurrentWeather';
import City from './src/Screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Tabs from './src/Components/Tabs';

const App = () => {

  const Tab = createBottomTabNavigator()
  return (
      <Tabs/>
  )
}

export default App