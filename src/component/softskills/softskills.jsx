"use client";
import React from "react";
import Image from "next/image";

export default function SoftSkills() {
  return (
    <div className="min-h-screen bg-white px-6 sm:px-12 lg:px-20 py-8">

      {/* PAGE TITLE */}
<h1 className="text-[50px] font-bold text-black ml-6">
Soft - Skills
</h1>

{/* BUTTON IMAGE BELOW THE HEADING */}
<div className="flex justify-start ml-2">
  <img 
    src="/button.png"
    alt="Courses Banner"
    className="w-95 h-auto"
  />
</div>

      {/* TABS */}
      <div className="flex gap-0 mb-8 w-full max-w-md">
        {/* <button
          className="bg-green-500 text-white font-semibold px-6 sm:px-10 py-3 rounded-l-lg text-base sm:text-lg relative z-10"
          style={{
            clipPath: "polygon(0 0, calc(100% - 8px) 0, 80% 100%, 0 100%)",
          }}
        >
          Popular
        </button>

        <button
          className="bg-teal-600 text-white font-semibold px-6 sm:px-10 py-3 rounded-r-lg text-base sm:text-lg -ml-6 sm:-ml-10"
          style={{
            clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          Services
        </button> */}
       

      </div>

      {/* COURSE CARD */}
      <div
        className="w-full max-w-5xl mx-auto rounded-2xl p-6 sm:p-8 relative flex flex-col lg:flex-row mr-75 items-start lg:items-center gap-6 shadow-md"
        style={{
          background: "linear-gradient(180deg, #64C55D, #0FA3B1)",
        }}
      >
        {/* 4 WEEKS TAG */}
        <div className="absolute top-3 right-3 bg-black text-white font-bold text-xs sm:text-sm px-4 py-1 rounded-full">
          4 WEEKS
        </div>

        {/* LEFT IMAGE */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md w-full sm:w-auto flex justify-center">
          <Image
            src="/soft-skill.jpg"
            alt="Soft Skills"
            width={300}
            height={160}
            className="rounded-xl object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-white max-w-xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight mb-2">
            SOFT SKILLS TRAINING MODULES BY ClinXcel.
          </h3>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            Eligibility : Graduation / Post-Graduation in Life Sciences /
            Pharmaceutical Sciences, Medical, Dental Sc
          </p>
        </div>
      </div>
    </div>
  );
}
