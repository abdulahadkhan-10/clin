"use client";
import React from "react";
import { BookOpen, Database, FileText, ClipboardList, Microscope, Users, ShieldCheck, Briefcase } from "lucide-react";

const courses = [
  {
    title: "Medical Writing",
    desc: "Explore Regulatory & Scientific Writing with hands-on experience in Clinical Documentation.",
    icon: <FileText className="w-10 h-10 text-[#00bfa6]" />,
  },
  {
    title: "Clinical Data Management",
    desc: "Gain expertise in Data Handling, Processing & Review using industry tools.",
    icon: <Database className="w-10 h-10 text-[#00bfa6]" />,
  },
  {
    title: "Regulatory Affairs",
    desc: "Understand global Regulatory Frameworks, Drug Approval Processes, and Compliance.",
    icon: <ShieldCheck className="w-10 h-10 text-[#00bfa6]" />,
  },
  {
    title: "Signal Detection & Medical Review",
    desc: "Master Safety Data Review, Signal Management, and Pharmacovigilance.",
    icon: <Microscope className="w-10 h-10 text-[#00bfa6]" />,
  },
  {
    title: "Empower Teams With ClinXcel’s Industry-Ready Training",
    desc: "Transform careers through advanced, project-based professional training.",
    icon: <Users className="w-10 h-10 text-[#00bfa6]" />,
  },
  {
    title: "Clinical Research",
    desc: "Learn the essentials of Clinical Operations, Protocols, and GCP guidelines.",
    icon: <ClipboardList className="w-10 h-10 text-[#00bfa6]" />,
  },
  {
    title: "Pharmacovigilance (Safety)",
    desc: "Develop core skills in Drug Safety, Case Processing, and Signal Evaluation.",
    icon: <ShieldCheck className="w-10 h-10 text-[#00bfa6]" />,
  },
  {
    title: "Soft Skills Training Modules",
    desc: "Enhance communication, teamwork, and professional confidence in clinical careers.",
    icon: <Briefcase className="w-10 h-10 text-[#00bfa6]" />,
  },
];

export default function CoursesSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-12 px-4 md:px-12">
      {/* Header Section */}
      <div className="relative w-full max-w-5xl text-center">
        <div className="bg-gradient-to-r from-[#0b4054] to-[#1a6b85] py-12 rounded-t-2xl text-white shadow-md">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            <span className="text-[#b9e4ff]">Trial</span> Courses
          </h2>
        </div>
        <div className="bg-[#0b4054] text-white px-6 py-6 rounded-b-2xl shadow-md">
          <p className="leading-relaxed text-sm md:text-base">
            At ClinXcel, we are a dedicated team of industry and training experts with over
            20 years of experience in the clinical research domain. Our mission is to build
            a highly skilled workforce that can meet the growing demands of the life sciences
            and healthcare industries. We have successfully trained more than 3,000 students,
            equipping them with practical, industry-relevant knowledge and skills.
          </p>
        </div>
      </div>

      {/* Popular Services */}
      <div className="w-full max-w-6xl mt-16">
        <div className="flex justify-center mb-10">
          <div className="bg-[#d4f4ec] px-8 py-3 rounded-xl shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#003c35] italic">
              Popular Services
            </h3>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] border border-gray-200 shadow-md rounded-xl p-6 w-[90%] sm:w-full transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">{course.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 text-center mb-2">
                {course.title}
              </h4>
              <p className="text-sm text-gray-600 text-center">{course.desc}</p>
              <div className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full rotate-90">
                EXPERT
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
