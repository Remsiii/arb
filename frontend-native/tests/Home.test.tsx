
import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../pages/Home';
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext';

// Mocking the navigation hook
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('<Home />', () => {
  it('renders correctly', () => {
    const tree = render(
      <ShoppingCartProvider>
        <Home navigation={{
          navigate: function (route: string, params: { cartItems: { title: string; description: string; price: number; type: string; quantity: number; }[]; }): void {
            throw new Error('Function not implemented.');
          }
        }} />
      </ShoppingCartProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
