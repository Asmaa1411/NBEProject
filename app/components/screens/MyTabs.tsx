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

// Import your images
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
import LoginScreen from './LoginScreen';

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
      style={[styles.tabBar, {backgroundColor: dark ? '#1f1e1e' : '#F1F3FB'}]}>
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

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.logoButtonContainer}>
        <View style={styles.row}>
          <Image source={require('../assets/logoTransfer.png')} />
        </View>
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/account.png')} />
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/open.png')} />
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/payment.png')} />
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/cardss.png')} />
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/hard.png')} />
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/offers.png')} />
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/calculators.png')} />
      </View>
      <View style={styles.row}>
        <Image source={require('../assets/dark.png')} />
        {/* <Switch value={dark} onChange={() => setDark(!dark)} /> */}
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Image source={require('../assets/logout.png')} />
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
    borderTopWidth: 1,
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
  icon: {},
  logoButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  backButtonContainer: {
    backgroundColor: '#007236',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  beneficiaryInfoContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
  container: {
    backgroundColor: '#F1F3FB',
    width: 330,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  row: {
    paddingBottom: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default MyTabs;
