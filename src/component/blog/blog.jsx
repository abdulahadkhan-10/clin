import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Dummy Blog No. 1",
      desc: "Discover the joy and energy of sports through our exclusive event designed to promote fitness, teamwork, and fun. Whether you're a beginner or a pro...",
      color: "from-[#7AC5C5] to-[#88D6D6]",
    },
    {
      id: 2,
      title: "Dummy Blog No. 2",
      desc: "Unlock the essence of collaboration and expertise as we dig deeper into industry insights crafted by expert professionals...",
      color: "from-[#8DD97F] to-[#A1E892]",
    },
    {
      id: 3,
      title: "Dummy Blog No. 3",
      desc: "Explore trends reshaping the clinical space and the skill sets needed for a thriving career in clinical research...",
      color: "from-[#A1E892] to-[#8DD97F]",
    },
    {
      id: 4,
      title: "Dummy Blog No. 4",
      desc: "Stay ahead with updates on workshops, training programs, and real-world case studies designed to guide your professional journey...",
      color: "from-[#7AC5C5] to-[#96D4D4]",
    },
  ];

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Shapes */}
      <img
        src="s1.png"
        className="absolute top-0 right-0 w-[250px] sm:w-[350px] lg:w-[350px] opacity-80 pointer-events-none"
        alt=""
      />
      <img
        src="s2.png"
        className="absolute bottom-0 left-0 w-[200px] sm:w-[250px] lg:w-[280px] opacity-80 pointer-events-none"
        alt=""
      />
      <img
        src="s3.png"
        className="absolute bottom-0 left-10 w-[80px] sm:w-[100px] lg:w-[120px] opacity-70 pointer-events-none"
        alt=""
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-10 sm:mb-12 lg:mb-14">
          Blogs
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {blogs.map((blog) => (
            <a
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="group block transform transition-all duration-300 hover:scale-[1.05] hover:-translate-y-2"
            >
              <div
                className={`relative bg-gradient-to-br ${blog.color} rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
                {/* Logo */}
                <div className="mb-4 sm:mb-5 lg:mb-6 relative z-10">
                  <img
                    src="logo2.png"
                    alt="ClinXcel Logo"
                    className="w-20 sm:w-24 lg:w-28 h-auto opacity-90"
                  />
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-black/80 text-base sm:text-lg leading-relaxed">
                  {blog.desc}
                </p>

                {/* Read More */}
                <button className="mt-4 sm:mt-5 lg:mt-6 text-black font-semibold text-sm underline underline-offset-4 group-hover:opacity-80 transition-opacity">
                  Read More →
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;