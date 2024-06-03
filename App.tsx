import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './app/components/screens/LoginScreen';
import Splash from './app/components/screens/Splash';
import SignUpScreen from './app/components/screens/SignUp/SignUp';
import ConfigrationSign from './app/components/screens/ConfigrationSign/ConfigrationSign';
import Home from './app/components/screens/MyTabs';
import SecondHome from './app/components/screens/Home/SecondHome';

import TransferOTP from './app/components/screens/Transfer/TransferOTP';
import Transfer from './app/components/screens/Transfer/Transfer';
import SetPassward from './app/components/screens/ConfigrationSign/SetPassward';
import Congrats from './app/components/screens/ConfigrationSign/Congrats';

import AddBeneficiary from './app/components/screens/Beneficiaries/AddBeneficiary';
import MyTabs from './app/components/screens/MyTabs';

const Stack = createNativeStackNavigator();

function App() {
  const scheme = useColorScheme();
  const MyTheme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ConfigrationSign" component={ConfigrationSign} />
        <Stack.Screen name="SetPassward" component={SetPassward} />
        <Stack.Screen name="Congrats" component={Congrats} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="SecondHome" component={SecondHome} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="TransferOTP" component={TransferOTP} />
        <Stack.Screen name="AddBeneficiary" component={AddBeneficiary} />
        <Stack.Screen name="AirPay" component={Home} />
        <Stack.Screen name="Home1" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
