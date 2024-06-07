import React, {useContext, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LoginButton from '../../atoms/LoginButton';
import LogoBar from '../../atoms/LogoBar';
import Label from '../../atoms/Label'; // استيراد الـ Label atom
import styles from './SignUp.style';
import {ThemeContext} from '../../../../App';

const SignUpScreen = ({navigation}) => {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNextPress = values => {
    if (values.mobileNumber.length < 11) {
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
      <Formik
        initialValues={{mobileNumber: ''}}
        validationSchema={Yup.object().shape({
          mobileNumber: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]{11}$/, 'Mobile number must be 11 digits'),
        })}
        onSubmit={values => handleNextPress(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.topContainer}>
              <LogoBar />
              <Text style={styles.titleText}>Mobile Number</Text>
              <Text style={styles.subtitleText}>
                Enter the mobile number registered in the bank
              </Text>
              <View>
                <Label
                  iconSource={require('../../assets/icon3.png')}
                  label="Mobile Number"
                  value={values.mobileNumber}
                  onChangeText={handleChange('mobileNumber')}
                  error={
                    errors.mobileNumber && touched.mobileNumber
                      ? errors.mobileNumber
                      : ''
                  }
                  titleColor="#B7B7B7" // لون عنوان Mobile Number
                  backgroundColor="#FFFFFF"
                  placeholderColor="#B7B7B7"
                  borderColor="#FFFFFF"
                  inputBorderColor="#007236" // لون الحدود عند الضغط عليه
                />
              </View>
              {errors.mobileNumber && touched.mobileNumber ? (
                <Text style={styles.errorText}>{errors.mobileNumber}</Text>
              ) : null}
            </View>

            <View style={styles.bottomContainer}>
              <LoginButton onPress={handleSubmit} title={'Next'} />
              <Text style={styles.termsText}>
                By signing up, you agree to our{' '}
                <Text style={styles.boldText}>Terms of Service</Text> and
                acknowledge that you have read our{' '}
                <Text style={styles.boldText}>Privacy Policy</Text>.
              </Text>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const getStyle = (dark: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: dark ? '#1f1e1e' : '#F1F3FB',
    },
    topContainer: {
      width: '100%',
      marginBottom: 20,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: dark ? '#afaeae' : '#1C2437',
      marginTop: 20,
      textAlign: 'left',
    },
    subtitleText: {
      fontSize: 14,
      color: '#B7B7B7',
      marginTop: 1,
      textAlign: 'left',
      marginBottom: 25,
    },

    input: {
      fontSize: 16,
      color: '#1C2437',
      paddingVertical: 10,
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: 5,
    },
    termsText: {
      color: dark ? '#B7B7B7' : '#1C2437',
    },
    boldText: {
      color: dark ? '#5c5b5b' : '#1C2437',
      fontWeight: '900',
    },
  });

export default SignUpScreen;
