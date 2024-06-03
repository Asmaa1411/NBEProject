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
  titleColor?: string; // لون العنوان
  backgroundColor?: string; // لون الخلفية
  placeholderColor?: string; // لون النص التوضيحي
  borderColor?: string; // لون الحدود
  inputTextColor?: string;
  inputBackgroundColor?: string;
  inputBorderColor?: string;
  inputPlaceholderColor?: string;
};

const Label = (props: LabelTypes) => {
  const {
    title,
    iconSource,
    label,
    isPassword,
    value,
    onChangeText,
    titleColor,
    backgroundColor,
    placeholderColor,
    borderColor,
    inputBorderColor,
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
          {
            borderColor: isFocused ? '#007236' : borderColor,
            backgroundColor: backgroundColor,
          },
        ]}>
        <View style={styles.iconContainer}>
          <Image source={iconSource} style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <Text
            style={[styles.label, {color: isFocused ? '#007236' : titleColor}]}>
            {label}
          </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[
                styles.input,
                {borderColor: isFocused ? '#007236' : inputBorderColor},
              ]}
              placeholder={`Enter your ${title}`}
              placeholderTextColor={placeholderColor}
              secureTextEntry={isPassword && !isPasswordVisible}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 70,
    marginBottom: 15,
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
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
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
  },
});

export default Label;
