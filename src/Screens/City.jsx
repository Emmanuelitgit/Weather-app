import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../Components/IconText';
import moment from 'moment';

const City = ({weatherData}) => {
    const {conatainer,
           image,
           cityName,
           countryName,
           populationWrapper,
           populationText,
           riseSetText,
           riseSetWrapper
        } = styles
    const {name, country, population, sunrise, sunset} = weatherData
  return (
    <SafeAreaView style={conatainer}>
        <ImageBackground
        source={require("../../assets/city-bg.jpg")}
        style={image}
        >
        <Text style={cityName}>{country}</Text>
        <Text style={countryName}>{name}</Text>
        <View style={populationWrapper}>
        <IconText 
          iconName={'user'} 
          iconColor={'red'} 
          text={`Population: ${population}`} 
          textStyles={populationText}/>
        </View>
        <View style={riseSetWrapper}>
            <IconText 
              textStyles={riseSetText} 
              iconColor={'white'} 
              iconName={'sunrise'} 
              text={moment(sunrise).format('h:mm:ss a')}/>
            <IconText 
              textStyles={riseSetText} 
              iconColor={'white'} 
              iconName={'sunset'} 
              text={moment(sunset).format('h:mm:ss a')}/>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    conatainer:{
        flex:1,
    },
    image:{
        flex:1
    },
    countryName:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:40,
        color:'white',
        fontWeight:'bold'
    },
    cityName:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'white',
        fontWeight:'bold'
    },
    populationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color:'red'
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-around",
        marginTop:30
    },
    riseSetText:{
        fontSize:20,
        color:"white",
    }
})

export default City