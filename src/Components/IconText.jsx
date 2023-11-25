import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = ({iconName, iconColor, text, textStyles}) => {
  return (
    <View style={styles.container}>
        <Feather name={iconName} size={50} color={iconColor}/>
        <Text style={[styles.textTheme, textStyles]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textTheme:{
        fontWeight:'bold'
    },
    container:{
        alignItems:'center'
    }
})
export default IconText