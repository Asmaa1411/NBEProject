/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../App';

const LogoBar = () => {
  const {dark} = useContext(ThemeContext);
  const style = getStyle(dark);
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

const getStyle = (dark: any) =>
  StyleSheet.create({
    logoButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: dark ? '#1f1e1e' : '#F1F3FB',
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
