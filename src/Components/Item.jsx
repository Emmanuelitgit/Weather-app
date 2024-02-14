import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { weatherType } from '../Utilities/WeatherType';
import moment from 'moment';

const Item = ({dt, min, max}) => {
  const {container,date, temp, condition} = styles
  return (
    <View style={container}>
      <Feather name={weatherType[condition].icon} size={50} color="white"/>
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt).format('dddd')}</Text>
        <Text style={date}>{moment(dt).format('h:mm:ss a')}</Text>
      </View>
        <Text style={temp}>{`${Math.round(min)}°/${Math.round(max )}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      borderWidth:5,
      backgroundColor:'indianred'
    },

    temp:{
      color:'white',
      fontSize:15
    },

    date:{
      color:'white',
      fontSize:13
    },
    dateTextWrapper:{
      flexDirection:"column"
    }
})

export default Item