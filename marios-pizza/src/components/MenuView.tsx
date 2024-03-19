import { useEffect, useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

type MenuViewProps = {
  range: string;
};

export function MenuView({ range }: MenuViewProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const sheetId = "13cjuES8Db3U6x9VtAdryAzLu2IkCYrMrBy1t-rCGpJs";
      const apiKey = "AIzaSyDKOPJtMHAG_g7wZQPonXdqcAd5DlUVAtM";
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${
        range + "!A2:D"
      }?key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      const items: MenuItem[] = data.values.map((row: any) => ({
        name: row[0],
        price: row[1],
        description: row[2],
        imageUrl: row[3],
      }));
      setMenuItems(items);
    };
    fetchMenuItems();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap">
        {menuItems.map((item, index) => (
          <div
            className="flex m-2 h-24 basis-full sm:basis-[45%] md:basis-[30%] lg:basis-[20%] rounded-lg"
            key={index}
          >
            <div className="basis-2/3 bg-white p-2">
              <h2 className="sm:text-lg font-bold">{item.name}</h2>
              <p className="sm:text-sm">{item.description}</p>
              <p className="sm:text-base">{item.price}</p>
            </div>
            <div className="basis-1/3 mb-4">
              <img
                className="h-24 w-full object-cover"
                src={item.imageUrl}
                alt={item.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
