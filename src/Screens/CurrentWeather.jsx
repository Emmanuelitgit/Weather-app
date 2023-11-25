import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React, { useState } from 'react';
import {Feather} from "@expo/vector-icons";
import { weatherType } from '../Utilities/WeatherType';

export default function CurrentWeather() {
  const{container, wrapper, temp, feels, highLow, highLowWrapper, bodyWrapper, description, message} = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={70}/>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels liek 5</Text>
        <View style={highLowWrapper}>
          <Text style={highLow}>High: 8</Text>
          <Text style={highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={bodyWrapper}>
        <Text style={description}>Its Sunny</Text>
        <Text style={message}>{weatherType['ThurnderStorm'].message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:"pink",
    paddingTop:Platform.OS=="android" ? 0 : 0,
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  temp:{
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
    fontSize:40
  },
  message:{
    fontSize:25
  }
});
