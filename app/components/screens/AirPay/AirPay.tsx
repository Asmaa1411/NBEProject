/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import TopBar from '../../atoms/TopBar';
import LoginButton from '../../atoms/LoginButton';
import {ThemeContext} from '../../../../App';
import {DraxProvider, DraxScrollView, DraxView} from 'react-native-drax';
import DraggableCard from '../../atoms/DraggableCard';
import {blue} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import CreditCard from '../../atoms/creditCard';
import {creditCards} from './AirPayData';

const AirPay = ({navigation}) => {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);

  const [received, setReceived] = React.useState<React.JSX.Element>(
    <Text>Touch & hold a card then drag it to this box</Text>,
  );

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DraxProvider>
        <View style={styles.container}>
          <TopBar navigation={navigation} onNotificationPress={() => {}} />
          <Text style={styles.scrollTitle}>Cards</Text>
          <DraxScrollView
            horizontal={true}
            style={styles.horizontalScrollView}
            contentContainerStyle={{backgroundColor: 'red', height: 205}}
            showsHorizontalScrollIndicator={false}>
            {creditCards.map((cardData, index) => (
              <DraggableCard key={index} cardData={cardData} styles={styles} />
            ))}
          </DraxScrollView>
          <DraxView
            renderContent={() => {
              return received;
            }}
            style={styles.cardDrag}
            receivingStyle={{
              backgroundColor: 'black',
            }}
            onReceiveDragDrop={event => {
              const cardId = event.dragged.payload;
              const card = creditCards.find(card => cardId === card.id);
              if (card) setReceived(<CreditCard data={card} />);
            }}
          />
          <View style={styles.buttonContainer}>
            <LoginButton
              onPress={() => navigation.navigate('TransferOTP')}
              title={'Pay Now'}
            />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
};

const getStyle = (dark: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: dark ? '#1f1e1e' : '#F1F3FB',
    },
    cardDrag: {
      height: 210,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    scrollTitle: {
      fontSize: 20,
      marginBottom: 10,
      color: dark ? '#afaeae' : '#1C2437',
      fontFamily: 'Roboto-Bold',
    },
    horizontalScrollView: {
      height: 260,
      backgroundColor: 'blue',
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
    separator: {
      height: 1,
      backgroundColor: '#B7B7B7',
      opacity: 0.5,
      marginVertical: 3,
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
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
  });

export default AirPay;
