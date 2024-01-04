// Dummy-Daten für Bestellungen und Bestellpositionen
const dummyOrders = [
  {
    storeId: "asdf",
    isPaid: true,
    orderItems: [
      { product: { price: 100 } },
      { product: { price: 150 } }
    ]
  },
  {
    storeId: "asdf",
    isPaid: true,
    orderItems: [
      { product: { price: 200 } }
    ]
  },
  {
    storeId: "asdf",
    isPaid: false,
    orderItems: [
      { product: { price: 300 } }
    ]
  },
  // ... Weitere Dummy-Bestellungen
];

export const getTotalRevenue = async (storeId: string) => {
  console.log("Store ID:", storeId); // Logge die übergebene Store ID
  const paidOrders = dummyOrders.filter(order => order.storeId === storeId && order.isPaid);
  console.log("Gefilterte bezahlte Bestellungen:", paidOrders); // Logge gefilterte Bestellungen

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.orderItems.reduce((orderSum, item) => {
      return orderSum + item.product.price;
    }, 0);
    console.log("Zwischensumme für Bestellung:", orderTotal); // Logge Zwischensumme jeder Bestellung
    return total + orderTotal;
  }, 0);

  console.log("Gesamteinnahmen:", totalRevenue); // Logge die Gesamteinnahmen
  return totalRevenue;
};
