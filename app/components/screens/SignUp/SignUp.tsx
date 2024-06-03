import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LoginButton from '../../atoms/LoginButton';
import LogoBar from '../../atoms/LogoBar';
import Label from '../../atoms/Label'; // استيراد الـ Label atom
import styles from './SignUp.style';

const SignUpScreen = ({navigation}) => {
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

export default SignUpScreen;
