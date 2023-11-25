import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../Components/IconText';

const City = () => {
    const {conatainer,
           image,
           cityName,
           countryName,
           populationWrapper,
           populationText,
           riseSetText,
           riseSetWrapper
        } = styles
  return (
    <SafeAreaView style={conatainer}>
        <ImageBackground
        source={require("../../assets/city-bg.jpg")}
        style={image}
        >
        <Text style={cityName}>London</Text>
        <Text style={countryName}>UK</Text>
        <View style={populationWrapper}>
        <IconText iconName={'user'} iconColor={'red'} text={'8000'} textStyles={populationText}/>
        </View>
        <View style={riseSetWrapper}>
            <IconText textStyles={riseSetText} iconColor={'white'} iconName={'sunrise'} text={'10:46:58am'}/>
            <IconText textStyles={riseSetText} iconColor={'white'} iconName={'sunset'} text={'17:28:15pm'}/>
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