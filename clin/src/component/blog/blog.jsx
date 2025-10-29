"use client";
import React from "react";
import { Poltawski_Nowy } from "next/font/google";

const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Dummy Blog no. 1",
      desc: "Discover the joy and energy of sports through our exclusive event designed to promote fitness, teamwork, and fun. Whether you're a beginner or a pro...",
      color: "bg-[#b8e8e2]",
    },
    {
      id: 2,
      title: "Dummy Blog no. 2",
      desc: "Discover the joy and energy of sports through our exclusive event designed to promote fitness, teamwork, and fun. Whether you're a beginner or a pro...",
      color: "bg-[#b6edb1]",
    },
    {
      id: 3,
      title: "Dummy Blog no. 3",
      desc: "Discover the joy and energy of sports through our exclusive event designed to promote fitness, teamwork, and fun. Whether you're a beginner or a pro...",
      color: "bg-[#b8e8e2]",
    },
    {
      id: 4,
      title: "Dummy Blog no. 4",
      desc: "Discover the joy and energy of sports through our exclusive event designed to promote fitness, teamwork, and fun. Whether you're a beginner or a pro...",
      color: "bg-[#b6edb1]",
    },
  ];

  return (
    <div className="w-full">
      
      {/* Header Section */}
   <div className="relative w-full text-center overflow-hidden">
  <div
    className="bg-cover bg-center flex justify-center items-center h-32 sm:h-40 md:h-48 lg:h-32"
    style={{ backgroundImage: "url('/image 180.png')" }}
  >
    
                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1
                        className="font-bold"
                        style={{
                            fontFamily: "Poltawski Nowy, serif",
                            fontWeight: 700,
                            fontSize: "100px",
                            lineHeight: "100%",
                            color: "#FFFFFF",
                            WebkitTextStroke: "1px #76CD61", // ✅ Green border on text
                            textStroke: "3px #76CD61",       // Fallback for non-WebKit
                            letterSpacing: "0",
                            textShadow: "0 0 20px rgba(118, 205, 97, 0.5)", // optional glow
                        }}
                    >Blog
                    </h1>
                </div>
  </div>
</div>



    {/* Description Section with Background Image */}
<div className="relative text-white text-center my-4 overflow-hidden">
  {/* Background image */}
  <img
    src="/Rectangle 7358.png"
    alt="Description Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Text content */}
      <div
      className={`relative z-10 text-white p-5 sm:p-8 md:p-10 lg:p-12 text-justify rounded-b-md min-h-[220px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[300px] ${poltawski.className}`}
    >
      <p className="leading-relaxed italic text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[23px] font-medium">
        At{" "}
        <span className="font-semibold not-italic text-[19px] sm:text-[21px] md:text-[23px] lg:text-[24px]">
          ClinXcel
        </span>
        , we are a dedicated team of industry and training experts with over{" "}
        <span className="font-semibold not-italic">20 years of experience</span> in the
        clinical research domain. Our mission is to build a highly skilled workforce
        that can meet the growing demands of the life sciences and healthcare
        industries. We have successfully trained more than{" "}
        <span className="font-semibold not-italic">3,000 students</span>, equipping them
        with practical, industry-relevant knowledge and skills.
      </p>
    </div>
</div>


      {/* Blog Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-8 py-10 px-0 sm:px-1 justify-items-center">
  {blogs.map((blog) => (
    <div
      key={blog.id}
      className={`p-6 sm:p-7 rounded-2xl text-center w-full max-w-[300px] transition-all duration-500 ease-in-out transform hover:scale-105 ${
        blog.id === 1 || blog.id === 4
          ? "bg-[#4AAEB0] shadow-[10px_10px_35px_#77CD60]" // 💚 darker green shadow (bottom-right focus)
          : "bg-[#8AD185] shadow-[10px_10px_35px_#4AAEB0]" // 💙 darker blue shadow (bottom-right focus)
      }`}
    >
      {/* Logo Image */}
      <div className="w-20 h-20 mx-auto rounded-lg overflow-hidden flex items-center justify-center mb-4">
        <img
          src="/vp-logo.png"
          alt="VP Logo"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed">{blog.desc}</p>
    </div>
  ))}
</div>











    </div>
  );
};

export default BlogsPage;
