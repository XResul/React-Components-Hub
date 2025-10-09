"use client";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PriceCard from "../../components/PriceCard";

export default function Home() {
  return (
    <div>
      {/* Navbar Components */}
      <Navbar></Navbar>
      <div className="mt-12">
        {/* PriceCard Components */}
        <PriceCard></PriceCard>
      </div>
      <Footer></Footer>
    </div>
  );
}
