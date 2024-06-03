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
    marginTop: 1,
    textAlign: 'left',
    marginBottom: 25,
  },

  input: {
    fontSize: 16,
    color: '#1C2437',
    paddingVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default styles;
