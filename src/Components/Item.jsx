import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Item = ({dt, min, max}) => {
  const {container,date, temp} = styles
  return (
    <View style={container}>
      <Feather name='sun' size={50} color="white"/>
        <Text style={date}>{dt}</Text>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
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
      backgroundColor:'pink'
    },

    temp:{
      color:'white',
      fontSize:15
    },

    date:{
      color:'white',
      fontSize:13
    }
})

export default Item