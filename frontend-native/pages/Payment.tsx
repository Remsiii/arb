import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface PaymentScreenProps {
  totalAmount: number;
  onPaymentMethodSelected: (method: 'online' | 'cash' | 'group') => void;
  route: {
    params: {
      totalAmount: number;
    };
  };
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ route, onPaymentMethodSelected }) => {
  const { totalAmount } = route.params;

  const navigation = useNavigation<NavigationProp<RootStackParamList, 'PaymentScreen'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.tableText}>Tisch #6</Text>
      <Text style={styles.totalText}>Gesamt: {totalAmount}€</Text>

      <TouchableOpacity 
        style={[styles.paymentOption, styles.onlineButton]}
        onPress={() => onPaymentMethodSelected('online')}
      >
        <Text style={styles.buttonText}>Online Zahlung</Text>
        <Text style={styles.subtext}>Karte / Apple Pay / Google Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.paymentOption, styles.cashButton]}
        onPress={() => onPaymentMethodSelected('cash')}
      >
        <Text style={styles.buttonText}>Barzahlung</Text>
        <Text style={styles.subtext}>Karte oder Bargeld</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.paymentOption, styles.groupButton]}
        onPress={() => onPaymentMethodSelected('group')}
      >
        <Text style={styles.buttonText}>Gruppenzahlung</Text>
        <Text style={styles.subtext}>Mindestens 10 Personen mit vorheriger Bestätigung</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>Zurück zum Menü</Text>
      </TouchableOpacity>
    </View>
  );
}

type RootStackParamList = {
  ShoppingCart: undefined;
  PaymentScreen: { totalAmount: number };
  Home: undefined;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF', // Adjust as needed
  },
  tableText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  paymentOption: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onlineButton: {
    backgroundColor: '#E0E0E0', // Light grey color
  },
  cashButton: {
    backgroundColor: '#BDBDBD', // Medium grey color
  },
  groupButton: {
    backgroundColor: '#9E9E9E', // Dark grey color
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000', // Adjust text color as needed
  },
  subtext: {
    fontSize: 14,
    color: '#424242', // Adjust subtext color as needed
  },
  backButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#757575', // Adjust button color as needed
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF', // Adjust back button text color as needed
    fontWeight: '600',
  },
});

export default PaymentScreen;
