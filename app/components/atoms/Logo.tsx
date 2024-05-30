import React from 'react';
import {Image} from 'react-native';
import style from './Logo.style';
const Logo = () => {
  return (
    <Image
      source={require('../assets/logo.png')}
      style={style.Logo} // adjust width and height as needed
    />
  );
};

export default Logo;
