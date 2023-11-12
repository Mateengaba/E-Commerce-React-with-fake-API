import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import Button from "../Button";
import NavLinks from "./NavLinks";
import Logo from "../../assets/Logotwh.avif"
import "./nav.css"



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white nav">
      <div className="flex items-center font-normal justify-around mx-5">
        <div className="z-50 p-4 lg:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="lg:cursor-pointer h-11 w-20" />
          <div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="lg:flex hidden uppercase items-center gap-5 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
            Create your own
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
Contact           
 </Link>
          </li>
        </ul>
   
        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
            
          </li>
          <NavLinks />
          <div className="py-5">
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
