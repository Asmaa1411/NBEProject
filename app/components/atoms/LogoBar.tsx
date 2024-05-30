/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const LogoBar = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={style.logoButtonContainer}>
        <TouchableOpacity
          style={style.backButtonContainer}
          onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} />
        </TouchableOpacity>
        <View>
          <Image source={require('../assets/logoTransfer.png')} />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  logoButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  backButtonContainer: {
    backgroundColor: '#007236',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default LogoBar;
