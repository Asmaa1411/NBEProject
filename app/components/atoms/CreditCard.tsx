import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {creditCard} from '../screens/AirPay/AirPayData';

type creditCardProps = {data: creditCard};

const CreditCard = ({data}: creditCardProps) => {
  console.log(data, 'data');
  return (
    <View style={styles.imageWrapper}>
      <Image
        source={require('../assets/visa.png')}
        style={styles.accountImage}
      />

      <View style={styles.colorOverlay} />

      <View style={styles.cardDetails}>
        <Text style={styles.cardBalance}>{data.balance}</Text>

        <Image
          source={require('../assets/visaIgon1.png')}
          style={styles.iconTopRight}
        />

        <View style={styles.cardNumber}>
          <Text style={styles.cardNumberSegment}>{data.number}</Text>

          <View style={styles.iconNextToNumber}>
            <Image
              source={require('../assets/visaIgon2.png')}
              style={[styles.iconNextToNumber1, {flex: 1}]}
            />
            <Image
              source={require('../assets/wifi.png')}
              style={[styles.iconNextToNumber2, {flex: 1}]}
            />
          </View>
        </View>

        <View style={styles.cardTextContainer}>
          <View style={styles.cardTextColumn}>
            <Text style={styles.cardTextTitle}>CARD HOLDER</Text>
            <Text style={styles.cardText}>{data.holder}</Text>
          </View>

          <View style={styles.cardTextColumn}>
            <Text style={styles.cardTextTitle}>EXPIRES</Text>
            <Text style={styles.cardText}>{data.expires}</Text>
          </View>

          <View style={styles.cardTextColumn}>
            <Text style={styles.cardTextTitle}>CVV</Text>
            <Text style={styles.cardText}>{data.cvv}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
  },
  accountImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
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

export default CreditCard;
