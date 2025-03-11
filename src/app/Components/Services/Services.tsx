"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaTshirt, FaVideo, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaUsers size={50} className="text-gold drop-shadow-glow" />,
    title: "1v1 Coaching Sessions",
  },
  {
    icon: <FaGamepad size={50} className="text-gold drop-shadow-glow" />,
    title: "Custom Room Challenges",
  },
  {
    icon: <FaTshirt size={50} className="text-gold drop-shadow-glow" />,
    title: "Gaming Merchandise",
  },
  {
    icon: <FaVideo size={50} className="text-gold drop-shadow-glow" />,
    title: "Live Stream Shoutouts",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#1D1B38] text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-cover bg-center"></div>

      <motion.h2
        className="text-5xl md:text-7xl font-extrabold text-gold uppercase mb-12 relative z-10 drop-shadow-neon tracking-widest"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Elite Gaming Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-8 backdrop-blur-md rounded-xl shadow-xl text-white flex flex-col items-center gap-6 border border-gold/70 hover:bg-gold hover:text-black transition duration-300 transform hover:-translate-y-3 hover:scale-105 mx-5 relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
              background:
                "linear-gradient(to bottom, rgba(43,23,59,0.6), rgba(21,14,40,0.9))",
            }}
          >
            <div className="relative">
              {service.icon}
              <div className="absolute inset-0 w-full h-full bg-gold opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>
            </div>
            <h3 className="text-2xl font-bold tracking-wide drop-shadow-lg uppercase group-hover:scale-110 transition">
              {service.title}
            </h3>
            <div className="absolute w-full h-[3px] bg-gold bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
