/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

type ButtonTypes = {
  title?: String;
  onPress: () => void;
};
const LoginButton = (props: ButtonTypes) => {
  const {title, onPress} = props;

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.loginText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#007236',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 10,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default LoginButton;
