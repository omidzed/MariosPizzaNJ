import "./App.css";
import { MenuView } from "./components/MenuView";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-primary">
        <MenuView range="Pizza" />
        <MenuView range="Soup" />
      </div>
    </>
  );
}

export default App;
