import React from 'react';
import { View, Text, Button } from 'react-native';

const ShoppingCart = ({ cartItems, setCartItems }) => {

  const handleCheckout = () => {
    // Hier könntest du eine Zahlungslogik implementieren
    alert('Zur Zahlungsseite weitergeleitet.');
  };

  return (
    <View>
      {cartItems.map(item => (
        <ShoppingCartItem key={item.id} item={item} />
      ))}
      <Button title="Bezahlen" onPress={handleCheckout} />
    </View>
  );
};

export default ShoppingCart;
