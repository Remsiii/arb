

import { CategoryColumn } from "./components/columns"
import { CategoriesClient } from "./components/client";

const CategoriesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const dummyCategories = [
    {
      id: "category1",
      storeId: "store123",
      billboardId: "billboard123",
      name: "Vorspeise",
      products: [], // Du kannst hier Produkt-IDs oder leere Arrays hinzufügen
      createdAt: new Date("2021-01-01").toISOString(),
      updatedAt: new Date("2021-01-10").toISOString(),
      billboard: {
        id: "billboard123",
        storeId: "asdf",
        label: "Neueste Elektronik!",
        imageUrl: "https://example.com/billboard1.jpg",
        categories: [], // Normalerweise würden hier Referenzen auf Kategorien stehen
        createdAt: new Date("2021-01-01").toISOString(),
        updatedAt: new Date("2021-01-10").toISOString(),
      },
    },
    {
      id: "category2",
      storeId: "store123",
      billboardId: "billboard124",
      name: "Kleidung",
      products: [], // Du kannst hier Produkt-IDs oder leere Arrays hinzufügen
      createdAt: new Date("2021-02-01").toISOString(),
      updatedAt: new Date("2021-02-10").toISOString(),
      billboard: {
        id: "billboard124",
        storeId: "store123",
        label: "Frühjahrs-Kollektion",
        imageUrl: "https://example.com/billboard2.jpg",
        categories: [], // Normalerweise würden hier Referenzen auf Kategorien stehen
        createdAt: new Date("2021-02-01").toISOString(),
        updatedAt: new Date("2021-02-10").toISOString(),
      },
    },
    // ... Weitere Kategorien nach Bedarf
  ];

  const formattedCategories: CategoryColumn[] = dummyCategories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: item.createdAt,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
