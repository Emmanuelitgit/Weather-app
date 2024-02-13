import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tabs from './src/Components/Tabs';
import { ActivityIndicator } from 'react-native';
import { useGetWeather } from './src/Hooks/useGetWeather';

const App = () => { 

  const [loading, errorMsg, weather] = useGetWeather()

 console.log(weather)
  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  if(loading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }
 if(!loading){
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