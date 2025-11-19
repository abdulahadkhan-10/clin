"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    title: "Empower Teams With ClinXcel's Industry-Ready Training",
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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId;
    const scrollSpeed = 0.8;

    const autoScroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMounted, isPaused]);

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
      className="py-16 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "Times New Roman" }}
    >
      {/* HEADING with animation */}
           <div className="mb-10">
        <h2 className="text-4xl sm:text-5xl ml-10 md:text-6xl italic font-bold text-black relative">
          Services
          <span className="absolute left-0 -bottom-3 w-50 h-[4px] bg-[#0B132B] rounded-full"></span>
        </h2>
      </div>
    

      {/* CARD SCROLLER */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-hidden no-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {scrollingCourses.map((course, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-black rounded-[25px] overflow-hidden group relative"
            style={{
              width: "320px",
              height: "420px",
            }}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-[25px]" />

            {/* Image Container */}
            <div
              className="relative overflow-hidden"
              style={{
                height: "240px",
                width: "100%",
              }}
            >
              <motion.img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover rounded-t-[25px]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Duration Badge */}
              <motion.div
                className="absolute top-4 right-4 text-white font-semibold px-4 py-2 text-sm backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(28, 163, 163, 0.95)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {course.duration}
              </motion.div>

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            {/* Content Section */}
            <div
              className="bg-gradient-to-br from-gray-900 to-black rounded-b-[25px] relative"
              style={{
                height: "180px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-b-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(45deg, #58B95C, #1CA3A3)",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="font-bold mb-3 leading-tight"
                  style={{
                    color: "#58B95C",
                    fontSize: "19px",
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  {course.title}
                </motion.h3>

                <p
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontSize: "13px",
                  }}
                >
                  {course.desc}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div 
                className="absolute bottom-4 right-4 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #58B95C 0%, transparent 70%)",
                  borderRadius: "0 0 25px 0",
                }}
              />
            </div>
          </motion.div>
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