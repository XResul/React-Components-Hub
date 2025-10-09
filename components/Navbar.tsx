"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  //Bu kısımda mobil durumuna karşılık useState kullanacağız
  const [isOpen, setIsOpen] = useState(false);
  return (
    //? sticky ve Fixed farkı Fixed sayfanın aşasına insek de navbar ekranda kalır
    <nav className="Fixed top-0 z-50 border-2 border-cyan-400 bg-white shadow-2xl w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* LOGO */}
        <Link href="#" className="text-cyan-600 font-bold text-3xl ">
          SoftQA
        </Link>

        {/* Desktop Menu: md ve üzeri ekranlarda gösteriyor  */}
        {/* hidden md:flex desktop da göster mobilde gizle */}
        <ul className="hidden md:flex space-x-6 items-center text-lg  text-gray-500 font-medium">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            {/* Gradient SigIn Button */}
            <Link
              href="#"
              className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-4xl text-white hover:scale-105  transition-transform duration-300"
            >
              SignIn
            </Link>
          </li>
          <li>
            {/* Solid SignUp Button */}
            <Link
              href="#"
              className="bg-cyan-600 text-white p-2 rounded-4xl hover:bg-cyan-700 shadow-2xl transition duration-300  "
            >
              SignIn
            </Link>
          </li>
        </ul>

        {/* Mobilde Menu buttonu md altındaki ekranlarda göstereceğim */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-bold text-4xl"
        >
          {isOpen ? "X" : "☰"}
          {/*Hamburger veya close ikonları */}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-3 items-center font-bold text-gray-600">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
