"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownContainerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };
    document.body.addEventListener("mousedown", handleClickOutside);
    return () => document.body.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white relative z-[10000] shadow-md">
      <div className="w-full mx-auto shadow-md flex gap-2 relative">

        {/* LOGO */}
        <div className="py-2 pl-2 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="ClinXcel Logo"
            width={130}
            height={100}
            className="object-contain"
          />
        </div>

        {/* GRADIENT NAVBAR */}
        <div
          className="flex-1 py-8 md:py-8 px-6 relative"
          style={{
            background: "linear-gradient(to right, #72CB64, #058DAF)",
            clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          {/* Desktop Navigation */}
          <div className="flex items-center justify-between">
            <ul className="hidden md:flex items-center space-x-10 text-white font-semibold text-lg mx-auto">

              <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200">About Us</Link></li>
              <li><Link href="/event" className="hover:text-gray-200">Events</Link></li>

              {/* SERVICES DROPDOWN WITH CLICK ONLY */}
              <li className="relative" ref={dropdownContainerRef}>
                <button
                  ref={buttonRef}
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 hover:text-gray-200"
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`${servicesOpen ? "rotate-180" : "rotate-0"} transition-transform`}
                  />
                </button>
              </li>

              <li><Link href="/blog" className="hover:text-gray-200">Blogs</Link></li>
              <li><Link href="/courses" className="hover:text-gray-200">Courses</Link></li>
              <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* SEPARATED SERVICES DROPDOWN */}
      {servicesOpen && (
  <div
    ref={dropdownRef}
    onMouseDown={(e) => e.stopPropagation()}   // <-- ADD THIS LINE
    className="absolute top-[95px] left-1/2 ml-45 transform -translate-x-1/2 
               bg-white rounded-lg shadow-xl py-3 min-w-[280px] z-[20000]"
  >

          <Link href="/consulting" className="block px-5 py-2 text-black hover:bg-gray-100">
            Pharmacovigilance Consulting
          </Link>
          <Link href="/corporate" className="block px-5 py-2 text-black hover:bg-gray-100">
            Corporate Training
          </Link>
          <Link href="/soft-skills" className="block px-5 py-2 text-black hover:bg-gray-100">
            Soft Skills Training
          </Link>
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg text-center py-6 space-y-4 font-semibold text-base mx-3">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/event" onClick={() => setMenuOpen(false)}>Events</Link>

          <details className="cursor-pointer">
            <summary className="flex justify-center items-center gap-1">
              Services
            </summary>
<div className="mt-3">
              <Link href="/consulting" className="block py-2">Pharmacovigilance Consulting</Link>
              <Link href="/corporate" className="block py-2">Corporate Training</Link>
              <Link href="/soft-skills" className="block py-2">Soft Skills Training</Link>
            </div>
          </details>

          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
