"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-8 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-black">
          Contact Us
        </h1>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-8 py-12 relative">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          
          {/* Contact Details Card - Left Side with overlap */}
          <div 
            className="w-full lg:w-[380px] bg-[#7DD3DB] rounded-3xl p-8 shadow-2xl relative z-20 lg:-mr-16"
            style={{
              boxShadow: '0 25px 60px rgba(125, 211, 219, 0.5)'
            }}
          >
            <h2 className="text-2xl font-bold text-teal-700 mb-6 border-b-4 border-teal-700 pb-2 inline-block">
              Contact details
            </h2>

            <div className="bg-white rounded-2xl p-6 mt-6 space-y-6">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-1">Address</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    M.N Road, Sonapur lane Near<br />
                    Manisha Plaza Kurla(W),<br />
                    Mumbai - 400070
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-1">Call Us</h3>
                  <p className="text-gray-700 text-sm">8369919200 / 7021235702</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-1">Email Us</h3>
                  <p className="text-gray-700 text-sm">almassayed.edu@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div 
            className="flex-1 max-w-2xl bg-white rounded-3xl p-10 shadow-2xl relative z-10 lg:pl-20"
            style={{
              boxShadow: '0 25px 60px rgba(134, 239, 172, 0.5)',
              border: '6px solid #86EFAC'
            }}
          >
            <h2 className="text-3xl font-bold text-black mb-8">
              Send Message
            </h2>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-black font-semibold mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-black font-semibold mb-2 text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                />
              </div>

              {/* E-Mail ID */}
              <div>
                <label className="block text-black font-semibold mb-2 text-sm">
                  E-Mail Id
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your E-Mail Id"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-black font-semibold mb-2 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 resize-none text-gray-700 text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-3">
                <button
                  onClick={handleSubmit}
                  className="bg-teal-500 text-white px-12 py-2.5 rounded-lg font-semibold text-base hover:bg-teal-600 transition duration-300 shadow-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="text-center py-12 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-relaxed">
          Thank you for your interest — we're happy<br />
          to connect and collaborate.
        </h2>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0181899621634!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjUiTiA3M8KwNTEnMjQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;