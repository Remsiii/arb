
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from "date-fns";
import { formatter } from "@/lib/utils";

import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";

const ProductsPage =  ({
  params
}: {
  params: { storeId: string }
}) => {

  const [products, setProducts] = useState<ProductColumn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5235/api/catalog/beace156-eceb-4b4a-9aa3-79f872eaa27d`);
        const fetchedProducts = response.data.dishes.flatMap((dish: { name: string; items: any[]; }) => dish.items.map(item => ({
          id: item.id,
          name: item.name,
          isFeatured: false, // Setze isFeatured, falls es in deiner API vorhanden ist
          isArchived: false, // Setze isArchived, falls es in deiner API vorhanden ist
          price: item.price,
          category: dish.name, // Setze die Kategorie, falls verfügbar
        })));

        const formattedProducts = fetchedProducts.map((item: { price: number | bigint; createdAt: any; }) => ({
          ...item,
          price: formatter.format(item.price),
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error('Fehler beim Laden der Produkte:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params.storeId]);


  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
