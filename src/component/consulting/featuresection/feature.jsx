"use client";

import React, { useState } from "react";

const FeaturesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    {
      title: "Audit & Inspection Preparation, Readiness, and Support",
      content:
        "We provide comprehensive support to ensure your organization is fully prepared for regulatory audits and inspections. Our services include gap analysis, documentation review, mock audits, and staff training to maintain compliance readiness.",
    },
    {
      title: "Training and Development of Client Staff",
      content:
        "Our expert-led training programs are designed to upskill your team in pharmacovigilance best practices, regulatory requirements, and safety reporting standards. We offer customized training modules tailored to your organization's specific needs.",
    },
    {
      title: "Development and Maintenance of PV QMS",
      content:
        "We help establish and maintain robust Pharmacovigilance Quality Management Systems that ensure consistent compliance with global regulatory standards. Our services include SOP development, quality metrics implementation, and continuous improvement initiatives.",
    },
    {
      title: "Strategic Deployment of Contract Staff",
      content:
        "Access our network of highly qualified pharmacovigilance professionals for strategic staffing solutions. We provide experienced contractors who can seamlessly integrate with your team to support critical projects and operational needs.",
    },
    {
      title:
        "Transformational Pharmacovigilance Support, Leveraging Technology and AI Initiatives",
      content:
        "Embrace the future of pharmacovigilance with our innovative technology solutions. We implement AI-powered safety signal detection, automated case processing, and advanced analytics to enhance efficiency and accuracy in drug safety operations.",
    },
    {
      title: "Development of SOPs, Work Instructions, and Guides",
      content:
        "Our team creates comprehensive, compliant, and user-friendly standard operating procedures and work instructions. We ensure all documentation aligns with current regulatory requirements and industry best practices.",
    },
    {
      title: "Development and Maintenance of PV QMS",
      content:
        "Continuous improvement and maintenance of your Pharmacovigilance Quality Management System to ensure ongoing compliance and operational excellence. We provide regular audits, updates, and optimization of your quality processes.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to bottom right, #c8e6c9, #b2dfdb)",
      }}
    >
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex justify-center lg:justify-start py-8">
          <div
            className="rounded-[52px] px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-center"
            style={{
              backgroundColor: "#71C589",
              width: "100%",
              maxWidth: "600px",
              height: "auto",
            }}
          >
            <h2
              className="text-black font-bold"
              style={{
                fontFamily: "'Poltawski Nowy', serif",
                fontSize: "clamp(28px, 6vw, 64px)",
                lineHeight: "100%",
              }}
            >
              Some Features !!!
            </h2>
          </div>
        </div>

        {/* Accordion Items */}
        <div className="space-y-0 mt-10 sm:mt-16 pl-0 sm:pl-5 w-full">
          {features.map((feature, index) => (
            <div key={index} className="border-b-2 border-white">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center justify-between transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#129EA0" }}
              >
                <span className="text-white font-normal text-sm sm:text-base md:text-lg pr-4 leading-snug sm:leading-normal">
                  {feature.title}
                </span>
                <div className="flex-shrink-0 mt-2 sm:mt-0">
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
                style={{ backgroundColor: "#129EA0" }}
              >
                <div className="p-4 sm:p-5 text-white text-sm sm:text-base md:text-lg leading-relaxed">
                  {feature.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
