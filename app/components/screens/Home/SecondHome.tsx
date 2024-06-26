/* eslint-disable prettier/prettier */
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
import {green} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {ThemeContext} from '../../../../App';
import CreditCard from '../../atoms/creditCard';
import {creditCards} from '../AirPay/AirPayData';
// import {useTheme} from '@react-navigation/native';

const SecondHome = ({navigation}) => {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} onNotificationPress={() => {}} />
      {/* <TouchableOpacity style={{backgroundColor: colors.card}}>
        <Text style={{color: colors.text}}>Button!</Text>
      </TouchableOpacity> */}
      <Text style={styles.scrollTitle}>Cards</Text>
      <ScrollView
        horizontal
        style={styles.horizontalScrollView}
        showsHorizontalScrollIndicator={false}>
        {creditCards.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('SecondHome')}
            style={styles.imageContainer}>
            <CreditCard data={item} />
          </TouchableOpacity>
        ))}
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
    scrollTitle: {
      fontSize: 20,
      marginBottom: 10,
      color: dark ? '#afaeae' : '#1C2437',
      fontFamily: 'Roboto-Bold',
    },
    horizontalScrollView: {
      marginBottom: -300,
    },
    imageContainer: {
      marginRight: 10,
    },
    imageWrapper: {
      position: 'relative',
    },
    accountImage: {
      width: 300,
      height: 200,
      borderRadius: 10,
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
      color: dark ? '#afaeae' : '#1C2437',
      marginBottom: 5,
      fontFamily: 'Roboto-Regular',
    },
    historyDate: {
      color: dark ? '#afaeae' : '#1C2437',
      opacity: 0.5,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
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
      marginVertical: 10,
      marginTop: -2,
    },
    verticalScrollView: {
      flex: 1,
    },
    colorOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#00563B',
      borderRadius: 10,
      opacity: 0.5,
    },

    cardDetails: {
      position: 'absolute',
      bottom: 50,
      left: 10,
      right: 10,
    },
    cardBalance: {
      color: '#FFFFFF',
      fontSize: 25,
      marginBottom: 40,
      fontFamily: 'GemunuLibre-Bold',
    },
    cardNumber: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'GemunuLibre-Regular',
    },
    cardNumberSegment: {
      color: '#FFFFFF',
      fontSize: 25,
      fontFamily: 'GemunuLibre-Regular',
    },
    cardTextContainer: {
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      gap: 80,
      marginBottom: -30,
      paddingTop: 20,
    },
    cardTextColumn: {
      flex: 1,
      width: 200,
    },
    cardTextTitle: {
      color: '#848484',
      fontSize: 14,
      width: 150,
      fontFamily: 'GemunuLibre-Bold',
    },
    cardText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: 'GemunuLibre-Bold',
      width: 150,
    },
    iconTopRight: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    iconNextToNumber: {
      flexDirection: 'row',
      width: 40,
      position: 'absolute',
      right: 30,
    },
    iconNextToNumber2: {
      height: 20,
      position: 'absolute',
      top: 3,
      left: 50,
    },
  });

export default SecondHome;
