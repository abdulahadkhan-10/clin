"use client";
import React from "react";
const courses = [
  {
    title: "Medical Writing",
    duration: "4 Weeks",
    img: "/medicalwriting.png",
    desc: "Eligibility : Post-Graduation in Life Sciences / Pharmaceutical Sciences , Graduation in Medical , Dental",
  },
  {
    title: "Clinical Data Management",
    duration: "5 Weeks",
    img: "/clinicaldata.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental",
  },
  {
    title: "Regulatory Affairs",
    duration: "4 Weeks",
    img: "/regulatory.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental",
  },
  {
    title: "Signal Detection & Medical Review",
    duration: "3 Weeks",
    img: "/signalreview.png",
    desc: "Eligibility : Freshers and Life Science Professionals / Medical , Dental",
  },
  {
    title: "Empower Teams With ClinXcel’s Industry-Ready Training",
    duration: "1 Year",
    img: "/training.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences",
  },
  {
    title: "Clinical Research",
    duration: "4 Weeks",
    img: "/clinicalresearch.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences / Medical , Dental",
  },
  {
    title: "Pharmacovigilance (Safety)",
    duration: "5 Weeks",
    img: "/pharmacovigilance.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences / Medical , Dental",
  },
  {
    title: "Soft Skills Training Modules by ClinXcel",
    duration: "4 Weeks",
    img: "/softskills.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences",
  },
];

export default function CoursesSection() {
  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 px-4 bg-white">
      
      {/* ======= Header ======= */}
      <div className="w-full ml-75 mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-black uppercase">
          Courses
        </h1>
      </div>

      {/* ======= Popular Services Heading ======= */}
      <div className="w-full max-w-7xl mb-14 px-4 sm:px-6 md:px-10">
     <div className="flex mb-8">
        <button 
          className="bg-green-500 text-white font-semibold px-12 py-4 rounded-l-lg text-lg relative z-10"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 5px) 0, 80% 100%, 0 100%)'
          }}
        >
          Popular
        </button>
        <button 
          className="bg-teal-600 text-white font-semibold px-12 py-4 rounded-r-lg text-lg -ml-9"
          style={{
            clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)'
          }}
        >
          Services
        </button>
      </div>
      </div>

      {/* ======= Cards Grid ======= */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {courses.map((course, index) => (
       <div
  key={index}
  className="w-full max-w-[420px] bg-white rounded-[30px] shadow-xl overflow-hidden relative hover:shadow-2xl transition duration-300"
>

  {/* ======= Duration Badge (top-right) ======= */}
  <div className="absolute top-4 right-4 bg-[#46B1A0] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
    {course.duration.toLowerCase()}
  </div>

  {/* ======= Image ======= */}
  <div className="w-full h-[220px] overflow-hidden rounded-t-[30px]">
    <img
      src={course.img}
      alt={course.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* ======= Bottom Black Section ======= */}
  <div className="bg-[#1C1C1C] w-full pt-6 pb-7 px-6 rounded-b-[30px] text-center">

    <h3 className="text-[#72CB63] text-2xl font-bold mb-3">
      {course.title}
    </h3>

    <p className="text-white text-sm leading-relaxed">
      {course.desc}
    </p>

  </div>

</div>

        ))}
      </div>
    </section>
  );
}
