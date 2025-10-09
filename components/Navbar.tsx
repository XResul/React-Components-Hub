"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Navbar: Fixed ve gölge ile üstte sabit
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-cyan-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* LOGO */}
        <Link href="#" className="text-cyan-600 font-bold text-3xl">
          SoftQA
        </Link>

        {/* Desktop Menu: md ve üzeri */}
        <ul className="hidden md:flex space-x-6 items-center text-lg text-gray-700 font-medium">
          <li>
            <Link
              href="#"
              className="hover:text-cyan-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-cyan-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-cyan-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-cyan-500 transition-colors duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-gradient-to-tr from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-3xl hover:scale-105 transition-transform duration-300"
            >
              SignIn
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-cyan-600 text-white px-4 py-2 rounded-3xl hover:bg-cyan-700 shadow-md transition-colors duration-300"
            >
              SignUp
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl font-bold focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-white border-t border-cyan-400 shadow-lg w-full text-center py-4">
          <li>
            <Link
              href="#"
              className="block py-2 hover:text-cyan-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 hover:text-cyan-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 hover:text-cyan-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 hover:text-cyan-500 transition-colors duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block mt-2 bg-gradient-to-tr from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-3xl mx-auto w-32 hover:scale-105 transition-transform duration-300"
            >
              SignIn
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block mt-2 bg-cyan-600 text-white px-4 py-2 rounded-3xl mx-auto w-32 hover:bg-cyan-700 shadow-md transition-colors duration-300"
            >
              SignUp
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
