import React from 'react';

interface MenuCardProps {
  title: string;
  description: string;
  price: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-md mb-1">{description}</p>
      <p className="text-lg">{price.toFixed(2)}€</p>
    </div>
  );
};

export default MenuCard;
