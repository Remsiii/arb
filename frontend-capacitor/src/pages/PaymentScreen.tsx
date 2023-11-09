import React from 'react';
import { useNavigate } from "react-router-dom";

interface PaymentScreenProps {
  totalAmount: number;
  onPaymentMethodSelected: (method: 'online' | 'cash' | 'group') => void;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ totalAmount, onPaymentMethodSelected }) => {
  const navigate = useNavigate();

  return (
    <div className='container mx-auto p-4 bg-white'>
      <p className='text-center text-2xl mb-2'>Tisch #6</p>
      <p className='text-center text-3xl font-bold my-5'>Gesamt: {totalAmount}€</p>

      <button 
        className='payment-option online-button bg-gray-200 p-5 rounded-lg my-2 text-center'
        onClick={() => onPaymentMethodSelected('online')}
      >
        <p className='text-xl font-semibold'>Online Zahlung</p>
        <p className='text-base text-gray-600'>Karte / Apple Pay / Google Wallet</p>
      </button>

      <button 
        className='payment-option cash-button bg-gray-400 p-5 rounded-lg my-2 text-center'
        onClick={() => onPaymentMethodSelected('cash')}
      >
        <p className='text-xl font-semibold'>Barzahlung</p>
        <p className='text-base text-gray-600'>Karte oder Bargeld</p>
      </button>

      <button 
        className='payment-option group-button bg-gray-600 p-5 rounded-lg my-2 text-center'
        onClick={() => onPaymentMethodSelected('group')}
      >
        <p className='text-xl font-semibold'>Gruppenzahlung</p>
        <p className='text-base text-gray-600'>Mindestens 10 Personen mit vorheriger Bestätigung</p>
      </button>

      <button 
        className='back-button mt-5 p-4 bg-gray-700 rounded-md text-center align-middle'
        onClick={() => navigate('/home')}
      >
        <p className='text-white font-semibold'>Zurück zum Menü</p>
      </button>
    </div>
  );
};

export default PaymentScreen;
