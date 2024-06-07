import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import TopBar from '../../atoms/TopBar';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const ATMs = ({navigation}) => {
  const atms = [
    {id: 1, name: 'ATM 1', latitude: 30.0444, longitude: 31.2357},
    {id: 2, name: 'ATM 2', latitude: 30.0544, longitude: 31.2457},
    {id: 3, name: 'ATM 3', latitude: 30.0644, longitude: 31.2357},
    {id: 4, name: 'ATM 4', latitude: 30.0244, longitude: 31.2457},
    {id: 5, name: 'ATM 5', latitude: 30.0344, longitude: 31.2157},
    {id: 6, name: 'ATM 6', latitude: 30.0744, longitude: 31.2157},
    // Add more ATMs as needed
  ];

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  const handleNotificationPress = () => {
    // Add your notification button handler here
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.0444,
          longitude: 31.2357,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {atms.map(atm => (
          <Marker
            key={atm.id}
            coordinate={{latitude: atm.latitude, longitude: atm.longitude}}
            title={atm.name}
          />
        ))}
      </MapView>
      <TopBar
        navigation={navigation}
        onNotificationPress={handleNotificationPress}
        customStyle={styles.transparentTopBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  transparentTopBar: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default ATMs;
