import React, {useEffect} from 'react';
import {useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

type WeatherType = {
  temperature?: number;
  date?: any;
  image?: any;
  country?: string;
  condition?: string;
  data?: any;
};
export const Weather = ({
  temperature,
  date,
  image,
  country,
  condition,
  data,
}: WeatherType) => {
  const currentDate = new Date().getHours();

  const temp = data.filter(
    item => new Date(item.time).getUTCHours() === currentDate,
  );
  // console.log('temptekn', temp);
  const airtemp = temp[0]?.airTemperature1000hpa.sg.toFixed(1) || 0;
  // const wind = temp[0]?.windSpeed1000hpa.sg || 0;
  return (
    <ImageBackground
      style={styles.top}
      source={require('../Assets/Images/sky.png')}>
      <Text style={{fontSize: 20, fontWeight: '500', marginTop: 10}}>
        {country}
      </Text>
      <View style={styles.weather}>
        <View style={styles.weather__header}>
          <Text>{date}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: 'white',
              fontWeight: '700',
              shadowOpacity: 1,
              shadowRadius: 10,
            }}>
            {condition}
          </Text>

          <Text
            style={{
              flex: 5,
              fontSize: 100,
              fontWeight: '400',
              color: 'rgba(255, 245, 240, 1)',
              textShadowColor: 'black',
              shadowOpacity: 0.7,
              shadowRadius: 10,
            }}>
            {airtemp}C
          </Text>
        </View>
        <Image
          style={{
            //   width: 180,
            //   padding: 30,
            height: '60%',
            resizeMode: 'contain',
            position: 'absolute',
            top: '70%',
            shadowRadius: 0.1,
            shadowOpacity: 0.3,
            shadowOffset: {width: 20, height: 2},
          }}
          source={require('../Assets/Images/cloudy.png')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 2,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  weather: {
    top: '8%',
    width: '70%',
    height: '55%',
    borderRadius: 70,

    alignItems: 'center',
    backgroundColor: 'rgba(115, 146, 179, 0.8)',
  },
  weather__header: {
    position: 'absolute',
    top: -18,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 20,
  },
});
