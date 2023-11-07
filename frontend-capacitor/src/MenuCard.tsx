import React, { FC } from 'react';

interface MenuCardProps {
  title: string;
  description: string;
  price: number;
}

const MenuCard: FC<MenuCardProps> = ({ title, description, price }) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price.toFixed(2)}€</p>
    </div>
  );
};

export default MenuCard;
