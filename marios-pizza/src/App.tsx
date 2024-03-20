import { MenuView } from "./components/MenuView";
import { Navbar } from "./components/NavBar";
import { Categories } from "./components/Categories";

function App() {
  return (
    <div className="bg-primary h-screen">
      <div>
        <Navbar />
      </div>
      <div className="mt-6">
        <Categories range="categories" />
      </div>
      <div className="bg-primary">
        <MenuView range="Pizza" />
        {/* <MenuView range="Soup" /> */}
      </div>
    </div>
  );
}

export default App;
