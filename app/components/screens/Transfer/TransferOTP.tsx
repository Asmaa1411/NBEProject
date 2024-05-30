/* eslint-disable comma-dangle */
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Modal, Image} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import LogoBar from '../../atoms/LogoBar';
import LoginButton from '../../atoms/LoginButton';

function TransferOTP({navigation}) {
  const [otpCode, setOtpCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    // أي عمليات تريدها لمعالجة النقر على زر Submit
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <LogoBar />
      <Text style={styles.title}>OTP</Text>

      <View style={styles.fieldsContainer}>
        <Text style={styles.helperText}>
          Enter 5 digit code we sent to +20 101 131 5412
        </Text>
        <OTPTextInput
          inputCount={5}
          handleTextChange={text => setOtpCode(text)}
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInput}
        />
        <Text style={styles.transparentText}>Didn’t receive the code?</Text>
        <Text style={styles.transparentText2}>Request new one in 00:12</Text>
      </View>

      <View style={styles.spacer} />
      <LoginButton onPress={handleSubmit} title={'Submit'} />

      {/* النافذة المودال */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.images}>
              <View style={styles.image1}>
                <Image source={require('../../assets/circle.png')} />
              </View>
              <View style={styles.image2}>
                <Image source={require('../../assets/circle2.png')} />
              </View>
              <View style={styles.image3}>
                <Image source={require('../../assets/circle3.png')} />
              </View>
              <View style={styles.image4}>
                <Image source={require('../../assets/circle4.png')} />
              </View>
            </View>

            <Text style={styles.modalText1}>Mission Complete!</Text>
            <Text style={styles.modalText2}>
              Transfer to Jsmine Robert was successful
            </Text>
            <LoginButton
              onPress={() => setModalVisible(!modalVisible)}
              title={'Finish'}
            />
          </View>
        </View>
      </Modal>
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
  },
  helperText: {
    color: '#B7B7B7',
    fontSize: 16,
    marginBottom: 40,
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
  // ستايلات النافذة المودال
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText1: {
    color: '#1C2437',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
  },
  modalText2: {
    color: '#B7B7B7',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  images: {
    position: 'relative',
    marginBottom: 180,
  },
  image1: {
    position: 'absolute',
    left: -70,
  },
  image2: {
    position: 'absolute',
    left: -40,
    top: 40,
  },
  image3: {
    position: 'absolute',
    top: 60,
    left: -20,
  },
  image4: {
    position: 'absolute',
    top: 75,
    left: -7,
  },
});

export default TransferOTP;
