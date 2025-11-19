"use client";
import React from "react";

export default function MissionVision() {
  return (
    <div className="py-12 px-4 bg-white ml-20 mt-10 mr-15 item-justify-center">

      {/* Dark Gray Top Divider */}
      <div className="border-t border-gray-700"></div>


      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pt-8">
        
        <div className="md:w-1/4 text-left md:text-left">
          <h3 className="text-4xl mb-22 font-semibold text-gray-800 leading-tight tracking-wide">
            Our <br /> Vision
          </h3>
        </div>

        <div className="md:w-3/4 max-w-[80%]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Be Passionate Challengers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            To equip aspiring professionals and industry leaders with the
            specialized skills, knowledge, and practical experience necessary to
            excel in the life sciences and healthcare industries, thereby
            creating a sustainable and skilled workforce that meets global
            industry standards.
          </p>
        </div>
      </div>

      {/* Middle Dark Gray Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pt-8">
        
        <div className="md:w-1/4 text-left md:text-left">
          <h3 className="text-4xl mb-22 font-semibold text-gray-800 leading-tight tracking-wide">
            Our <br /> Mission
          </h3>
        </div>

        <div className="md:w-3/4 max-w-[80%]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Excellence in Every Dose.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            To be a leading educational and training institute in the clinical
            research field, fostering innovation, excellence, and leadership
            while bridging the gap between academia and industry, ultimately
            contributing to the growth of a healthier and more informed world.
          </p>
        </div>
      </div>

      {/* Bottom Dark Line */}
      <div className="border-t border-gray-700"></div>
    </div>
  );
}
