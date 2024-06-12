/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TopBar from '../../atoms/TopBar'; // تأكد من مسار استيراد TopBar
import {historyData} from '../Home/historyData';
import {ThemeContext} from '../../../../App';

const BeneficiaryHistory = ({navigation, route}) => {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);
  const {beneficiary} = route.params;
  const [showHistory, setShowHistory] = useState(false);

  const handlePress = () => {
    setShowHistory(true);
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} onNotificationPress={() => {}} />
      <TouchableOpacity
        style={styles.beneficiaryInfoContainer}
        onPress={handlePress}>
        <Image
          source={
            beneficiary.image
              ? {uri: beneficiary.image}
              : require('../../assets/people2.png')
          }
          style={styles.benImage}
        />
        <View style={styles.beneficiaryDetails}>
          <Text style={styles.benName}>Asmaa Saad</Text>
          <Text style={styles.benDetail}>+ 01025874963</Text>
          <Text style={styles.benDetail}>$ 494,472.95</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transactions History</Text>
      </View>

      <View style={styles.content}>
        {showHistory ? (
          <ScrollView
            style={styles.verticalScrollView}
            showsVerticalScrollIndicator={false}>
            {historyData.map(item => (
              <View key={item.id}>
                <View style={styles.historyRow}>
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
        ) : (
          <>
            <Image
              source={require('../../assets/noHistory.png')}
              style={styles.image}
            />
            <Text style={styles.noBeneficiariesText}>No History</Text>
            <Text style={styles.descriptionText}>
              Not a single transaction was made to this account
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const getStyle = (dark: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: dark ? '#1f1e1e' : '#F1F3FB',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 16,
      marginVertical: 20,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: dark ? '#afaeae' : '#1C2437',
    },
    beneficiaryInfoContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 10,
      alignItems: 'center',
    },
    benImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    beneficiaryDetails: {
      flex: 1,
    },
    benName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1C2437',
    },
    benDetail: {
      fontSize: 16,
      color: '#B7B7B7',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      marginVertical: 20,
    },
    image: {
      marginBottom: 20,
      alignSelf: 'center',
    },
    noBeneficiariesText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: dark ? '#afaeae' : '#1C2437',
      marginBottom: 10,
      textAlign: 'center',
    },
    descriptionText: {
      fontSize: 16,
      color: dark ? '#686666' : '#464665',
      textAlign: 'center',
      marginHorizontal: 20,
      marginBottom: 20,
    },
    historyText: {
      fontSize: 16,
      color: '#1C2437',
      marginBottom: 10,
    },
    historyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    historyContent: {
      flex: 1,
      justifyContent: 'center',
    },
    historySubTitle: {
      fontSize: 18,
      fontWeight: '400',
      color: '#1C2437',
      marginBottom: 5,
    },
    historyDate: {
      color: '#1C2437',
      opacity: 0.5,
      fontSize: 14,
      fontWeight: '400',
    },
    historyPrice: {
      fontSize: 18,
      fontWeight: '700',
      color: '#1C2437',
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
  });

export default BeneficiaryHistory;
