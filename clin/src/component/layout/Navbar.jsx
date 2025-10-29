"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-3 w-full rounded-full shadow-lg bg-gradient-to-r from-green-400 to-cyan-600 mx-auto my-4">
      
      {/* Left Logo - pressed to left */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="ClinXcel Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Center Menu */}
      <ul className="flex items-center space-x-10 text-black font-semibold text-lg">
        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
        <li><Link href="/event" className="hover:text-white transition-colors">Events</Link></li>
        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
        <li><Link href="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
      </ul>

      {/* Right Contact Us Button */}
      <Link
        href="/contact"
        className="bg-white text-black font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        Contact Us
      </Link>

    </nav>
  );
};

export default Navbar;
