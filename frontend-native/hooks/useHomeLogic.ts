import { useState, useMemo, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import menuData from '../data/menuData.json';
import { CartItem } from '../types/CartItems';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

export const useHomeLogic = () => {
  const [selectedType, setSelectedType] = useState<string>('Vorspeise');
  const { items, setItems } = useShoppingCart();
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation();

  const uniqueTypes = useMemo(() => [...new Set(menuData.map(item => item.type))], []);

  const handleArrowClick = (direction: 'left' | 'right') => {
    const currentIndex = uniqueTypes.indexOf(selectedType);
    const itemWidth = 100; // Sollte die Breite eines Elements in der ScrollView sein.

    if (direction === 'left' && currentIndex > 0) {
      setSelectedType(uniqueTypes[currentIndex - 1]);
      scrollViewRef.current?.scrollTo({ x: itemWidth * (currentIndex - 1), animated: true });
    } else if (direction === 'right' && currentIndex < uniqueTypes.length - 1) {
      setSelectedType(uniqueTypes[currentIndex + 1]);
      scrollViewRef.current?.scrollTo({ x: itemWidth * currentIndex, animated: true });
    }
  };

  const addToCart = (item: CartItem) => {
    let updatedCartItems = [...items];
    const existingItemIndex = updatedCartItems.findIndex(cartItem => cartItem.title === item.title);

    if (existingItemIndex !== -1) {
      // Wenn das Element bereits im Warenkorb ist, erhöhe die Anzahl.
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      // Wenn das Element noch nicht im Warenkorb ist, füge es hinzu.
      updatedCartItems.push({ ...item, quantity: 1 });
    }

    setItems(updatedCartItems);
  };

  const cartCount = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);

  return {
    selectedType,
    setSelectedType,
    cartCount,
    handleArrowClick,
    addToCart,
    scrollViewRef
  };
};
