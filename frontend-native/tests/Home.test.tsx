import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../pages/Home';
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext';

// Mocking the navigation and context hooks
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('../contexts/ShoppingCartContext', () => ({
  useShoppingCart: () => ({
    items: [],
    setItems: jest.fn(),
  }),
}));

describe('<Home />', () => {
  it('renders all required components', () => {
    const { getByTestId } = render(
      <ShoppingCartProvider>
        <Home navigation={{
          navigate: function (route: string, params: { cartItems: { title: string; description: string; price: number; type: string; quantity: number; }[]; }): void {
            throw new Error('Function not implemented.');
          }
        }} />
      </ShoppingCartProvider>
    );
    
    expect(getByTestId('menuCard')).toBeTruthy();
    expect(getByTestId('arrowsComponent')).toBeTruthy();
  });

  // Weitere Tests können hier hinzugefügt werden
});

export {};
