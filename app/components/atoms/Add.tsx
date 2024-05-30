import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>+ Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#007236',
  },
  buttonText: {
    color: '#007236',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddButton;
