import React from 'react';
import {Image, Text, View} from 'react-native';

export const HourlyWeatherBox = ({data}: any) => {
  // let airTemperature = data.item.airTemperature1000hpa.sg.toFixed(1);
  // let hour = data.item.time;
  // console.log('hour', data.item.time.length);
  console.log('kjdgdf=====', data);
  let hour = new Date(data.time).getUTCHours();
  let airTemperature = data.airTemperature1000hpa.sg.toFixed(1);
  // console.log('hour', hour);
  // console.log('temp', airTemperature);

  return (
    <View
      // key={index}
      style={{
        height: '90%',
        width: 60,
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 10,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{top: '30%'}}>{airTemperature}C</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Image
          style={{width: '75%', height: '85%', resizeMode: 'contain'}}
          source={require(`../Assets/Images/sunny.png`)}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{top: '10%'}}>{hour}H</Text>
      </View>
    </View>
  );
};
