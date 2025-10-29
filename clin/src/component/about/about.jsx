// "use client";
// import React from "react";

// const AboutPage = () => {


//   return (
//     <div className="w-full">

//       {/* Header Section */}
// <div className="relative mx-6 my-8">
//   <img
//     src="/image 180.png"
//     alt="Blog Header"
//     className=""
//   />
//   <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-white drop-shadow-lg border border-white/30">
//     About
//   </h1>
// </div>


//     {/* Description Section with Background Image */}
// <div className="relative text-white text-center mx-6 my-10  overflow-hidden">
//   {/* Background image */}
//   <img
//     src="/Rectangle 7358.png"
//     alt="Description Background"
//     className="absolute inset-0 w-full h-full object-cover"
//   />

//   {/* Text content */}
//   <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20">
//     <p className="max-w-4xl mx-auto leading-relaxed text-4xl sm:text-lg md:text-xl">
//       At <span className="font-semibold text-White-400">ClinXcel</span>, we are a dedicated team of industry and training experts
//       with over 20 years of experience in the clinical research domain. Our
//       mission is to build a highly skilled workforce that can meet the
//       growing demands of the life sciences and healthcare industries. We
//       have successfully trained more than 3,000 students, equipping them
//       with practical, industry-relevant knowledge and skills.
//     </p>
//   </div>
// </div>


    
//     </div>
//   );
// };

// export default AboutPage;



"use client";
import React from "react";

// --- Sub-Component for Why Choose Us (Reusing previous logic) ---
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
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-white text-gray-800 my-10 mx-6">
      
      {/* Left Section: Title and Image */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
        <h2 className="text-5xl md:text-6xl font-serif italic font-bold mb-8 text-center lg:text-left leading-tight">
          Why Choose <br /> Us ?
        </h2>
        
        {/* Image Container with Gradient Border */}
        <div className="w-full max-w-md bg-gradient-to-br from-[#77DD77] to-[#B6EDb1] p-2 rounded-2xl shadow-xl">
          <img
            src="image 192.svg" // REMINDER: Replace with your actual image path!
            alt="Medical equipment, stethoscope, vials"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Right Section: Features List */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center w-full max-w-sm md:max-w-md lg:max-w-lg
                       bg-gradient-to-r from-[#B6EDb1] to-[#77DD77]
                       p-4 rounded-full shadow-md transition-all duration-300 ease-in-out"
          >
            <span className="text-[#3b8a3b] text-3xl mr-3" style={{
                textShadow: '0 0 5px rgba(182, 237, 177, 0.7)' 
            }}>
                ★
            </span> 
            <p className="text-lg font-medium text-gray-900">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// --- End Why Choose Us Sub-Component ---

// --- New Sub-Component for Mission & Vision ---
const MissionVision = () => {
    const vision = "To equip aspiring professionals and industry leaders with the specialized skills, knowledge, and practical experience necessary to excel in the life sciences and healthcare industries, thereby creating a sustainable and skilled workforce that meets global industry standards.";
    const mission = "To be a leading educational and training institute in the clinical research field, fostering innovation, excellence, and leadership while bridging the gap between academia and industry, ultimately contributing to the growth of a healthier and more informed world.";

    return (
        <div className="relative w-full max-w-6xl mx-auto my-16 shadow-2xl rounded-lg overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row h-full">
                
                {/* Vision Section (Left - Light Blue Background) */}
                <div className="relative p-12 md:w-1/2 bg-blue-200 text-gray-800 flex flex-col justify-center items-start z-10">
                    <p className="text-lg mb-6 leading-relaxed italic text-left">
                        {vision}
                    </p>
                    <h2 className="text-4xl font-serif italic font-bold mt-auto self-end">
                        Our Vision
                    </h2>
                </div>

                {/* Mission Section (Right - Blue/Green Gradient Background) */}
                <div className="relative p-12 md:w-1/2 bg-gradient-to-br from-blue-500 to-green-500 text-white flex flex-col justify-center items-end z-10">
                    <h2 className="text-5xl font-serif italic font-bold mb-6 mt-auto self-start">
                        Our Mission
                    </h2>
                    <p className="text-lg leading-relaxed italic text-right">
                        {mission}
                    </p>
                </div>

                {/* Diagonal Separator (Complex to do perfectly with simple Tailwind, but we can simulate the effect with a skewed absolute element) */}
                <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-gray-300 transform -translate-x-1/2 skew-x-3 transition-all duration-500 hidden md:block z-20"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-white transform -translate-x-1/2 skew-x-3 transition-all duration-500 hidden md:block z-30"></div>
            </div>
        </div>
    );
};
// --- End Mission & Vision Sub-Component ---


// --- Main AboutPage Component ---
const AboutPage = () => {
  return (
    <div className="w-full">

      {/* Header Section */}
      {/* <div className="relative mx-6 my-8">
        <img
          src="/image 180.png"
          alt="About Header Background"
          className="w-full h-40 md:h-52 lg:h-60 "
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl lg:text-7xl font-extrabold text-white" style={{
            textShadow: '0 0 10px rgba(100, 255, 255, 0.7), 0 0 20px rgba(0, 191, 255, 0.5)'
        }}>
          About
        </h1>
      </div> */}
<div className="relative mx-6 my-8">
  <img
    src="/image 180.png"
    alt="Blog Header"
    className=""
  />
  <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-white drop-shadow-lg border border-white/30">
    About
  </h1>
</div>

      {/* Description Section */}
      <div className="relative text-white text-center mx-6 my-10 overflow-hidden bg-[#0f1a2b] rounded-lg shadow-lg">
        {/* Background image is commented out to use a solid color, but kept if you need it */}
         <img src="/Rectangle 7358.png" alt="Description Background" className="absolute inset-0 w-full h-full "/> 

        {/* Text content */}
        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20">
          <p className="max-w-4xl mx-auto leading-relaxed text-base sm:text-lg md:text-xl font-serif italic text-center">
            At <span className="font-semibold text-white">ClinXcel</span>, we are a dedicated team of industry and training experts
            with over 20 years of experience in the clinical research domain. Our
            mission is to build a highly skilled workforce that can meet the
            growing demands of the life sciences and healthcare industries. We
            have successfully trained more than 3,000 students, equipping them
            with practical, industry-relevant knowledge and skills.
          </p>
        </div>
      </div>
   


      {/* Why Choose Us Section */}
      <WhyChooseUs />

   
      {/* ------------------------------------- */}
      {/* 🌟 New Section: Mission & Vision 🌟 */}
      <MissionVision />
      {/* ------------------------------------- */}
    </div>
  );
};

export default AboutPage;