"use client";
import React from "react";

const courses = [
  {
    title: "Medical Writing",
    desc: "Explore Regulatory & Scientific Writing with hands-on experience in Clinical Documentation.",
    img: "/medicalwriting.png",
  },
  {
    title: "Clinical Data Management",
    desc: "Gain expertise in Data Handling, Processing & Review using industry tools.",
    img: "/clinicaldata.png",
  },
  {
    title: "Regulatory Affairs",
    desc: "Understand global Regulatory Frameworks, Drug Approval Processes, and Compliance.",
    img: "/regulatory.png",
  },
  {
    title: "Signal Detection & Medical Review",
    desc: "Master Safety Data Review, Signal Management, and Pharmacovigilance.",
    img: "/signalreview.png",
  },
  {
    title: "Empower Teams With ClinXcel’s Industry-Ready Training",
    desc: "Transform careers through advanced, project-based professional training.",
    img: "/training.png",
  },
  {
    title: "Clinical Research",
    desc: "Learn the essentials of Clinical Operations, Protocols, and GCP guidelines.",
    img: "/clinicalresearch.png",
  },
  {
    title: "Pharmacovigilance (Safety)",
    desc: "Develop core skills in Drug Safety, Case Processing, and Signal Evaluation.",
    img: "/pharmacovigilance.png",
  },
  {
    title: "Soft Skills Training Modules",
    desc: "Enhance communication, teamwork, and professional confidence in clinical careers.",
    img: "/softskills.png",
  },
];

export default function CoursesSection() {
  return (
    <section className="w-full flex flex-col items-center py-10 sm:py-14 px-4 md:px-10 bg-white">
      {/* === Header Background Image Section === */}
      <div className="relative w-full max-w-7xl text-center overflow-hidden ">
        <div
          className="bg-cover bg-center flex justify-center items-center h-32 sm:h-40 md:h-48 lg:h-22"
          style={{
            backgroundImage: "url('/image 180.png')", // Courses background
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
            <span className="text-[#bfffe9]">Courses</span>
          </h2>
        </div>
      </div>

      {/* === Small Space Between === */}
      <div className="h-2 sm:h-3"></div>

      {/* === Paragraph Background Section === */}
      <div
  className="relative w-full max-w-7xl p-7 mx-auto  overflow-hidden shadow-md"
  style={{
    backgroundImage: "url('/Rectangle 7358.png')", // your background
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black/50"></div> */}

  <div className="relative z-10 text-white p-6 sm:p-8 md:p-10 text-justify">
    <p className="leading-relaxed italic font-serif text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
      At <span className="font-semibold not-italic">ClinXcel</span>, we are a
      dedicated team of industry and training experts with over{" "}
      <span className="font-semibold not-italic">20 years of experience</span>{" "}
      in the clinical research domain. Our mission is to build a highly skilled
      workforce that can meet the growing demands of the life sciences and
      healthcare industries. We have successfully trained more than{" "}
      <span className="font-semibold not-italic">3,000 students</span>, equipping
      them with practical, industry-relevant knowledge and skills.
    </p>
  </div>
</div>


      {/* === Popular Services === */}
      <div className="w-full max-w-7xl mt-14 sm:mt-20">
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-[#d4f4ec] px-8 sm:px-10 py-3 rounded-xl shadow-sm">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003c35] italic">
              Popular Services
            </h3>
          </div>
        </div>

        {/* === Cards Grid === */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 shadow-md rounded-xl p-5 sm:p-6 w-[95%] sm:w-[90%] md:w-[88%] lg:w-[85%] transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 text-center mb-2">
                {course.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                {course.desc}
              </p>

              <div className="absolute top-3 right-3 bg-black text-white text-[10px] sm:text-xs px-2 sm:px-3 py-[2px] sm:py-1 rounded-full rotate-90">
                EXPERT
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
