import React from "react";

const AboutSection = () => {
  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8 mt-2"
      style={{ backgroundColor: "#36A2C080" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Header + Image */}
        <div
          className="p-6 shadow-lg"
          style={{ backgroundColor: "#1C1B1F" }}
        >
          {/* Header Button */}
          <div className="mb-8 flex justify-start">
            <div
              className="rounded-full px-8 sm:px-10 py-3 sm:py-4 w-full sm:w-auto text-center sm:text-left"
              style={{
                backgroundColor: "#17a2b8",
                border: "3px solid #0d7a8a",
              }}
            >
              <h3
                className="text-white italic font-medium text-xl sm:text-2xl"
                style={{ fontFamily: "'Poltawski Nowy', serif" }}
              >
                Pharmacovigilance Consulting
              </h3>
            </div>
          </div>

          {/* Professional Image */}
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{
              backgroundColor: "#2d2d2d",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/image 196.png"
                alt="Pharmacovigilance Consulting"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex items-center">
          <div className="max-w-2xl">
            <p
              className="mb-6 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] leading-snug sm:leading-normal"
              style={{
                fontFamily: "'Poltawski Nowy', serif",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#000000",
                textAlign: "justify",
              }}
            >
              At ClinXcel, we provide comprehensive global Pharmacovigilance
              Consulting services designed to ensure regulatory compliance,
              enhance productivity, and achieve strategic Drug Safety outcomes.
            </p>

            <p
              className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] leading-snug sm:leading-normal"
              style={{
                fontFamily: "'Poltawski Nowy', serif",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#000000",
                textAlign: "justify",
              }}
            >
              With extensive expertise across the Pharmacovigilance domain,
              ClinXcel empowers clients to address Product Safety concerns
              confidently and proactively. Whether it involves establishing
              robust systems, supporting audit readiness, leveraging technology
              and AI, or deploying specialized staff, we deliver unparalleled,
              tailored solutions to meet your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
