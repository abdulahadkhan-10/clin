'use client';

import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rutuja Dattatray Chougale",
      title: "M. Pharm, Bharati's Vidyapeeth College of Pharmacy",
      image: "/testimonial.png", // Replace with actual image path
      rating: 5,
      text: "Before joining the training by Almaa Ma'am, I was unsure about my career path in clinical research. But through her sessions, I not only learned about pharmacovigilance and trial processes, but also gained clarity on industry expectations.\n\nShe is truly inspiring – always encouraging us to ask questions, explore opportunities, and stay updated with current trends. The way she explained real-time ICSR workflows and signal detection gave me confidence that I'm job-ready. I'm very grateful for the mentorship and support provided."
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Diagonal Banners */}
        <div className="relative mb-12 sm:mb-16">
          {/* Green Banner - Top */}
          <div 
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-12 sm:h-14 md:h-16 rounded-full flex items-center px-6 sm:px-8 shadow-lg mb-3"
            style={{
              backgroundColor: '#7FC97F',
              transform: 'skew(-10deg)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
              style={{ transform: 'skew(10deg)' }}
            >
              Testimonials
            </h2>
          </div>

          {/* Teal Banner - Bottom */}
          <div 
            className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-12 sm:h-14 md:h-16 rounded-full flex items-center justify-center px-6 sm:px-8 shadow-lg ml-auto"
            style={{
              backgroundColor: '#3FA9BA',
              transform: 'skew(-10deg)',
            }}
          >
            <h3 
              className="text-lg sm:text-xl md:text-2xl font-medium text-white text-center"
              style={{ transform: 'skew(10deg)' }}
            >
              Hear from those who trusted us
            </h3>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div 
            className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-teal-500 mx-auto max-w-5xl"
            style={{
              background: 'linear-gradient(135deg, #E8F5F3 0%, #F0F9F7 100%)'
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 p-6 sm:p-8 lg:p-10">
              {/* Left Side - Image */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg">
                  {/* Placeholder for image */}
                 
                  {/* Uncomment when you have actual images */}
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 flex flex-col">
                {/* Name and Stars */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 bg-white px-3 py-2 rounded-lg shadow-sm w-fit">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 overflow-y-auto">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line italic">
                    {testimonials[currentIndex].text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div> */}

          {/* Dots Indicator */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;