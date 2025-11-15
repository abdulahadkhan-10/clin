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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId;
    const scrollSpeed = 0.8;

    const autoScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMounted]);

  if (!isMounted) {
    return (
      <section className="py-10 px-6">
        <h2 className="text-4xl italic font-extrabold">Services</h2>
      </section>
    );
  }

  const scrollingCourses = [...courses, ...courses];

  return (
    <section
      className="py-10 px-6 md:px-16 overflow-hidden"
      style={{ fontFamily: "Times New Roman" }}
    >
      {/* HEADING */}
      <div className="mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl italic font-bold text-[#0B132B] relative">
          Services
          <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-[#0B132B] rounded-full"></span>
        </h2>
      </div>

      {/* CARD SCROLLER */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-hidden no-scrollbar"
      >
        {scrollingCourses.map((course, index) => (
          <div
  key={index}
  className="flex-shrink-0 shadow-lg hover:scale-[1.05] transition duration-300 bg-white"
  style={{
    width: "300px",
    height: "400px",
  }}
>

 <div
  style={{
    height: "240px",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: 0,
  }}
>
  <img
  src={course.img}
  alt={course.title}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",

    /* Keep top rounded */
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",

    /* Make bottom straight */
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  }}
/>


  {/* Duration */}
  <div
    className="absolute top-3 right-3 text-white font-semibold px-4 py-1 text-sm"
    style={{
      backgroundColor: "#1CA3A3",
      borderRadius: "8px",
    }}
  >
    {course.duration}
  </div>
</div>


            {/* BLACK SECTION FIXED HEIGHT */}
            <div
              style={{
                backgroundColor: "black",
                height: "150px",
                padding: "18px",
                textAlign: "center",
                borderBottomLeftRadius: "25px",
                borderBottomRightRadius: "25px",
              }}
            >
              <h3
                style={{
                  color: "#58B95C",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                {course.title}
              </h3>

              <p
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "8px",
                  lineHeight: "18px",
                }}
              >
                {course.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
