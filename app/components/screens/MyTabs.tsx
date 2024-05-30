import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import Home from './Home/Home';
import Transfer from './Transfer/Transfer';
import Beneficiaries from './Beneficiaries/Beneficiaries';
import ATMs from './ATMs/ATMs';
import AirPay from './AirPay/AirPay';

// Import your images
import homeIcon from '../assets/homeIqon.png';
import transferIcon from '../assets/transferIqon.png';
import beneficiariesIcon from '../assets/beneficiariesIqon.png';
import atmsIcon from '../assets/atmsIqon.png';
import airpayIcon from '../assets/airPayIcon.png';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SecondHome from './Home/SecondHome';
import BeneficiaryHistory from './Beneficiaries/BeneficiaryHistory';

const Tab = createBottomTabNavigator();

const getTabBarIcon = routeName => {
  switch (routeName) {
    case 'Home':
      return homeIcon;
    case 'Transfer':
      return transferIcon;
    case 'Beneficiaries':
      return beneficiariesIcon;
    case 'ATMs':
      return atmsIcon;
    case 'AirPay':
      return airpayIcon;
    default:
      return homeIcon; // Default icon
  }
};

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabButton,
              {
                backgroundColor: isFocused ? '#007236' : '#F1F3FB',
                borderRadius: 15,
              },
            ]}>
            <Image
              source={getTabBarIcon(route.name)}
              style={[
                styles.icon,
                {tintColor: isFocused ? '#FFFFFF' : '#B7B7B7'},
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home1"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Beneficiaries" component={Beneficiaries} />
      <Drawer.Screen name="ATMs" component={ATMs} />
      <Drawer.Screen
        name="SecondHome"
        component={SecondHome}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="BeneficiaryHistory"
        component={BeneficiaryHistory}
        options={{headerShown: false}}
      />
      {/* Add other drawer screens here */}
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home2"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen name="Home" component={Home} options={{headerShown: false}} /> */}
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Beneficiaries"
        component={Beneficiaries}
        options={{headerShown: false}}
      />
      <Tab.Screen name="ATMs" component={ATMs} options={{headerShown: false}} />
      <Tab.Screen name="AirPay" component={AirPay} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    backgroundColor: '#FFFFFF',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    margin: 5,
    borderRadius: 10,
  },
  icon: {},
});

export default MyTabs;
