import "./App.css";
import { MenuView } from "./components/MenuView";

function App() {
  return (
    <div className="bg-primary">
      <MenuView range="Pizza" />
      <MenuView range="Soup" />
    </div>
  );
}

export default App;
