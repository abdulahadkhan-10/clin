"use client";
import React from "react";
import { Globe } from "lucide-react";
import { Poltawski_Nowy } from "next/font/google";

const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});


const EventsPage = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen py-10">
      {/* ========= HEADER SECTION ========= */}
      <div className="relative w-full text-center overflow-hidden">
  <div
    className="bg-cover bg-center flex justify-center items-center h-32 sm:h-40 md:h-48 lg:h-32"
    style={{
      backgroundImage: "url('/image 180.png')", // Event background
    }}
  >
    
                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1
                        className="font-bold"
                        style={{
                            fontFamily: "Poltawski Nowy, serif",
                            fontWeight: 700,
                            fontSize: "100px",
                            lineHeight: "100%",
                            color: "#FFFFFF",
                            WebkitTextStroke: "1px #76CD61", // ✅ Green border on text
                            textStroke: "3px #76CD61",       // Fallback for non-WebKit
                            letterSpacing: "0",
                            textShadow: "0 0 20px rgba(118, 205, 97, 0.5)", // optional glow
                        }}
                    >
                      Event
                    </h1>
                </div>
  </div>
</div>


      {/* ========= DESCRIPTION SECTION ========= */}
      <div className="relative w-full mt-6 px-4 sm:px-6 lg:px-8">
  {/* Background image */}
  <img
    src="/Rectangle 7358.png"
    alt="Description Background"
    className="absolute inset-0 w-full h-full object-cover"
  />
        {/* Content */}
      <div
      className={`relative z-10 text-white p-5 sm:p-8 md:p-10 lg:p-12 text-justify rounded-b-md min-h-[220px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[300px] ${poltawski.className}`}
    >
      <p className="leading-relaxed italic text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[23px] font-medium">
        At{" "}
        <span className="font-semibold not-italic text-[19px] sm:text-[21px] md:text-[23px] lg:text-[24px]">
          ClinXcel
        </span>
        , we are a dedicated team of industry and training experts with over{" "}
        <span className="font-semibold not-italic">20 years of experience</span> in the
        clinical research domain. Our mission is to build a highly skilled workforce
        that can meet the growing demands of the life sciences and healthcare
        industries. We have successfully trained more than{" "}
        <span className="font-semibold not-italic">3,000 students</span>, equipping them
        with practical, industry-relevant knowledge and skills.
      </p>
    </div>
      </div>

      {/* ========= EVENT CARD SECTION ========= */}
      <div className="relative w-[90%] max-w-3xl mx-auto mt-20 sm:mt-24 md:mt-28 lg:mt-32">
        {/* Overlapping Icon */}
        <div className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 bg-white w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 rounded-full flex items-center justify-center shadow-md">
          <div className="bg-gradient-to-b from-[#8ed1b2] to-[#4db48a] w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center">
            <Globe className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 text-[#026d57]" />
          </div>
        </div>

        {/* Card */}
        <div className="bg-[#8acdd1] rounded-2xl text-center shadow-md pt-20 sm:pt-24 md:pt-28 pb-8 px-5 sm:px-8 md:px-10 border border-gray-200">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold italic text-[#023b38]">
            Webinar Clinical Research
          </h2>
          <p className="text-sm sm:text-base text-[#024c46] mt-1 mb-3 italic">
            19-05-2025 &nbsp;|&nbsp; 06:52 AM
          </p>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#01332e] italic leading-relaxed font-serif px-1 sm:px-4">
            <span className="font-semibold not-italic">
              Discover the joy and energy
            </span>{" "}
            of sports through our exclusive event designed to promote fitness,
            teamwork, and fun. Whether you're a beginner or a pro, ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
