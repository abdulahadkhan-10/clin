"use client";
import React from "react";

export default function VisionMission() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#C7EFFF] to-[#8BE3CC] flex flex-col items-center justify-center font-serif px-6 md:px-20 py-16">
      {/* Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden relative bg-white">
        {/* Vision Section */}
        <div className="md:w-1/2 p-10 bg-gradient-to-r from-white to-[#D6F3FF] relative">
          <h2 className="text-3xl font-bold text-black mb-4">Our <span className="italic font-semibold">Vision</span></h2>
          <p className="text-gray-800 text-justify leading-relaxed font-medium">
            To equip aspiring professionals and industry leaders with the
            specialized skills, knowledge, and practical experience necessary
            to excel in the life sciences and healthcare industries, thereby
            creating a sustainable and skilled workforce that meets global
            industry standards.
          </p>

          {/* Decorative diagonal bar */}
          <div className="absolute top-0 right-[-20px] h-full w-[30px] bg-gray-200 transform skew-x-[20deg]" />
        </div>

        {/* Mission Section */}
        <div className="md:w-1/2 p-10 bg-gradient-to-r from-[#0099CC] to-[#32D583] text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">Our <span className="italic font-semibold">Mission</span></h2>
          <p className="text-justify leading-relaxed italic font-medium">
            To be a leading educational and training institute in the clinical
            research field, fostering innovation, excellence, and leadership
            while bridging the gap between academia and industry, ultimately
            contributing to the growth of a healthier and more informed world.
          </p>
        </div>
      </div>
    </main>
  );
}
