"use client";
import React from "react";
import { Globe } from "lucide-react";

const EventsPage = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen py-10">
      <section className="w-full flex flex-col items-center py-10 sm:py-14 px-4 md:px-10 bg-white"></section>
      {/* ========= HEADER SECTION ========= */}
      {/* === Header Background Image Section === */}
      <div className="relative w-full max-w-7xl text-center overflow-hidden">
        <div
          className="bg-cover bg-center flex justify-center items-center h-32 sm:h-40 md:h-48 lg:h-22"
          style={{
            backgroundImage: "url('/image 180.png')", // Events background
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
            <span className="text-[#bfffe9]">Events</span>
          </h2>
        </div>
      </div>

      {/* ========= DESCRIPTION SECTION ========= */}
      <div
        className="relative w-full max-w-7xl p-7 mx-auto  overflow-hidden shadow-md"
        style={{
          backgroundImage: "url('/Rectangle 7358.png')", // your background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        {/* Content */}
        <div className="relative z-10 text-white p-6 sm:p-8 md:p-10 text-justify">
          <p className="leading-relaxed italic font-serif text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            At <span className="font-semibold not-italic">ClinXcel</span>, we are a
            dedicated team of industry and training experts with over{" "}
            <span className="font-semibold not-italic">20 years of experience</span>{" "}
            in the clinical research domain. Our mission is to build a highly skilled
            workforce that can meet the growing demands of the life sciences and
            healthcare industries. We have successfully trained more than{" "}
            <span className="font-semibold not-italic">3,000 students</span>, equipping
            them with practical, industry-relevant knowledge and skills.
          </p>
        </div>
      </div>

      {/* ========= EVENT CARD SECTION ========= */}
      <div className="relative mt-16 w-[90%] max-w-xl">
        {/* Overlapping Icon */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#7ed2c4] w-28 h-28 rounded-full flex items-center justify-center shadow-md">
          <Globe className="text-white w-14 h-14" />
        </div>

        {/* Card */}
        <div className="bg-[#b8e9e5] rounded-2xl text-center shadow-md pt-20 pb-6 px-5">
          <h2 className="text-[18px] font-semibold text-[#0b4e46]">
            Webinar Clinical Research
          </h2>
          <p className="text-sm text-gray-700 mt-1 mb-3">
            19-05-2025 06:52 AM
          </p>
          <p className="text-sm text-gray-800 leading-relaxed">
            Discover the joy and energy of sports through our exclusive event
            designed to promote fitness, teamwork, and fun. Whether you're a
            beginner or a pro, ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
