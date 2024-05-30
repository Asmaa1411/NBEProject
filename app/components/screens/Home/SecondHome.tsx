/* eslint-disable prettier/prettier */
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
// import {useTheme} from '@react-navigation/native';

const SecondHome = ({navigation}) => {
  // const {colors} = useTheme();

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
        {[1, 2].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('SecondHome')}
            style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/visa.png')}
                style={styles.accountImage}
              />

              <View style={styles.colorOverlay} />
              <View style={styles.cardDetails}>
                <Text style={styles.cardBalance}>$125,381.15</Text>
                <Image
                  source={require('../../assets/visaIgon1.png')}
                  style={styles.iconTopRight}
                />
                <View style={styles.cardNumber}>
                  <Text style={styles.cardNumberSegment}>****</Text>
                  <Text style={styles.cardNumberSegment}>****</Text>
                  <Text style={styles.cardNumberSegment}>****</Text>
                  <Text style={styles.cardNumberSegment}>6506</Text>
                  <View style={styles.iconNextToNumber}>
                    <Image
                      source={require('../../assets/visaIgon2.png')}
                      style={styles.iconNextToNumber}
                    />
                    <Image
                      source={require('../../assets/visaIqon3.png')}
                      style={styles.iconNextToNumber}
                    />
                  </View>
                </View>
                <View style={styles.cardTextContainer}>
                  <View style={styles.cardTextColumn}>
                    <Text style={styles.cardTextTitle}>CARD HOLDER</Text>
                    <Text style={styles.cardText}>ASMAA SAAD</Text>
                  </View>
                  <View style={styles.cardTextColumn}>
                    <Text style={styles.cardTextTitle}>EXPIRES</Text>
                    <Text style={styles.cardText}>08/25</Text>
                  </View>
                  <View style={styles.cardTextColumn}>
                    <Text style={styles.cardTextTitle}>CVV</Text>
                    <Text style={styles.cardText}>352</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.scrollTitle}>History</Text>

      <ScrollView style={styles.verticalScrollView}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
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
  scrollTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginVertical: 20,
    color: '#000000',
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
  verticalScrollView: {
    flex: 1,
  },
  colorOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#007236',
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
    fontSize: 16,
    marginBottom: 40,
  },
  cardNumber: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardNumberSegment: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  cardTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardTextColumn: {
    flex: 1,
  },
  cardTextTitle: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconTopRight: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconNextToNumber: {
    flexDirection: 'row',
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default SecondHome;
