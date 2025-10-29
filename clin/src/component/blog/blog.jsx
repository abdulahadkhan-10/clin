"use client";
import React from "react";

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
 <div className="relative w-full max-w-7xl text-center overflow-hidden ">
        <div
          className="bg-cover bg-center flex justify-center items-center h-32 sm:h-40 md:h-48 lg:h-22"
          style={{
            backgroundImage: "url('/image 180.png')", // Courses background
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
            <span className="text-[#bfffe9]">Blog</span>
          </h2>
        </div>
      </div>


    {/* Description Section with Background Image */}
 <div
  className="relative w-full max-w-6xl mx-auto my-6 md:my-10 px-6 sm:px-10 py-10 sm:py-12 text-center shadow-lg rounded-none overflow-hidden"
  style={{
    backgroundImage: "url('/Rectangle 7358.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Text content */}
  <div className="relative z-10 text-white">
    <p className="max-w-5xl mx-auto leading-relaxed italic font-serif text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
      At <span className="font-semibold not-italic text-blue-300">ClinXcel</span>, we are a dedicated team of industry and training experts
      with over <span className="font-semibold not-italic text-blue-300">20 years of experience</span> in the clinical research domain. Our
      mission is to build a highly skilled workforce that can meet the growing
      demands of the life sciences and healthcare industries. We have successfully
      trained more than <span className="font-semibold not-italic text-blue-300">3,000 students</span>, equipping them with practical,
      industry-relevant knowledge and skills.
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
