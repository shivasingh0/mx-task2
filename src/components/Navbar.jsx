import React, { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Button from "./Button";
import { BiPhone } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f9fafb] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded">
              <div className="font-bold flex items-center gap-[1px]">
                <span className="bg-[#39db4a] text-white px-[6px] rounded-md text-2xl font-bold">
                  F
                </span>
                <img src="/assets/logo.png" className="h-5" alt="logo" />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a href="#" className="text-gray-800 hover:text-[#39db4a]">
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 flex items-center hover:text-[#39db4a]"
            >
              <span>Menu</span> <IoIosArrowDown className="text-[#39db4a]" />
            </a>
            <a
              href="#"
              className="text-gray-800 flex items-center hover:text-[#39db4a]"
            >
              <span>Services</span>
              <IoIosArrowDown className="text-[#39db4a]" />
            </a>
            <a href="#" className="text-gray-800 hover:text-[#39db4a]">
              Offers
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:text-[#39db4a]">
              <FiSearch size={20} />
            </button>
            <button className="relative p-2 hover:text-[#39db4a]">
              <div className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center p-2 bg-[#39db4a] rounded-full text-white text-xs">
                8
              </div>
              <BsHandbag size={20} />
            </button>
            <Button
              text="Contact"
              icon={<BiPhone className="w-5 h-5" />}
              variant="primary"
              size="md"
              onClick={() => alert("Calling...")}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-[#39db4a]"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f9fafb] shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a
              href="#"
              className="block px-3 py-2 text-gray-800 hover:text-[#39db4a] font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-800 hover:text-[#39db4a] font-medium"
            >
              Menu
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-800 hover:text-[#39db4a] font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-800 hover:text-[#39db4a] font-medium"
            >
              Offers
            </a>
            <button className="block w-full text-left px-3 py-2 text-gray-800 hover:text-[#39db4a] font-medium">
              Search
            </button>
            <button className="block w-full text-left px-3 py-2 text-gray-800 hover:text-[#39db4a] font-medium">
              Cart
            </button>
            <Button
              text="Contact"
              icon={<BiPhone className="w-5 h-5" />}
              variant="primary"
              size="md"
              onClick={() => alert("Calling...")}
              className="w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
