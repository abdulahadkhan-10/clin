"use client";
import React from "react";

export default function MissionVision() {
  const vision =
    "To equip aspiring professionals and industry leaders with the specialized skills, knowledge, and practical experience necessary to excel in the life sciences and healthcare industries, thereby creating a sustainable and skilled workforce that meets global industry standards.";
  const mission =
    "To be a leading educational and training institute in the clinical research field, fostering innovation, excellence, and leadership while bridging the gap between academia and industry, ultimately contributing to the growth of a healthier and more informed world.";

  return (
    <div className="relative w-full max-w-6xl mx-auto my-16 shadow-2xl rounded-lg overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row h-full">
        {/* Vision Section (Left - Light Blue Background) */}
        <div className="relative p-12 md:w-1/2 bg-blue-200 text-gray-800 flex flex-col justify-center items-start z-10">
          <p className="text-lg mb-6 leading-relaxed italic text-left">
            {vision}
          </p>
          <h2 className="text-4xl font-serif italic font-bold mt-auto self-end">
            Our Vision
          </h2>
        </div>

        {/* Mission Section (Right - Blue/Green Gradient Background) */}
        <div className="relative p-12 md:w-1/2 bg-gradient-to-br from-blue-500 to-green-500 text-white flex flex-col justify-center items-start z-10">
          <h2 className="text-5xl font-serif italic font-bold mb-6 mt-auto self-start">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed italic text-left">
            {mission}
          </p>
        </div>

        {/* Diagonal Separator */}
        <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-gray-300 transform -translate-x-1/2 skew-x-3 hidden md:block z-20"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-white transform -translate-x-1/2 skew-x-3 hidden md:block z-30"></div>
      </div>
    </div>
  );
}
