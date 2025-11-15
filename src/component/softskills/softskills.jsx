"use client";
import React from "react";
import Image from "next/image";

export default function SoftSkills() {
  return (
    <div className="min-h-screen bg-white px-15 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-[50px] font-bold text-black mb-6">
        Soft-Skills
      </h1>

      {/* TABS */}
     <div className="flex gap-0 mb-8">
        <button 
          className="bg-green-500 text-white font-semibold px-10 py-3 rounded-l-lg text-lg relative z-10"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 5px) 0, 80% 100%, 0 100%)'
          }}
        >
          Popular
        </button>
        <button 
          className="bg-teal-600 text-white font-semibold px-10 py-3 rounded-r-lg text-lg -ml-10"
          style={{
            clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)'
          }}
        >
          Services
        </button>
      </div>

      {/* COURSE CARD */}
      <div
        className="w-auto max-w-5xl mx-auto rounded-2xl p-6 relative flex items-center gap-6 shadow-md"
        style={{
          background: "linear-gradient(180deg, #64C55D, #0FA3B1)",
        }}
      >

        {/* 4 WEEKS TAG */}
        <div className="absolute top-4 right-4 bg-black text-white font-bold text-sm px-5 py-1 rounded-full">
          4 WEEKS
        </div>

        {/* LEFT IMAGE */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Image
            src="/soft-skill.jpg"
            alt="Soft Skills"
            width={350}
            height={160}
            className="rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-white max-w-xl">
          <h3 className="text-2xl font-extrabold leading-tight mb-2">
            SOFT SKILLS TRAINING MODULES BY ClinXcel.
          </h3>

          <p className="text-lg leading-relaxed font-medium">
            Eligibility : Graduation / Post-Graduation in Life Sciences /
            Pharmaceutical Sciences, Medical, Dental Sc
          </p>
        </div>

      </div>

    </div>
  );
}
