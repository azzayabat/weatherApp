import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const Search = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        style={{
          width: '80%',
          height: '3%',
          //   backgroundColor: 'grey',
          borderColor: 'black',
          borderWidth: 1,
          margin: 20,
          //   padding: 5,
        }}
      />
    </View>
  );
};
