/* eslint-disable comma-dangle */
import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import LogoBar from '../../atoms/LogoBar';
import LoginButton from '../../atoms/LoginButton';

function ConfigrationSign({navigation}) {
  const otpInput = useRef(null);

  return (
    <View style={styles.container}>
      <LogoBar />
      <Text style={styles.title}>Verification</Text>

      <View style={styles.fieldsContainer}>
        <Text style={styles.helperText}>
          Enter 5 digit code we sent to +20 101 131 5412
        </Text>
        <OTPTextInput
          ref={otpInput}
          inputCount={5}
          handleTextChange={text => console.log(text)}
          tintColor="#007236"
          offTintColor="#ccc"
          containerStyle={styles.otpContainer}
          textInputStyle={[styles.otpInput, {height: 60}]}
        />
        <Text style={styles.transparentText}>Didn’t receive the code?</Text>
        <Text style={styles.transparentText2}>Request new one in 00:12</Text>
      </View>

      <View style={styles.spacer} />
      <LoginButton
        onPress={() => navigation.navigate('SetPassward')}
        title={'Submit'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#F1F3FB',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 25,
    marginBottom: 8,
    color: '#1C2437',
  },
  fieldsContainer: {
    marginBottom: 100,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 13,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 20,
    color: '#1C2437',
    marginBottom: 10,
  },
  helperText: {
    color: '#B7B7B7',
    fontSize: 16,
    marginBottom: 30,
  },
  transparentText: {
    color: '#B7B7B7',
    fontSize: 14,
  },
  transparentText2: {
    color: '#1C2437',
    fontWeight: '600',
    fontSize: 14,
  },
  spacer: {
    flex: 1,
  },
});

export default ConfigrationSign;
