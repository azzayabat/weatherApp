import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type DetailCardType = {
  top: number;
  data: any;
};

export const DetailCard = ({
  top,

  data,
}: DetailCardType) => {
  const currentDate = new Date().getHours();

  const temp = data.filter(
    item => new Date(item.time).getUTCHours() === currentDate,
  );
  const wind = temp[0]?.windSpeed1000hpa.sg.toFixed(1) || 0;
  const visibility = temp[0]?.visibility.sg.toFixed(1) || 0;
  const humidity = temp[0]?.humidity.sg.toFixed(1) || 0;

  return (
    <View style={[styles.overlay, {top: `${top}%`}]}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
            flex: 2,
            tintColor: '#595a62',
            shadowRadius: 1,
            shadowOpacity: 0.1,
          }}
          source={require('../Assets/Images/wind.png')}
        />
        <Text style={{flex: 1, fontWeight: '600', fontSize: 14}}>
          {wind}km/h
        </Text>
        <Text style={{flex: 1, fontSize: 12, color: 'grey', fontWeight: '400'}}>
          Wind
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain',
            flex: 2,
            shadowRadius: 0.7,
            shadowOpacity: 0.1,
          }}
          source={require('../Assets/Images/humidity.png')}
        />
        <Text style={{flex: 1, fontWeight: '600', fontSize: 14}}>
          {humidity}%
        </Text>
        <Text style={{flex: 1, fontSize: 12, color: 'grey', fontWeight: '400'}}>
          Humidity
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Icon size={20} name="eye" />
        </View>
        <Text style={{flex: 1, fontWeight: '600', fontSize: 14}}>
          {visibility}km
        </Text>
        <Text style={{flex: 1, fontSize: 12, color: 'grey', fontWeight: '400'}}>
          Visibility
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    padding: 5,
    marginTop: 10,
    alignContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'rgb(244,240,236)',
    width: '90%',
    height: '15%',
    alignSelf: 'center',
    borderRadius: 20,
  },
});
