"use client";
import React from "react";
import { Globe } from "lucide-react";

const EventsPage = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen py-10">
      {/* ========= HEADER SECTION ========= */}
      <div className="relative w-full max-w-5xl">
        {/* Header Background */}
        <img
          src="/image 180.png" // ✅ Replace with your header image
          alt="Events Header"
          className="w-full h-44 md:h-56 lg:h-64 object-cover rounded-t-md shadow-md"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[white] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] text-center">
            Events
          </h1>
        </div>  
      </div>

      {/* ========= DESCRIPTION SECTION ========= */}
      <div className="relative w-full max-w-5xl mt-4 px-4 sm:px-6 lg:px-0">
        {/* Background image */}
        <img
          src="/Rectangle 7358.png" // ✅ Replace with your background image
          alt="Description Background"
          className="absolute inset-0 w-full h-full object-cover rounded-b-md"
        />


        {/* Content */}
        <div className="relative text-white p-6 sm:p-8 md:p-10 text-justify rounded-b-md min-h-[260px] md:min-h-[280px] lg:min-h-[300px]">
          <p className="leading-relaxed italic font-serif text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            At <span className="font-semibold not-italic">ClinXcel</span>, we
            are a dedicated team of industry and training experts with over{" "}
            <span className="font-semibold not-italic">
              20 years of experience
            </span>{" "}
            in the clinical research domain. Our mission is to build a highly
            skilled workforce that can meet the growing demands of the life
            sciences and healthcare industries. We have successfully trained
            more than{" "}
            <span className="font-semibold not-italic">3,000 students</span>,
            equipping them with practical, industry-relevant knowledge and
            skills.
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
