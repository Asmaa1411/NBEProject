import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AddButton from '../../atoms/Add'; // تأكد من مسار استيراد AddButton
import TopBar from '../../atoms/TopBar'; // تأكد من مسار استيراد TopBar
import {ThemeContext} from '../../../../App';

const Beneficiaries = ({navigation, route}) => {
  const {dark} = useContext(ThemeContext);
  const styles = getStyle(dark);
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    if (route.params && route.params.newBeneficiary) {
      const {newBeneficiary} = route.params;
      setBeneficiaries(prevState => [...prevState, newBeneficiary]);
    }
  }, [route.params]);

  const handleAddPress = () => {
    navigation.navigate('AddBeneficiary');
  };

  const handleImagePress = beneficiary => {
    navigation.navigate('BeneficiaryHistory', {beneficiary});
  };

  const renderBeneficiaries = () => {
    return beneficiaries.map((beneficiary, index) => (
      <TouchableOpacity
        key={index}
        style={styles.beneficiaryContainer}
        onPress={() => handleImagePress(beneficiary)}>
        {beneficiary.image ? (
          <Image source={{uri: beneficiary.image}} style={styles.benImage} />
        ) : (
          <Image
            source={require('../../assets/people2.png')}
            style={styles.benImage}
          />
        )}
        <Text style={styles.benName}>{beneficiary.firstName}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} onNotificationPress={() => {}} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Beneficiaries</Text>
        <AddButton onPress={handleAddPress} />
      </View>

      {beneficiaries.length === 0 ? (
        <View style={styles.content}>
          <Image
            source={require('../../assets/noBeneficiaries.png')}
            style={styles.image}
          />
          <Text style={styles.noBeneficiariesText}>No Beneficiaries</Text>
          <Text style={styles.descriptionText}>
            You don’t have beneficiaries, add some so you can send money
          </Text>
          <AddButton onPress={handleAddPress} />
        </View>
      ) : (
        <View style={styles.newBeneficiary}>{renderBeneficiaries()}</View>
      )}
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
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 16,
      marginVertical: 20,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: dark ? '#afaeae' : '#1C2437',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      marginBottom: 20,
    },
    noBeneficiariesText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: dark ? '#afaeae' : '#1C2437',
      marginBottom: 10,
    },
    noBeneficiaries: {
      flex: 1,
      backgroundColor: '#F1F3FB',
    },
    descriptionText: {
      fontSize: 16,
      color: dark ? '#686666' : '#464665',
      textAlign: 'center',
      marginHorizontal: 20,
      marginBottom: 20,
    },
    beneficiaryContainer: {
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 77,
      height: 86,
      margin: 10,
      padding: 50,
    },
    benImage: {
      width: 77,
      height: 86,
      borderRadius: 20,
      marginBottom: 20,
    },
    benName: {
      position: 'absolute',
      flex: 1,
      bottom: 0,
      color: dark ? '#afaeae' : '#1C2437',
      paddingBottom: 10,
      fontSize: 14,
      fontWeight: '400',
    },
    newBeneficiary: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

export default Beneficiaries;
