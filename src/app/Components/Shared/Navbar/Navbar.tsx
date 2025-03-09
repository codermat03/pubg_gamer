"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">PUBG Pro</span>
        </Link>

        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/gameplay" className="hover:text-yellow-500">
              Gameplay
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-yellow-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="space-y-4 mt-10">
          <Link
            href="/about"
            className="block text-white hover:text-yellow-500"
          >
            About
          </Link>
          <Link
            href="/gameplay"
            className="block text-white hover:text-yellow-500"
          >
            Gameplay
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-yellow-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-yellow-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
