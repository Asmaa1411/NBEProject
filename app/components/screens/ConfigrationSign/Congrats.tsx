/* eslint-disable comma-dangle */
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Logo from '../../atoms/Logo';
import LoginButton from '../../atoms/LoginButton';

function Congrats({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoButtonContainer}>
        <View>
          <Logo />
        </View>
      </View>

      <ImageBackground
        source={require('../../assets/congrats.png')}
        style={styles.backgroundImage}
        imageStyle={styles.image}>
        <Text style={styles.header}>Congratulations</Text>
        <Text style={styles.header2}>
          You have successfully registered in NBE online banking service
        </Text>
        <View style={styles.buttonContainer}>
          <LoginButton
            title="Finish"
            onPress={() => navigation.navigate('Home1')}
            buttonStyle={styles.finishButton}
            textStyle={styles.finishButtonText}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007236',
  },
  logoButtonContainer: {
    paddingVertical: 60,
    paddingBottom: -20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    top: 0,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 40,
  },
  header2: {
    position: 'absolute',
    top: 50,
    color: 'white',
    paddingHorizontal: 40,
  },
  backgroundImage: {
    flex: 1,
    bottom: -15,
    right: 23,
    justifyContent: 'flex-end',
  },
  image: {
    resizeMode: 'contain',
  },
  buttonContainer: {
    padding: 20,
    paddingLeft: 50,
  },
  finishButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  finishButtonText: {
    color: '#007236',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Congrats;
