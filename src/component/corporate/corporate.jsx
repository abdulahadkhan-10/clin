"use client";
import React from "react";
import Image from "next/image";

export default function Corporate() {
  const cards = [
    {
      duration: "1 year",
      img: "training1.png",
      title: "Empower Teams With ClinXcel’s Industry-Ready Training",
      desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental Sc"
    },
    {
      duration: "4 weeks",
      img: "corp1.jpg",
      title: "Medical Writing",
      desc: "Eligibility : Post-Graduation in Life Sciences / Pharmaceutical Sciences , Graduation in Medical , Dental"
    },
    {
      duration: "4 weeks",
      img: "corp2.jpg",
      title: "Clinical Research",
      desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental Sc"
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with Animation */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4 sm:mb-5 md:mb-6 relative inline-block">
          Corporate
        </h2>
 
        <img 
          src="/button.png"
          alt="Courses Banner"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mb-4 sm:mb-5 h-auto"
        />

      {/* CARD GRID */}
      <div className="flex flex-wrap justify-center mt-10">
        <div className="flex flex-wrap justify-center gap-10 max-w-[1200px]"></div>

        {cards.map((card, index) => (
          <div
            key={index}
            className="
              bg-white rounded-3xl shadow-lg overflow-hidden w-[330px]
              flex flex-col
              transition-all duration-300 
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            {/* IMAGE WRAPPER */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="
                  w-full h-full object-cover 
                  transition-transform duration-500 
                  hover:scale-110
                "
              />

              {/* DURATION BADGE */}
              <div className="absolute top-3 right-3 bg-[#6ECCDD] text-white text-xs font-bold px-3 py-1 rounded-lg">
                {card.duration}
              </div>
            </div>

            {/* BOTTOM CONTENT SECTION */}
            <div className="bg-[#1E1E1E] text-center px-4 py-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-[#58AF65] leading-tight">
                {card.title}
              </h3>

              <p className="text-sm text-white mt-3 leading-relaxed flex-1">
                {card.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
    </section>
  );
}
