import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';

interface ArrowsProps {
  handleArrowClick: (direction: string) => void;
  direction: 'left' | 'right';
}

const Arrows: React.FC<ArrowsProps> = ({ handleArrowClick, direction }) => {
  return (
    <TouchableOpacity onPress={() => handleArrowClick(direction)}>
      <Text style={styles.arrowText}>{direction === 'left' ? '<' : '>'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arrowText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#000',
  },
});

export default Arrows;
