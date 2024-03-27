import { useEffect, useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

type MenuViewProps = {
  range: string;
  heading: string;
};

export function MenuView({ range, heading }: MenuViewProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      try {
        const sheetId = "13cjuES8Db3U6x9VtAdryAzLu2IkCYrMrBy1t-rCGpJs";
        const apiKey = "AIzaSyDKOPJtMHAG_g7wZQPonXdqcAd5DlUVAtM";
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${
          range + "!A2:D"
        }?key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        const items: MenuItem[] = data.values.map((row: string) => ({
          name: row[0],
          price: row[1],
          description: row[2],
          imageUrl: row[3],
        }));
        setMenuItems(items);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMenuItems();
  }, [range]);

  if (isLoading) {
    return <div className="text-center">Loading menu...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="text-center text-xl font-bold" id={heading}>
        {heading}
      </div>
      <div className="p-10 pt-0 flex  w-full">
        <div className="flex justify-center flex-wrap">
          {menuItems.map((item, index) => (
            <div
              className="flex xl:rounded-xl m-3 h-auto basis-full sm:basis-[45%] md:basis-[38%] lg:basis-[30%]"
              key={index}
            >
              <div className="basis-2/3 bg-white p-2 rounded-l-lg">
                <div className="flex justify-between font-bold">
                  <h2 className="sm:text-lg ">{item.name}</h2>
                  <p className="sm:text-base">{item.price}</p>
                </div>
                <p className="sm:text-sm">{item.description}</p>
              </div>
              <div className="w-1/3">
                <img
                  className="h-full w-full object-cover rounded-r-lg"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
