/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'relative',
  },
  container: {
    flex: 1,
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    paddingTop: 140,
  },

  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    gap: 10,
    width: '80%',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  rememberButton: {
    color: '#fff',
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  rememberText: {
    color: '#fff',
    marginRight: 10,
  },
  forgotText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },

  fingerprintButton: {
    backgroundColor: '#007236',
    borderRadius: 10,
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fingerprintText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#fff',
  },
  signUpButton: {
    color: '#F6A721',
    textDecorationLine: 'underline',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: -10,
    right: -10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    gap: 5,
  },
  link: {
    color: '#F6A721',
    fontSize: 16,
  },
  separator: {
    color: '#fff',
    fontSize: 16,
  },
  copyRight: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
