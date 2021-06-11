import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {HourlyWeatherBox} from '../Component/Hourly';
import {DetailCard} from '../Component/DetailCard';
import {Weather} from '../Component/Weather';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const WeatherApp = ({navigation}) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/washington')
      .then(response => response.json())
      .then(res => {
        setWeather(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Weather data={weather} />
      <View style={[style.bottom, {paddingLeft: 10}]}>
        <View
          style={{
            marginTop: '15%',
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              paddingBottom: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, fontWeight: '600'}}>Today</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 15,
              }}
              onPress={() => navigation.navigate('Weekly')}>
              <Text style={{paddingRight: 5, fontSize: 14, fontWeight: '600'}}>
                Next 7 Days
              </Text>
              <Icon name="chevron-right" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: '55%',
            flexDirection: 'row',
          }}>
          <ScrollView horizontal>
            {weather.map(item => {
              return <HourlyWeatherBox data={item} />;
            })}
          </ScrollView>
        </View>
      </View>
      <DetailCard top={58} data={weather} />
    </View>
  );
};

const style = StyleSheet.create({
  bottom: {
    flex: 1,
    backgroundColor: 'rgba(220,220,220, 0.5)',
  },
});
