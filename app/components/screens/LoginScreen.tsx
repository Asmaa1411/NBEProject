/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './Loginscreen.style';
import Logo from '../atoms/Logo';
import SquareButton from '../atoms/SquareButton';
import Label from '../atoms/Label';
import LoginButton from '../atoms/LoginButton';

const LoginScreen = ({navigation}) => {
  const handleButtonPress = () => {
    console.log('');
  };

  return (
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
            <SquareButton title="AR" onPress={handleButtonPress} />
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
        />
        <Label
          title="Password"
          iconSource={require('../assets/icon2.png')}
          label="password"
          isPassword={true} // Specify that this is a password field
        />

        <View style={styles.row1}>
          <TouchableOpacity onPress={() => console.log('Remember me')}>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Forgot Password?')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <LoginButton
            title={'Log In'}
            onPress={() => navigation.navigate('MyTabs')}
          />

          <TouchableOpacity onPress={() => console.log('Log In')} />
          <Image source={require('../assets/fingerprint.png')} />
        </View>

        <View style={styles.row3}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
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
            Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
