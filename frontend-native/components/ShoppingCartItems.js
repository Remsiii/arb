import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ShoppingCartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: item.imageUrl }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>{item.price} €</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      borderBottomColor: 'gainsboro',
      borderBottomWidth: 1,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    info: {
      marginLeft: 10,
    },
    name: {
      fontSize: 16,
      fontWeight: '500',
    },
    price: {
      fontSize: 14,
      color: 'gray',
    },
  });

export default ShoppingCartItem;
