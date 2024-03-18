import { useEffect, useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

export function DataTest() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const sheetId = "13cjuES8Db3U6x9VtAdryAzLu2IkCYrMrBy1t-rCGpJs";
      const range = "Sheet1!A2:D";
      const apiKey = "AIzaSyDKOPJtMHAG_g7wZQPonXdqcAd5DlUVAtM";
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

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
    <div>
      {menuItems.map((item, index) => (
        <div className="flex-row flex gap-4" key={index}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      ))}
    </div>
  );
}
