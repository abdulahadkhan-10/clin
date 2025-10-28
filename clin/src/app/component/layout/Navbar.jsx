import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 rounded-full shadow-md bg-gradient-to-r from-green-400 to-cyan-500">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.svg" // replace with your logo path
          alt="Logo"
          className="w-10 h-10 rounded-full bg-black p-1"
        />
      </div>

      {/* Menu Links */}
      <ul className="flex items-center space-x-8 text-black font-semibold">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Events</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">Blogs</li>
      </ul>

      {/* Contact Button */}
      <button className="bg-white text-black font-semibold px-4 py-1 rounded-full shadow hover:bg-gray-100">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
