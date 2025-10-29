"use client";
import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poltawski+Nowy:wght@400;500;600;700&display=swap');
      `}</style>

      <footer
        className="bg-gradient-to-r from-green-400 to-cyan-500 text-black pt-16 pb-0 mt-10 relative overflow-hidden"
        style={{ fontFamily: "'Poltawski Nowy', serif" }}
      >
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 pb-20">
          {/* Address & Contact */}
          <div>
            <div className="flex items-center mb-5">
              <Image
                src="/logo.svg"
                alt="ClinXcel Logo"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
            <div className="text-base leading-relaxed space-y-1.5 font-medium">
              <p>M. N Road, Sonapur lane</p>
              <p>Near Manisha Plaza</p>
              <p>Kurla (W), Mumbai - 400070</p>
            </div>

            <div className="mt-5 space-y-3 text-base font-semibold">
              <p className="flex items-center gap-2">
                <Phone size={18} /> 8369919288 / 7021235702
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} /> info@clinexcel.in
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">Useful Links</h3>
            <ul className="space-y-3 text-base font-semibold">
              <li className="hover:text-white cursor-pointer transition-colors">• Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">• About us</li>
              <li className="hover:text-white cursor-pointer transition-colors">• Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">• Terms of service</li>
              <li className="hover:text-white cursor-pointer transition-colors">• Privacy policy</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-5">Our Services</h3>
            <ul className="space-y-3 text-base font-semibold">
              <li className="hover:text-white cursor-pointer transition-colors">• Regular Training</li>
              <li className="hover:text-white cursor-pointer transition-colors">• Corporate Training</li>
              <li className="hover:text-white cursor-pointer transition-colors">• Soft Skills Training</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-5">Our Newsletter</h3>
            <p className="text-base mb-5 leading-relaxed font-semibold">
              Subscribe To Our Newsletter And Receive The Latest News About Our Products And Services!
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@clinexcel.in" className="hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <Mail size={20} className="text-red-500" />
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Add Union.svg between footer and copyright */}
        <div className="relative z-10 w-full">
          <Image
            src="/Union.svg"
            alt="Union Decoration"
            width={1728}
            height={195}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Copyright Section */}
        <div className="bg-black text-white text-center py-4 text-sm font-semibold relative z-10">
          © Copyright{" "}
          <a href="#" className="font-bold hover:text-gray-300 transition-colors">
            ClinXcel
          </a>{" "}
          All Rights Reserved | Designed by{" "}
          <span className="font-bold">Find Solution</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
