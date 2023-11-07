import React from 'react';

interface MenuCardProps {
  title: string;
  description: string;
  price: number;
  addToCart: (item: { title: string; description: string; price: number; quantity: number }) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price, addToCart }) => {

  const handlePress = () => {
    addToCart({ title, description, price, quantity: 1 });
  };

  return (
    <div onClick={handlePress} className="m-2">
      <div className="flex justify-between p-4 bg-white rounded-lg shadow-md cursor-pointer">
        <div className="flex-grow">
          <div className="text-lg font-bold">{title}</div>
          <div className="mt-2 text-sm text-gray-500">{description}</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-lg font-bold">{price}€</div>
          <button onClick={handlePress} className="w-8 h-8 mt-2 rounded-full bg-green-200 flex items-center justify-center text-green-700">
            <span className="text-xl">+</span>
          </button>
        </div> 
      </div>
    </div>
  );
};

export default MenuCard;
