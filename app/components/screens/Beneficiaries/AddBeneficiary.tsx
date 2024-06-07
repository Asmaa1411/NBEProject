import React, {useContext} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import LogoBar from '../../atoms/LogoBar';
import LoginButton from '../../atoms/LoginButton';
import {launchImageLibrary} from 'react-native-image-picker';
import LabeledTextInput from '../../atoms/LabeledTextInput';
import {ThemeContext} from '../../../../App';

function AddBeneficiary({navigation}) {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);
  const [selectedTransferType, setSelectedTransferType] = React.useState();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [accountNumber, setAccountNumber] = React.useState(
    'EG150003004250008857447010180',
  );
  const [phoneNumber, setPhoneNumber] = React.useState('+20 101 131 5412');
  const [email, setEmail] = React.useState('theahmadsami@gmail.com');
  const [image, setImage] = React.useState(null);

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: false}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handleAddBeneficiary = () => {
    const beneficiaryData = {
      firstName,
      lastName,
      accountNumber,
      phoneNumber,
      email,
      image,
    };
    console.log('beneficiaryData', beneficiaryData);
    navigation.navigate('Beneficiaries', {newBeneficiary: beneficiaryData});
  };

  return (
    <View style={styles.container}>
      <LogoBar />
      <View style={styles.imagePickerContainer}>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{uri: image}} style={styles.image} />
          ) : (
            <Image
              source={require('../../assets/camera.png')}
              style={styles.cameraIcon}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.nameContainer}>
        <LabeledTextInput
          label="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          inputStyleNew={styles.namesInput}
        />
        <LabeledTextInput
          label="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
          inputStyleNew={styles.namesInput}
        />
      </View>

      <View style={styles.inputWrapper}>
        <LabeledTextInput
          label="Bank branch"
          inputStyleNew={styles.pickerStyle}
        />
        <Picker
          selectedValue={selectedTransferType}
          onValueChange={itemValue => setSelectedTransferType(itemValue)}
          style={styles.picker}>
          <Picker.Item label="043 - Water Way Mall" value="option1" />
          <Picker.Item label="044 - Water Way Mall" value="option2" />
          <Picker.Item label="045 - Water Way Mall" value="option3" />
        </Picker>
      </View>

      <LabeledTextInput
        label="Account number"
        value={accountNumber}
        onChangeText={text => setAccountNumber(text)}
      />

      <LabeledTextInput
        label="Phone number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />

      <LabeledTextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <View style={styles.spacer} />
      <LoginButton onPress={handleAddBeneficiary} title={'Add Beneficiary'} />
    </View>
  );
}

const getStyle = (dark: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: dark ? '#1f1e1e' : '#F1F3FB',
    },
    imagePickerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    imagePicker: {
      backgroundColor: '#fff',
      borderRadius: 13,
      borderColor: '#ccc',
      borderWidth: 1,
      height: 150,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cameraIcon: {
      width: 50,
      height: 50,
      tintColor: '#007236',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 13,
    },
    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
      width: '100%',
    },
    inputWrapper: {
      marginBottom: 8,
      backgroundColor: '#fff',
      borderRadius: 13,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingVertical: 1,
      paddingHorizontal: 8,
    },
    picker: {
      height: 50,
      marginTop: -25,
    },
    spacer: {
      flex: 1,
    },
    namesInput: {
      width: 175,
      backgroundColor: '#fff',
      borderRadius: 13,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 8,
      fontSize: 18,
      color: '#1C2437',
      height: 60,
      fontWeight: '500',
      paddingTop: 20,
    },
    pickerStyle: {
      paddingBottom: 5,
    },
  });

export default AddBeneficiary;
