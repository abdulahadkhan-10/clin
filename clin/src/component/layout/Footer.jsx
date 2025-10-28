import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-cyan-500 text-black pt-10 pb-6 mt-10 rounded-t-3xl shadow-lg">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address & Contact */}
        <div>
          <div className="flex items-center mb-3">
            <img
              src="/logo.svg" // replace with your logo path
              alt="ClinXcel Logo"
              className="w-12 h-12 rounded-full bg-black p-1"
            />
          </div>
          <p className="text-sm leading-relaxed">
            M. N Road, Sonapur lane
            <br />
            Near Manisha Plaza
            <br />
            Kurla (W), Mumbai - 400070
          </p>

          <div className="mt-3 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> 8369919288 / 7021235702
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@clinexcel.in
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Terms of service</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Regular Training</li>
            <li className="hover:text-white cursor-pointer">Corporate Training</li>
            <li className="hover:text-white cursor-pointer">Soft Skills Training</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-3">Our Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter and receive the latest news about our products and
            services!
          </p>
          <div className="flex space-x-3">
            <a href="#" className="hover:opacity-80">
              <Image src="/gmail.png" alt="Gmail" width={30} height={30} />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white mt-8 pt-4 text-center text-sm">
        © Copyright{" "}
        <a href="#" className="font-semibold underline hover:text-white">
          ClinXcel
        </a>{" "}
        All Rights Reserved | Designed by <span className="font-semibold">Find Solution</span>
      </div>
    </footer>
  );
};

export default Footer;
