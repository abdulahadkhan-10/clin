"use client";
import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <footer
      className="bg-gradient-to-r from-[#58C73F] to-[#237C92] text-white pt-16 pb-0 mt-12 relative overflow-hidden"
      >
      {/* --- Main Footer Content --- */}
      <div className="container mx-auto ml-6 px-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 relative z-10 pb-20 text-lg">

        {/* Address & Contact */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-6">
            <Link href="/">
              <Image
                src="/logo1.png"
                alt="ClinXcel Logo"
                width={135}
                height={135}
                className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          <div className="leading-relaxed space-y-1 font-medium text-white/90 text-lg">
            <p>M. N Road, Sonapur lane</p>
            <p>Near Manisha Plaza</p>
            <p>Kurla (W), Mumbai - 400070</p>
          </div>

          <div className="mt-6 space-y-3 text-lg font-semibold">
            <a
              href="tel:8369919288"
              className="flex justify-center sm:justify-start items-center gap-2 hover:text-black transition"
            >
              <Phone size={20} /> 8369919288 / 7021235702
            </a>

            <a
              href="mailto:info@clinexcel.in"
              className="flex justify-center sm:justify-start items-center gap-0 hover:text-black transition"
            >
              <Mail size={20} /> info@clinexcel.in
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="text-center ml-6 sm:text-left">
          <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-3 text-lg font-semibold">
            <li>
              <Link href="/" className="hover:text-black transition">
                • Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black transition">
                • About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-black transition">
                • Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-3 text-lg font-semibold">
            <li>
              <Link href="/consulting" className="hover:text-black transition">
                • Pharmacovigilance Consulting
              </Link>
            </li>
            <li>
              <Link href="/corporate" className="hover:text-black transition">
                • Corporate Training
              </Link>
            </li>
            <li>
              <Link href="/soft-skills" className="hover:text-black transition">
                • Soft Skills Training
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center ml-1 sm:text-left">
          <h3 className="text-2xl font-bold mb-4">Our Newsletter</h3>
          <div className="text-lg font-medium leading-relaxed">
            <p>
              Subscribe to our newsletter and get the latest updates on our
              services, training programs, and industry insights.
            </p>
          </div>
        </div>
      </div>

      {/* --- Copyright Section --- */}
      <div className="bg-black text-white py-2 text-base font-semibold">
        <div className="max-w-9xl mx-auto flex items-center justify-between px-5">

          {/* Centered Footer Text */}
          <div className="flex-1 flex justify-center">
            <p className="text-center ml-25 text-1xl">
              © Copyright{" "}
              <Link
                href="/"
                className="font-semibold text-[#22D3EE] hover:text-[#1BB3C9]"
              >
                ClinXcel
              </Link>{" "}
              All Rights Reserved | Designed by{" "}
              <span className="font-bold">Code4Bharat</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-1 ml-2">
            {[
              { href: "https://www.instagram.com/clinxcel/", icon: "/instagram.svg" },
              { href: "mailto:info@clinexcel.in", icon: "/mail.svg" },
              { href: "https://www.facebook.com/clinxcel", icon: "/facebook.svg" },
              { href: "https://www.linkedin.com/company/clinxcel-academy-of-clinical-research/", icon: "/linkedin.svg" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:text-black transition"
              >
                <Image src={item.icon} alt="Icon" width={20} height={20} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
