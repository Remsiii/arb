import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuSwitcher = ({ categories, onChange }) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.categoryButton}
          onPress={() => onChange(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#E9E9E9'
  },
  categoryButton: {
    padding: 10
  },
  categoryText: {
    fontSize: 16,
    color: '#333'
  }
});

export default MenuSwitcher;
