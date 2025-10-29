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
    <section className="w-full flex flex-col items-center py-10 sm:py-12 px-6 md:px-1 bg-white">
      {/* === Header === */}
      <div className="relative w-full text-center overflow-hidden">
        <div
          className="bg-cover bg-center flex justify-center items-center h-40 sm:h-48 md:h-56 lg:h-30"
          style={{ backgroundImage: "url('/image 180.png')" }}
        >
          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h1
              className="font-bold leading-none"
              style={{
                fontFamily: "Poltawski Nowy, serif",
                fontWeight: 700,
                fontSize: "clamp(45px, 12vw, 100px)", // ✅ Responsive text size
                color: "#FFFFFF",
                WebkitTextStroke: "1px #76CD61", // ✅ Green border
                textStroke: "3px #76CD61",
                letterSpacing: "0",
                textShadow: "0 0 20px rgba(118, 205, 97, 0.5)",
                textTransform: "lowercase",
              }}
            >
              courses
            </h1>
          </div>
        </div>
      </div>

      {/* === Description === */}
      <div
        className="relative w-full max-w-[95rem] p-7 px-2 mx-auto overflow-hidden shadow-md mt-6"
        style={{
          backgroundImage: "url('/Rectangle 7358.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`relative z-10 text-white p-6 sm:p-8 md:p-10 text-justify rounded-b-md ${poltawski.className}`}
        >
          <p className="leading-relaxed italic text-[17px] sm:text-[19px] md:text-[21px] font-medium">
            At{" "}
            <span className="font-semibold not-italic text-[21px]">
              ClinXcel
            </span>
            , we are a dedicated team of industry and training experts with over{" "}
            <span className="font-semibold not-italic">
              20 years of experience
            </span>{" "}
            in the clinical research domain. Our mission is to build a highly
            skilled workforce that can meet the growing demands of the life
            sciences and healthcare industries. We have successfully trained
            more than{" "}
            <span className="font-semibold not-italic">3,000 students</span>,
            equipping them with practical, industry-relevant knowledge and
            skills.
          </p>
        </div>
      </div>

      {/* === Popular Services === */}
      <div className="w-full max-w-7xl mt-14 sm:mt-20">
        {/* === Title === */}
        <div className="mb-10 flex justify-start px-4 sm:px-6 md:px-10">
  <div
    className="relative flex items-center justify-center rounded-[40px] shadow-md py-4 sm:py-6"
    style={{
      background: "linear-gradient(100deg, #72CB63 50%, #77C2C3 50%)",
      width: "100%",
      maxWidth: "550px",
      height: "70px",
    }}
  >
    <h2
      className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl italic font-semibold text-center"
      style={{
        color: "#000000",
        fontFamily: "Poltawski Nowy, serif",
        fontWeight: 700,
        lineHeight: "100%",
      }}
    >
      <span className="font-extrabold">Popular</span> Services
    </h2>
  </div>
</div>


        {/* === Cards Grid === */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
  {courses.map((course, index) => (
    <div
      key={index}
      className="relative text-white shadow-lg transition-transform hover:scale-[1.03] duration-300"
      style={{
        backgroundColor: "#000000CC",
        borderRadius: "50.15px",
        width: "100%",
        maxWidth: "420px",
        minHeight: "400px",
      }}
    >
      {/* === Duration Capsule === */}
      <div className="absolute top-[5px] -right-[10px] flex flex-col items-center">
        <div
          className="relative flex items-center justify-center font-semibold text-white"
          style={{
            width: "70px",
            height: "160px",
            backgroundColor: "#000000",
            border: "5px solid #FFFFFF",
            borderRadius: "49.6px",
            writingMode: "vertical-rl",
            textOrientation: "upright",
            fontSize: "18px",
            opacity: 1,
          }}
        >
          <span className="tracking-tight">{course.duration}</span>

          {/* Green Accent Bar */}
 <div
  className="absolute right-[0px] top-1/2 -translate-y-1/2 bg-[#72CB63]"
  style={{
    width: "10px",
    height: "70px", // ✅ medium size
    borderRadius: "50px", // ✅ full rounded capsule
  }}
></div>


        </div>
      </div>

      {/* === Image (Shifted Left) === */}
      <div className="px-5 pt-5">
        <img
          src={course.img}
          alt={course.title}
          className="object-cover rounded-[30px]"
          style={{
            width: "85%", // smaller width
            height: "170px", // smaller height
            marginLeft: "-10px", // shifted slightly to the left
          }}
        />
      </div>

      {/* === Text === */}
      <div className="px-6 pt-4 pb-6">
        <h3
          style={{
            color: "#72CB63",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "22px",
            lineHeight: "28px",
            marginBottom: "10px", // ✅ added small space between title & description
          }}
        >
          {course.title}
        </h3>




        <p
          style={{
            color: "#FFFFFF",
            fontFamily: "Poltawski Nowy, serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "16px",
            lineHeight: "22px",
            textAlign: "justify",
          }}
        >
          {course.desc}
        </p>
      </div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
}
