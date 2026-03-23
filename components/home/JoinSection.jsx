"use client";

import { useState } from "react";
import { HiChevronDown, HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import modelImg from "../../assets/home/collection.png";

export default function JoinSection() {
  const [activeTab, setActiveTab] = useState("login");

  const isLogin = activeTab === "login";

  return (
    <section className="bg-[#f5f1e7] py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2 className="mb-3 font-serif text-4xl text-[#8f0b24] sm:text-5xl md:text-6xl">
          Join the Srinaar
        </h2>

        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="hidden md:block h-[1px] w-40 bg-[#8f0b24]" />
          <span className="text-xl text-[#8f0b24]">•</span>
          <h3 className="font-serif text-2xl text-black sm:text-3xl">
            Get Exclusive Offers
          </h3>
          <span className="text-xl text-[#8f0b24]">•</span>
          <div className="hidden md:block h-[1px] w-40 bg-[#8f0b24]" />
        </div>

        {/* Toggle */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full border border-[#ddd6ca] bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("login")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                isLogin
                  ? "bg-[#980022] text-white"
                  : "text-[#6b6b6b] hover:text-[#980022]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                !isLogin
                  ? "bg-[#980022] text-white"
                  : "text-[#6b6b6b] hover:text-[#980022]"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="mx-auto max-w-[980px] overflow-hidden rounded-[18px] border border-[#e5dfd6] bg-[#f7f7f7] shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Form Side */}
            <div
              className={`bg-[#f7f7f7] transition-all duration-700 ease-out ${
                isLogin ? "md:order-1" : "md:order-2"
              }`}
            >
              <div className="flex min-h-[520px] flex-col items-center justify-center px-6 py-8 sm:px-10">
                <div className="w-full max-w-[320px]">
                  <h3 className="text-center font-serif text-[28px] font-semibold text-[#111]">
                    {isLogin ? "Welcome to Srinaar!" : "Create Your Account"}
                  </h3>

                  <p className="mt-1 text-center text-[14px] text-[#444]">
                    t
                  </p>

                  <div className="mt-3 flex justify-center">
                    <span className="inline-flex rounded-sm bg-[#980022] px-3 py-[4px] text-[10px] uppercase tracking-wide text-white">
                      USE CODE : WELCOME20
                    </span>
                  </div>

                  <p className="mt-6 text-center text-[18px] text-[#1d1d1d]">
                    {isLogin ? "Sign Up with OTP" : "Sign Up with Details"}
                  </p>

                  {isLogin ? (
                    <>
                      <div className="mt-5 flex h-[42px] overflow-hidden rounded-[6px] border border-[#dbdbdb] bg-white">
                        <button
                          type="button"
                          className="flex w-[62px] items-center justify-center gap-1 border-r border-[#dbdbdb] text-[14px] text-[#555]"
                        >
                          <span>🇮🇳</span>
                          <HiChevronDown className="text-[14px]" />
                        </button>

                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="h-full flex-1 bg-white px-3 text-[13px] text-[#333] outline-none"
                        />
                      </div>

                      <button className="mt-4 h-[42px] w-full rounded-[6px] bg-[#980022] text-[14px] font-medium text-white transition hover:bg-[#7f001d]">
                        Request OTP
                      </button>

                      <p className="mt-3 text-center text-[10px] text-[#666]">
                        A 6 Digit OTP will be sent to your phone number
                      </p>
                    </>
                  ) : (
                    <div className="mt-5 space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="h-[42px] w-full rounded-[6px] border border-[#dbdbdb] bg-white px-3 text-[13px] text-[#333] outline-none"
                      />

                      <div className="flex h-[42px] overflow-hidden rounded-[6px] border border-[#dbdbdb] bg-white">
                        <button
                          type="button"
                          className="flex w-[62px] items-center justify-center gap-1 border-r border-[#dbdbdb] text-[14px] text-[#555]"
                        >
                          <span>🇮🇳</span>
                          <HiChevronDown className="text-[14px]" />
                        </button>

                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="h-full flex-1 bg-white px-3 text-[13px] text-[#333] outline-none"
                        />
                      </div>

                      <div className="flex h-[42px] items-center overflow-hidden rounded-[6px] border border-[#dbdbdb] bg-white px-3">
                        <HiOutlineMail className="mr-2 text-[16px] text-[#777]" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="h-full flex-1 bg-white text-[13px] text-[#333] outline-none"
                        />
                      </div>

                      <button className="h-[42px] w-full rounded-[6px] bg-[#980022] text-[14px] font-medium text-white transition hover:bg-[#7f001d]">
                        Create Account
                      </button>
                    </div>
                  )}

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-[1px] flex-1 bg-[#d8d8d8]" />
                    <span className="text-[12px] text-[#555]">
                      {isLogin ? "Or Sign-up with" : "Or continue with"}
                    </span>
                    <div className="h-[1px] flex-1 bg-[#d8d8d8]" />
                  </div>

                  <div className="mt-5 flex justify-center">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9d9d9] text-[#666] transition hover:bg-[#cfcfcf]">
                      {isLogin ? (
                        <span className="h-5 w-5 rounded-full bg-[#cfcfcf]" />
                      ) : (
                        <FaGoogle className="text-[15px]" />
                      )}
                    </button>
                  </div>

                  {!isLogin && (
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button className="flex h-[40px] items-center justify-center gap-2 rounded-[6px] border border-[#d8d8d8] bg-white text-[13px] text-[#444] transition hover:bg-gray-50">
                        <FaFacebookF className="text-[#1877f2]" />
                        Facebook
                      </button>
                      <button className="flex h-[40px] items-center justify-center gap-2 rounded-[6px] border border-[#d8d8d8] bg-white text-[13px] text-[#444] transition hover:bg-gray-50">
                        <FaGoogle className="text-[#db4437]" />
                        Google
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div
              className={`p-2 sm:p-3 transition-all duration-700 ease-out ${
                isLogin ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="relative h-[320px] overflow-hidden rounded-[14px] sm:h-[520px]">
                <img
                  src={modelImg.src}
                  alt="Srinaar"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#980022]/85 via-[#980022]/20 to-black/10" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                  <h3 className="font-serif text-[28px] leading-none sm:text-[34px]">
                    {isLogin ? "Hi. Welcome Back" : "Join the Srinaar"}
                  </h3>

                  <p className="mt-2 text-[12px] text-white/90">
                    {isLogin ? "Sign-in with OTP" : "Create your account now"}
                  </p>

                  <button
                    onClick={() => setActiveTab(isLogin ? "signup" : "login")}
                    className="mt-5 h-[42px] w-full rounded-[8px] bg-white text-[16px] font-medium text-[#1a1a1a] transition hover:bg-[#f3f3f3]"
                  >
                    {isLogin ? "Sign in" : "Sign up"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-[12px] text-[#6f6f6f]">
          By continuing, you agree to our terms and privacy policy.
        </p>
      </div>
    </section>
  );
}