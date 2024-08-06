"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-900 text-white p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="h1">Çınar</h1>
        </Link>

        <nav className="hidden md:flex space-x-4 text-white ">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Menu
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none bg-green-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="p-4">
            <a href="#" className="text-white block py-2 hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white block py-2 hover:text-gray-300">
              Menu
            </a>
            <a href="#" className="text-white block py-2 hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="text-white block py-2 hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
