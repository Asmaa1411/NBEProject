import 'react-native-gesture-handler';
import React, {createContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const ThemeContext = createContext(null);
const Stack = createNativeStackNavigator();

const App = () => {
  const deviceColorScheme = useColorScheme();
  const [dark, setDark] = useState(deviceColorScheme === 'dark');
  const theme = dark ? DarkTheme : DefaultTheme;

  // دالة لتحديث حالة الدارك مود وحفظها في AsyncStorage
  const setDarkMode = async value => {
    try {
      await AsyncStorage.setItem('darkMode', JSON.stringify(value));
    } catch (e) {
      console.error('Error saving dark mode preference:', e);
    }
  };

  // دالة لاسترجاع حالة الدارك مود من AsyncStorage
  const getDarkMode = async () => {
    try {
      const value = await AsyncStorage.getItem('darkMode');
      return value !== null ? JSON.parse(value) : false;
    } catch (e) {
      console.error('Error getting dark mode preference:', e);
      return false;
    }
  };

  // في مكان مناسب مثل App.js، استخدم useEffect لتحديث حالة الدارك مود عند بدء تشغيل التطبيق
  useEffect(() => {
    const fetchDarkMode = async () => {
      const darkMode = await getDarkMode();
      // إذا لم يتم تحديد قيمة دارك مود، استخدم القيمة الافتراضية لجهاز الاستخدام
      setDark(darkMode !== null ? darkMode : deviceColorScheme === 'dark');
    };

    fetchDarkMode();
  }, []);

  // عندما يقوم المستخدم بتغيير حالة الدارك مود، استخدم هذه الدالة لتحديث القيمة في الذاكرة المحلية وفي AsyncStorage
  const toggleDarkMode = async () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    await setDarkMode(newDarkMode);
  };

  return (
    <ThemeContext.Provider value={{dark, setDark}}>
      <NavigationContainer theme={theme}>
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
    </ThemeContext.Provider>
  );
};

export default App;
