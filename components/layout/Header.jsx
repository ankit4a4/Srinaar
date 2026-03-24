"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import Image from "next/image";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  {
    name: "Collections",
    key: "collections",
    dropdown: [
      { name: "Festive Lehenga", link: "/collection/festive-lehenga" },
      { name: "Palazzo Suit", link: "/collection/palazzo-suit" },
      { name: "Straight Suit", link: "/collection/straight-suit" },
      { name: "Anarkali Suit", link: "/collection/anarkali-suit" },
    ],
  },
  { name: "Our Story", link: "/our-story" },
  { name: "Contact", link: "/contact" },
];

const profileOptions = [
  { name: "Login", link: "/login" },
  { name: "Signup", link: "/signup" },
];

// Icon links array - sab links yahan se manage honge
const iconLinks = {
  wishlist: "/wishlist",
  cart: "/cart",
};

const menuClass =
  "relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full";

function DesktopDropdown({
  item,
  openDropdown,
  setOpenDropdown,
  textColor = "text-white",
  underlineColor = "after:bg-white",
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(item.key)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className={`${menuClass} ${underlineColor} flex items-center gap-1 ${textColor}`}
      >
        {item.name}
      </button>

      <div
        className={`absolute top-full left-0 pt-4 transition-all duration-300 ${
          openDropdown === item.key
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-3"
        }`}
      >
        <div className="min-w-[260px] rounded-2xl border border-black/10 bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
          {item.dropdown.map((dropItem, i) => (
            <Link
              key={i}
              href={dropItem.link}
              className="block rounded-xl px-4 py-3 text-[15px] font-medium text-[#111] transition-all duration-300 hover:bg-[#f6f6f6] hover:pl-5"
            >
              {dropItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileDropdown({
  profileOpen,
  setProfileOpen,
  iconColor = "text-white",
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setProfileOpen(true)}
      onMouseLeave={() => setProfileOpen(false)}
    >
      <Link href="/profile">
        <button className="flex items-center gap-1 cursor-pointer">
          <FiUser className={`text-xl ${iconColor}`} />
        </button>
      </Link>

      {/* Dropdown removed - ab sirf link hai */}
    </div>
  );
}

function DesktopNav({
  openDropdown,
  setOpenDropdown,
  profileOpen,
  setProfileOpen,
  isTransparentState,
}) {
  return (
    <div className="hidden md:flex items-center justify-between gap-6">
      {/* LEFT */}
      <div className="flex items-center gap-7 text-[15px] font-medium text-white">
        {menuItems.map((item, index) =>
          item.dropdown ? (
            <DesktopDropdown
              key={index}
              item={item}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              textColor="text-white"
              underlineColor="after:bg-white"
            />
          ) : (
            <Link
              key={index}
              href={item.link}
              className={`${menuClass} after:bg-white text-white`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      {/* CENTER LOGO */}
      <div className="shrink-0 flex justify-center">
        <Link href="/">
          <Image
            src={isTransparentState ? logo : logo2}
            alt="logo"
            className={
              isTransparentState
                ? "w-[145px] h-auto object-contain"
                : "h-[50px] w-auto object-contain"
            }
            priority
          />
        </Link>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-end gap-5 text-white">
        <div className="hidden lg:flex items-center border border-white/40 rounded-full px-4 py-1.5 w-[220px] transition-all duration-300 group focus-within:bg-white">
          <input
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full text-white placeholder-white focus:text-black focus:placeholder-gray-500"
          />
          <FiSearch className="ml-2 text-white transition-colors duration-300 group-focus-within:text-black" />
        </div>

        <Link href={iconLinks.wishlist}>
          <button className="group rounded-full border border-transparent p-2 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_0_0_3px_rgba(255,255,255,0.15)]">
            <FiHeart className="text-xl text-white transition-colors duration-300 group-hover:text-[#990027]" />
          </button>
        </Link>

        <ProfileDropdown
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
          iconColor="text-white"
        />

        <Link href={iconLinks.cart}>
          <FiShoppingBag className="text-xl cursor-pointer text-white" />
        </Link>
      </div>
    </div>
  );
}

function MobileTopBar({ setMobileMenu, isTransparentState }) {
  return (
    <div className="flex md:hidden items-center justify-between text-white">
      <FiMenu
        className="text-2xl cursor-pointer"
        onClick={() => setMobileMenu(true)}
      />

      <Link href="/">
        <Image
          src={isTransparentState ? logo : logo2}
          alt="logo"
          className="w-full h-[50px] object-contain"
          priority
        />
      </Link>

      <Link href={iconLinks.cart}>
        <FiShoppingBag className="text-xl" />
      </Link>
    </div>
  );
}

function HeaderContent({
  openDropdown,
  setOpenDropdown,
  profileOpen,
  setProfileOpen,
  setMobileMenu,
  isTransparentState,
}) {
  return (
    <div className="px-4 lg:px-6">
      <DesktopNav
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
        isTransparentState={isTransparentState}
      />

      <MobileTopBar
        setMobileMenu={setMobileMenu}
        isTransparentState={isTransparentState}
      />
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isTransparentState = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NORMAL HEADER */}
      <header
        className={
          isHomePage
            ? "absolute top-0 left-0 w-full z-40"
            : "relative w-full z-40"
        }
      >
        <div
          className={`${
            isTransparentState
              ? "bg-transparent py-5"
              : "bg-gradient-to-b from-[#990027] to-[#590c19] py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <HeaderContent
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              profileOpen={profileOpen}
              setProfileOpen={setProfileOpen}
              setMobileMenu={setMobileMenu}
              isTransparentState={isTransparentState}
            />
          </div>
        </div>
      </header>

      {/* SCROLL HEADER */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div
          className={`px-4 pt-4 transition-all duration-500 ease-out ${
            scrolled
              ? "translate-y-0 opacity-100"
              : "-translate-y-[140%] opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto pointer-events-auto rounded-2xl bg-gradient-to-b from-[#990027] to-[#590c19] shadow-[0_10px_40px_rgba(0,0,0,0.20)] py-3">
            <HeaderContent
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              profileOpen={profileOpen}
              setProfileOpen={setProfileOpen}
              setMobileMenu={setMobileMenu}
              isTransparentState={false}
            />
          </div>
        </div>
      </div>

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
        />

        {/* DRAWER */}
        <div
          className={`absolute top-0 left-0 h-full w-[80%] bg-[#4C0018] transform transition-transform duration-500 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* TOP */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-[130px] h-auto" />
            </Link>

            <FiX
              className="text-2xl text-white cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          </div>

          {/* MENU */}
          <nav className="flex flex-col text-white text-lg font-medium p-6">
            {menuItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <div key={index} className="border-b border-white/10">
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(
                          mobileOpenDropdown === item.key ? null : item.key
                        )
                      }
                      className="w-full flex items-center justify-between py-3"
                    >
                      <span>{item.name}</span>
                      {mobileOpenDropdown === item.key ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </button>

                    <div
                      className={`grid transition-all duration-300 overflow-hidden ${
                        mobileOpenDropdown === item.key
                          ? "grid-rows-[1fr] pb-3"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-3 mt-1 flex flex-col gap-2 rounded-xl bg-white/5 p-3">
                          {item.dropdown.map((dropItem, i) => (
                            <Link
                              key={i}
                              href={dropItem.link}
                              onClick={() => {
                                setMobileMenu(false);
                                setMobileOpenDropdown(null);
                              }}
                              className="rounded-lg px-3 py-2 text-[15px] text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.link}
                  className="py-3 border-b border-white/10"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* MOBILE PROFILE - Ab sirf link hai dropdown nahi */}
            <Link
              href="/profile"
              className="py-3 border-b border-white/10 flex items-center justify-between"
              onClick={() => setMobileMenu(false)}
            >
              <span>Profile</span>
              <FiUser className="text-lg" />
            </Link>

            {/* MOBILE WISHLIST LINK */}
            <Link
              href={iconLinks.wishlist}
              className="py-3 border-b border-white/10 flex items-center justify-between"
              onClick={() => setMobileMenu(false)}
            >
              <span>Wishlist</span>
              <FiHeart className="text-lg" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}