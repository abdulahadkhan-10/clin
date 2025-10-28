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
      <div className="relative">
        <img
          src="/blog-header.jpg"
          alt="Blog Header"
          className="w-full h-40 object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white drop-shadow-lg">
          Blogs
        </h1>
      </div>

      {/* Description */}
      <div className="bg-black text-white text-center px-6 py-6">
        <p className="max-w-4xl mx-auto leading-relaxed">
          At <span className="font-semibold text-blue-400">ClinXcel</span>, we are a dedicated team of industry and training experts
          with over 20 years of experience in the clinical research domain. Our
          mission is to build a highly skilled workforce that can meet the
          growing demands of the life sciences and healthcare industries. We
          have successfully trained more than 3,000 students, equipping them
          with practical, industry relevant knowledge and skills.
        </p>
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
