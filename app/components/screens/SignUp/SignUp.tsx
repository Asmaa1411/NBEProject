import React, {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import LoginButton from '../../atoms/LoginButton';
import LogoBar from '../../atoms/LogoBar';
import styles from './SignUp.style';

const SignUpScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNextPress = () => {
    if (mobileNumber.length < 11) {
      setErrorMessage('Please enter a valid 11-digit mobile number.');
      Alert.alert(
        'Invalid Mobile Number',
        'Please enter a valid 11-digit mobile number.',
      );
    } else {
      setErrorMessage('');
      navigation.navigate('ConfigrationSign');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <LogoBar />
        <Text style={styles.titleText}>Mobile Number</Text>
        <Text style={styles.subtitleText}>
          Enter the mobile number registered in the bank
        </Text>

        <View style={styles.inputWrapper}>
          <View>
            <Text style={styles.staticText}>Mobile Number</Text>
          </View>

          <View>
            <TextInput
              placeholder="Enter Mobile Number"
              placeholderTextColor="#1C2437"
              style={[styles.input, errorMessage ? styles.inputError : null]}
              value={mobileNumber}
              onChangeText={text => setMobileNumber(text)}
              keyboardType="numeric"
            />
          </View>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <LoginButton onPress={handleNextPress} title={'Next'} />
        <Text style={styles.termsText}>
          By signing up, you agree to our{' '}
          <Text style={styles.boldText}>Terms of Service</Text> and acknowledge
          that you have read our{' '}
          <Text style={styles.boldText}>Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
