"use client";
import React, { useState } from "react";
import { Mail, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";

const Footer = () => {
  // ✅ States for mobile dropdowns
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer
      className="bg-gradient-to-r from-green-400 to-cyan-500 text-black pt-14 pb-0 mt-10 relative overflow-hidden"
      style={{ fontFamily: "'Poltawski Nowy', serif" }}
    >
      {/* --- Main Footer Content --- */}
      <div className="container mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 pb-16">
        {/* Address & Contact */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-5">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="ClinXcel Logo"
                width={64}
                height={64}
                className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <div className="text-base leading-relaxed space-y-1.5 font-medium">
            <p>M. N Road, Sonapur lane</p>
            <p>Near Manisha Plaza</p>
            <p>Kurla (W), Mumbai - 400070</p>
          </div>

          <div className="mt-5 space-y-3 text-base font-semibold">
            <a href="tel:8369919288" className="flex justify-center sm:justify-start items-center gap-2 hover:text-white transition-colors">
              <Phone size={18} /> 8369919288 / 7021235702
            </a>
            <a href="mailto:info@clinexcel.in" className="flex justify-center sm:justify-start items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} /> info@clinexcel.in
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="text-center sm:text-left">
          <button
            className="flex justify-between items-center w-full sm:cursor-default sm:pb-0 pb-3 border-b sm:border-none"
            onClick={() => toggleSection("links")}
          >
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ChevronDown
              size={20}
              className={`sm:hidden transition-transform ${
                openSection === "links" ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`space-y-3 text-base font-semibold sm:block transition-all duration-300 overflow-hidden ${
              openSection === "links" || typeof window === "undefined"
                ? "max-h-96 mt-4"
                : "max-h-0"
            }`}
          >
            <li>
              <Link href="/" className="hover:text-white cursor-pointer transition-colors block">
                • Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white cursor-pointer transition-colors block">
                • About us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white cursor-pointer transition-colors block">
                • Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-center sm:text-left">
          <button
            className="flex justify-between items-center w-full sm:cursor-default sm:pb-0 pb-3 border-b sm:border-none"
            onClick={() => toggleSection("services")}
          >
            <h3 className="text-xl font-bold">Our Services</h3>
            <ChevronDown
              size={20}
              className={`sm:hidden transition-transform ${
                openSection === "services" ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`space-y-3 text-base font-semibold sm:block transition-all duration-300 overflow-hidden ${
              openSection === "services" || typeof window === "undefined"
                ? "max-h-96 mt-4"
                : "max-h-0"
            }`}
          >
            <li>
              <Link href="/consulting" className="hover:text-white cursor-pointer transition-colors block">
                • Pharmacovigilance Consulting
              </Link>
            </li>
            <li>
              <Link href="/corporate" className="hover:text-white cursor-pointer transition-colors block">
                • Corporate Training
              </Link>
            </li>
            <li>
              <Link href="/soft-skills" className="hover:text-white cursor-pointer transition-colors block">
                • Soft Skills Training
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center sm:text-left">
          <button
            className="flex justify-between items-center w-full sm:cursor-default sm:pb-0 pb-3 border-b sm:border-none"
            onClick={() => toggleSection("newsletter")}
          >
            <h3 className="text-xl font-bold">Our Newsletter</h3>
            <ChevronDown
              size={20}
              className={`sm:hidden transition-transform ${
                openSection === "newsletter" ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`text-base font-semibold leading-relaxed sm:block transition-all duration-300 overflow-hidden ${
              openSection === "newsletter" || typeof window === "undefined"
                ? "max-h-96 mt-4"
                : "max-h-0"
            }`}
          >
            <p className="mb-5">
              Subscribe To Our Newsletter And Receive The Latest News About Our
              Products And Services!
            </p>
          </div>
        </div>
      </div>

      {/* --- Union SVG Divider + Floating Social Icons --- */}
      <div className="relative z-10 w-full">
        <Image
          src="/Union.svg"
          alt="Union Divider"
          width={1728}
          height={195}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Floating Social Icons on SVG */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-5 z-20">
          <a
            href="https://www.instagram.com/clinxcel/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <Image src="/instagram.svg" alt="Instagram" width={22} height={22} />
          </a>
          <a
            href="mailto:info@clinexcel.in"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <Image src="/mail.svg" alt="Gmail" width={22} height={22} />
          </a>
          <a
            href="https://www.facebook.com/clinxcel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <Image src="/facebook.svg" alt="Facebook" width={22} height={22} />
          </a>
          <a
            href="https://www.linkedin.com/company/clinxcel-academy-of-clinical-research/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={22} height={22} />
          </a>
        </div>
      </div>

      {/* --- Copyright Section --- */}
      <div className="bg-black text-white text-center py-4 text-sm font-semibold relative z-10">
        © Copyright{" "}
        <Link href="/" className="font-bold hover:text-gray-300 transition-colors">
          ClinXcel
        </Link>{" "}
        All Rights Reserved | Designed by{" "}
        <span className="font-bold">Find Solution</span>
      </div>
    </footer>
  );
};

export default Footer;
