import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';  // Importiere deine Hauptkomponente
import PaymentScreen from './payment/PaymentScreen'; // Importiere deine Payment-Komponente

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
  );
};

export default App;
