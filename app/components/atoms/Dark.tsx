import React, {createContext, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

const Dark = () => {
  return (
      <View style={styles.darkModeContainer}>
        <Text style={styles.darkModeText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={value => {
            setIsDarkMode(value);
          }}
        />
      </View>>
  );
};
const styles = StyleSheet.create({
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  darkModeText: {
    fontSize: 16,
  },
});
export default Dark;
