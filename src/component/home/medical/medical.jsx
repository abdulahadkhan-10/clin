"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MedicalBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const slides = [
    {
      image: "/image1.png",
      lines: ["WELCOME TO", "CLINXCEL"],
    },
    {
      image: "/image2.png",
      lines: ["SHAPING THE", "NEXT ERA OF", "PHARMA GROWTH"],
    },
    {
      image: "/image3.png",
      lines: ["YOUR", "WELLNESS", "IS OUR", "PRIORITY"],
    },
    {
      image: "/image4.png",
      lines: ["EXPLORING", "THE FUTURE OF", "HEALTH & SCIENCE"],
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    
    if (!isMounted) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length, isMounted]);

  if (!isMounted) {
    return (
      <div
        className="relative w-full overflow-hidden shadow-xl mt-8 md:mt-12 mb-8 md:mb-16 min-h-[350px] md:min-h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url('${slides[0].image}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    );
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  const franklinFont = {
    fontFamily:
      '"Franklin Gothic Demi", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    letterSpacing: "0.5px",
  };

  return (
    <div className="relative w-full overflow-hidden shadow-xl mt-8 md:mt-12 mb-8 md:mb-16">
      {/* === Background Slideshow === */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } bg-cover bg-center`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            {/* lighter overlay for image clarity */}
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>
        ))}
      </div>

      {/* === Banner Content === */}
      <div className="relative flex flex-col min-h-[350px] md:min-h-[450px] md:flex-row">
        {/* ================= MOBILE VIEW ================= */}
        <div className="block md:hidden relative w-full p-6 sm:p-8 flex flex-col justify-center text-white z-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom right, #6ec492 0%, #3caea3 50%, #1a6e87 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
              opacity: "0.85",
            }}
          ></div>

          <div className="relative z-10 text-center backdrop-blur-[3px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slides[currentIndex].lines.map((line, i) => (
                  <motion.h2
                    key={i}
                    custom={i}
                    variants={lineVariants}
                    style={franklinFont}
                    className="text-3xl sm:text-4xl font-semibold text-white leading-snug tracking-tight uppercase"
                  >
                    {line}
                  </motion.h2>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div
          className="hidden md:flex relative w-[55%] p-10 lg:p-14 flex-col justify-center text-white z-20 backdrop-blur-[5px]"
          style={{
            clipPath: "polygon(0 0, 90% 0, 80% 50%, 90% 100%, 0 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#68c07e]/80 via-[#469d8b]/75 to-[#1a6e87]/70 opacity-[0.9] z-0"></div>

          <div className="relative z-10 translate-x-[-10px] -translate-y-[60px] text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slides[currentIndex].lines.map((line, i) => (
                  <motion.h2
                    key={i}
                    custom={i}
                    variants={lineVariants}
                    style={franklinFont}
                    className="text-4xl lg:text-6xl font-semibold text-white leading-snug tracking-tight uppercase"
                  >
                    {line}
                  </motion.h2>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* === Right Section Placeholder === */}
        <div className="relative w-full md:w-[45%] min-h-[250px] md:min-h-full"></div>
      </div>

      {/* === Slider Dots === */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-500 ${
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
