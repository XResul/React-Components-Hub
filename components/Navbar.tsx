"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  //Bu kısımda mobil durumuna karşılık useState kullanacağız
  const [isOpen, setIsOpen] = useState(false);
  return (
    //? sticky ve Fixed farkı fixed sayfanın aşasına insek de navbar ekranda kalır
    <nav className="sticky top-0 z-50 border-2 border-cyan-400 bg-white shadow-2xl p-6 w-full">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between space-x-12">
          {/* LOGO */}
          <Link href="#" className="text-cyan-600 font-bold text-3xl mb-">
            SoftQA
          </Link>

          {/* Menu Linkler */}

          <ul className="flex space-x-8 text-lg font-medium text-gray-700">
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
              <Link
                href={"#"}
                className="bg-gradient-to-tr from-cyan-500 to-white-600 p-2 rounded-4xl  text-white"
              >
                SignIn
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="bg-cyan-600 text-white p-2 rounded-4xl hover:bg-cyan-700 transition duration-300 shadow-2xl"
              >
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
