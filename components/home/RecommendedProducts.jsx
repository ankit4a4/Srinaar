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
                            {/* Image Box */}
                            <div className="relative overflow-hidden ">
                                <div className="relative bg-red-400 h-[240px] overflow-hidden sm:h-[300px] lg:h-[335px]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.08]"
                                    />

                                    {/* Wishlist Icon */}
                                    <button
                                        type="button"
                                        onClick={(e) => e.preventDefault()}
                                        className="absolute bottom-[10px] right-[10px]  flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#7f1026] shadow-lg opacity-0 transition-all duration-500  group-hover:opacity-100 hover:scale-110"
                                    >
                                        <FiHeart className="text-[18px]" />
                                    </button>
                                </div>
                            </div>

                            {/* Product Content */}
                            <div className="pt-3">
                                <h3 className="font-serif text-[17px] leading-[1.2] text-[#1e1e1e]">
                                    Red Chanderi Ruby Radiance
                                    Lehenga
                                </h3>

                                <p className="mt-1 text-[11px] tracking-wide text-[#8d8d8d]">
                                    {product.category}
                                </p>

                                <div className="mt-2 flex flex-wrap items-center gap-2">
                                    <span className="text-[14px] font-medium text-[#1f1f1f]">
                                        ₹
                                    </span>

                                    <span className="text-[30px] font-semibold leading-none text-[#1f1f1f]">
                                        {product.price.toLocaleString("en-IN")}
                                    </span>

                                    <span className="ml-1 text-[11px] uppercase tracking-wide text-[#8a8a8a]">
                                        MRP
                                    </span>

                                    <span className="text-[11px] text-[#8a8a8a] line-through">
                                        ₹ {product.oldPrice.toLocaleString("en-IN")}
                                    </span>

                                    <span className="ml-2 rounded-full bg-[#9b1130] px-3 py-[4px] text-sm font-semibold text-white">
                                        {product.discount}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}