/* eslint-disable comma-dangle */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import LogoBar from '../../atoms/LogoBar';
import LoginButton from '../../atoms/LoginButton';

function SetPassward({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidations, setPasswordValidations] = useState({
    lowerCase: false,
    upperCase: false,
    minLength: false,
    specialChar: false,
    number: false,
  });

  const validatePassword = pwd => {
    setPasswordValidations({
      lowerCase: /[a-z]/.test(pwd),
      upperCase: /[A-Z]/.test(pwd),
      minLength: pwd.length >= 8,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
      number: /\d/.test(pwd),
    });
  };

  const handlePasswordChange = pwd => {
    setPassword(pwd);
    validatePassword(pwd);
  };

  return (
    <View style={styles.container}>
      <LogoBar />
      <Text style={styles.title}>Set your password</Text>

      <View style={styles.fieldsContainer}>
        <Text style={styles.helperText}>
          Enter a strong password for your online banking account
        </Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.staticText}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#1C2437"
            style={styles.input}
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.staticText}>Confirm Password</Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#1C2437"
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.validationContainer}>
          <View style={styles.validationRow}>
            <Text
              style={[
                styles.validationText,
                passwordValidations.lowerCase && styles.valid,
              ]}>
              {passwordValidations.lowerCase ? '🟢' : '⚪'} Lower case letter
            </Text>
            <Text
              style={[
                styles.validationText,
                passwordValidations.upperCase && styles.valid,
              ]}>
              {passwordValidations.upperCase ? '🟢' : '⚪'} Upper case letter
            </Text>
          </View>
          <View style={styles.validationRow}>
            <Text
              style={[
                styles.validationText,
                passwordValidations.minLength && styles.valid,
              ]}>
              {passwordValidations.minLength ? '🟢' : '⚪'} Minimum 8 characters
            </Text>

            <Text
              style={[
                styles.validationText,
                passwordValidations.number && styles.valid,
              ]}>
              {passwordValidations.number ? '🟢' : '⚪'} Number
            </Text>
          </View>
          <Text
            style={[
              styles.validationText,
              passwordValidations.specialChar && styles.valid,
            ]}>
            {passwordValidations.specialChar ? '🟢' : '⚪'} Special character
          </Text>
        </View>
      </View>

      <View style={styles.spacer} />
      <LoginButton
        onPress={() => navigation.navigate('Congrats')}
        title={'Submit'}
        disabled={
          !Object.values(passwordValidations).every(Boolean) ||
          password !== confirmPassword
        }
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
    marginBottom: 20,
  },
  helperText: {
    color: '#B7B7B7',
    fontSize: 16,
    marginBottom: 40,
  },
  spacer: {
    flex: 1,
  },
  inputWrapper: {
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 13,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  staticText: {
    color: '#007236',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    color: '#1C2437',
    paddingVertical: 10,
  },
  validationContainer: {
    marginTop: 20,
  },
  validationText: {
    fontSize: 14,
    color: '#B7B7B7',
    marginTop: 5,
  },
  valid: {
    color: 'green',
  },
  validationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SetPassward;
