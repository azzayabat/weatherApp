import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Text} from 'react-native';
import {WeatherApp} from '../Pages/WeatherApp';
import {Weekly} from '../Pages/Weekly';

const Stack = createStackNavigator();

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hourly" component={WeatherApp}></Stack.Screen>
      <Stack.Screen name="Weekly" component={Weekly}></Stack.Screen>
    </Stack.Navigator>
  );
};
