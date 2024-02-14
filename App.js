import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tabs from './src/Components/Tabs';
import { ActivityIndicator } from 'react-native';
import { useGetWeather } from './src/Hooks/useGetWeather';
import ErrorItem from './src/Components/ErrorItem';

const App = () => { 

  const [loading, errorMsg, weather] = useGetWeather()

 console.log(weather)

  if(loading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }

  if(errorMsg){
    return(
      <ErrorItem/>
    )
  }

 if(!loading && !errorMsg){
  return (
    <Tabs weather={weather}/>
)
 }
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:20,
  }
})

export default App