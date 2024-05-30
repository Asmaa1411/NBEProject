// DarkModeToggle.js
import React from 'react';
import {View, Switch} from 'react-native';
import {useDarkMode} from '../atoms/DarkModeContext';

export const DarkModeToggle = () => {
  const {isDarkMode, toggleDarkMode} = useDarkMode();

  return (
    <View style={{position: 'absolute', bottom: 20, right: 20}}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};
