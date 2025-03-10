/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side - Text Section */}
      <div className="text-left max-w-lg">
        <h2 className="text-4xl font-extrabold text-[#1d1b38] leading-tight">
          Let&apos;s Bring Your <br /> Brand to Life <br />
          Advertise with Us!
        </h2>
        <p className="text-black mt-4">
          We are ready to discuss the details of your company and answer any of
          your questions.
        </p>
      </div>

      {/* Middle Image */}

      {/* Right Side - Form Container */}
      <div className="p-8 rounded-2xl shadow-lg max-w-xl w-full relative">
        <div className="hidden md:block absolute -left-[220px]">
          <Image
            src="https://i.postimg.cc/MZnZm1JM/pngfind.com-pubg-logo-png-288175.png" // Change this to your actual image path
            alt="Contact Illustration"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500 md:col-span-2"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500 md:col-span-2"
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-[#1d1b38] text-white font-bold py-3 rounded-lg hover:bg-black transition"
          >
            SUBMIT REQUEST
          </button>
        </form>
      </div>
    </section>
  );
}
