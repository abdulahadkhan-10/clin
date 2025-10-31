"use client";
import React, { useEffect, useRef, useState } from "react";
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

export default function Services() {
  const scrollRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // ✅ Render only after mounting — prevents hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId;
    const scrollSpeed = 0.8;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMounted]);

  // ✅ Prevent SSR render entirely (solves hydration mismatch)
  if (!isMounted) {
    return (
      <section className="w-full py-10 sm:py-12 px-6 sm:px-10 md:px-16 bg-white">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl italic font-extrabold relative inline-block"
          style={{
            fontFamily: "Times New Roman, serif",
            color: "#0B132B",
          }}
        >
          Services
        </h2>
      </section>
    );
  }

  const scrollingCourses = [...courses, ...courses];

  return (
    <section
      className={`${poltawski.className} w-full flex flex-col items-start py-10 sm:py-12 px-6 sm:px-10 md:px-16 bg-white overflow-hidden`}
    >
      {/* === Heading === */}
      <div className="text-left mb-10">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl italic font-extrabold relative inline-block"
          style={{
            fontFamily: "Times New Roman, serif",
            color: "#0B132B",
          }}
        >
          Services
          <span
            className="absolute left-0 bottom-[-10px] bg-[#0B132B]"
            style={{
              width: "100%",
              height: "3px",
              borderRadius: "2px",
              display: "block",
            }}
          ></span>
        </h2>
      </div>

      {/* === Auto-Scrolling Courses === */}
      <div
        ref={scrollRef}
        className="w-full flex gap-8 sm:gap-10 overflow-hidden no-scrollbar"
      >
        {scrollingCourses.map((course, index) => (
          <div
            key={`${course.title}-${index}`}
            className="relative text-white shadow-lg transition-transform hover:scale-[1.05] duration-300"
            style={{
              backgroundColor: "#000000CC",
              borderRadius: "40px",
              width: "260px",
              minHeight: "340px",
              flexShrink: 0,
            }}
          >
            {/* === Duration Capsule === */}
            <div className="absolute top-[5px] -right-[10px] flex flex-col items-center">
              <div
                className="relative flex items-center justify-center font-semibold text-white"
                style={{
                  width: "60px",
                  height: "130px",
                  backgroundColor: "#000000",
                  border: "4px solid #FFFFFF",
                  borderRadius: "49.6px",
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  fontSize: "16px",
                }}
              >
                <span className="tracking-tight">{course.duration}</span>
                <div
                  className="absolute right-[0px] top-1/2 -translate-y-1/2 bg-[#72CB63]"
                  style={{
                    width: "8px",
                    height: "55px",
                    borderRadius: "50px",
                  }}
                ></div>
              </div>
            </div>

            {/* === Image === */}
            <div className="px-4 pt-4 flex justify-center">
              <img
                src={course.img}
                alt={course.title}
                className="object-cover rounded-[25px]"
                style={{
                  width: "85%",
                  height: "140px",
                }}
              />
            </div>

            {/* === Text === */}
            <div className="px-5 pt-3 pb-6">
              <h3
                style={{
                  color: "#72CB63",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  marginBottom: "8px",
                }}
              >
                {course.title}
              </h3>
              <p
                style={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "justify",
                }}
              >
                {course.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
