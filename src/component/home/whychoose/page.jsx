"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function WhyClinxcel() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Simple scroll-based animation for the image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 0.9", "start 0.5"],
  });

  const scaleImage = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityImage = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-white rounded-2xl p-8 md:p-14 
                 flex flex-col md:flex-row items-center md:items-start 
                 gap-8 shadow-lg"
    >
      {/* Left Section */}
      <div className="flex-1 ml-0 md:ml-15 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Why <span className="text-[#89D284]">CLINXCEL?</span>
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          At ClinXcel, we are a dedicated team of industry and training experts
          with over <span className="font-semibold text-green-700">20 years of experience</span> 
          in the clinical research domain.
          <br /><br />
          Our mission is to build a highly skilled workforce that meets the growing 
          demands of the life sciences and healthcare industries.
          <br /><br />
          With over{" "}
          <span className="font-semibold text-green-700">3,000 trained students</span>,
          we continue to empower learners with practical, industry-ready skills.
        </p>

        <button
          className="px-8 py-4 text-lg font-semibold text-[#006467] 
                     bg-[#89D284]
                     rounded-xl shadow-md hover:shadow-lg 
                     hover:bg-green-600
                     cursor-pointer
                     transition-all duration-300"
          onClick={() => router.push("/about")}
        >
          Know more
        </button>
      </div>

      {/* Right Section — Simple Scroll Animation */}
      <div ref={imageRef} className="flex-1 flex justify-center">
        <motion.div
          style={{
            scale: scaleImage,
            opacity: opacityImage,
          }}
        >
          <Image
            src="/image 200.png"
            alt="ClinXcel Graphic"
            width={270}
            height={300}
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}