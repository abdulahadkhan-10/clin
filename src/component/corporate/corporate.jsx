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
    <div className="min-h-screen bg-white px-6 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-[50px] font-bold text-black text-left pl-10 sm:pl-20">
        Corporate
      </h1>

      {/* BUTTON IMAGE */}
      <div className="flex justify-start pl-10 sm:pl-20 mt-1">
        <img src="/button.png" alt="button" className="w-72 h-auto" />
      </div>

      {/* CARD GRID */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">

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
  );
}
