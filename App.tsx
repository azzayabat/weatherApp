/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {TabNavigation} from './App/Navigation/TabNavigation';
import {WeatherApp} from './App/Pages/WeatherApp';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <WeatherApp /> */}
      <TabNavigation />
    </SafeAreaView>
  );
};

export default App;
