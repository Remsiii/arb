import React from 'react';

interface MenuSwitcherProps {
  categories: string[];
  onChange: (category: string) => void;
}

const MenuSwitcher: React.FC<MenuSwitcherProps> = ({ categories, onChange }) => {
  return (
    <div className="flex flex-row justify-between px-4 py-2 bg-gray-200">
      {categories.map((category, index) => (
        <button 
          key={index} 
          className="px-2 py-1"
          onClick={() => onChange(category)}
        >
          <span className="text-sm text-gray-800">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default MenuSwitcher;
