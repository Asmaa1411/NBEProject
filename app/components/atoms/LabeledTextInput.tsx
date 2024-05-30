import React, {useRef, useEffect} from 'react';
import {View, TextInput, StyleSheet, Animated} from 'react-native';

const LabeledTextInput = ({label, value, onChangeText, inputStyleNew}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [value, animatedValue]);

  const labelTranslateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.label, {transform: [{translateY: labelTranslateY}]}]}>
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={inputStyleNew ?? styles.input}
        multiline={true}
        numberOfLines={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    position: 'absolute',
    left: 12,
    top: 3,
    fontSize: 16,
    color: '#1C2437',
    fontWeight: 'bold',
    zIndex: 1,
  },
  input: {
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
  nonEditable: {
    backgroundColor: '#f0f0f0',
  },
});

export default LabeledTextInput;
