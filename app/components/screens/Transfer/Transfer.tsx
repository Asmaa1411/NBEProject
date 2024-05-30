import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import LogoBar from '../../atoms/LogoBar';
import LoginButton from '../../atoms/LoginButton';

function Transfer({navigation}) {
  const [selectedTransferType, setSelectedTransferType] = React.useState();
  const [selectedTransferFrom, setSelectedTransferFrom] = React.useState();
  const [selectedTransferTo, setSelectedTransferTo] = React.useState();
  const [amount, setAmount] = React.useState('');
  const [reason, setReason] = React.useState('');

  return (
    <View style={styles.container}>
      <LogoBar />
      <Text style={styles.title}>Transfer</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Type of transfer"
          placeholderTextColor="#000"
          style={styles.input}
          editable={false}
        />
        <Picker
          selectedValue={selectedTransferType}
          onValueChange={itemValue => setSelectedTransferType(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Between your accounts" value="option1" />
          <Picker.Item label="Between your accounts" value="option2" />
        </Picker>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Transfer from"
          placeholderTextColor="#1C2437"
          style={styles.input}
          editable={false}
        />
        <Picker
          selectedValue={selectedTransferFrom}
          onValueChange={itemValue => setSelectedTransferFrom(itemValue)}
          style={styles.picker}>
          <Picker.Item
            label="042-653214521245 - $2,145,5874.25"
            value="account1"
          />
          <Picker.Item
            label="042-653214521245 - $2,145,5874.25"
            value="account2"
          />
        </Picker>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Transfer to"
          placeholderTextColor="#1C2437"
          style={styles.input}
          editable={false}
        />
        <Picker
          selectedValue={selectedTransferTo}
          onValueChange={itemValue => setSelectedTransferTo(itemValue)}
          style={styles.picker}>
          <Picker.Item label="056-32154875423 - $1,523.48" value="accountA" />
          <Picker.Item label="056-32154875423 - $1,523.48" value="accountB" />
        </Picker>
      </View>

      <View style={styles.input2}>
        <TextInput
          placeholder="Amount to transfer"
          placeholderTextColor="#1C2437"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.input3}>
        <TextInput
          placeholder="Reason of transfer"
          placeholderTextColor="#B7B7B7"
          value={reason}
          onChangeText={setReason}
          style={styles.input}
        />
      </View>

      <View style={styles.spacer} />
      <LoginButton
        onPress={() => navigation.navigate('TransferOTP')}
        title={'Transfer'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F1F3FB',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 25,
    marginBottom: 8,
    color: '#1C2437',
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
  input2: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 13,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 2,
    paddingBottom: 25,
    paddingHorizontal: 8,
  },
  input3: {
    marginBottom: 16,
    marginTop: -7,
    backgroundColor: '#fff',
    borderRadius: 13,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 8,
  },
  input: {
    fontSize: 18,
    color: '#1C2437',
    height: 40,
    fontWeight: '500',
  },
  picker: {
    height: 50,
    marginTop: -25,
  },
  spacer: {
    flex: 1,
  },
});

export default Transfer;
