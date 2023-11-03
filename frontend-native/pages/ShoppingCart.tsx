import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import ShoppingCartItem from '../components/ShoppingCartItems';
import { NavigationProp, useNavigation } from '@react-navigation/native';


interface CartItem {
  title: string;
  description: string;
  price: number;
  type: string;
  quantity: number;
}

interface ShoppingCartProps {
  route: {
    params: {
      cartItems: CartItem[];
    };
  };
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ route }) => {
  const [items, setItems] = useState(route.params.cartItems);
  type RootStackParamList = {
    ShoppingCart: undefined;
    PaymentScreen: undefined;
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList, 'PaymentScreen'>>();

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
        <Button title="Bezahlen" onPress={() => navigation.navigate('PaymentScreen')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
