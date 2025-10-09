"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo ve Hakkımızda */}
        <div className="flex flex-col gap-4">
          <Link href="#" className="text-cyan-600 font-bold text-3xl">
            SoftQA
          </Link>
          <p className="text-gray-600 max-w-sm">
            SoftQA is your go-to solution for task management and productivity.
            Simple, efficient, and designed to help your team grow.
          </p>
        </div>

        {/* Site Haritası */}
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-800 font-bold text-lg">Site Map</h3>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link href="#" className="hover:text-cyan-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-cyan-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-cyan-600 transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-cyan-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-cyan-600 transition">
                SignIn
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-cyan-600 transition">
                SignUp
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-800 font-bold text-lg">Contact</h3>
          <p className="text-gray-600">Email: info@softqa.com</p>
          <p className="text-gray-600">Phone: +90 555 555 5555</p>
          <p className="text-gray-600">Address: Istanbul, Turkey</p>
        </div>
      </div>

      <div className="text-center text-gray-500 border-t border-gray-300 mt-8 pt-4 text-sm">
        © 2025 SoftQA. All rights reserved.
      </div>
    </footer>
  );
}
