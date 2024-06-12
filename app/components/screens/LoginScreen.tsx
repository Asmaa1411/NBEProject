import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from './Loginscreen.style';
import Logo from '../atoms/Logo';
import SquareButton from '../atoms/SquareButton';
import Label from '../atoms/Label';
import LoginButton from '../atoms/LoginButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginContext} from '../../../App';

const LoginScreen = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const {login, setIsLogin} = useContext(LoginContext);

  const toggleLogin = async value => {
    try {
      console.log(value, 'isLogin');
      await AsyncStorage.setItem('isLogin', JSON.stringify(value));
    } catch (e) {
      console.error('Error saving dark mode preference:', e);
    }
  };

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={values => {
        // Handle form submission
        console.log(values);
        setIsLogin(!login);
        toggleLogin(!login);
        console.log('LoginScreen::', !login);

        navigation.navigate('MyTabs');
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="light-content"
            translucent={true}
          />

          <ImageBackground
            source={require('../assets/background.png')}
            style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <View style={styles.logoButtonContainer}>
              <View>
                <SquareButton title="AR" onPress={() => {}} />
              </View>
              <View>
                <Logo />
              </View>
            </View>
            <Text style={styles.header}>
              <Text>Welcome to{'\n'}</Text>
              <Text>The National Bank{'\n'}</Text>
              <Text>of Egypt</Text>
            </Text>

            <Label
              title="Username"
              iconSource={require('../assets/icon1.png')}
              label="Username"
              onChangeText={handleChange('username')}
              value={values.username}
              titleColor="#FFF" // اللون الافتراضي للعنوان هو الأبيض
              backgroundColor="rgba(0, 0, 0, 0.3)" // اللون الافتراضي للخلفية
              placeholderColor="rgba(255, 255, 255, 0.5)"
              borderColor="#FFFFFF80"
              inputTextColor="#FFFFFF"
            />
            {errors.username && touched.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <Label
              title="Password"
              iconSource={require('../assets/icon2.png')}
              label="Password"
              isPassword={true}
              onChangeText={handleChange('password')}
              value={values.password}
              titleColor="#FFF" // اللون الافتراضي للعنوان هو الأبيض
              backgroundColor="rgba(0, 0, 0, 0.3)" // اللون الافتراضي للخلفية
              placeholderColor="rgba(255, 255, 255, 0.5)"
              borderColor="#FFFFFF80"
              inputTextColor="#FFFFFF"
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={styles.row1}>
              <TouchableOpacity onPress={() => console.log('Remember me')}>
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log('Forgot Password?')}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row2}>
              <LoginButton title={'Log In'} onPress={handleSubmit} />
              <TouchableOpacity onPress={() => console.log('Log In')} />
              <Image source={require('../assets/fingerprint.png')} />
            </View>

            <View style={styles.row3}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.signUpButton}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <View style={styles.linksContainer}>
                <Text style={styles.link}>Contact Us</Text>
                <Text style={styles.separator}> - </Text>
                <Text style={styles.link}>FAQs</Text>
                <Text style={styles.separator}> - </Text>
                <Text style={styles.link}>Help</Text>
              </View>
              <Text style={styles.copyRight}>
                Copyright © NBE 2021 All Rights Reserved - National Bank of
                Egypt
              </Text>
            </View>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
