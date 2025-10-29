"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-green-400 to-cyan-600 shadow-lg rounded-full mt-4 px-6 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="ClinXcel Logo"
            width={55}
            height={55}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-black font-semibold text-lg">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/event" className="hover:text-white transition-colors">
              Events
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Right Contact Us (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-white text-black font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X size={30} className="text-black" />
          ) : (
            <Menu size={30} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg text-center py-6 space-y-5 font-semibold text-lg transition-all duration-300">
          <Link
            href="/"
            className="block text-black hover:text-cyan-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-black hover:text-cyan-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/event"
            className="block text-black hover:text-cyan-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/services"
            className="block text-black hover:text-cyan-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="block text-black hover:text-cyan-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-400 to-cyan-600 text-white px-6 py-2 rounded-full font-bold shadow-md hover:opacity-90 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
