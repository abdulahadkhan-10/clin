"use client";
import React, { useState, useEffect } from "react";

export default function MedicalBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const bgImages = [
    "/medical-banner.png",
    "/bg-image-2.png",
    "/bg-image-1.png",
    "/bg-image-3.png",
  ];

  // ✅ Ensures client and server renders match
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bgImages.length, isMounted]);

  // ✅ Prevent hydration error by rendering a static frame on SSR
  if (!isMounted) {
    return (
      <div className="relative w-full overflow-hidden shadow-xl mt-8 md:mt-12 mb-8 md:mb-16 min-h-[350px] md:min-h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImages[0]}')` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden shadow-xl mt-8 md:mt-12 mb-8 md:mb-16">
      {/* === Background Slideshow === */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } bg-cover bg-center`}
            style={{ backgroundImage: `url('${src}')` }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        ))}
      </div>

      {/* === Responsive Container === */}
      <div className="relative flex flex-col min-h-[350px] md:min-h-[450px] md:flex-row">

        {/* ================= MOBILE VIEW ================= */}
        <div className="block md:hidden relative w-full p-8 sm:p-10 flex flex-col justify-center text-white z-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom right, #6ec492 0%, #3caea3 50%, #1a6e87 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
              opacity: "0.95",
            }}
          ></div>

          <div className="relative z-10 text-center font-serif -translate-y-4 sm:-translate-y-6 backdrop-blur-[4px]">
            <h2 className="text-3xl sm:text-4xl leading-tight tracking-tight">
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

            <div className="flex  flex-col items-center space-y-3">
              <p className="bg-white/90 text-black font-medium text-sm px-8 py-3 rounded-full shadow-lg tracking-wide text-center">
                Transform students into leaders
              </p>
              <button className="bg-black text-white text-sm md:text-base px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300">
                KNOW MORE
              </button>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div
          className="hidden md:flex relative w-[55%] p-12 lg:p-16 flex-col justify-center text-white z-20 backdrop-blur-[6px]"
          style={{
            clipPath: "polygon(0 0, 90% 0, 80% 50%, 90% 100%, 0 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#68c07e]/90 via-[#469d8b]/85 to-[#1a6e87]/80 opacity-[0.9] z-0"></div>

          <div className="relative z-10 font-serif translate-x-[-20px] -translate-y-[70px]">
            <h2 className="text-5xl lg:text-6xl leading-tight tracking-tight">
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

            <div className="mt-10 flex flex-col items-center justify-center space-y-5 text-center">
              <p className="bg-white text-black font-medium text-base md:text-lg px-8 py-3 rounded-full shadow-lg tracking-wide">
                Transform students into leaders
              </p>
              <button className="bg-black text-white text-sm md:text-base px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300">
                KNOW MORE
              </button>
            </div>
          </div>

          {/* Decorative Boxes */}
          <div className="absolute bottom-0 left-6 sm:bottom-2 sm:left-8 md:bottom-4 md:left-10 z-10">
            <div className="relative w-[210px] h-[200px] sm:w-[230px] sm:h-[220px] md:w-[250px] md:h-[240px]">
              <div className="absolute border-[3px] sm:border-[4px] border-white w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] bottom-[-16px] sm:bottom-[-18px] md:bottom-[-20px] left-0"></div>
              <div className="absolute border-[3px] sm:border-[4px] border-white w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] bottom-[46px] sm:bottom-[54px] md:bottom-[60px] left-[32px] sm:left-[40px] md:left-[46px]"></div>
              <div className="absolute border-[3px] sm:border-[4px] border-white w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] bottom-[10px] sm:bottom-[16px] md:bottom-[20px] left-[68px] sm:left-[78px] md:left-[86px]"></div>
            </div>
          </div>
        </div>

        {/* === Right Section Placeholder === */}
        <div className="relative w-full md:w-[45%] min-h-[250px] md:min-h-full"></div>
      </div>

      {/* === Slider Dots === */}
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
