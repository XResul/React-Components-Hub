import Link from "next/link";
import React from "react";

export default function PriceCard() {
  return (
    <div className="flex flex-col items-center gap-12 py-16 bg-gray-50">
      {/* Price Title */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl font-bold">
          <span>Simple, </span>
          <span>Transparent </span>
          <span className="text-cyan-700">Pricing</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto">
          Designed to scale with your team. Choose a plan that fits your growth.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full px-4 md:px-0">
        {/* Basic Card */}
        <div className="flex flex-col items-center gap-4 bg-white rounded-4xl shadow-xl p-8 w-72 md:w-80 hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800">Basic</h2>
          <p className="text-gray-500 text-center">
            Perfect for individuals starting out
          </p>
          <h1 className="text-5xl font-extrabold text-cyan-700">
            $9 <span className="text-xl text-gray-500 font-normal">/mo</span>
          </h1>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>✔ 1 Project</li>
            <li>✔ 5 GB Storage</li>
            <li>✔ Email Support</li>
          </ul>
          <Link
            href="#"
            className="mt-4 bg-cyan-400 text-white px-8 py-3 rounded-3xl text-lg font-semibold shadow-lg hover:bg-cyan-500 transition"
          >
            Choose Plan
          </Link>
        </div>

        {/* Pro Card - Öne Çıkıyor */}
        <div className="flex flex-col items-center gap-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-4xl shadow-2xl p-10 w-80 md:w-96 hover:scale-110 transition-transform duration-300 text-white">
          <h2 className="text-3xl font-bold">Pro</h2>
          <p className="text-center">Best for growing teams</p>
          <h1 className="text-5xl font-extrabold">
            $29 <span className="text-xl font-normal text-white/80">/mo</span>
          </h1>
          <ul className="flex flex-col gap-1 text-white/90">
            <li>✔ 5 Projects</li>
            <li>✔ 50 GB Storage</li>
            <li>✔ Priority Support</li>
          </ul>
          <Link
            href="#"
            className="mt-4 bg-white text-cyan-600 px-8 py-3 rounded-3xl text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Choose Plan
          </Link>
        </div>

        {/* Enterprise Card */}
        <div className="flex flex-col items-center gap-4 bg-white rounded-4xl shadow-xl p-8 w-72 md:w-80 hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800">Enterprise</h2>
          <p className="text-gray-500 text-center">For large organizations</p>
          <h1 className="text-5xl font-extrabold text-cyan-700">
            $99 <span className="text-xl text-gray-500 font-normal">/mo</span>
          </h1>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>✔ Unlimited Projects</li>
            <li>✔ 1 TB Storage</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <Link
            href="#"
            className="mt-4 bg-cyan-400 text-white px-8 py-3 rounded-3xl text-lg font-semibold shadow-lg hover:bg-cyan-500 transition"
          >
            Choose Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
