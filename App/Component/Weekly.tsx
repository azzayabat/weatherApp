import React from 'react';
import {Text, View, Image} from 'react-native';

export const WeeklyBox = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        backgroundColor: '##BFBCBA',
        // opacity: 0.6,
        flexDirection: 'row',
      }}>
      <View style={{flex: 1, justifyContent: 'center', paddingLeft: 25}}>
        <Text>Mon</Text>
      </View>
      <View style={{flex: 1.5, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image
            style={{
              width: '90%',
              height: '90%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={require('../Assets/Images/sunny.png')}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Rainy</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'pink',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>17</Text>
        <Text>/</Text>
        <Text>15</Text>
      </View>
    </View>
  );
};
