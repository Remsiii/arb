import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import Payment from '../pages/Payment';
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ShoppingCartProvider>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="PaymentScreen" component={Payment} />

      </Stack.Navigator>
    </ShoppingCartProvider>
  );
};

export default App;
