/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../../atoms/TopBar';
import {historyData} from './historyData';
import {ThemeContext} from '../../../../App';

const Home = ({navigation}) => {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);
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
      <ScrollView
        horizontal
        style={styles.horizontalScrollView}
        showsHorizontalScrollIndicator={false}>
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

      <ScrollView
        style={styles.verticalScrollView}
        showsVerticalScrollIndicator={false}>
        {historyData.map(item => (
          <View key={item.id}>
            <View style={styles.historyRow}>
              <View style={styles.historyImage}>
                <Image source={item.image} style={styles.historyImage} />
              </View>

              <View style={styles.historyContent}>
                <Text style={styles.historySubTitle}>{item.subtitle}</Text>
                <Text style={styles.historyDate}>{item.date}</Text>
              </View>
              <Text style={styles.historyPrice}>{item.price}</Text>
            </View>
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const getStyle = (dark: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: dark ? '#1f1e1e' : '#F1F3FB',
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
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Roboto',
      color: dark ? '#afaeae' : '#1C2437',
      marginBottom: 10,
    },
    scrollTitle: {
      fontSize: 20,
      marginBottom: 10,
      color: dark ? '#afaeae' : '#1C2437',
      fontFamily: 'Roboto-Bold',
    },

    send: {
      width: 85,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginRight: 10,
    },
    buttonImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    buttonText: {
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      color: dark ? '#afaeae' : '#1C2437',
      marginTop: -20,
    },
    historyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    historyImage: {
      marginRight: 6,
    },
    historyContent: {
      flex: 1,
      justifyContent: 'center',
    },
    historySubTitle: {
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
      color: dark ? '#afaeae' : '#1C2437',
      marginBottom: 5,
    },
    historyDate: {
      color: dark ? '#afaeae' : '#1C2437',
      opacity: 0.5,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    horizontalScrollView: {
      marginBottom: 10,
    },
    verticalScrollView: {
      maxHeight: 185,
    },
    historyPrice: {
      fontSize: 18,
      fontFamily: 'Roboto-Bold',
      color: dark ? '#afaeae' : '#1C2437',
    },
    separator: {
      height: 1,
      backgroundColor: '#B7B7B7',
      opacity: 0.5,
      marginVertical: 3,
    },
  });

export default Home;
