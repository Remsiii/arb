import React, { useState, useRef, FC } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import MenuCard from '../components/RecipeCard';
import menuData from '../app/menuData.json';
import Arrows from '../components/Arrows';

interface CartItem {
  title: string;
  description: string;
  price: number;
  type: string;
  quantity?: number;
}

interface HomeProps {
  navigation: {
    navigate: (route: string, params: { cartItems: CartItem[] }) => void;
  };
}

const Home: FC<HomeProps> = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState<string>('Vorspeise');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const uniqueTypes = [...new Set(menuData.map(item => item.type))];

  const scrollViewRef = useRef<ScrollView>(null);

  const openShoppingCart = () => {
    navigation.navigate('ShoppingCart', { cartItems });
  };

  const handleArrowClick = (direction: string) => {
    const currentIndex = uniqueTypes.indexOf(selectedType);
    const itemWidth = 100;

    if (direction === 'left' && currentIndex > 0) {
      setSelectedType(uniqueTypes[currentIndex - 1]);
      scrollViewRef.current?.scrollTo({ x: itemWidth * (currentIndex - 1), animated: true });
    } else if (direction === 'right' && currentIndex < uniqueTypes.length - 1) {
      setSelectedType(uniqueTypes[currentIndex + 1]);
      scrollViewRef.current?.scrollTo({ x: itemWidth * currentIndex, animated: true });
    }
  };

  const addToCart = (item: CartItem) => {
    let updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(cartItem => cartItem.title === item.title);

    if (existingItemIndex !== -1) {
        updatedCartItems[existingItemIndex].quantity = (updatedCartItems[existingItemIndex].quantity || 1) + 1;
    } else {
        item.quantity = 1;
        updatedCartItems = [...updatedCartItems, item];
    }

    // Anzahl der Artikel im Warenkorb aktualisieren
    const newCartCount = updatedCartItems.reduce((acc, currentItem) => acc + (currentItem.quantity || 1), 0);
    setCartItems(updatedCartItems);
    setCartCount(newCartCount);
};


  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.navbarWrapper}>
          <Arrows handleArrowClick={handleArrowClick} direction="left" />
          <ScrollView horizontal ref={scrollViewRef} style={styles.navbar}>
            {uniqueTypes.map((type) => (
              <TouchableOpacity key={type} style={[styles.navItem, selectedType === type && styles.navItemSelected]} onPress={() => setSelectedType(type)}>
                <Text style={selectedType === type ? styles.navTextSelected : styles.navText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Arrows handleArrowClick={handleArrowClick} direction="right" />
        </View>
        <ScrollView style={styles.contentScrollView}>
          {menuData.filter(item => item.type === selectedType).map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              addToCart={() => addToCart(item)}
            />
          ))}
        </ScrollView>
        {cartCount > 0 && (
          <TouchableOpacity style={styles.cartButton} onPress={openShoppingCart}>
            <Text style={styles.cartIcon}>🛒</Text>
            {cartCount > 0 && <Text style={styles.cartCount}>{cartCount}</Text>}
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  navbarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#ffffff',
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  navItem: {
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5'
  },
  navItemSelected: {
    backgroundColor: '#e0e0e0'
  },
  navText: {
    fontSize: 16,
    color: '#333'
  },
  navTextSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  contentScrollView: {
    marginTop: 60,
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
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
    elevation: 5
  },
  cartIcon: {
    fontSize: 24,
  },
  cartCount: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold'
  }
});

export default Home;
