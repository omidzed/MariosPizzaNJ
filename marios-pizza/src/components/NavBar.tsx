import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  return (
    <div className="bg-secondary flex flex-row">
      <div className="flex flex-wrap justify-center content-center w-10 basis-1/12 md:hidden">
        <GiHamburgerMenu
          className="text-primary"
          onClick={() => console.log("Hello")}
        />
      </div>
      <div className="flex flex-row flex-wrap items-center basis-7/12 gap-2 md:basis-1/4 md:ml-10">
        <img
          className="w-20 h-20"
          src="images/marios-pizzaman.png"
          alt="marios-pizzaman"
        />
        <p className="text-white">Mario's Pizza</p>
      </div>
      <div className="hidden md:flex md:flex-row md:basis-1/2 md:justify-end">
        <button className="text-white pr-4">Home</button>
        <button className="text-white pr-4">About Us</button>
        <button className="text-white pr-4">Our Menu</button>
        <button className="text-white pr-4">Contact Us</button>
      </div>
      <div className="flex flex-wrap justify-center content-center basis-1/3 md:basis-1/4">
        <button className="bg-[#B91C1C] text-white h-10 w-28 rounded-lg shadow-md">
          Order Now!
        </button>
      </div>
    </div>
  );
}
