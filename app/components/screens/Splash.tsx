/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import splashCenter from '../assets/splashCenter.png';
import splashBottom from '../assets/splashBottom.png';
import {LoginContext, ThemeContext} from '../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splash() {
  const {dark} = useContext(ThemeContext);
  const {login, setIsLogin} = useContext(LoginContext);
  const styles = getStyle(dark);
  const navigation = useNavigation();
  const GetIsLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('isLogin');
      console.log(value, 'isLogin');
      return value !== null ? JSON.parse(value) : false;
    } catch (e) {
      console.error('Error getting dark mode preference:', e);
      return false;
    }
  };
  useEffect(() => {
    setTimeout(async () => {
      const isLogin = await GetIsLogin();
      console.log('Splash: ', isLogin);
      isLogin
        ? navigation.navigate('MyTabs')
        : navigation.navigate('LoginScreen');
    }, 3000);
  }, []);
  /*

navigation.reset({
            index: 0,
            routes: [{name: 'MyTabs'}],
          })
            */
  return (
    <View style={styles.container}>
      <Image source={splashCenter} style={styles.splashCenter} />
      <Image source={splashBottom} style={styles.splashBottom} />
    </View>
  );
}
const getStyle = (dark: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: dark ? '#1f1e1e' : '#F1F3FB',
    },
    splashCenter: {
      marginBottom: 20,
    },
    splashBottom: {
      position: 'absolute',
      marginBottom: 20,
      bottom: 0,
    },
  });

export default Splash;
