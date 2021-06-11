import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {HomeStackNavigation} from './HomeStack';
import {Search} from '../Pages/Search';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const MyTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: '#53B175',
      text: '#344356',
      card: '#fff',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Weather"
          component={HomeStackNavigation}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="cloud-sun-rain" color={color} size={size}></Icon>
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size}></Icon>
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Mood"
          component={Mood}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="grin-hearts" color={color} size={size}></Icon>
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Feedback"
          component={Feedback}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="comments" color={color} size={size}></Icon>
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Mood = () => {
  return (
    <View>
      <Text>Enter your mood here</Text>
    </View>
  );
};

const Feedback = () => {
  return (
    <View>
      <Text>Feedback</Text>
    </View>
  );
};
