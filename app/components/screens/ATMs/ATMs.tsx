import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import TopBar from '../../atoms/TopBar';
// import MapViewDirections from 'react-native-maps-directions';

const ATMs = () => {
  const atms = [
    {id: 1, name: 'ATM 1', latitude: 30.0444, longitude: 31.2357},
    {id: 2, name: 'ATM 2', latitude: 30.0544, longitude: 31.2457},
    // Add more ATMs as needed
  ];

  // const origin = {latitude: 30.0444, longitude: 31.2357}; // Starting point
  // const destination = {latitude: 30.0544, longitude: 31.2457}; // Ending point
  const handleMenuPress = () => {
    // Add your menu button handler here
  };

  const handleNotificationPress = () => {
    // Add your notification button handler here
  };

  return (
    <View style={styles.container}>
      <TopBar
        onMenuPress={handleMenuPress}
        onNotificationPress={handleNotificationPress}
      />
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

        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={'AIzaSyAd-n52_dO_t4YcUGm6UiIC8ubfI7JHdBE'}
          strokeWidth={3}
          strokeColor="hotpink"
        /> */}
      </MapView>
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
});

export default ATMs;
