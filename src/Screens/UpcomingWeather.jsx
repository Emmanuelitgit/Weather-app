import React from 'react'
import { SafeAreaView,FlatList,StyleSheet, ImageBackground} from 'react-native';
import Item from "../Components/Item"
                          

const UpcomingWeather = ({weatherData}) => {
  const {container, image, title} = styles
  return (
  <SafeAreaView style={container}>
    <ImageBackground 
    source={require("../../assets/upcoming-bg.jpg")}
    style={image}
    >
    <FlatList
      data={weatherData}
      renderItem={({item}) => 
      <Item 
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
       />}
      keyExtractor={item => item.main.id}
    />
    </ImageBackground>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"royalblue"
  },
  title: {
    fontSize: 20,
    textAlign:'center'
  },
  image:{
    flex:1
  }
});

export default UpcomingWeather;