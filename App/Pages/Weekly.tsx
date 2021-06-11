import React from 'react';
import {Text, View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {WeeklyBox} from '../Component/Weekly';
export const Weekly = () => {
  // const dimensions = useWindowDimensions();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1.5,
          paddingTop: '10%',
          alignItems: 'center',
          // backgroundColor: 'rgba (118, 170, 206, 0.8)',
        }}>
        <View
          style={{
            width: '80%',
            height: '90%',
            backgroundColor: '#FED018',
            shadowOpacity: 0.2,
            shadowRadius: 0.9,
            // opacity: 0.8,
            borderRadius: 30,
            flexDirection: 'row',
            // margin: 10,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,

                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: '90%',
                  resizeMode: 'contain',
                  shadowRadius: 1,
                  shadowOpacity: 0.1,
                  shadowOffset: {width: 15, height: 5},
                  margin: 10,
                }}
                source={require('../Assets/Images/sunny.png')}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1.5,
              paddingLeft: 20,

              justifyContent: 'center',
            }}>
            <View>
              <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>
                Tomorrow
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 60,
                  color: 'yellow',
                  fontWeight: '600',
                  shadowOpacity: 1,
                }}>
                23
              </Text>
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: '600',
                  color: 'black',
                }}>
                /
              </Text>
              <Text
                style={{
                  fontSize: 40,
                  lineHeight: 80,
                  fontWeight: '600',
                  color: 'black',
                  shadowOpacity: 8,
                  shadowRadius: 0.8,
                }}>
                27
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: '-5%'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '500',
                  shadowOpacity: 1,
                  shadowRadius: 8,
                }}>
                rainy
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '500',
                }}>
                -
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '500',
                  shadowOpacity: 1,
                  shadowRadius: 8,
                }}>
                cloudy
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 3, backgroundColor: 'white'}}>
        <ScrollView>
          <WeeklyBox />
          <WeeklyBox />
          <WeeklyBox />
          <WeeklyBox />
          <WeeklyBox />
          <WeeklyBox />
          <WeeklyBox />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
