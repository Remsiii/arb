import React from 'react';

interface Item {
  title: string;
  price: number;
  quantity: number;
}

interface ShoppingCartItemProps {
  item: Item;
  onDelete: () => void;
  onQuantityChange: (quantity: number) => void;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item, onDelete, onQuantityChange }) => {
  const increaseQuantity = () => {
    onQuantityChange(item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.quantity - 1);
    } else {
      onDelete();
    }
  };

  return (
    <div className="flex items-center p-2 border-b border-gray-200">
      {/* Entferne das Kommentarzeichen und ersetze 'YOUR_IMAGE_URL' mit der URL deines Bildes, wenn du Bilder verwenden möchtest. */}
      {/* <img src="YOUR_IMAGE_URL" alt="item" className="w-15 h-15 rounded-full" /> */}
      
      <div className="flex flex-1 ml-2">
        <div className="text-lg font-medium">{item.title}</div>
        <div className="text-gray-500">{item.price}€</div>
        
        <div className="flex items-center">
          <button onClick={decreaseQuantity} className="px-4 py-1 text-xl">
            -
          </button>
          <div className="mx-2 text-lg">{item.quantity}</div>
          <button onClick={increaseQuantity} className="px-4 py-1 text-xl">
            +
          </button>
        </div>
      </div>
      
      <button onClick={onDelete} className="p-2">
        🗑️
      </button>
    </div>
  );
};

export default ShoppingCartItem;
