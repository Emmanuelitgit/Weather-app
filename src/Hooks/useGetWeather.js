import React from 'react';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env'

export const useGetWeather = () =>{
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);

    const featchWeatherData = async () =>{
        try{
         const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
         const data = await response.json();
         setWeather(data);
         setLoading(false)
        }catch(err){
         setErrorMsg("Could not fetch weather")
        }finally{
         setLoading(false)
        }
       }

       useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLat(location.coords.latitude);
          setLon(location.coords.longitude);
          await featchWeatherData()
        })();
      }, [lat, lon]);
      return [loading, errorMsg, weather]
}