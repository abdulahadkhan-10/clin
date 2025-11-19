"use client";
import React from "react";
// ------------------------- WHY CHOOSE US -------------------------
const WhyChooseUs = () => {
  return (
    <div className="relative w-full bg-white py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-500 transform -translate-x-1/2 hidden lg:block"></div>

        {/* WHY CHOOSE US - Title Left, Content Right */}
        <div className="relative flex flex-col lg:flex-row items-center mb-16 lg:mb-24">
          {/* Left Side - Title */}
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex justify-end items-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Why choose us ?
            </h2>
          </div>

          {/* Timeline Dot */}
          <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10 border-2 border-white"></div>

          {/* Right Side - Content Box */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-6 border-2 border-teal-300 relative hover:shadow-2xl transition-shadow max-w-md">
              {/* Arrow pointer to timeline */}
              <div className="absolute left-0 top-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-teal-300 transform -translate-x-2 -translate-y-1/2 hidden lg:block"></div>
              

              
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 20+ years expert faculty.</li>
                <li>• Industry linked courses</li>
                <li>• 3,000+ students trained</li>
                <li>• Clinical & medical programs</li>
                <li>• Leadership training</li>
                <li>• Strong college tie-ups</li>
                <li>• 100% placement support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* OUR MISSION - Title Right, Content Left */}
        <div className="relative flex flex-col lg:flex-row items-center mb-16 lg:mb-24">
          {/* Left Side - Content Box */}
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex justify-end">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-6 border-2 border-teal-300 relative hover:shadow-2xl transition-shadow max-w-md">
              {/* Arrow pointer to timeline */}
              <div className="absolute right-0 top-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-teal-300 transform translate-x-2 -translate-y-1/2 hidden lg:block"></div>
              
              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <li>
                  • To be a leading educational and training institute in the clinical research field, fostering innovation, excellence
                </li>
                <li>
                  • Leadership while bridging the gap between academia and industry, ultimately contributing to the growth of a healthier and more informed world
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Dot */}
          <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10 border-2 border-white"></div>

          {/* Right Side - Title */}
          <div className="w-full lg:w-1/2 lg:pl-8 flex justify-start items-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Mission
            </h2>
          </div>
        </div>

        {/* OUR VISION - Title Left, Content Right */}
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Left Side - Title */}
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex justify-end items-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Vision
            </h2>
          </div>

          {/* Timeline Dot */}
          <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10 border-2 border-white"></div>

          {/* Right Side - Content Box */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-6 border-2 border-teal-300 relative hover:shadow-2xl transition-shadow max-w-md">
              {/* Arrow pointer to timeline */}
              <div className="absolute left-0 top-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-teal-300 transform -translate-x-2 -translate-y-1/2 hidden lg:block"></div>
              
              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <li>
                  • To equip aspiring professionals and industry leaders with the specialized skills, knowledge, and practical experience necessary to excel in the life sciences and healthcare.
                </li>
                <li>
                  • Industries, thereby creating a sustainable and skilled workforce that meets global industry standards.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------------- FOUNDER MESSAGE -------------------------

const FounderMessage = () => {
  return (
    <div className="w-full bg-white py-20 flex justify-center">
      
      <div className="relative w-[1000px] h-[420px] rounded-3xl overflow-hidden group shadow-xl">

        {/* Background Image */}
        <img
          src="/Front.jpg"
          alt="Founder"
          className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay (appears on hover) */}
        <div className="absolute inset-0 bg-[#6AB365] backdrop-blur-md opacity-0 group-hover:opacity-100 
                        transition-all duration-700 p-10 flex flex-col justify-center text-center text-white">

          <p className="text-[16px] leading-relaxed text-justify font-serif mb-8">
 A competent professional with around 21 + years of rich experience in diverse domains encompassing pharma, healthcare, corporate and leadership training, quality management, audit support and business development. Currently leading ClinXcel for providing E2E training solutions to increase employability skills for aspiring candidates. Providing upskilling and cross skilling to the corporate employees as a part of continous learning. Almas has worked with esteemed organizations such as Wipro Pvt Ltd, Tata Consultancy Services (TCS), Cognizant Technology Solutions, SIRO Clinpharm, CREMA, Spanco International, and Wadia  hospital. Certified Lead Auditor in QMS (ISO 9001:2008) & (ISO 22000). Certified ICH-GCP trainer by TCS. Certified (TTT) from NPTEL. Almas has expertise in conducting leadership training, mid-level and team member trainings on business communication, strategic planning, emotional intelligence, decision making etc to optimize human resources for better productivity and workplace harmony. Almas has trained more than 50,000 associates across 100 + organizations from a wide range of industries including educational institutes, pharma, healthcare and medical devices.

          </p>

          <div className="flex justify-center gap-6 mt-4">
            <i className="ri-mail-fill text-3xl"></i>
            <i className="ri-facebook-box-fill text-3xl"></i>
            <i className="ri-linkedin-box-fill text-3xl"></i>
          </div>
        </div>

      </div>

    </div>
  );
}

// ------------------------- ABOUT PAGE -------------------------
const AboutPage = () => {
  return (
    <div className="">
      {/* Header */}
{/* About Section */}
<div className="w-full bg-white py-12 px-6 sm:px-10 lg:px-20 text-black">

  {/* Title */}
  <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
    About
  </h1>

  {/* Description */}
  <p className="text-lg sm:text-xl text-justify leading-relaxed max-w-full">
    At <span className="font-semibold">ClinXcel</span>, we are a dedicated team of
    industry and training experts with over 20 years of experience in the
    clinical research domain. Our mission is to build a highly skilled workforce
    that can meet the growing demands of the life sciences and healthcare
    industries. We have successfully trained more than 3,000 students, equipping
    them with practical, industry relevant knowledge and skills.
  </p>

</div>



      {/* Sections */}
      <WhyChooseUs />
     
      <FounderMessage />
    </div>
  );
};

export default AboutPage;
