"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaTshirt, FaVideo, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaUsers size={50} className="text-gold drop-shadow-lg" />,
    title: "1v1 Coaching Sessions",
  },
  {
    icon: <FaGamepad size={50} className="text-gold drop-shadow-lg" />,
    title: "Custom Room Challenges",
  },
  {
    icon: <FaTshirt size={50} className="text-gold drop-shadow-lg" />,
    title: "Gaming Merchandise",
  },
  {
    icon: <FaVideo size={50} className="text-gold drop-shadow-lg" />,
    title: "Live Stream Shoutouts",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1D174A] to-[#1E4983] text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://i.postimg.cc/0yjbTJf6/ft-img.png')] bg-cover bg-center"></div>

      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-gold uppercase mb-12 relative z-10 drop-shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Premium Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-8 bg-[#1E2360]/80 backdrop-blur-md rounded-xl shadow-xl text-white flex flex-col items-center gap-6 border border-gold/60 hover:bg-gold hover:text-black transition duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {service.icon}
            <h3 className="text-2xl font-bold tracking-wide drop-shadow-lg">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
