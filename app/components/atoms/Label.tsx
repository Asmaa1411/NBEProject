/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

type LabelTypes = {
  title?: string;
  iconSource: any;
  label?: string;
  isPassword?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  error?: string;
};

const Label = (props: LabelTypes) => {
  const {
    title,
    iconSource,
    label,
    isPassword,
    value,
    onChangeText,
    onBlur,
    error,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          {borderColor: isFocused ? '#007236' : '#FFFFFF80'},
        ]}>
        <View style={styles.iconContainer}>
          <Image source={iconSource} style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, {color: isFocused ? '#007236' : '#FFF'}]}>
            {label}
          </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder={`Enter your ${title}`}
              placeholderTextColor="#FFFFFF"
              secureTextEntry={isPassword && !isPasswordVisible}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                if (onBlur) onBlur();
              }}
              value={value}
              onChangeText={onChangeText}
            />
            {isPassword && (
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIconContainer}>
                <Image
                  source={
                    isPasswordVisible
                      ? require('../assets/eye2.png')
                      : require('../assets/eye.png')
                  }
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFFFFF80',
    borderRadius: 10,
    width: '100%',
    height: 70,
    marginBottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  icon: {},
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  label: {
    color: '#FFF',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    color: '#FFF',
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    paddingHorizontal: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFF',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default Label;
