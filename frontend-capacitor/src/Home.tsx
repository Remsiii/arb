import React, { FC } from 'react';
import MenuCard from './MenuCard'; // Pfad anpassen, falls nötig
import styles from './MenuList.module.css'; // Pfad zur CSS-Moduldatei anpassen
import menuData from './menuData.json';

// Typdefinition für ein Menüelement
interface MenuItem {
  type: string;
  title: string;
  description: string;
  price: number;
}

// Die Menüdaten könnten dynamisch importiert werden oder als Prop übergeben werden

const MenuList: FC = () => {
  return (
    <div className={styles.menuContainer}>
      {menuData.map((item: MenuItem, index: number) => (
        <div key={index} className={styles.menuItem}>
          <h2>{item.type}</h2>
          <MenuCard 
            title={item.title} 
            description={item.description} 
            price={item.price} 
            // Hier müsste eine Funktion übergeben werden, wenn "addToCart" verwendet wird.
          />
        </div>
      ))}
      <p>page</p>
    </div>
  );
};

export default MenuList;
