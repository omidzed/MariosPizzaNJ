import { MenuView } from "../components/MenuView";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";

export function Menu() {
  return (
    <div className="bg-primary h-screen">
      <div>
        <Categories range="categories" />
      </div>
      <div className="bg-primary pt-[128px]">
        <MenuView range="Pizza" />
        {/* <MenuView range="Soup" /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
