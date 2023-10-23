import React, { useEffect, useState } from 'react';
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

type MenuItem = {
  name: string;
  price: number;
  description: string;
};

type MenuData = {
  menu: Record<string, MenuItem[]>;
};

export function OrderFoodButton() {
  const [menuData, setMenuData] = useState<MenuData | null>(null);

  useEffect(() => {
    // Lade die JSON-Datei aus dem public-Ordner
    fetch('/menu.json')
      .then(response => response.json())
      .then(data => setMenuData(data as MenuData));
  }, []);

  if (!menuData) return <p>Loading...</p>;

  return (
    <div>
      {Object.keys(menuData.menu).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {menuData.menu[category].map(item => (
            <div className="flex items-center" key={item.name}>
              <span className="mr-2">{item.name} - {item.description} {item.price}€</span>
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                <PlusIcon className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
