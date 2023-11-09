import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../components/RecipeCard';
import menuData from '../menuData.json';
import Arrows from '../components/Arrows';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { CartItem } from '../types/CartItems';

const Home = () => {
  const [selectedType, setSelectedType] = useState('Vorspeise');
  const { items, setItems } = useShoppingCart();
  const navigate = useNavigate();
  const uniqueTypes = Array.from(new Set(menuData.map(item => item.type))); 
  const scrollViewRef = useRef(null);

  const openShoppingCart = () => {
    navigate('/shopping-cart');
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    // Logik für das Klicken der Pfeile...
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    let updatedCartItems = [...items];
    const existingItemIndex = updatedCartItems.findIndex(cartItem => cartItem.title === item.title);
  
    if (existingItemIndex !== -1) {
      // Wenn der Artikel bereits im Warenkorb ist, erhöhe die Menge
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      // Wenn der Artikel neu ist, füge ihn mit Menge 1 hinzu
      updatedCartItems.push({ ...item, quantity: 1 });
    }
  
    setItems(updatedCartItems);
  };
  

  const cartCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  return (
    <div className='safe-area'>
      <div className='flex flex-col'>
        {/* Arrows component */}
        {/* <Arrows handleArrowClick={handleArrowClick} direction={selectedType} /> */}
        {/* Content scroll view */}
        <div className='content-scroll-view overflow-x-scroll'>
          {uniqueTypes.map((type) => (
            menuData.filter(item => item.type === type).map((item, index) => (
              <MenuCard key={index} {...item} addToCart={() => addToCart(item)} />
            ))
          ))}
          <div className='text-red leading-7'>asd</div>
        </div>
        {/* Cart button */}
        <button 
          className='fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center'
          onClick={openShoppingCart}
        >
          <span>🛒</span>
          <span className='ml-2'>{cartCount}</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
