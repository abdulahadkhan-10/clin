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
<div className="relative mx-6 my-8 overflow-hidden">
  <img
    src="/image 180.png"
    alt="Blog Header"
    className="w-full h-22 md:h-22 lg:h-35 object-cover"
  />
  <h1 className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-bold text-white drop-shadow-lg font-['Poltawski_Nowy']">
    Blogs
  </h1>
</div>


    {/* Description Section with Background Image */}
<div className="relative text-white text-center mx-6 my-4  overflow-hidden">
  {/* Background image */}
  <img
    src="/Rectangle 7358.png"
    alt="Description Background"
    className="absolute w-full h-full object-cover"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-10 px-8 place-items-center">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`${blog.color} p-6 rounded-2xl shadow-md text-center max-w-xs`}
          >
            <div className="bg-[#0f1a2b] w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-400 font-bold">VP</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700 text-sm">{blog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
