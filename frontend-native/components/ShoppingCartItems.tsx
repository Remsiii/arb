import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface Item {
  title: string;
  price: number;
  quantity: number; // Menge hinzugefügt
}

interface ShoppingCartItemProps {
  item: Item;
  onDelete: () => void; // Löschen-Funktion hinzugefügt
  onQuantityChange: (quantity: number) => void; // Menge ändern-Funktion hinzugefügt
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item, onDelete, onQuantityChange }) => {

  const increaseQuantity = () => {
    onQuantityChange(item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.quantity - 1);
    } else {
      onDelete();
    }
  };

  return (
    <View style={styles.container}>
      {/* Verwendest du Bilder? Wenn ja, hier ist der Image-Platzhalter. */}
      {/*<Image source={{ uri: 'YOUR_IMAGE_URL' }} style={styles.image} />*/}

      <View style={styles.info}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>{item.price}€</Text>

        <View style={styles.quantity}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityItem}>{item.quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  quantityItem:
  {
    marginHorizontal: 10,
    fontSize: 18,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
    paddingHorizontal: 20,
    fontSize: 26,
  },
  deleteButton: {
    padding: 10,
  },
  deleteButtonText: {
    fontSize: 18,
  },
});

export default ShoppingCartItem;
