import React from "react";
import Link from "next/link";

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
        className="absolute top-0 right-0 w-[450px] opacity-80 pointer-events-none"
      />
      <img
        src="s2.png"
        className="absolute bottom-0 left-0 w-[280px] opacity-80 pointer-events-none"
      />
      <img
        src="s3.png"
        className="absolute bottom-0 left-10 w-[120px] opacity-70 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-14">
          Blogs
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {blogs.map((blog) => (
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="group transform transition-all duration-300 hover:scale-[1.03]"
            >
              <div
                className={`bg-gradient-to-br ${blog.color} rounded-[28px] p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              >
                {/* Logo */}
                <div className="mb-6">
                  <img
                    src="logo2.png"
                    alt="ClinXcel Logo"
                    className="w-28 h-auto opacity-90"
                  />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-black/80 text-lg leading-relaxed">
                  {blog.desc}
                </p>

                {/* Read More */}
                <button className="mt-6 text-black font-semibold text-sm underline underline-offset-4 group-hover:opacity-80 transition-opacity">
                  Read More →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
