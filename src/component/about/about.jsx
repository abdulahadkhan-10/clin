"use client";
import React from "react";

// ------------------------- WHY CHOOSE US -------------------------
const WhyChooseUs = () => {
  return (
    <div className="relative w-full bg-white py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-500 transform -translate-x-1/2 hidden lg:block"></div>

        {/* WHY CHOOSE US - Title Left, Content Right */}
        <div className="relative flex flex-col lg:flex-row items-center mb-8 sm:mb-10 md:mb-12 lg:mb-20 xl:mb-24">
          {/* Left Side - Title */}
          <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 mb-3 sm:mb-4 lg:mb-0 flex justify-center lg:justify-end items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-0 text-center lg:text-right">
              Why choose us ?
            </h2>
          </div>

          {/* Timeline Dot */}
          <div className="absolute left-1/2 top-1/2 w-4 h-4 lg:w-5 lg:h-5 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10 border-2 border-white"></div>

          {/* Right Side - Content Box */}
          <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-8">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 border-2 border-teal-300 relative hover:shadow-2xl transition-shadow duration-300 w-full lg:max-w-md mx-auto lg:mx-0">
              {/* Arrow pointer to timeline */}
              <div className="absolute left-0 top-1/2 w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent border-r-[6px] sm:border-r-[8px] border-r-teal-300 transform -translate-x-1.5 sm:-translate-x-2 -translate-y-1/2 hidden lg:block"></div>
              
              <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
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
        <div className="relative flex flex-col lg:flex-row items-center mb-8 sm:mb-10 md:mb-12 lg:mb-20 xl:mb-24">
          {/* Mobile Title */}
          <div className="w-full lg:hidden mb-3 sm:mb-4 flex justify-center items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-0 text-center">
              Our Mission
            </h2>
          </div>

          {/* Left Side - Content Box */}
          <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 mb-3 sm:mb-4 lg:mb-0 flex justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 border-2 border-teal-300 relative hover:shadow-2xl transition-shadow duration-300 w-full lg:max-w-md mx-auto lg:mx-0">
              {/* Arrow pointer to timeline */}
              <div className="absolute right-0 top-1/2 w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent border-l-[6px] sm:border-l-[8px] border-l-teal-300 transform translate-x-1.5 sm:translate-x-2 -translate-y-1/2 hidden lg:block"></div>
              
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
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
          <div className="absolute left-1/2 top-1/2 w-4 h-4 lg:w-5 lg:h-5 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10 border-2 border-white"></div>

          {/* Desktop Title - Right Side */}
          <div className="hidden lg:flex w-full lg:w-1/2 lg:pl-6 xl:pl-8 justify-start items-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-0">
              Our Mission
            </h2>
          </div>
        </div>

        {/* OUR VISION - Title Left, Content Right */}
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Left Side - Title */}
          <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 mb-3 sm:mb-4 lg:mb-0 flex justify-center lg:justify-end items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-0 text-center lg:text-right">
              Our Vision
            </h2>
          </div>

          {/* Timeline Dot */}
          <div className="absolute left-1/2 top-1/2 w-4 h-4 lg:w-5 lg:h-5 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10 border-2 border-white"></div>

          {/* Right Side - Content Box */}
          <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-8">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 border-2 border-teal-300 relative hover:shadow-2xl transition-shadow duration-300 w-full lg:max-w-md mx-auto lg:mx-0">
              {/* Arrow pointer to timeline */}
              <div className="absolute left-0 top-1/2 w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent border-r-[6px] sm:border-r-[8px] border-r-teal-300 transform -translate-x-1.5 sm:-translate-x-2 -translate-y-1/2 hidden lg:block"></div>
              
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
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
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);

  const handleClick = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 flex justify-center px-4 sm:px-6">
      
      <div 
        className="relative w-full max-w-[1000px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden group shadow-xl cursor-pointer"
        onClick={handleClick}
      >

        {/* Background Image */}
        <img
          src="/Front.jpg"
          alt="Founder"
          className="w-full h-auto object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay - Click toggle on mobile, hover on desktop */}
        <div className={`absolute inset-0 bg-[#6AB365] backdrop-blur-md 
                transition-all duration-700 
                p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 
                flex flex-col justify-center items-center text-center text-white
                overflow-y-auto
                touch-manipulation
                ${isOverlayVisible ? 'opacity-100' : 'opacity-0'}
                lg:group-hover:opacity-100`}>
    
          <div className="w-full max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            <p className="text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-[16px] 
                          leading-relaxed text-justify font-serif mb-3 sm:mb-4 md:mb-6 lg:mb-8
                          px-2 sm:px-0">
              A competent professional with around 21 + years of rich experience in diverse domains encompassing pharma, healthcare, corporate and leadership training, quality management, audit support and business development. Currently leading ClinXcel for providing E2E training solutions to increase employability skills for aspiring candidates. Providing upskilling and cross skilling to the corporate employees as a part of continous learning. Almas has worked with esteemed organizations such as Wipro Pvt Ltd, Tata Consultancy Services (TCS), Cognizant Technology Solutions, SIRO Clinpharm, CREMA, Spanco International, and Wadia hospital. Certified Lead Auditor in QMS (ISO 9001:2008) & (ISO 22000). Certified ICH-GCP trainer by TCS. Certified (TTT) from NPTEL. Almas has expertise in conducting leadership training, mid-level and team member trainings on business communication, strategic planning, emotional intelligence, decision making etc to optimize human resources for better productivity and workplace harmony. Almas has trained more than 50,000 associates across 100 + organizations from a wide range of industries including educational institutes, pharma, healthcare and medical devices.
            </p>

            <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-3">
              <i className="ri-mail-fill text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer hover:scale-110 transition-transform duration-300"></i>
              <i className="ri-facebook-box-fill text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer hover:scale-110 transition-transform duration-300"></i>
              <i className="ri-linkedin-box-fill text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

// ------------------------- ABOUT PAGE -------------------------
const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <div className="w-full bg-white py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 text-black">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          About
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed max-w-full">
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