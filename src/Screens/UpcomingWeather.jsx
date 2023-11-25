import React from 'react'
import { SafeAreaView,FlatList, View, StyleSheet, StatusBar, Text, ImageBackground} from 'react-native';
import Item from "../Components/Item"
                       
  
const DATA =[
    {
        dt: 1661875200,
        main: {
          id:1,
          temp: 296.34,
          feels_like: 296.02,
          temp_min: 296.34,
          temp_max: 298.24,
          pressure: 1015,
          sea_levl: 1015,
          grnd_levl: 933,
          humidity:50,
          temp_kf: -1.9
        },

        weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
    },

    {
      dt: 1661875200,
      main: {
        id:2,
        temp: 296.34,
        feels_like: 296.02,
        temp_min: 296.34,
        temp_max: 298.24,
        pressure: 1015,
        sea_levl: 1015,
        grnd_levl: 933,
        humidity:50,
        temp_kf: -1.9
      },

      weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
  },

  {
    dt: 1661875200,
    main: {
      id:3,
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
      sea_levl: 1015,
      grnd_levl: 933,
      humidity:50,
      temp_kf: -1.9
    },

    weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
}
]    

const UpcomingWeather = () => {
  const {container, image, title} = styles
  return (
  <SafeAreaView style={container}>
    <ImageBackground 
    source={require("../../assets/upcoming-bg.jpg")}
    style={image}
    >
    <Text style={title}>Upcoming Weather</Text>
    <FlatList
      data={DATA}
      renderItem={({item}) => 
      <Item 
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
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