import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../../atoms/TopBar';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} onNotificationPress={() => {}} />
      <TouchableOpacity onPress={() => navigation.navigate('SecondHome')}>
        <Image
          source={require('../../assets/Rectangle1.png')}
          style={styles.accountImage}
        />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <View style={styles.squareContainer}>
          <View>
            <View style={[styles.square, {backgroundColor: '#00C97426'}]}>
              <Image
                source={require('../../assets/accounts.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.title}>Accounts</Text>
          </View>
          <View>
            <View style={[styles.square, {backgroundColor: '#00ADF826'}]}>
              <Image
                source={require('../../assets/cards.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.title}>Cards</Text>
          </View>
          <View>
            <View style={[styles.square, {backgroundColor: '#F6A72126'}]}>
              <Image
                source={require('../../assets/utilities.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.title}>Utilities</Text>
          </View>
          <View>
            <View style={[styles.square, {backgroundColor: '#FF002E26'}]}>
              <Image
                source={require('../../assets/history.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.title}>History</Text>
          </View>
        </View>
      </View>

      <Text style={styles.scrollTitle}>Send Money</Text>

      <ScrollView horizontal style={styles.horizontalScrollView}>
        <TouchableOpacity style={styles.send}>
          <Image
            source={require('../../assets/people1.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Hala</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.send}>
          <Image
            source={require('../../assets/people2.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Ayman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.send}>
          <Image
            source={require('../../assets/people3.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Alex</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.send}>
          <Image
            source={require('../../assets/people4.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Soha</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.scrollTitle}>History</Text>

      <ScrollView style={styles.verticalScrollView}>
        {[1, 2, 3, 4].map((item, index) => (
          <View key={index} style={styles.historyRow}>
            <Image
              source={require('../../assets/carrefour.png')}
              style={styles.historyImage}
            />
            <View style={styles.historyContent}>
              <Text style={styles.historySubTitle}>Carrefour</Text>
              <Text style={styles.historyDate}>15-12-2021</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#F1F3FB',
  },
  innerContainer: {
    paddingHorizontal: 10,
  },
  accountImage: {
    width: '100%',
    marginBottom: 20,
    marginTop: 8,
  },
  squareContainer: {
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'space-between',
  },
  square: {
    width: 70,
    aspectRatio: 1, // to make it square
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 28,
    height: 28,
  },
  title: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  scrollTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
    color: '#000000',
  },

  send: {
    width: 90,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginRight: 10,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: -20,
  },
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  historyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  historyContent: {
    flex: 1,
    justifyContent: 'center',
  },
  historySubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  historyDate: {
    color: '#000000',
    opacity: 0.5,
  },
  horizontalScrollView: {
    marginBottom: 10,
  },
  verticalScrollView: {
    maxHeight: 185,
  },
});

export default Home;
