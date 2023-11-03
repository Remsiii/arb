import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import Payment from '../pages/Payment';

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="PaymentScreen" component={Payment} />
      </Stack.Navigator>
  );
};

export default App;
