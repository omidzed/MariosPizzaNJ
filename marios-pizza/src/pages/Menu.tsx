import { MenuView } from "../components/MenuView";
import { Categories } from "../components/Categories";

export function Menu() {
  return (
    <div className="bg-primary h-screen">
      <div>
        <Categories range="categories" />
      </div>
      <div className="bg-primary pb-[75px]">
        <MenuView range="Pizza" />
        <MenuView range="Soup" />
        <MenuView range="Fresh Salads" />
      </div>
    </div>
  );
}
