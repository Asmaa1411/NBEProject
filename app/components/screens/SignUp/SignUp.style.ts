import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  topContainer: {
    width: '100%',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C2437',
    marginTop: 20,
    textAlign: 'left',
  },
  subtitleText: {
    fontSize: 14,
    color: '#B7B7B7',
    marginTop: 8,
    textAlign: 'left',
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
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginTop: 20,
    marginBottom: 16,
  },
  termsText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginTop: 8,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  inputWrapper: {
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 13,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  staticText: {
    color: '#007236',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    fontSize: 20,
  },
  input: {
    fontSize: 16,
    color: '#1C2437',
    paddingVertical: 10,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default styles;
