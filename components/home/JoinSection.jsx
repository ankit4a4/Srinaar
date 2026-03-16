import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function JoinSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl text-red-800 font-serif mb-6">
          Join the Srinaar
        </h2>

        <div className="flex items-center justify-center gap-6 mb-12">
          {/* Left */}
          <div className="hidden md:flex items-center relative w-full max-w-[260px]">
            <span className="w-2 h-2 bg-[#4C0018] rounded-full absolute left-0"></span>
            <div className="flex-1 h-[1px] bg-[#4C0018]"></div>
            <span className="w-2 h-2 bg-[#4C0018] rounded-full absolute right-3"></span>
            <span className="w-3 h-3 bg-[#4C0018] rounded-full"></span>
          </div>

          <h3 className="text-lg font-serif text-gray-600 whitespace-nowrap">
            Get Exclusive Offers
          </h3>

          {/* Right */}
          <div className="hidden md:flex items-center relative w-full max-w-[260px]">
            <span className="w-3 h-3 bg-[#4C0018] rounded-full"></span>
            <span className="w-2 h-2 bg-[#4C0018] rounded-full absolute left-3"></span>
            <div className="flex-1 h-[1px] bg-[#4C0018]"></div>
            <span className="w-2 h-2 bg-[#4C0018] rounded-full absolute right-0"></span>
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-[920px] mx-auto rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] rounded-tl-[14px] overflow-hidden bg-white shadow-none border border-[#e7e2db]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
            {/* Left Side */}
            <div className="relative min-h-[360px] md:min-h-[540px]">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
                alt="Welcome to Srinaar"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>

              <div className="absolute left-6 bottom-5 text-left text-white">
                <h3 className="font-serif text-[24px] sm:text-[28px] leading-[1.05]">
                  Welcome to Srinaar! Get 20% Off on your
                  first order.
                </h3>
                  

                <div className="mt-4 inline-flex items-center bg-[#7c001c] px-3 py-[6px] text-[11px] uppercase tracking-[0.04em]">
                  Use Code : WELCOME20
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-[#f8f8f8]">
              {/* Top Logo Area */}
              <div className="h-[112px] sm:h-[122px] bg-[#980022] flex items-center justify-center">
                <div className="text-white font-serif text-[62px] leading-none">
                  S
                </div>
              </div>

              {/* Form */}
              <div className="px-6 sm:px-10 pt-8 pb-7">
                <h3 className="text-[18px] sm:text-[19px] font-medium text-[#222]">
                  Login With OTP
                </h3>

                <p className="mt-1 text-[11px] text-[#7a7a7a]">
                  Please enter your 10 digit mobile number
                </p>

                {/* Mobile Input */}
                <div className="mt-4 flex items-center h-[36px] border border-[#d7d7d7] rounded-[4px] overflow-hidden bg-white">
                  <div className="w-[44px] h-full border-r border-[#d7d7d7] flex items-center justify-center text-[16px]">
                    🇮🇳
                  </div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="flex-1 h-full px-3 text-[12px] text-[#333] outline-none bg-white"
                  />
                </div>

                {/* OTP Button */}
                <button className="mt-4 w-full h-[36px] rounded-[4px] bg-[#980022] text-white text-[13px] font-medium hover:bg-[#7e001d] transition">
                  Request OTP
                </button>

                <p className="mt-3 text-[10px] text-[#777]">
                  A 6 digit OTP will be sent to your phone number
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 mt-5">
                  <div className="h-[1px] flex-1 bg-[#e2e2e2]"></div>
                  <span className="text-[12px] text-[#666] whitespace-nowrap">
                    Or Sign-In with
                  </span>
                  <div className="h-[1px] flex-1 bg-[#e2e2e2]"></div>
                </div>

                {/* Email Button */}
                <button className="mt-4 w-full h-[38px] rounded-[4px] border border-[#d8d8d8] bg-white text-[#555] text-[13px] flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                  <HiOutlineMail className="text-[15px]" />
                  Email
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 mt-5">
                  <div className="h-[1px] flex-1 bg-[#e2e2e2]"></div>
                  <span className="text-[12px] text-[#666] whitespace-nowrap">
                    Or continue with
                  </span>
                  <div className="h-[1px] flex-1 bg-[#e2e2e2]"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button className="h-[28px] rounded-[2px] bg-[#3b5998] text-white text-[10px] flex items-center justify-center gap-2 hover:opacity-95 transition">
                    <FaFacebookF className="text-[10px]" />
                    Facebook
                  </button>

                  <button className="h-[28px] rounded-[2px] bg-[#4285f4] text-white text-[10px] flex items-center justify-center gap-2 hover:opacity-95 transition">
                    <FaGoogle className="text-[10px]" />
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}