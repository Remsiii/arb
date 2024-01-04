import { format } from "date-fns";


import { ColorColumn } from "./components/columns"
import { ColorClient } from "./components/client";

const ColorsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const dummyColors = [
    {
      id: "color1",
      storeId: "store123",
      name: "Rot",
      value: "#ff0000",
      createdAt: new Date("2021-01-01").toISOString(),
      updatedAt: new Date("2021-01-05").toISOString(),
    },
    {
      id: "color2",
      storeId: "store123",
      name: "Grün",
      value: "#00ff00",
      createdAt: new Date("2021-02-01").toISOString(),
      updatedAt: new Date("2021-02-05").toISOString(),
    },
    {
      id: "color3",
      storeId: "store123",
      name: "Blau",
      value: "#0000ff",
      createdAt: new Date("2021-03-01").toISOString(),
      updatedAt: new Date("2021-03-05").toISOString(),
    },
    // ... weitere Farben nach Bedarf
  ];

  const formattedColors: ColorColumn[] = dummyColors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
