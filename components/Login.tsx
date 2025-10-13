"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); //check div 'i için
  const [showPassword, setShowPassword] = useState(false); // şifre görünürlüğü ayarlama
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const correctEmail = "resul1";
  const correctPassword = "1";

  const handleLogin = () => {
    let hasError = false;
    if (email !== correctEmail) {
      setErrorEmail("Invalid E-mail Address");
      hasError = true;
    } else {
      setErrorEmail("");
    }

    if (password !== correctPassword) {
      setErrorPassword("Incorrect Password");
      hasError = true;
    } else {
      setErrorPassword("");
    }

    if (!hasError) {
      alert("Login successfuly");
      setEmail("");
      setPassword("");
    }
  };

  const isDisabled = !email || !password;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617]">
      {/* Login Kartı */}
      <div
        className="flex flex-col justify-center items-center gap-[40px] 
        border border-[#2A2A5A] bg-[#1C1C3C]/90 rounded-2xl p-[64px_16px] shadow-[0_0_40px_rgba(30,58,138,0.3)] 
        w-full max-w-[640px] text-gray-100 backdrop-blur-md"
      >
        {/* Title */}

        <h1 className="text-center text-[30px] font-semibold space-y-0.5 w-[298px] flex flex-col bg-gradient-to-tr from-white to-white/40 bg-clip-text text-transparent">
          <span>Login Page</span>
        </h1>

        {/* Logo */}
        {/* Bu kısma logo */}

        {/* Form Alanı */}
        <div className="flex flex-col justify-center items-center gap-[32px] w-full max-w-[360px]">
          {/* E-mail input */}
          <div className="w-full relative">
            {/* SVG Icon */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Image
                src="/mail.svg"
                width={16.667}
                height={13.333}
                alt="Mail Icon"
              />
            </div>

            {/* Input */}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
              className="w-full rounded-md border border-[#2E2E72] bg-[#0B0B2B] px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] shadow-sm transition-all duration-300"
            />
            {errorEmail && (
              <p className="text-[#EF4444] text-xs mt-1 absolute left-0 -bottom-5">
                {errorEmail}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            {/* Lock Icon SVG*/}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Image
                src={"/lock.svg"}
                width={16.667}
                height={13.333}
                alt="LockIcon"
              ></Image>
            </div>

            {/* Eye Icon SVG */}
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Image
                src={showPassword ? "/eye-off.svg" : "/eye.svg"}
                width={18.333}
                height={13.333}
                alt="EyeIcon"
              ></Image>
            </div>

            {/* Şifre input */}
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-md border border-[#2E2E72] bg-[#0B0B2B] px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] shadow-sm transition-all duration-300"
            />
            {errorPassword && (
              <p className="text-[#EF4444] text-xs mt-1 absolute left-0 -bottom-5">
                {errorPassword}
              </p>
            )}
          </div>

          {/* Remember & Forgot Password */}
          <div className="flex justify-between items-center w-full">
            <div
              onClick={() => setRemember(!remember)}
              className="flex items-center cursor-pointer select-none"
            >
              <div
                className={`mr-2 flex items-center justify-center rounded-md h-4 w-4 border border-[#3B3BEA] transition-colors ${
                  remember ? "bg-[#3B3BEA]" : "bg-[#1A1A4A]"
                }`}
              >
                {remember && <span className="text-white text-[10px]">✓</span>}
              </div>
              <span className="text-gray-300 text-sm">Remember me</span>
            </div>
            <Link
              href="#"
              className="text-[#3b82f6] text-sm hover:text-[#60a5fa] transition"
            >
              Forgot Password
            </Link>
          </div>

          {/* Login Button */}
          <button
            disabled={isDisabled}
            onClick={handleLogin}
            className={`w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 rounded-md transition-all duration-300 disabled:bg-[#475569] ${
              isDisabled ? "pointer-events-none" : "cursor-pointer"
            }`}
          >
            Login
          </button>
        </div>

        {/* Alt yazı ve diğer alanlar */}
        <p className="text-gray-400 text-sm mt-2">
          Don’t have an account?{" "}
          <Link href="/Register" className="text-[#60a5fa] hover:underline">
            Sign up
          </Link>
        </p>

        {/* Sign in with google cizgisi */}
        <div className="flex items-center justify-between w-full max-w-[360px] gap-4">
          <div className="bg-[#2A2A5A] h-[1px] flex-1" />
          <span className="text-gray-400">Or sign in with</span>
          <div className="bg-[#2A2A5A] h-[1px] flex-1" />
        </div>

        {/* Sign in with google Buttonu */}
        <div className="flex items-center justify-center gap-3 border border-[#2A2A5A] bg-[#0f172a] py-[10px] px-[16px] rounded-md shadow-md cursor-pointer hover:bg-[#1e293b] transition w-full max-w-[200px]">
          <Link href="#" className="flex items-center">
            <img
              src="/googleIcon.png"
              alt="Google Icon"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-gray-200 ml-2 font-medium">
              Sign in with Google
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
