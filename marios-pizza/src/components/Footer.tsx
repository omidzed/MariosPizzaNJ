import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <div className="flex flex-row p-4 bg-secondary text-white">
      <div className="w-1/4">
        <p className="font-bold">Hours:</p>
        <p className="text-sm">Sunday: 11a - 8p</p>
        <p className="text-sm">Monday - Saturday: 11a-10p</p>
      </div>
      <div className="pl-4 w-1/4">
        <p className="font-bold">Location:</p>
        <p className="text-sm">132 W Pleasant Ave</p>
        <p className="text-sm">Maywood, NJ 07607</p>
      </div>
      <div className="w-1/4 border-black border-2">
        <p>Map</p>
      </div>
      <div className="flex flew-row gap-3 items-center w-1/4 justify-end">
        <a href="https://www.facebook.com/mariospizzanj" target="_blank">
          <FaFacebook
            className="hover:scale-125 hover:ease-in duration-150"
            size={35}
          />
        </a>
        <a href="https://www.instagram.com/marios_pizzanj/" target="_blank">
          <FaInstagram
            className="hover:scale-125 hover:ease-in duration-150"
            size={35}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/mario-s-pizzeria-restaurant/"
          target="_blank"
        >
          <FaLinkedin
            className="hover:scale-125 hover:ease-in duration-150"
            size={35}
          />
        </a>
      </div>
    </div>
  );
}
