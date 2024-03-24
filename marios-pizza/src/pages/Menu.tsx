import { MenuView } from "../components/MenuView";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";

export function Menu() {
  return (
    <div className="bg-primary h-screen">
      <div className="mt-6">
        <Categories range="categories" />
      </div>
      <div className="bg-primary">
        <MenuView range="Pizza" />
        {/* <MenuView range="Soup" /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
