import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import ShoppingCartItem from '../components/ShoppingCartItems';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useShoppingCart } from '../contexts/ShoppingCartContext';


interface ShoppingCartProps {
}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const { items, setItems } = useShoppingCart();

  type RootStackParamList = {
    ShoppingCart: undefined;
    PaymentScreen: { totalAmount: number };
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList, 'ShoppingCart'>>();

  const handleDelete = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const calculateTotal = () => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return parseFloat(total.toFixed(2));
  };


  const handleQuantityChange = (index: number, quantity: number) => {
    const newItems = [...items];
    if (quantity <= 0) {
      handleDelete(index);
    } else {
      newItems[index].quantity = quantity;
      setItems(newItems);
    }
  };

  return (
    <ScrollView style={styles.container}>

      {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity> */}

      {items.map((item, index) => (
        <ShoppingCartItem
          key={index}
          item={item}
          onDelete={() => handleDelete(index)}
          onQuantityChange={(quantity) => handleQuantityChange(index, quantity)}
        />
      ))}

      <Button title="Alles löschen" onPress={() => setItems([])} />
      {/* Weitere Buttons für Coupons und Trinkgeld können hier hinzugefügt werden. */}

      <View style={styles.footer}>
        <Text style={styles.total}>Total: {calculateTotal()}€</Text>
        <Button title="Bezahlen" onPress={() => navigation.navigate('PaymentScreen', { totalAmount: calculateTotal() })} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#A3C492',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1 
  },
  arrowText: {
    fontSize: 24,
  },
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default ShoppingCart;
