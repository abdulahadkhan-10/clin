"use client";

import React from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rutuja Dattatray Chougale",
      title: "M. Pharm, Bharati's Vidyapeeth College of Pharmacy",
      image: "/testimonial.png",
      text: "Alma Madam’s insightful teaching refined my theoretical skills in clinical research and boosted my confidence to be job-ready through her inspiring guidance and practical teaching.",
      rating: 5,
    },
    {
      id: 2,
      name: "U Nivetha",
      title: "Pharm. D, Sri Ramachandra Institute of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma’am's practical and effective teaching made complex medical terms easy to understand. Her training gave me confidence to apply for jobs with ease.",
      rating: 5,
    },
    {
      id: 3,
      name: "Nagnikar Shruti Subhash",
      title: "M. Pharm, Satara College of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma’am’s simplified teaching approach made complex ICSR and PV concepts easy to understand and follow. It helped me gain clarity and confidence.",
      rating: 5,
    },
    {
      id: 4,
      name: "Naziya Khan",
      title: "B. Pharm, St. John’s College of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma’am’s practical teaching and real-time explanation of case processing helped me understand every aspect clearly. Best place to learn PV!",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-[#7CC676] text-white px-6 py-2 rounded-md text-xl font-semibold">
            Testimonials
          </div>
          <div className="bg-[#3FA9BA] text-white px-6 py-2 rounded-md text-lg font-medium">
            Hear from those who trusted us
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-6 border border-gray-200"
            >
              {/* Tail bottom */}
              <div className="absolute bottom-[-20px] left-10 w-0 h-0 border-t-[20px] border-t-gray-200 border-l-[20px] border-l-transparent"></div>
              <div className="absolute bottom-[-17px] left-10 w-0 h-0 border-t-[18px] border-t-white border-l-[18px] border-l-transparent"></div>

              {/* Row */}
              <div className="flex items-start gap-4">
                <Image
                  src={item.image}
                  width={70}
                  height={70}
                  alt={item.name}
                  className="rounded-full shadow"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mt-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
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
