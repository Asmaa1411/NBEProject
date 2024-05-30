// CustomDrawerContent.js
import React from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useDarkMode} from '../atoms/DarkModeContext';

const CustomDrawerContent = props => {
  const {isDarkMode, toggleDarkMode} = useDarkMode();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      {/* Add other drawer items here */}
      <View style={styles.darkModeContainer}>
        <DrawerItem
          label="Dark Mode"
          onPress={toggleDarkMode}
          icon={({color, size}) => (
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default CustomDrawerContent;
