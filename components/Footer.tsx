// components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-600 text-white p-8">
      <div className="container mx-auto flex flex-row justify-between items-center gap-6 lg:gap-0">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <p>Email: chef@example.com</p>
          <p>Phone: <span className="lg:relative flex flex-col"> +964 770 984 2397</span></p>
        </div>

        {/* Wishing for a Delicious Experience */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2 text-blue-950">
            Wishing You a Delicious Experience 
          </h2>
        </div>

        {/* Name of the Chef */}
        <div className="text-center md:text-right">
          <h2 className="text-lg font-bold -2">Chef</h2>
          <p >Chef John </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Chef John Doe. 
        </p>
      </div>
    </footer>
  );
}
