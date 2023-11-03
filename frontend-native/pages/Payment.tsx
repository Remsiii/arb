import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

type PaymentScreenProps = {
  totalAmount: number;
  onPaymentMethodSelected: (method: 'online' | 'cash' | 'group') => void;
};

const PaymentScreen: React.FC<PaymentScreenProps> = ({ totalAmount, onPaymentMethodSelected }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tableText}>Tisch #6</Text>
      <Text style={styles.totalText}>Gesamt: {totalAmount}€</Text>
      
      <TextInput 
        style={styles.emailInput} 
        placeholder="E-Mail-Adresse"
      />
      <Text style={styles.helpText}>Helfen Sie uns, das Erlebnis zu verbessern. Schicken Sie uns eine E-Mail, um die Bestellung zu bestätigen.</Text>

      <TouchableOpacity style={styles.paymentOption} onPress={() => onPaymentMethodSelected('online')}>
        {/* Hier solltest du ein Icon hinzufügen */}
        <Text>Online Zahlung</Text>
        <Text>Karte / Apple Pay / Google Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption} onPress={() => onPaymentMethodSelected('cash')}>
        {/* Hier solltest du ein Icon hinzufügen */}
        <Text>Barzahlung</Text>
        <Text>Karte oder Bargeld</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption} onPress={() => onPaymentMethodSelected('group')}>
        {/* Hier solltest du ein Icon hinzufügen */}
        <Text>Gruppenzahlung</Text>
        <Text>Mindestens 10 Personen mit vorheriger Bestätigung</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton}>
        <Text>Zurück zum Menü</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tableText: {
    fontSize: 20,
    textAlign: 'center',
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  helpText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  backButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default PaymentScreen;
