"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Input değerleri
  const [fullName, setFullName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Hata mesajları
  const [errorFullName, setErrorFullName] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // Basit email doğrulama
  const isValidEmail = (mail: string) => /^\S+@\S+\.\S+$/.test(mail.trim());

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Önce tüm hataları temizle
    setErrorFullName("");
    setErrorMail("");
    setErrorPassword("");
    setErrorConfirmPassword("");

    let hasError = false;

    if (!fullName.trim()) {
      setErrorFullName("Full name is required.");
      hasError = true;
    }

    if (!mail.trim() || !isValidEmail(mail)) {
      setErrorMail("Please enter a valid email address.");
      hasError = true;
    }

    const hasNumber = /\d/.test(password);
    if (password.length < 6 || !hasNumber) {
      setErrorPassword(
        "Password must have at least 6 characters and contain at least one number."
      );
      hasError = true;
    }

    if (confirmPassword !== password) {
      setErrorConfirmPassword("Passwords do not match.");
      hasError = true;
    }

    if (!hasError) {
      alert("Sign Up successfully");
      setFullName("");
      setMail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const isDisabled = !fullName || !mail || !password || !confirmPassword;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B0C10] text-white">
      <div className="flex flex-col justify-center items-center gap-[40px] border border-[#1F1F2E] bg-[#13141F] rounded-2xl p-[64px_16px] shadow-[0_0_25px_rgba(50,50,93,0.25)] w-full max-w-[640px] my-[50.6px] transition-all duration-300">
        {/* Bu kısma Logo ekleyebilirim  */}

        {/* Page Title */}
        <h1 className="text-center text-[30px] font-semibold space-y-0.5 w-[298px] flex flex-col bg-gradient-to-tr from-white to-white/40 bg-clip-text text-transparent">
          <span>Create your Beyond</span>
          <span>Review account</span>
        </h1>

        <form
          onSubmit={handleRegister}
          className="flex flex-col justify-center items-center gap-[24px] w-full max-w-[360px]"
        >
          {/* Full Name */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="fullName"
              className="text-[14px] text-[#A5A5A5] mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errorFullName) setErrorFullName("");
              }}
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#2B2B3F] bg-[#181926] px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#6454FF] focus:ring-1 focus:ring-[#4A3AFF] transition-all duration-200 shadow-sm"
            />
            {errorFullName && (
              <p className="text-[#D92D20] text-[13px] mt-1">{errorFullName}</p>
            )}
          </div>

          {/* E-mail */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-[14px] text-[#A5A5A5] mb-1">
              E-mail
            </label>
            <input
              id="email"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
                if (errorMail) setErrorMail("");
              }}
              type="email"
              placeholder="E-mail Address"
              className="w-full rounded-md border border-[#2B2B3F] bg-[#181926] px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#6454FF] focus:ring-1 focus:ring-[#4A3AFF] transition-all duration-200 shadow-sm"
            />
            {errorMail && (
              <p className="text-[#D92D20] text-[13px] mt-1">{errorMail}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative w-full flex flex-col">
            <label
              htmlFor="password"
              className="text-[14px] text-[#A5A5A5] mb-1"
            >
              Password
            </label>

            <div className="relative flex items-center w-full">
              <input
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorPassword) setErrorPassword("");
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-md border border-[#2B2B3F] bg-[#181926] px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#6454FF] focus:ring-1 focus:ring-[#4A3AFF] transition-all duration-200 shadow-sm"
              />
              <div
                className="absolute right-4  cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image
                  src={showPassword ? "/eye-off.svg" : "/eye.svg"}
                  alt="eyeIcon"
                  width={18}
                  height={13}
                />
              </div>
            </div>

            {errorPassword ? (
              <p className="text-[#D92D20] text-[13px] mt-1">{errorPassword}</p>
            ) : (
              <p className="text-[#737373] text-[13px] mt-1">
                Password must have at least 6 characters and one number.
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative w-full">
            <label
              htmlFor="confirmPassword"
              className="text-[14px] text-[#A5A5A5] mb-1"
            >
              Confirm Password
            </label>
            <div
              className="absolute right-4   top-[40px] cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Image
                src={showConfirmPassword ? "/eye-off.svg" : "/eye.svg"}
                alt="eyeIcon"
                width={18}
                height={13}
              />
            </div>
            <input
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errorConfirmPassword) setErrorConfirmPassword("");
              }}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full rounded-md border border-[#2B2B3F] bg-[#181926] px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#6454FF] focus:ring-1 focus:ring-[#4A3AFF] transition-all duration-200 shadow-sm"
            />
            {errorConfirmPassword && (
              <p className="text-[#D92D20] text-[13px] mt-1">
                {errorConfirmPassword}
              </p>
            )}
          </div>

          {/* Terms */}
          <div
            onClick={() => setRemember(!remember)}
            className="flex items-center cursor-pointer select-none w-full"
          >
            <div
              className={`mr-2 flex items-center justify-center rounded-md h-4 w-4 border border-[#3C3C55] transition-colors ${
                remember ? "bg-[#4A3AFF]" : "bg-[#1F2030]"
              }`}
            >
              {remember && <span className="text-white text-[10px]">✓</span>}
            </div>
            <span className="text-white text-sm">
              I agree to the{" "}
              <span className="text-[#6454FF]">Terms & Privacy</span>
            </span>
          </div>

          {/* Sign Up Button */}
          <button
            disabled={isDisabled}
            type="submit"
            className={`w-full bg-gradient-to-r from-[#4A3AFF] to-[#6454FF] hover:from-[#3a3aff] hover:to-[#5248ff] text-white font-semibold py-3 rounded-md transition-all disabled:from-[#2E2E40] disabled:to-[#2E2E40] shadow-md ${
              isDisabled ? "pointer-events-none opacity-60" : "cursor-pointer"
            }`}
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center justify-between w-full max-w-[360px] gap-4">
            <div className="bg-[#2A2A4A] h-[0.5px] flex-1" />
            <span className="text-[#BFBFBF] text-[14px]">
              Already have an account?
              <Link href="/Login" className="underline text-[#6454FF] ml-2">
                Sign In
              </Link>
            </span>
            <div className="bg-[#2A2A4A] h-[0.5px] flex-1" />
          </div>

          {/* Google Sign In */}
          <div className="flex items-center justify-center gap-3 border border-[#2B2B3F] bg-[#181926] py-[10px] px-[16px] rounded-md shadow-sm cursor-pointer hover:bg-[#1E2030] transition w-full max-w-[200px]">
            <Link href="#" className="flex items-center">
              <img
                src="/googleIcon.png"
                alt="Google Icon"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-white ml-2 font-medium">
                Sign in with Google
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
