"use client";
import Navbar from "../../components/Navbar";
import PriceCard from "../../components/PriceCard";

export default function Home() {
  return (
    <div>
      {/* Navbar Components */}
      <Navbar></Navbar>
      <div>
        {/* PriceCard Components */}
        <PriceCard></PriceCard>
      </div>
    </div>
  );
}
