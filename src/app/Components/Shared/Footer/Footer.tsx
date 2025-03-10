import React from "react";
import { Facebook, Instagram, X, Youtube, ArrowBigRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#502679] to-[#161A51] text-white py-12 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Side - Large Navigation */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold leading-relaxed">Services</h2>
          <h2 className="text-2xl font-bold leading-relaxed">Our Games</h2>
          <h2 className="text-2xl font-bold leading-relaxed">News</h2>
          <h2 className="text-2xl font-bold leading-relaxed">Contact</h2>
        </div>

        {/* Center Links */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3">OUR STUDIO</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Games</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">SERVICES</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Game Design</li>
              <li>Game Development</li>
              <li>Art Director</li>
              <li>Multiplatform</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">SUPPORT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Community</li>
              <li>FAQs</li>
              <li>License</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact and Socials */}
      <div className="mt-12 flex flex-col md:flex-row md:justify-between">
        <div>
          <h3 className="text-lg font-bold">GET IN TOUCH</h3>
          <p className="text-gray-300">hitboox@example.com</p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Facebook className="text-white cursor-pointer hover:text-gray-400" />
          <Instagram className="text-white cursor-pointer hover:text-gray-400" />
          <X className="text-white cursor-pointer hover:text-gray-400" />
          <Youtube className="text-white cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-12  p-6 rounded-lg flex items-center space-x-6">
        <img
          src="https://i.postimg.cc/0yjbTJf6/ft-img.png"
          alt="Controller"
          className="w-24 md:w-32"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg">
            Sign up today to get the latest inspiration & insights
          </h3>
        </div>
        <input
          type="email"
          placeholder="Your email"
          className="bg-transparent border border-gray-400 rounded-full px-6 py-2 outline-none text-white w-64"
        />
        <ArrowBigRight></ArrowBigRight>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 flex flex-col md:flex-row md:justify-between text-gray-400 text-sm">
        <p>
          © 2025 <span className="text-white font-bold">Hitboox.</span> All
          Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <p>Cookies</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
