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
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="w-full relative z-[10000] shadow-md">
      <div className="w-full shadow-md flex gap-2 sm:gap-4 relative">

        {/* LOGO */}
        <div className="py-1 pl-1 sm:pl-2 ml-2 sm:ml-4 flex-shrink-0">
          <Image
            src="/logo3.png"
            alt="ClinXcel Logo"
            width={100}
            height={75}
            className="w-[80px] h-auto sm:w-[100px] md:w-[130px]"
          />
        </div>
  
        {servicesOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-8 mt-12 sm:mt-14 md:mt-15 left-1/2 -translate-x-1/2
                       bg-white rounded-lg shadow-xl py-3 min-w-[240px] sm:min-w-[260px] md:min-w-[280px] z-[20000]"
          >
            <Link
              href="/consulting"
              className="block px-4 sm:px-5 py-2 text-sm sm:text-base text-black hover:bg-gray-100"
              onClick={() => setServicesOpen(false)}
            >
              Pharmacovigilance Consulting
            </Link>
            <Link
              href="/corporate"
              className="block px-4 sm:px-5 py-2 text-sm sm:text-base text-black hover:bg-gray-100"
              onClick={() => setServicesOpen(false)}
            >
              Corporate Training
            </Link>
            <Link
              href="/soft-skills"
              className="block px-4 sm:px-5 py-2 text-sm sm:text-base text-black hover:bg-gray-100"
              onClick={() => setServicesOpen(false)}
            >
              Soft Skills Training
            </Link>
          </div>
        )}
       
        {/* GRADIENT NAVBAR */}
        <div
          className="flex-1 py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-12 relative"
          style={{
            background: "linear-gradient(to right, #72CB64, #058DAF)",
            clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%, 0 95%)",
          }}
        >
          <div className="flex items-center justify-end md:justify-center">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-white font-semibold text-base lg:text-lg mx-auto">
              <li><Link href="/" className="hover:text-gray-200 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200 transition-colors">About Us</Link></li>
              <li><Link href="/event" className="hover:text-gray-200 transition-colors">Events</Link></li>

              {/* SERVICES DROPDOWN */}
              <li className="relative" ref={containerRef}>
                <button
                  ref={buttonRef}
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 hover:text-gray-200 transition-colors"
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`${servicesOpen ? "rotate-180" : "rotate-0"} transition-transform`}
                  />
                </button>
              </li>

              <li><Link href="/blog" className="hover:text-gray-200 transition-colors">Blogs</Link></li>
              <li><Link href="/courses" className="hover:text-gray-200 transition-colors">Courses</Link></li>
              <li><Link href="/contact" className="hover:text-gray-200 transition-colors">Contact</Link></li>
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg text-center py-4 sm:py-6 space-y-3 sm:space-y-4 font-semibold text-sm sm:text-base mx-3 text-black relative z-[20000]">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] transition-colors">
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] transition-colors">
            About Us
          </Link>
          <Link href="/event" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] transition-colors">
            Events
          </Link>

          <details className="cursor-pointer">
            <summary className="flex justify-center items-center gap-1 py-1 hover:text-[#058DAF] transition-colors">
              Services
              <ChevronDown size={16} className="inline" />
            </summary>
            <div className="mt-2 sm:mt-3 space-y-2">
              <Link 
                href="/consulting" 
                className="block py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Pharmacovigilance Consulting
              </Link>
              <Link 
                href="/corporate" 
                className="block py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Corporate Training
              </Link>
              <Link 
                href="/soft-skills" 
                className="block py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Soft Skills Training
              </Link>
            </div>
          </details>

          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] transition-colors">
            Blogs
          </Link>
          <Link href="/courses" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] transition-colors">
            Courses
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] transition-colors">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;