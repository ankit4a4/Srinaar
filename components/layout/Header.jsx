"use client";

import { useEffect, useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuClass = `relative cursor-pointer 
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
  after:w-0 after:transition-all after:duration-300 
  hover:after:w-full`;

  return (
    <>
      <header
        className={`z-50 transition-all duration-500 ${
          scrolled
            ? "fixed top-5 left-1/2 -translate-x-1/2 w-full md:max-w-7xl px-4"
            : "absolute top-0 left-1/2 -translate-x-1/2 w-full md:max-w-7xl"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-[#4C0018] rounded-2xl shadow-xl px-8 py-3"
              : "bg-transparent px-6 py-5"
          }`}
        >
          {/* DESKTOP */}

          <div className="hidden md:flex justify-between items-center">
            {/* LEFT */}

            <div className="flex items-center">
              {scrolled ? (
                <nav className="flex items-center gap-8 text-[15px] font-medium text-white">
                  <a
                    className={`${menuClass} after:bg-white`}
                  >
                    Home
                  </a>
                  <a className={`${menuClass} after:bg-white`}>Shop</a>
                  <a className={`${menuClass} after:bg-white`}>Collections</a>
                  <a className={`${menuClass} after:bg-white`}>Our Story</a>
                  <a className={`${menuClass} after:bg-white`}>Contact</a>
                </nav>
              ) : (
                <Image
                  src={logo}
                  alt="logo"
                  className="w-[160px] h-auto object-contain"
                />
              )}
            </div>

            {/* CENTER */}

            <div className="flex justify-center">
              {scrolled ? (
                <Image
                  src={logo2}
                  alt="logo"
                  className="h-[50px] w-auto object-contain"
                />
              ) : (
                <nav className="flex items-center gap-10 text-[15px] font-medium text-white">
                  <a className={`${menuClass} after:bg-[#ffffff]`}>Home</a>
                  <a className={`${menuClass} after:bg-[#ffffff]`}>Shop</a>
                  <a className={`${menuClass} after:bg-[#ffffff]`}>
                    Collections
                  </a>
                  <a className={`${menuClass} after:bg-[#ffffff]`}>
                    Our Story
                  </a>
                  <a className={`${menuClass} after:bg-[#ffffff]`}>Contact</a>
                </nav>
              )}
            </div>

            {/* RIGHT */}

            <div className="flex items-center justify-end gap-6 text-white">
              <div className="hidden lg:flex items-center border border-white/40 rounded-full px-4 py-1.5 w-[240px]">
                <input
                  placeholder="Search"
                  className="bg-transparent outline-none text-sm w-full placeholder-white"
                />
                <FiSearch />
              </div>

              <FiHeart className="text-xl cursor-pointer" />
              <FiUser className="text-xl cursor-pointer" />
              <FiShoppingBag className="text-xl cursor-pointer" />
            </div>
          </div>

          {/* MOBILE TOP BAR */}

          <div className="flex md:hidden items-center justify-between text-white">
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMobileMenu(true)}
            />

            <Image src={logo} alt="logo" className="w-[110px]" />

            <FiShoppingBag className="text-xl" />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 md:hidden z-[1000] transition-opacity duration-500 ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* OVERLAY */}

        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setMobileMenu(false)}
        ></div>

        {/* DRAWER */}

        <div
          className={`absolute top-0 left-0 h-full w-[80%] bg-[#4C0018] transform transition-transform duration-500 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* TOP */}

          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <Image src={logo} alt="logo" className="w-[130px]" />

            <FiX
              className="text-2xl text-white cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          </div>

          {/* MENU */}

          <nav className="flex flex-col gap-6 text-white text-lg font-medium p-6">
            <a>Home</a>
            <a>Shop</a>
            <a>Collections</a>
            <a>Our Story</a>
            <a>Contact</a>
          </nav>
        </div>
      </div>
    </>
  );
}