"use client";
import React from "react";
import Image from "next/image";

// ------------------------- WHY CHOOSE US -------------------------
const WhyChooseUs = () => {
  const features = [
    "20+ yrs expert faculty",
    "3,000+ students trained",
    "Industry-linked courses",
    "Clinical & medical programs",
    "Leadership training",
    "Strong college tie-ups",
    "100% placement support",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6 sm:p-8 bg-white text-gray-800 my-10 mx-4 sm:mx-6">
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-bold mb-8 text-center lg:text-left leading-tight">
          Why Choose <br /> Us ?
        </h2>

        {/* Image Container */}
        <div className="w-full max-w-xs sm:max-w-md bg-gradient-to-br from-[#77DD77] to-[#B6EDb1] p-2 rounded-2xl shadow-xl">
          <img
            src="/image 192.svg"
            alt="Medical equipment"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center w-full max-w-xs sm:max-w-md md:max-w-lg bg-gradient-to-r from-[#B6EDb1] to-[#77DD77]
                       p-3 sm:p-4 rounded-full shadow-md transition-all duration-300 ease-in-out"
          >
            <span
              className="text-[#3b8a3b] text-2xl sm:text-3xl mr-2 sm:mr-3"
              style={{ textShadow: "0 0 5px rgba(182, 237, 177, 0.7)" }}
            >
              ★
            </span>
            <p className="text-base sm:text-lg font-medium text-gray-900">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ------------------------- MISSION & VISION -------------------------
const MissionVision = () => {
  const vision =
    "To equip aspiring professionals and industry leaders with the specialized skills, knowledge, and practical experience necessary to excel in the life sciences and healthcare industries, thereby creating a sustainable and skilled workforce that meets global industry standards.";
  const mission =
    "To be a leading educational and training institute in the clinical research field, fostering innovation, excellence, and leadership while bridging the gap between academia and industry, ultimately contributing to the growth of a healthier and more informed world.";

  return (
    <div className="relative w-full max-w-6xl mx-auto my-16 shadow-2xl rounded-lg overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row h-full">
        {/* Vision */}
        <div className="relative p-6 sm:p-10 md:p-12 md:w-1/2 bg-[linear-gradient(90deg,#FFFFFF_0%,#038BB0_127.57%,#6EB563_181.74%)] text-gray-800 flex flex-col justify-center items-start z-10">
          <p className="text-base sm:text-lg mb-6 leading-relaxed italic text-left">
            {vision}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif italic font-bold mt-auto self-center">
            Our Vision
          </h2>
        </div>

        {/* Mission */}
        <div className="relative p-6 sm:p-10 md:p-12 md:w-1/2 bg-[linear-gradient(90deg,#FFFFFF_-71.4%,#038BB0_48.91%,#6EB563_100%)] text-white flex flex-col justify-center items-end z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-bold mb-6 mt-auto self-center">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg leading-relaxed italic text-right\">
            {mission}
          </p>
        </div>

        {/* Separator */}
        <div className="absolute top-0 bottom-0 left-1/2 w-14 bg-[#D9D9D9] transform -translate-x-1/2 -skew-x-10 hidden md:block z-30"></div>
      </div>
    </div>
  );
};

// ------------------------- FOUNDER MESSAGE -------------------------
const FounderMessage = () => {
  return (
    <div className="relative w-full max-w-8xl mx-auto my-16 bg-white overflow-hidden flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="relative md:w-1/3 bg-gray-50 flex flex-col justify-between items-center p-6 sm:p-10">
        {/* Title box */}
        <div className="absolute top-0 left-0 w-[90%] border-4 border-[#1F97B6] border-l-0 text-black px-3 py-2 rounded-tr-3xl bg-white">
          <h3 className="text-base sm:text-lg text-center font-semibold tracking-wide leading-snug">
            A MESSAGE OF VISION <br /> FROM THE FOUNDER
          </h3>
        </div>

        {/* Ellipse and Founder Image */}
        <div className="relative w-full flex justify-center items-center mt-24 sm:mt-28">
          <Image
            src="/Ellipse 204.svg"
            alt="ellipse background"
            width={288}
            height={288}
            className="absolute w-72 h-72 opacity-80"
          />

          <Image
            src="/Ellipse 204.svg"
            alt="ellipse background"
            width={250}
            height={250}
            className="absolute w-50 h-50 opacity-80"
          />

          <Image
            src="/Ellipse 205.svg"
            alt="ellipse background"
            width={200}
            height={200}
            className="absolute w-25 h-25 opacity-80"
          />

          <Image
            src="/image 193.svg"
            alt="Founder"
            width={224} // around w-56 = 14rem = 224px
            height={224}
            className="relative ml-15 z-10 w-56 h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Name Section */}
        <div className="bg-black border-4 border-[#008000] text-white text-center px-4 py-3 w-[90%] sm:w-[25rem] rounded-3xl shadow-md z-10">
          <h2 className="font-bold text-base sm:text-lg">Almas Sayed</h2>
          <p className="text-xs sm:text-[13px] italic leading-snug">
            Founder – ClinXcel MBA (International Business) & Life science
            graduate with multidisciplinary diplomas
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 p-6 sm:p-8 text-gray-900 flex flex-col justify-center mt-6 sm:mt-9">
        <p className="text-sm sm:text-base md:text-[18px] italic leading-relaxed text-justify font-serif">
          A competent professional with around 21+ years of rich experience in
          diverse domains encompassing pharma, healthcare, corporate and
          leadership training, quality management, audit support and business
          development. Currently leading ClinXcel for providing life training
          solutions to increase employability skills for aspiring candidates.
          Providing upskilling and cross skilling to the corporate employees as
          a part of continuous learning. Almas has worked with esteemed
          organizations such as Wipro Pvt Ltd, Tata Consultancy Services (TCS),
          Cognizant Technology Solutions, SIRO Clinpharm, CREMA, Spanco
          International, and Wadia hospital. Certified Lead Auditor in QMS (ISO
          9001:2008) & (ISO 22000). Certified ICH-GCP trainer by TCS. Certified
          (TTP) from NPTEL. Almas has expertise in conducting leadership
          training, mid-level and team member trainings on business
          communication, strategic planning, emotional intelligence, decision
          making etc to optimize human resources for better productivity and
          workplace harmony. Almas has trained more than 50,000 associates
          across 100+ organizations from a wide range of industries including
          educational institutes, pharma, healthcare and medical devices.
        </p>

        <div className="flex space-x-4 mt-6 text-gray-600 justify-center md:justify-start">
          <i className="ri-mail-fill text-lg sm:text-xl"></i>
          <i className="ri-facebook-box-fill text-lg sm:text-xl"></i>
          <i className="ri-linkedin-box-fill text-lg sm:text-xl"></i>
        </div>
      </div>
    </div>
  );
};

// ------------------------- ABOUT PAGE -------------------------
const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative mx-4 sm:mx-6 my-8">
        <img
          src="/image 180.png"
          alt="Blog Header"
          className="w-full h-40 sm:h-52 md:h-60 object-cover rounded-lg"
        />
        <h1
          className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          style={{
            textShadow:
              "0 0 10px rgba(100, 255, 255, 0.7), 0 0 20px rgba(0, 191, 255, 0.5)",
          }}
        >
          About
        </h1>
      </div>

      {/* Description */}
      <div className="relative text-white text-center mx-4 sm:mx-6 my-10 overflow-hidden bg-[#0f1a2b] rounded-lg shadow-lg">
        <img
          src="/Rectangle 7358.png"
          alt="Description Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 px-4 sm:px-10 md:px-16 py-10 sm:py-16 md:py-20">
          <p className="max-w-4xl mx-auto leading-relaxed text-base sm:text-lg md:text-xl font-serif italic">
            At <span className="font-semibold text-white">ClinXcel</span>, we are a
            dedicated team of industry and training experts with over 20 years of
            experience in the clinical research domain. Our mission is to build a
            highly skilled workforce that can meet the growing demands of the life
            sciences and healthcare industries. We have successfully trained more
            than 3,000 students, equipping them with practical, industry-relevant
            knowledge and skills.
          </p>
        </div>
      </div>

      {/* Sections */}
      <WhyChooseUs />
      <MissionVision />
      <FounderMessage />
    </div>
  );
};

export default AboutPage;
