/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TopBar from '../../atoms/TopBar'; // تأكد من مسار استيراد TopBar

const BeneficiaryHistory = ({navigation, route}) => {
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
          <ScrollView style={styles.verticalScrollView}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <View key={index}>
                <View style={styles.historyRow}>
                  <View style={styles.historyContent}>
                    <Text style={styles.historySubTitle}>Carrefour</Text>
                    <Text style={styles.historyDate}>15-12-2021</Text>
                  </View>
                  <Text style={styles.historyPrice}>$ 123.45</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F3FB',
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
    color: '#1C2437',
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
    color: '#1C2437',
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#464665',
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
    justifyContent: 'space-between', // This will place the price on the right
    paddingVertical: 10, // Add some padding for better spacing
  },
  historyContent: {
    flex: 1,
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
  historyPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2437',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10, // Add margin for spacing
  },
  verticalScrollView: {
    flex: 1,
  },
});

export default BeneficiaryHistory;
