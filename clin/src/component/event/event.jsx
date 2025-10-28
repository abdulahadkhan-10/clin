"use client";
import React from "react";
import { Globe } from "lucide-react";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Header Image Section */}
      <div className="relative w-full max-w-5xl">
        <img
          src="/events-header.jpg" // replace with your actual image path
          alt="Events Header"
          className="w-full h-48 object-cover rounded-t-2xl shadow-md"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-2xl">
          <h1 className="text-4xl font-bold text-white tracking-wide">
            Events
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-[#0e1a2b] text-white max-w-5xl w-full p-6 rounded-b-2xl shadow-md">
        <p className="text-justify leading-relaxed">
          At <span className="font-semibold">ClinXcel</span>, we are a
          dedicated team of industry and training experts with over{" "}
          <span className="font-semibold">20 years of experience</span> in the
          clinical research domain. Our mission is to build a highly skilled
          workforce that can meet the growing demands of the life sciences and
          healthcare industries. We have successfully trained more than{" "}
          <span className="font-semibold">3,000 students</span>, equipping them
          with practical, industry-relevant knowledge and skills.
        </p>
      </div>

      {/* Webinar Card */}
      <div className="mt-10 bg-[#d9f3f1] w-[90%] max-w-lg rounded-2xl shadow-md flex flex-col items-center text-center p-6">
        <div className="bg-[#7ed2c4] rounded-full w-20 h-20 flex items-center justify-center mb-4">
          <Globe className="text-white w-10 h-10" />
        </div>

        <h2 className="text-lg font-semibold text-[#0a4e45] mb-1">
          Webinar Clinical Research
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          19-05-2025 06:52 AM
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Discover the joy and energy of sports through our exclusive event
          designed to promote fitness, teamwork, and fun. Whether you're a
          beginner or a pro, ...
        </p>
      </div>
    </div>
  );
};

export default EventsPage;
