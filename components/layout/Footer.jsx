"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiThreadsLogoLight } from "react-icons/pi";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#990027] to-[#330113] py-20 text-white">
      
      <div className="max-w-4xl mx-auto text-center">

        {/* Logo */}
        <div className="flex justify-center ">
          <Image
            src={logo}
            alt="Srinaar"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* Follow */}
        <p className="text-lg md:text-xl mb-8 tracking-wide">
          Follow Us
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-10 text-2xl md:text-3xl">

          <FaInstagram className="cursor-pointer hover:scale-125 transition duration-300" />

          <FaWhatsapp className="cursor-pointer hover:scale-125 transition duration-300" />

          <FaLinkedinIn className="cursor-pointer hover:scale-125 transition duration-300" />

          <FaXTwitter className="cursor-pointer hover:scale-125 transition duration-300" />

          <PiThreadsLogoLight className="cursor-pointer hover:scale-125 transition duration-300" />

        </div>

      </div>

    </footer>
  );
}