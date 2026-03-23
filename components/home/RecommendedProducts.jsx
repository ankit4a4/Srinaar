"use client";

import Link from "next/link";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import product1 from "../../assets/home/collection.png";

const products = [
    {
        id: 1,
        name: "Red Chanderi Ruby Radiance Lehenga",
        category: "Festive Lehenga",
        image: product1,
        price: 2799,
        oldPrice: 6999,
        discount: "60% OFF",
    },
    {
        id: 2,
        name: "Red Chanderi Ruby Radiance Lehenga",
        category: "Festive Lehenga",
        image: product1,
        price: 2799,
        oldPrice: 6999,
        discount: "60% OFF",
    },
    {
        id: 3,
        name: "Red Chanderi Ruby Radiance Lehenga",
        category: "Festive Lehenga",
        image: product1,
        price: 2799,
        oldPrice: 6999,
        discount: "60% OFF",
    },
    {
        id: 4,
        name: "Red Chanderi Ruby Radiance Lehenga",
        category: "Festive Lehenga",
        image: product1,
        price: 2799,
        oldPrice: 6999,
        discount: "60% OFF",
    },
];

export default function RecommendedProducts() {
    return (
        <section className=" py-14 md:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                 <div className="flex items-center justify-center gap-6 mb-12">

                    {/* Left Side */}
                    <div className="flex  md:flex hidden items-center relative w-full max-w-[260px]">
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full absolute "></span>
                        <div className="flex-1 h-[1px] bg-[#4C0018] "></div>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full right-3 absolute"></span>
                        <span className="w-3 h-3 bg-[#4C0018] rounded-full"></span>

                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-serif text-gray-600 whitespace-nowrap">
                        Recommended For You
                    </h2>

                    {/* Right Side */}
                    <div className="flex items-center  md:flex hidden w-full relative max-w-[260px]">
                        <span className="w-3 h-3 bg-[#4C0018] rounded-full"></span>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full left-3 absolute mr-1"></span>
                        <div className="flex-1 h-[1px] bg-[#4C0018] "></div>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full"></span>
                    </div>

                </div>

                {/* Products Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/singleproduct/${product.id}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-[20px]">
                {/* Image Wrapper */}
                <div className="relative h-[240px] overflow-hidden rounded-[20px] bg-[#f6f1ed] sm:h-[300px] lg:h-[335px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

                

                  {/* Wishlist Icon - Shows on Hover with theme color */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Add your wishlist logic here
                    }}
                    className="absolute bottom-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#7f1026] shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 hover:bg-[#7f1026] hover:text-white sm:h-11 sm:w-11"
                    style={{
                      position: "absolute",
                      overflow: "visible",
                      isolation: "auto",
                    }}
                  >
                    <FiHeart className="text-[18px]" />
                  </button>
                </div>

                {/* Content */}
                <div className="px-1 pt-4">
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#9a9a9a]">
                    {product.category}
                  </p>

                  <h3 className="line-clamp-2 min-h-[48px] font-serif text-[16px] leading-[1.4] text-[#1f1f1f] transition-colors duration-300 group-hover:text-[#7f1026] sm:text-[18px]">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-[22px] font-semibold leading-none text-[#1f1f1f] sm:text-[26px]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="pb-[2px] text-[13px] text-[#9a9a9a] line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                     <span className=" rounded-full bg-[#7f1026] px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white shadow-md sm:text-[11px]">
                    {product.discount}
                  </span>
                  </div>

                 
                </div>
              </div>
            </Link>
          ))}
        </div>
            </div>
        </section>
    );
}