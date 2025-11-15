"use client";
import React from "react";
import { Poltawski_Nowy } from "next/font/google";

const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <div className="w-full text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-black uppercase">
          Courses
        </h1>
      </div>

      {/* ======= Popular Services Heading ======= */}
      <div className="w-full max-w-7xl mb-14 px-4 sm:px-6 md:px-10">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-5xl md:text-6xl italic font-semibold">
            <span className="font-extrabold text-[#72CB63]">Popular</span>{" "}
            Services
          </h2>
          <div className="h-[6px] w-3/4 absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#72CB63] rounded-full"></div>
        </div>
      </div>

      {/* ======= Cards Grid ======= */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative bg-black bg-opacity-80 shadow-xl rounded-[50px] p-5 transition-all duration-300 hover:scale-[1.045] hover:shadow-2xl"
            style={{ width: "100%", maxWidth: "420px", minHeight: "430px" }}
          >
            {/* ===== Duration ===== */}
            <div className="absolute -right-5 top-3">
              <div
                className="relative text-white font-semibold flex items-center justify-center"
                style={{
                  width: "75px",
                  height: "170px",
                  backgroundColor: "#000",
                  border: "5px solid white",
                  borderRadius: "50px",
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  fontSize: "18px",
                }}
              >
                {course.duration}

                {/* Green Accent Bar */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#72CB63]"
                  style={{
                    width: "12px",
                    height: "80px",
                    borderRadius: "50px",
                  }}
                ></div>
              </div>
            </div>

            {/* ===== Image ===== */}
            <div className="w-full flex justify-center">
              <img
                src={course.img}
                alt={course.title}
                className="rounded-3xl object-cover mt-3"
                style={{ width: "85%", height: "180px" }}
              />
            </div>

            {/* ===== Text Content ===== */}
            <div className="mt-5 px-2">
              <h3 className="text-[#72CB63] text-xl font-extrabold font-[Poppins] mb-3 text-center tracking-wide">
                {course.title}
              </h3>

              <p
                className={`${poltawski.className}`}
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  lineHeight: "22px",
                  fontStyle: "italic",
                  fontWeight: 600,
                  textAlign: "justify",
                }}
              >
                {course.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
