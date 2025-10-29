"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-green-400 to-cyan-500 shadow-lg rounded-xl px-4 py-3 md:py-4 relative z-[10000]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="ClinXcel Logo"
            width={56}
            height={56}
            className="object-contain rounded-lg"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-black font-semibold text-lg flex-1 justify-center">
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

          {/* Services Dropdown */}
          <li
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-white transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown
                size={18}
                className={`text-black transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-3 bg-white rounded-lg shadow-2xl py-3 min-w-[250px] border border-gray-100 transition-all duration-300 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-3 invisible"
              }`}
              style={{ zIndex: 9999 }}
            >
              <Link
                href="/corporate"
                className="block px-5 py-2 text-black hover:bg-cyan-50 hover:text-cyan-600 font-medium transition-colors"
                onClick={() => setServicesOpen(false)}
              >
                Corporate Training
              </Link>
              <Link
                href="/soft-skills"
                className="block px-5 py-2 text-black hover:bg-cyan-50 hover:text-cyan-600 font-medium transition-colors"
                onClick={() => setServicesOpen(false)}
              >
                Soft Skills Training
              </Link>
              <Link
                href="/consulting"
                className="block px-5 py-2 text-black hover:bg-cyan-50 hover:text-cyan-600 font-medium transition-colors"
                onClick={() => setServicesOpen(false)}
              >
                Pharmacovigilance Consulting
              </Link>
            </div>
          </li>

          <li>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-white text-black font-bold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none pr-2"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X size={28} className="text-black" />
          ) : (
            <Menu size={28} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg text-center py-6 space-y-4 font-semibold text-base mx-2 mb-2 relative z-[9999] transition-all duration-300">
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

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-center gap-1 text-black hover:text-cyan-600 transition-colors w-full"
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                mobileServicesOpen ? "max-h-60 mt-3" : "max-h-0"
              }`}
            >
              <Link
                href="/corporate"
                className="block text-black hover:text-cyan-600 transition-colors text-sm py-2"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Corporate Training
              </Link>
              <Link
                href="/soft-skills"
                className="block text-black hover:text-cyan-600 transition-colors text-sm py-2"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Soft Skills Training
              </Link>
              <Link
                href="/consulting"
                className="block text-black hover:text-cyan-600 transition-colors text-sm py-2"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Pharmacovigilance Consulting
              </Link>
            </div>
          </div>

          <Link
            href="/blog"
            className="block text-black hover:text-cyan-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-400 to-cyan-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:opacity-90 transition-all"
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
