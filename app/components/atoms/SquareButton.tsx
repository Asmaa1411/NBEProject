/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';

const SquareButton = ({onPress, title, color, fontSize = 16}) => {
  return (
    <TouchableOpacity onPress={onPress} color style={[styles.button]}>
      <Text style={[styles.buttonText, {fontSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    color: ' #007236',
    fontWeight: 'bold',
  },
});

export default SquareButton;
