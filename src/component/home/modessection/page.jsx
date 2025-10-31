import React from "react";

const ModesSection = () => {
  const modes = [
    {
      id: 1,
      title: "ONLINE",
      description:
        "Access our expert-led courses from anywhere with interactive sessions, recorded lectures, and virtual assignments.",
      bgColor: "#E8F5F3",
      borderColor: "#3FA9BA",
    },
    {
      id: 2,
      title: "OFFLINE",
      description:
        "Engage in face-to-face learning with hands-on experience in a dedicated classroom setting at our campuses or partner institutions.",
      bgColor: "#E8F5F3",
      borderColor: "#3FA9BA",
    },
    {
      id: 3,
      title: "HYBRID",
      description:
        "A perfect blend of online convenience and offline interaction, providing the flexibility to balance learning with real-world applications.",
      bgColor: "#E8F5F3",
      borderColor: "#3FA9BA",
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 inline-block pb-3 border-b-4 border-gray-900"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Modes
          </h2>
        </div>

        {/* Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4"
              style={{
                backgroundColor: mode.bgColor,
                borderColor: mode.borderColor,
                minHeight: "200px",
              }}
            >
              <div className="flex h-full">
                {/* Left Side - Vertical Title */}
                <div
                  className="flex items-center justify-center px-4 py-2 sm:px-5 bg-white"
                  style={{
                    borderRight: `4px solid ${mode.borderColor}`,
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                    minWidth: "45px",
                  }}
                >
                  <h3
                    className="text-xl sm:text-2xl font-bold text-gray-900 italic tracking-wider"
                    style={{
                      fontFamily: "Poltawski Nowy",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {mode.title}
                  </h3>
                </div>

                {/* Right Side - Description */}
                <div className="flex-1 p-4 sm:p-6 flex items-center">
                  <p
                    className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed italic"
                    style={{
                      fontFamily: "Poltawski Nowy",
                      fontWeight: 600,
                      textAlign: "justify",
                      lineHeight: "1.7",
                    }}
                  >
                    {mode.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModesSection;
