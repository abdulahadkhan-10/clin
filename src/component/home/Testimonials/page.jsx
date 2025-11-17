"use client";

import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rutuja Dattatray Chougale",
      title: "M. Pharm, Bharati's Vidyapeeth College of Pharmacy",
      image: "/testimonial.png",
      text: "Alma Madam's insightful teaching refined my theoretical skills in clinical research and boosted my confidence to be job-ready through her inspiring guidance and practical teaching.",
      rating: 5,
      color: "blue",
      align: "left"
    },
    {
      id: 2,
      name: "U Nivetha",
      title: "Pharm. D, Sri Ramachandra Institute of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma'am's practical and effective teaching made complex medical terms easy to understand. Her training gave me confidence to apply for jobs with ease.",
      rating: 5,
      color: "green",
      align: "right"
    },
    {
      id: 3,
      name: "Nagnikar Shruti Subhash",
      title: "M. Pharm, Satara College of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma'am's simplified teaching approach made complex ICSR and PV concepts easy to understand and follow. It helped me gain clarity and confidence.",
      rating: 5,
      color: "blue",
      align: "left"
    },
    {
      id: 4,
      name: "Naziya Khan",
      title: "B. Pharm, St. John's College of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma'am's practical teaching and real-time explanation of case processing helped me understand every aspect clearly. Best place to learn PV!",
      rating: 5,
      color: "green",
      align: "right"
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading Banner */}
        <div className="w-full mb-12 sm:mb-16 lg:mb-20">
          <div className="relative flex items-center">
            {/* Full Width Green Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#76CD61] via-[#5BC179] to-[#3EAD89] shadow-lg h-[60px] sm:h-[80px]"></div>
            
            {/* Content Container */}
            <div className="relative w-full flex sm:px-60 items-center">
              {/* Testimonials Text */}
              <div className="px-6 sm:px-10 py-4 sm:py-5 text-xl sm:text-2xl lg:text-3xl font-bold text-white z-10">
                Testimonials
              </div>
              
              {/* White Arrow Shape */}
              <div className="relative ml-4 sm:ml-8">
                {/* Arrow pointing right */}
                <div className="relative bg-white shadow-lg px-8 sm:px-20 py-5 sm:py-5 flex items-center min-w-[250px] sm:min-w-[350px]">
                  {/* Left arrow point */}
                  <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-0 h-0 
                                  border-t-[30px] sm:border-t-[35px] border-t-transparent
                                  border-r-[24px] sm:border-r-[30px] border-r-white
                                  border-b-[30px] sm:border-b-[35px] border-b-transparent">
                  </div>
                  
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 whitespace-nowrap">
                    Hear from those who trusted us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zigzag Testimonial Cards */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`flex ${
                item.align === "right" 
                  ? "justify-start sm:justify-end" 
                  : "justify-start"
              }`}
            >
              <div
                className={`group relative w-full sm:w-[70%] lg:w-[60%] bg-white rounded-[28px] shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 lg:p-10 border-[4px] ${
                  item.color === "blue" ? "border-[#5BC8DB]" : "border-[#7DD67C]"
                } hover:scale-[1.02]`}
              >
                {/* Speech Bubble Tail - More prominent */}
                <div
                  className={`absolute ${
                    item.align === "right"
                      ? "right-12 sm:right-20"
                      : "left-12 sm:left-20"
                  } -bottom-10 w-0 h-0 border-t-[40px] ${
                    item.color === "blue" 
                      ? "border-t-[#5BC8DB]" 
                      : "border-t-[#7DD67C]"
                  } ${
                    item.align === "right"
                      ? "border-r-[40px] border-r-transparent"
                      : "border-l-[40px] border-l-transparent"
                  } drop-shadow-md`}
                ></div>

                {/* Content */}
                <div className={`flex flex-col ${
                  item.align === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
                } items-start gap-5 sm:gap-6 lg:gap-8`}>
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full shadow-xl border-[5px] border-gray-100 object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className={`flex-1 ${
                    item.align === "right" ? "sm:text-right" : "sm:text-left"
                  }`}>
                    <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 font-medium leading-snug">
                      {item.title}
                    </p>
                    <p className="text-sm sm:text-base lg:text-[15px] text-gray-700 leading-relaxed mb-4 italic">
                      {item.text}
                    </p>

                    {/* Stars */}
                    <div className={`flex gap-1 ${
                      item.align === "right" ? "sm:justify-end" : "justify-start"
                    }`}>
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current drop-shadow-sm"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}