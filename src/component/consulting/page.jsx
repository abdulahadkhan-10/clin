"use client";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full bg-[#FFFFFF]">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative flex items-center justify-center w-full max-w-[1500px] h-[150px] md:h-[200px] lg:h-[250px] text-center bg-cover bg-center border-[3px] border-[#76CD61] opacity-100 px-4"
        style={{
          backgroundImage: "url('/image 180.png')",
          fontFamily: "'Poltawski Nowy', serif",
        }}
      >
        <h1
          className="text-[22px] sm:text-[60px] md:text-[80px] lg:text-[70px] font-bold leading-[100%] text-white text-balance"
          style={{
            textShadow: "0px 0px 10px rgba(118,205,97,0.8)",
          }}
        >
          Pharmacovigilance Consulting
        </h1>
      </section>

      {/* ===== CONSULTING SECTION ===== */}
      <section
        className="relative w-full max-w-[1599px] mt-[30px] flex items-center justify-center bg-cover bg-center text-justify"
        style={{
          backgroundImage: "url('/Rectangle 7358.png')",
          fontFamily: "'Poltawski Nowy', serif",
        }}
      >
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-10 py-6 md:py-10">
          <p
            className="text-white italic font-medium text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] leading-snug md:leading-[100%] max-w-6xl"
            style={{
              fontWeight: 500,
              opacity: 1,
            }}
          >
            At ClinXcel, we are a dedicated team of industry and training experts
            with over 20 years of experience in the clinical research domain. Our
            mission is to build a highly skilled workforce that can meet the
            growing demands of the life sciences and healthcare industries. We
            have successfully trained more than 3,000 students, equipping them
            with practical, industry-relevant knowledge and skills.
          </p>
        </div>
      </section>
    </main>
  );
}
