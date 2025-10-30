"use client";
import React, { useState, useEffect } from "react";

export default function MedicalBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background images
  const bgImages = [
    "/medical-banner.png",
    "/bg-image-2.png",
    "/bg-image-1.png",
    "/bg-image-3.png",
  ];

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000); // 3 seconds per image

    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="relative w-full overflow-hidden shadow-xl mt-8 md:mt-12 mb-8 md:mb-16">
      {/* === Animated Background Container === */}
      <div className="relative flex flex-col min-h-[350px] md:min-h-[450px] md:flex-row">
        {/* === Background Slideshow === */}
        <div className="absolute inset-0 z-0">
          {bgImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } bg-cover bg-center`}
              style={{
                backgroundImage: `url('${src}')`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          ))}
        </div>

        {/* === Left Section: Gradient + Text === */}
        <div
          className="relative w-full md:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white z-20 backdrop-blur-[6px]"
          style={{
            clipPath: "polygon(0 0, 90% 0, 80% 50%, 90% 100%, 0 100%)",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#68c07e]/90 via-[#469d8b]/85 to-[#1a6e87]/80 opacity-[0.9] z-0"></div>

          {/* Text Content */}
          <div className="relative z-10 font-serif translate-x-[-10px] sm:translate-x-[-20px] -translate-y-[30px] sm:-translate-y-[50px] md:-translate-y-[70px]">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
              <span className="text-white italic font-light">Excellence in</span>
              <br />
              <span className="font-semibold italic text-white">
                Medical{" "}
               <span
  className="font-bold"
  style={{
    backgroundImage:
      "linear-gradient(to right, #00061a 0%, #2fa8ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Education
</span>

              </span>
            </h2>

            {/* Subtitle + Button */}
            <div className="mt-6 md:mt-8 flex flex-col items-center space-y-4">
              <p className="bg-white text-black font-lg text-sm sm:text-base px-8 py-3 rounded-full shadow-lg tracking-wide text-center">
                Transform students into leaders
              </p>
              <button className="bg-black text-white text-sm px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300">
                KNOW MORE
              </button>
            </div>
          </div>

{/* === Decorative Boxes === */}
<div className="absolute bottom-0 left-6 sm:bottom-2 sm:left-8 md:bottom-4 md:left-10 z-10">
  <div className="relative w-[210px] h-[200px] sm:w-[230px] sm:h-[220px] md:w-[250px] md:h-[240px]">

    {/* 1️⃣ Bottom-left box (same as before) */}
    <div
      className="absolute border-[3px] sm:border-[4px] border-white
                 w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px]
                 bottom-[-16px] sm:bottom-[-18px] md:bottom-[-20px]
                 left-0"
    ></div>

    {/* 2️⃣ Middle box (shifted slightly left) */}
    <div
      className="absolute border-[3px] sm:border-[4px] border-white
                 w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px]
                 bottom-[46px] sm:bottom-[54px] md:bottom-[60px]
                 left-[32px] sm:left-[40px] md:left-[46px]"
    ></div>

    {/* 3️⃣ Right box (same as before) */}
    <div
      className="absolute border-[3px] sm:border-[4px] border-white
                 w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px]
                 bottom-[10px] sm:bottom-[16px] md:bottom-[20px]
                 left-[68px] sm:left-[78px] md:left-[86px]"
    ></div>

  </div>
</div>


        </div>

        {/* === Right Section Placeholder === */}
        <div className="relative w-full md:w-[45%] min-h-[250px] md:min-h-full"></div>
      </div>

      {/* === Slider Dots (Bottom Center) === */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {bgImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 ${
              currentIndex === index
                ? "bg-white scale-110 shadow-md"
                : "bg-white/70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
