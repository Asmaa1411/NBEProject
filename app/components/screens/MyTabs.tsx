import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Home from './Home/Home';
import Transfer from './Transfer/Transfer';
import Beneficiaries from './Beneficiaries/Beneficiaries';
import ATMs from './ATMs/ATMs';
import AirPay from './AirPay/AirPay';
import homeIcon from '../assets/homeIqon.png';
import transferIcon from '../assets/transferIqon.png';
import beneficiariesIcon from '../assets/beneficiariesIqon.png';
import atmsIcon from '../assets/atmsIqon.png';
import airpayIcon from '../assets/airPayIcon.png';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import SecondHome from './Home/SecondHome';
import BeneficiaryHistory from './Beneficiaries/BeneficiaryHistory';
import {ThemeContext} from '../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const {dark} = useContext(ThemeContext);
  return (
    <View
      style={[styles.tabBar, {backgroundColor: dark ? '#1f1e1e' : '#FFFFFF'}]}>
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
                backgroundColor: isFocused
                  ? '#007236'
                  : dark
                  ? '#524f4f'
                  : '#F1F3FB',
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

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const {dark, setDark} = useContext(ThemeContext);
  const styles = getStyle(dark);

  // دالة لتحديث حالة الدارك مود وحفظها في AsyncStorage
  const setDarkMode = async value => {
    try {
      console.log(value, 'dark');
      await AsyncStorage.setItem('darkMode', JSON.stringify(value));
    } catch (e) {
      console.error('Error saving dark mode preference:', e);
    }
  };
  const deleteState = async () => {
    try {
      await AsyncStorage.removeItem('isLogin');
    } catch (e) {
      console.error('Error getting dark mode preference:', e);
    }
  };
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.logoButtonContainer}>
        <View style={styles.row}>
          <Image source={require('../assets/logoTransfer.png')} />
        </View>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>{'AR'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/drawer1.png')} />
        <Text style={styles.text}>Accounts Summary</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/drawer2.png')} />
        <Text style={styles.text}>Open Certificates & Deposits</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/drawer3.png')} />
        <Text style={styles.text}>Payment Services</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/drawer4.png')} />
        <Text style={styles.text}>Cards Services</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/drawer5.png')} />
        <Text style={styles.text}>Hard Token</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/drawer6.png')} />
        <Text style={styles.text}>Offers</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/drawer7.png')} />
        <Text style={styles.text}>Calculators</Text>
      </View>
      <View style={styles.dark}>
        <View style={styles.row}>
          <Image source={require('../assets/drawer8.png')} />
          <Text style={styles.text}>Dark Mode</Text>
        </View>
        <View>
          <Switch
            value={dark}
            onValueChange={() => {
              setDark(!dark);
              setDarkMode(!dark);
            }}
          />
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.row2}
          onPress={() => {
            deleteState();
            navigation.navigate('LoginScreen');
          }}>
          <Image source={require('../assets/drawer9.png')} />
          <Text style={styles.text2}>Logout</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.beneficiaryInfoContainer}>
        <Image source={require('../assets/hala.png')} style={styles.benImage} />
        <View style={styles.beneficiaryDetails}>
          <Text style={styles.benName}>Asmaa Saad</Text>
          <Text style={styles.benName}>+ 01025874963</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 330,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          // يمكنك إضافة المزيد من الأنماط هنا حسب الحاجة
        },
        drawerType: 'front',
      }}>
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
      <Tab.Screen
        name="AirPay"
        component={AirPay}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 80,
    borderTopWidth: 0.5,
    borderTopColor: '#B7B7B7',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    margin: 5,
    borderRadius: 10,
  },
});

const getStyle = dark =>
  StyleSheet.create({
    container: {
      backgroundColor: dark ? '#444343' : '#F1F3FB',
      width: 330,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
    },
    row: {
      paddingBottom: 20,
      paddingLeft: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    dark: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    row2: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 28,
    },
    text: {
      fontSize: 18,
      marginLeft: 10,
      fontFamily: 'Roboto-Bold',
      color: dark ? '#c7c5c5' : '#1C2437',
    },
    text2: {
      fontSize: 18,
      marginLeft: 10,
      fontFamily: 'Roboto-Bold',
      color: '#EB001B',
    },

    icon: {},
    logoButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
    },
    beneficiaryInfoContainer: {
      flexDirection: 'row',
      backgroundColor: dark ? '#b9b6b6' : '#FFF',
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 10,
      alignItems: 'center',
    },
    benImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    beneficiaryDetails: {
      flex: 1,
    },
    benName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1C2437',
    },
    button: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: dark ? '#b4b3b3' : '#FFF',
      marginRight: 15,
      marginBottom: 8,
    },
    buttonText: {
      color: ' #007236',
      fontWeight: 'bold',
    },
  });

export default MyTabs;
