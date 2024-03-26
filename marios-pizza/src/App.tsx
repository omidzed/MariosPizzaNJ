import { Route, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Navbar } from "./components/NavBar";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { Catering } from "./pages/Catering";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
