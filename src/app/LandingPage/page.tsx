"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-white to-cyan-50 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-200 rounded-full blur-[150px] opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-200 rounded-full blur-[150px] opacity-20 -z-10"></div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-cyan-600">
            SoftQA
          </Link>

          {/* Menü butonu (Mobil) */}
          <button
            className="md:hidden text-gray-600 hover:text-cyan-600 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Menü Linkleri */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex md:space-x-8 md:items-center text-center md:text-left`}
          >
            <Link
              href="#features"
              className="block py-2 md:py-0 px-4 text-gray-700 hover:text-cyan-600 transition"
            >
              Özellikler
            </Link>
            <Link
              href="#pricing"
              className="block py-2 md:py-0 px-4 text-gray-700 hover:text-cyan-600 transition"
            >
              Fiyatlandırma
            </Link>
            <Link
              href="#about"
              className="block py-2 md:py-0 px-4 text-gray-700 hover:text-cyan-600 transition"
            >
              Hakkımızda
            </Link>
            <Link
              href="#contact"
              className="block py-2 md:py-0 px-4 text-gray-700 hover:text-cyan-600 transition"
            >
              İletişim
            </Link>
            <Link
              href="/login"
              className="block md:ml-4 bg-cyan-600 text-white rounded-full px-6 py-2 mt-2 md:mt-0 hover:bg-cyan-700 transition"
            >
              Giriş Yap
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20 max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          Simple, Transparent <span className="text-cyan-600">Pricing</span>
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Designed to scale with your team. Choose a plan that fits your growth.
        </p>
      </section>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 px-6 md:px-20 w-full max-w-6xl">
        {/* Basic Plan */}
        <div className="bg-white/60 backdrop-blur-lg border border-cyan-100 shadow-lg rounded-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Basic</h2>
          <p className="text-gray-600 mb-4">
            Perfect for individuals starting out
          </p>
          <p className="text-5xl font-extrabold mb-6 text-cyan-600">
            $9<span className="text-gray-500 text-lg">/mo</span>
          </p>
          <ul className="text-gray-600 mb-6 space-y-2 text-left inline-block">
            <li>✔ 1 Project</li>
            <li>✔ 5 GB Storage</li>
            <li>✔ Email Support</li>
          </ul>
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 rounded-full font-medium transition-all hover:scale-105">
            Choose Plan
          </button>
        </div>

        {/* Pro Plan (highlighted) */}
        <div className="bg-gradient-to-b from-cyan-500 to-blue-500 text-white shadow-2xl rounded-2xl p-10 transform scale-105 hover:scale-110 transition-all duration-300 border border-cyan-300">
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="text-cyan-100 mb-4">Best for growing teams</p>
          <p className="text-5xl font-extrabold mb-6">
            $29<span className="text-cyan-200 text-lg">/mo</span>
          </p>
          <ul className="text-cyan-50 mb-6 space-y-2 text-left inline-block">
            <li>✔ 5 Projects</li>
            <li>✔ 50 GB Storage</li>
            <li>✔ Priority Support</li>
          </ul>
          <button className="w-full bg-white text-cyan-600 font-semibold py-2.5 rounded-full hover:bg-cyan-50 transition-all hover:scale-105">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white/60 backdrop-blur-lg border border-cyan-100 shadow-lg rounded-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Enterprise
          </h2>
          <p className="text-gray-600 mb-4">For large organizations</p>
          <p className="text-5xl font-extrabold mb-6 text-cyan-600">
            $99<span className="text-gray-500 text-lg">/mo</span>
          </p>
          <ul className="text-gray-600 mb-6 space-y-2 text-left inline-block">
            <li>✔ Unlimited Projects</li>
            <li>✔ 1 TB Storage</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 rounded-full font-medium transition-all hover:scale-105">
            Choose Plan
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-6 text-gray-500 text-sm">
        © 2025 SoftQA. All rights reserved.
      </footer>
    </div>
  );
}
