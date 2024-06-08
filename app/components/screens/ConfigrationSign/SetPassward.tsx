/* eslint-disable comma-dangle */
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LogoBar from '../../atoms/LogoBar';
import LoginButton from '../../atoms/LoginButton';
import Label from '../../atoms/Label';
import {ThemeContext} from '../../../../App';

function SetPassward({navigation}) {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);

  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Minimum 8 characters')
      .matches(/[a-z]/, 'Lower case letter')
      .matches(/[A-Z]/, 'Upper case letter')
      .matches(/\d/, 'Number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Special character')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const validatePassword = password => ({
    lowerCase: /[a-z]/.test(password),
    upperCase: /[A-Z]/.test(password),
    minLength: password.length >= 8,
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    number: /\d/.test(password),
  });

  return (
    <Formik
      initialValues={{password: '', confirmPassword: ''}}
      validationSchema={PasswordSchema}
      onSubmit={values => {
        navigation.navigate('Congrats');
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => {
        const passwordValidations = validatePassword(values.password);
        return (
          <View style={styles.container}>
            <LogoBar />
            <Text style={styles.title}>Set your password</Text>

            <View style={styles.fieldsContainer}>
              <Text style={styles.helperText}>
                Enter a strong password for your online banking account
              </Text>
              <Label
                title="Password"
                iconSource={require('../../assets/iconpass.png')}
                label="Password"
                isPassword={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                titleColor="#B7B7B7"
                backgroundColor="#FFFFFF"
                placeholderColor="#B7B7B7"
                borderColor="#FFFFFF"
                inputBorderColor="#007236"
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Label
                title="Confirm Password"
                iconSource={require('../../assets/iconpass.png')}
                label="Confirm Password"
                isPassword={true}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                titleColor="#B7B7B7"
                backgroundColor="#FFFFFF"
                placeholderColor="#B7B7B7"
                borderColor="#FFFFFF"
                inputBorderColor="#007236"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              <View style={styles.validationContainer}>
                <View style={styles.validationRow}>
                  <Text
                    style={[
                      styles.validationText,
                      passwordValidations.lowerCase && styles.valid,
                    ]}>
                    {passwordValidations.lowerCase ? '🟢' : '⚪'} Lower case
                    letter
                  </Text>
                  <Text
                    style={[
                      styles.validationText,
                      passwordValidations.upperCase && styles.valid,
                    ]}>
                    {passwordValidations.upperCase ? '🟢' : '⚪'} Upper case
                    letter
                  </Text>
                </View>
                <View style={styles.validationRow}>
                  <Text
                    style={[
                      styles.validationText,
                      passwordValidations.minLength && styles.valid,
                    ]}>
                    {passwordValidations.minLength ? '🟢' : '⚪'} Minimum 8
                    characters
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
                  {passwordValidations.specialChar ? '🟢' : '⚪'} Special
                  character
                </Text>
              </View>
            </View>

            <View style={styles.spacer} />
            <LoginButton
              onPress={handleSubmit}
              title={'Submit'}
              disabled={!isValid || values.password !== values.confirmPassword}
            />
          </View>
        );
      }}
    </Formik>
  );
}

const getStyle = (dark: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      padding: 16,
      paddingTop: 40,
      backgroundColor: dark ? '#1f1e1e' : '#F1F3FB',
    },
    title: {
      fontSize: 18,
      fontWeight: '800',
      marginTop: 25,
      marginBottom: 8,
      color: dark ? '#afaeae' : '#1C2437',
    },
    fieldsContainer: {
      marginBottom: 20,
    },
    helperText: {
      color: '#B7B7B7',
      fontSize: 16,
      marginBottom: 5,
    },
    spacer: {
      flex: 1,
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: -10,
      marginBottom: 10,
    },

    validationText: {
      fontSize: 14,
      color: '#B7B7B7',
      marginTop: 5,
    },
    valid: {
      color: '#000000',
    },
    validationRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default SetPassward;
