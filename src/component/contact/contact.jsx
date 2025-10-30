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
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",})
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" bg-gradient-to-b from-blue-100 to-green-100">
      {/* Header Section */}
      <div className="relative mx-6 my-8 overflow-hidden rounded-xl">
        <img
          src="image 180.png"
          alt="Contact Header"
          className="w-full h-40 md:h-52 lg:h-60 object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Contact Us
        </h1>
      </div>

      {/* Description Section with Background Image */}
      <div className="relative text-white text-center mx-6 my-10  overflow-hidden">
        {/* Background image */}
        <img
          src="/Rectangle 7358.png"
          alt="Description Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text content */}
        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20">
          <p className="max-w-4xl mx-auto leading-relaxed text-base sm:text-lg md:text-xl"
            style={{
              fontFamily: "Poltawski Nowy",
              fontWeight: 500,
              fontSize: "23px",
              lineHeight: "100%",
              color: "#FFFFFF",
              letterSpacing: "0",
            }}
          >
            At ClinXcel, we are a dedicated team of industry and training experts
            with over 20 years of experience in the clinical research domain. Our
            mission is to build a highly skilled workforce that can meet the
            growing demands of the life sciences and healthcare industries. We
            have successfully trained more than 3,000 students, equipping them
            with practical, industry-relevant knowledge and skills.
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-green-100 py-10">
        {/* Contact Details Card */}
        <div className="absolute inset-0 mt-269 flex items-center justify-start">
          <div className="relative left-[5%] lg:left-[8%] xl:left-[10%] bg-[#5FC4CC] p-8 rounded-[25px] shadow-2xl w-[85%] sm:w-[55%] md:w-[45%] lg:w-[40%] xl:w-[38%] border-[6px] border-white z-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 border-b-4 border-black pb-2 inline-block">
              Contact Details
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                M. N Road, Sonapur lane
                <br />
                Near Manisha Plaza
                <br />
                Kurla (W), Mumbai - 400070
              </p>
              <div className="mt-5">
                <h3 className="font-bold text-gray-800 mb-1 text-lg">Call Us</h3>
                <p className="text-gray-700 text-sm">8369919288 / 7021235702</p>
              </div>
              <div className="mt-5">
                <h3 className="font-bold text-gray-800 mb-1 text-lg">Email Us</h3>
                <p className="text-gray-700 text-sm">almassaved.edu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Outer Container */}
        <div className="relative flex justify-end w-full min-h-screen mr-28">
          {/* Background Shape */}
          <img
            src="/contact3.svg"
            alt="Background Shape"
            className="absolute right-0 top-0 h-full w-auto object-cover"
          />

          {/* Contact Form */}
          <div className="relative z-10 bg-transparent w-full lg:w-[50%] xl:w-[45%] mr-13 p-10 flex items-center justify-center">
            <div className="p-10 w-full max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-black font-bold mb-2 text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full px-5 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:border-cyan-500 text-gray-700"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-black font-bold mb-2 text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number"
                    className="w-full px-5 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:border-cyan-500 text-gray-700"
                    required
                  />
                </div>

                {/* E-Mail ID */}
                <div>
                  <label className="block text-black font-bold mb-2 text-base">
                    E-Mail Id
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your E-Mail Id"
                    className="w-full px-5 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:border-cyan-500 text-gray-700"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-black font-bold mb-2 text-base">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                    className="w-full px-5 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:border-cyan-500 resize-none text-gray-700"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-16 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0181899621634!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjUiTiA3M8KwNTEnMjQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
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
