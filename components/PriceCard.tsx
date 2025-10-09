import Link from "next/link";
import React from "react";

export default function PriceCard() {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      {/* Price'S Title */}
      <div className="font-bold flex items-center flex-col gap-12 text-6xl mt-16">
        <h1 className="flex items-center flex-col">
          <span>Simple,</span>
          <span>Transparent</span>
          <span className="text-cyan-700">Pricing</span>
        </h1>
        <p className="text-lg text-gray-500">
          Designed to scale with your team. Choose a plan that fits your growth.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-4 md:flex-row">
        {/* 1.Card */}
        <div className="flex flex-col gap-2 bg-white border-2 border-cyan-400 rounded-4xl p-4 shadow-2xl w-[400px] h-[300px] text-center">
          <h2 className="font-bold text-3xl">Basic</h2>
          <p>Perfect for individuals starting out</p>
          <h1>
            <span className="text-cyan-700 text-6xl">$9</span>
            <span>/mo</span>
          </h1>
          <span>✔ 1 Project </span>
          <span>✔ 5 GB Storage</span>
          <span>✔ Email Support</span>
          <Link
            href={"#"}
            className="bg-cyan-400 text-white text-2xl rounded-4xl"
          >
            Choose Plan
          </Link>
        </div>

        {/* 2.Card */}
        <div className="flex flex-col gap-2 bg-white border-2 border-cyan-400 rounded-4xl p-4 shadow-2xl w-[400px] h-[300px] text-center">
          <h2 className="font-bold text-3xl">Pro</h2>
          <p>Best for growing teams</p>
          <h1>
            <span className="text-cyan-700 text-6xl">$29</span>
            <span>/mo</span>
          </h1>
          <span>✔ 5 Projects </span>
          <span>✔ 50 GB Storage</span>
          <span>✔ Priority Support</span>
          <Link
            href={"#"}
            className="bg-cyan-400 text-white text-2xl rounded-4xl"
          >
            Choose Plan
          </Link>
        </div>
        {/* 3.Card */}
        <div className="flex flex-col gap-2 bg-white border-2 border-cyan-400 rounded-4xl p-4 shadow-2xl w-[400px] h-[300px] text-center">
          <h2 className="font-bold text-3xl">Enterprise</h2>
          <p>For large organizations</p>
          <h1>
            <span className="text-cyan-700 text-6xl">$99</span>
            <span>/mo</span>
          </h1>
          <span>✔ Unlimited Projects</span>
          <span>✔ 1 TB Storage</span>
          <span>✔ 24/7 Support</span>
          <Link
            href={"#"}
            className="bg-cyan-400 text-white text-2xl rounded-4xl"
          >
            Choose Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
