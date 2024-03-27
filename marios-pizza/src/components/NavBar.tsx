import { Link, Outlet } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";

export function Navbar() {
  return (
    <div>
      <div className="bg-secondary flex flex-row sticky top-0 z-50">
        <div className="flex flex-wrap justify-center content-center w-10 basis-1/12 md:hidden">
          <TemporaryDrawer />
        </div>
        <Link to={"/"}>
          <div className="flex flex-row flex-wrap items-center basis-7/12 gap-2 md:basis-1/4 md:ml-10">
            <img
              className="w-20 h-20"
              src="images/marios-pizzaman.png"
              alt="marios-pizzaman"
            />
            <p className="text-white">Mario's Pizza</p>
          </div>
        </Link>
        <div className="hidden md:flex md:flex-row md:basis-1/2 md:justify-end">
          <button className="text-white pr-4 hover:underline hover:underline-offset-4 ">
            <Link to={"/"}>Home</Link>
          </button>
          <button className="text-white pr-4 hover:underline hover:underline-offset-4">
            <Link to={"/about-us"}>About Us</Link>
          </button>
          <button className="text-white pr-4 hover:underline hover:underline-offset-4">
            <Link to={"/menu"}>Our Menu</Link>
          </button>
          <button className="text-white pr-4 hover:underline hover:underline-offset-4">
            <Link to={"/catering"}>Catering</Link>
          </button>
          <button className="text-white pr-4 hover:underline hover:underline-offset-4">
            <Link to={"/contact-us"}>Contact Us</Link>
          </button>
        </div>
        <div className="flex flex-wrap justify-center content-center basis-1/3 md:basis-1/4">
          <a
            href="https://oftendining.com/#s:search.php,menu.php?store_id=13283&view="
            target="_blank"
          >
            <button className="bg-[#B91C1C] text-white h-10 w-28 rounded-lg shadow-md hover:scale-105">
              Order Now!
            </button>
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
