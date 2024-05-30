import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomDrawerContent from './CustomDrawerContent';
import BeneficiaryHistory from '../screens/Beneficiaries/BeneficiaryHistory';
import SecondHome from '../screens/Home/SecondHome';
import Beneficiaries from '../screens/Beneficiaries/Beneficiaries';
import ATMs from '../screens/ATMs/ATMs';
import Home from '../screens/Home/Home';

// HomeScreen Component
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Open Drawer"
      />
    </View>
  );
}

// NotificationsScreen Component
function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Open Drawer"
      />
    </View>
  );
}

// SomeOtherScreen Component - Not directly in the drawer
function SomeOtherScreen({}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        //  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Open Drawer"
      />
    </View>
  );
}

// Create the Drawer Navigator
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

// Create the Stack Navigator
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
