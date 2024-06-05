import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const TopBar = ({navigation, onNotificationPress, customStyle}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Image source={require('../assets/menu.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.personIconContainer}>
          <Image
            source={require('../assets/person.png')}
            style={styles.personIcon}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Good Morning</Text>
          <Text style={styles.subtitle}>ASMO2A</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onNotificationPress}
        style={styles.notificationButton}>
        <Image
          source={require('../assets/notification.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#F1F3FB',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 8,
  },
  personIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  personIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    resizeMode: 'cover',
  },
  titleContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  notificationButton: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default TopBar;
