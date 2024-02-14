import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React, { useState } from 'react';
import {Feather} from "@expo/vector-icons";
import { weatherType } from '../Utilities/WeatherType';

export default function CurrentWeather({weatherData}) {
  const{container, wrapper, tempStyles, feels, highLow, highLowWrapper, bodyWrapper, description, message} = styles
  const {main:{temp, feels_like, temp_max, temp_min}, weather} = weatherData;
  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView 
       style={[
          wrapper, 
          {backgroundColor:weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather 
          name={weatherType[weatherCondition]?.icon} 
          size={70}
          color={'white'}/>
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <View style={highLowWrapper}>
          <Text style={highLow}>{`High ${temp_max}° `}</Text>
          <Text style={highLow}>{`Low ${temp_min}°`}</Text>
        </View>
      </View>
      <View style={bodyWrapper}>
        <Text style={description}>{weather[0]?.description}</Text>
        <Text style={message}>{weatherType[weatherCondition]?.message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    paddingTop:Platform.OS=="android" ? 0 : 0,
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  tempStyles:{
    color:"black",
    fontSize:48
  },
  feels:{
    fontSize:30,
    color:"black"
  },
  highLow:{
    fontSize:20,
    color:"black"
  },
  highLowWrapper:{
    flexDirection:"row"
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:"flex-start",
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:43
  },
  message:{
    fontSize:25
  }
});
