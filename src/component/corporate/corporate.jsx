"use client";
import React from "react";
import Image from "next/image";

export default function Corporate() {
  return (
    <div className="min-h-screen bg-white px-25 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-[50px] font-bold text-black mb-6">
      Corporate
      </h1>

      {/* TABS */}
     <div className="flex mb-8">
    <div className="flex justify-start mb-5">
  <img 
    src="/button.png"
    alt="Courses Banner"
    className="w-95 h-auto"
  />
</div>

      </div>
    <div className="flex flex-wrap justify-center gap-6 mt-8">
        {/* CARD 1 */}
        <div
          className="relative text-white shadow-2xl flex flex-col items-center justify-between px-5 pt-5 pb-6 rounded-3xl"
          style={{
            backgroundColor: "#1a1a1aee",
            width: "min(90vw, 320px)",
          }}
        >
          {/* Duration Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-teal-400 text-white text-xs font-bold px-4 py-1.5 rounded-md shadow-md">
            1 year
          </div>

          <div className="w-full flex justify-center mb-4">
            <img
              src="training.png"
              alt="Training"
              className="rounded-2xl w-full h-44 object-cover"
            />
          </div>

          <div className="mt-3 text-center px-2">
            <h3 className="text-lg font-bold mb-2 leading-tight" style={{ color: "#7BC67E" }}>
              Empower Teams With ClinXcel's Industry-Ready Training
            </h3>
            <p className="text-xs italic font-medium leading-relaxed text-white opacity-90 text-left">
              Eligibility: Graduation / Post-Graduation in Life Sciences & Pharmaceutical Sciences.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="relative text-white shadow-2xl flex flex-col items-center justify-between px-5 pt-5 pb-6 rounded-3xl"
          style={{
            backgroundColor: "#1a1a1aee",
            width: "min(90vw, 320px)",
          }}
        >
          {/* Duration Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-teal-400 text-white text-xs font-bold px-4 py-1.5 rounded-md shadow-md">
            4 weeks
          </div>

          <div className="w-full flex justify-center mb-4">
            <img
              src="corp1.jpg"
              alt="Medical Writing"
              className="rounded-2xl w-full h-44 object-cover"
            />
          </div>

          <div className="mt-3 text-center px-2">
            <h3 className="text-lg font-bold mb-2 leading-tight" style={{ color: "#7BC67E" }}>
              Medical Writing
            </h3>
            <p className="text-xs italic font-medium leading-relaxed text-white opacity-90 text-left">
              Eligibility : Post-Graduation in life Sciences/ Pharmaceutical Sciences , Graduation in Medical , Dental
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className="relative text-white shadow-2xl flex flex-col items-center justify-between px-5 pt-5 pb-6 rounded-3xl"
          style={{
            backgroundColor: "#1a1a1aee",
            width: "min(90vw, 320px)",
          }}
        >
          {/* Duration Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-teal-400 text-white text-xs font-bold px-4 py-1.5 rounded-md shadow-md">
            4 weeks
          </div>

          <div className="w-full flex justify-center mb-4">
            <img
              src="corp2.jpg"
              alt="Clinical Research"
              className="rounded-2xl w-full h-44 object-cover"
            />
          </div>

          <div className="mt-3 text-center px-2">
            <h3 className="text-lg font-bold mb-2 leading-tight" style={{ color: "#7BC67E" }}>
              Clinical Research
            </h3>
            <p className="text-xs italic font-medium leading-relaxed text-white opacity-90 text-left">
              Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental Sc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}