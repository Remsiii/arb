import { format } from "date-fns";


import { SizeColumn } from "./components/columns"
import { SizesClient } from "./components/client";

const SizesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const dummySizes = [
    {
      id: "size1",
      storeId: "store123",
      name: "Klein",
      value: "S",
      createdAt: new Date("2021-01-01").toISOString(),
      updatedAt: new Date("2021-01-05").toISOString(),
    },
    {
      id: "size2",
      storeId: "store123",
      name: "Mittel",
      value: "M",
      createdAt: new Date("2021-02-01").toISOString(),
      updatedAt: new Date("2021-02-05").toISOString(),
    },
    {
      id: "size3",
      storeId: "store123",
      name: "Groß",
      value: "L",
      createdAt: new Date("2021-03-01").toISOString(),
      updatedAt: new Date("2021-03-05").toISOString(),
    },
    // ... weitere Größen nach Bedarf
  ];

  const formattedSizes: SizeColumn[] = dummySizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
