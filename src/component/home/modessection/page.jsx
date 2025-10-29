import React from "react";

const ModesSection = () => {
  const modes = [
    {
      id: 1,
      title: "ONLINE",
      titleVertical: true,
      description:
        "Access our expert-led courses from anywhere with interactive sessions, recorded lectures, and virtual assignments.",
      bgColor: "#E8F5F3",
      borderColor: "#3FA9BA",
    },
    {
      id: 2,
      title: "OFFLINE",
      titleVertical: true,
      description:
        "Engage in face-to-face learning with hands-on experience in a dedicated classroom setting at our campuses or partner institutions.",
      bgColor: "#E8F5F3",
      borderColor: "#3FA9BA",
    },
    {
      id: 3,
      title: "HYBRID",
      titleVertical: true,
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
                  className="flex items-center justify-center px-5  mt-1 ml-1 mb-1 mr-1 sm:px-4 border-5 "
                  style={{
                    // backgroundColor: mode.borderColor,
                    backgroundColor: "#FFFFFF",
                    borderColor: mode.borderColor,
                    minWidth: "50px",
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-gray-900 italic tracking-wider"
                    style={{
                      fontFamily: "Poltawski Nowy",
                      fontWeight: 700,
                      //   transform: 'rotate(180deg)',
                      letterSpacing: "0.1em",
                    }}
                  >
                    {mode.title}
                  </h3>
                </div>

                {/* Right Side - Description */}
                <div className="flex-1 p-5 sm:p-6 flex items-center">
                  <p
                    className="text-3xl sm:text-2xl text-gray-800 leading-relaxed italic"
                    style={{
                      fontFamily: "Poltawski Nowy",
                      fontWeight: 700,
                      textAlign: "justify",
                      lineHeight: "1.8",
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
