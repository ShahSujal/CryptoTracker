"use client"
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

const NavBar = () => {
  const [displayChange, setDisplayChange] = useState(false);
  const navItems = ["Crypto Taxes", "Free Tools", "Resource Center"];

  // Use useCallback to prevent the creation of a new function on each render
  const toggleDisplayChange = useCallback(() => {
    setDisplayChange(prevDisplayChange => !prevDisplayChange);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 transition z-50 ${displayChange ? "max-md:h-60" : "h-20"} h-20  bg-[#ffffffaf] backdrop-blur-lg flex items-center justify-between max-md:justify-evenly flex-row max-md:flex-col px-3`}>
      <div className="w-1/2 flex items-center flex-row max-md:w-full justify-between">
        <Image src="/KoinXLogo.png" alt="logo" width={400} height={400} className="w-28 h-7" />
        <button className="w-8 h-8 rounded-full text-xl text-black hidden max-md:flex" onClick={toggleDisplayChange}>
          {displayChange ? <MdCancel /> : <CiMenuBurger />}
        </button>
      </div>
      <ul className={`w-1/2 ${displayChange ? "flex" : "max-md:hidden"} max-md:w-full h-36 flex flex-row max-md:flex-col justify-end max-md:justify-evenly max-md:items-start items-center space-x-6 max-md:space-x-0 font-medium`}>
        {navItems.map((item, index) => (
          <li key={index} className="text-gray-600 hover:text-blue-500 cursor-pointer">{item}</li>
        ))}
        <button className="p-2 px-4 bg-blue-700 rounded-md" style={{ background: "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)" }}>Get Started</button>
      </ul>
    </nav>
  );
};

export default React.memo(NavBar);