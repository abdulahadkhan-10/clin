"use client";
import React from "react";
import Image from "next/image";

export default function SoftSkills() {
  return (
    <div className="min-h-screen bg-white font-[Poltawski_Nowy]">
      {/* Hero Section */}
      <section className="relative h-[25vh] sm:h-[40vh] flex items-center justify-center overflow-hidden mb-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image 180.png')" }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1
            className="font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[140px] text-white"
            style={{
              WebkitTextStroke: "1px #76CD61",
              textShadow: "0 0 20px rgba(118, 205, 97, 0.5)",
            }}
          >
            Soft&nbsp;-&nbsp;Skills
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="relative min-h-[25vh] sm:min-h-[35vh] flex items-center justify-center text-center px-4 sm:px-8 md:px-16 mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Rectangle 7358.png')" }}
        ></div>

        <div className="relative z-10 max-w-4xl">
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed italic font-medium">
            At ClinXcel, we are a dedicated team of industry and training experts
            with over 20 years of experience in the clinical research domain.
            Our mission is to build a highly skilled workforce that can meet the
            growing demands of the life sciences and healthcare industries. We
            have successfully trained more than 3,000 students, equipping them
            with practical, industry-relevant knowledge and skills.
          </p>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-12 flex flex-col items-center justify-center">
        {/* Section Title */}
        <div className="mb-10">
          <div
            className="relative flex items-center justify-center rounded-[40px] shadow-md text-center mx-auto"
            style={{
              background: "linear-gradient(100deg, #72CB63 50%, #77C2C3 50%)",
              width: "min(90vw, 550px)",
              height: "100px",
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-semibold text-black leading-none">
              <span className="font-extrabold">Popular</span> Services
            </h2>
          </div>
        </div>

        {/* Service Card */}
        <div
          className="relative text-white shadow-xl flex flex-col items-center justify-between px-6 pt-6 pb-8 rounded-[40px]"
          style={{
            backgroundColor: "#000000CC",
            width: "min(90vw, 550px)",
          }}
        >
          {/* Duration Tag */}
          <div className="absolute top-4 -right-6 flex flex-col items-center sm:-right-8">
            <div
              className="relative flex items-center justify-center font-semibold text-white"
              style={{
                width: "60px",
                height: "140px",
                backgroundColor: "#000000",
                border: "4px solid #FFFFFF",
                borderRadius: "49.6px",
                writingMode: "vertical-rl",
                textOrientation: "upright",
                fontSize: "16px",
              }}
            >
              <span className="tracking-tight">4 Weeks</span>
              <div
                className="absolute right-0 h-16 bg-[#72CB63]"
                style={{
                  width: "8px",
                  borderTopRightRadius: "49.6px",
                  borderBottomRightRadius: "49.6px",
                }}
              ></div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center">
            <Image
              src="/softskills.png"
              alt="Soft Skills Training"
              width={400}
              height={220}
              className="rounded-[30px] object-cover w-[85%] sm:w-[400px] h-[200px] sm:h-[220px]"
            />
          </div>

          {/* Text */}
          <div className="mt-5 text-center">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: "#6AB365", fontFamily: "Poppins, sans-serif" }}
            >
              Soft Skills Training Modules by ClinXcel
            </h3>

            <p className="text-sm sm:text-base italic font-semibold leading-snug text-justify text-white">
              Eligibility: Graduation / Post-Graduation in Life Sciences /
              Pharmaceutical Sciences, Medical, Dental Sciences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
