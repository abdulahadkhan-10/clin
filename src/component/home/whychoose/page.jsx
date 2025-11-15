"use client";
import Image from "next/image";

export default function WhyClinxcel() {
  return (
    <div className="w-full bg-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 shadow-sm">

      {/* Left Section: Text */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Why CLINXCEL?
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          At ClinXcel, we are a dedicated team of industry and training experts
          with over 20 years of experience in the clinical research domain.
          Our mission is to build a highly skilled workforce that can meet the
          growing demands of the life sciences and healthcare industries.
          We have successfully trained more than 3,000 students, equipping them
          with practical, industry-knowledge and skills.
        </p>

        <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Know more
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/image 200.png" 
          alt="ClinXcel Graphic"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

    </div>
  );
}
