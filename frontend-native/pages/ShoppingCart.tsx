import React, { FC } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator, ScrollView } from 'react-native';
import ShoppingCartItem from '../components/ShoppingCartItems';

// Definieren Sie den Typ für die Artikel im Warenkorb
interface CartItem {
  title: string;
  description: string;
  price: number;
  type: string;
}

// Definieren Sie den Typ für die Props der ShoppingCart-Komponente
interface ShoppingCartProps {
  route: {
    params: {
      cartItems: CartItem[];
    };
  };
}

const ShoppingCart: FC<ShoppingCartProps> = ({ route }) => {
  const { cartItems } = route.params;

  const onCheckout = async () => {
    // 1. Create a payment intent
    return;
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        {cartItems.map((item, index) => (
          <ShoppingCartItem key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShoppingCart;
