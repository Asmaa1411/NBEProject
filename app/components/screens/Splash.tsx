/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import splashCenter from '../assets/splashCenter.png';
import splashBottom from '../assets/splashBottom.png';
import {ThemeContext} from '../../../App';

function Splash() {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate('LoginScreen'), 3000);
  }, []);

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
