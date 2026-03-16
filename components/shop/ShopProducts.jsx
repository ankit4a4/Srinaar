"use client";

import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Red Chanderi Ruby Radiance Lehenga",
        category: "Festive Lehenga",
        image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 4,199",
        oldPrice: "₹ 6,999",
        rating: "4.8",
        colors: ["#7a0f1d", "#2b0f12", "#caa27a"],
    },
    {
        id: 2,
        name: "Maroon Velvet Bridal Lehenga",
        category: "Bridal Collection",
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 4,599",
        oldPrice: "₹ 7,499",
        rating: "4.8",
        colors: ["#5c0d16", "#a32537", "#111"],
    },
    {
        id: 3,
        name: "Autumn Royal Wine Lehenga",
        category: "Wedding Wear",
        image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 4,899",
        oldPrice: "₹ 7,999",
        rating: "4.8",
        colors: ["#5b2a22", "#8d2235"],
    },
    {
        id: 4,
        name: "Polka Ruby Designer Lehenga",
        category: "Party Wear",
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 3,999",
        oldPrice: "₹ 6,599",
        rating: "4.9",
        colors: ["#111", "#a3172d"],
    },
    {
        id: 5,
        name: "Soft Brown Wedding Lehenga",
        category: "Festive Lehenga",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 4,299",
        oldPrice: "₹ 7,199",
        rating: "4.7",
        colors: ["#9c7a60", "#e8ddd2"],
    },
    {
        id: 6,
        name: "Cream White Premium Lehenga",
        category: "Wedding Wear",
        image:
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 5,199",
        oldPrice: "₹ 8,499",
        rating: "5.0",
        colors: ["#f2efe9", "#ddd7ce"],
    },
    {
        id: 7,
        name: "Soft Yellow Festival Lehenga",
        category: "Traditional Wear",
        image:
            "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 3,899",
        oldPrice: "₹ 6,499",
        rating: "4.8",
        colors: ["#cb9457", "#f4ddbf"],
    },
    {
        id: 8,
        name: "Classy White Designer Lehenga",
        category: "Party Wear",
        image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 4,499",
        oldPrice: "₹ 7,299",
        rating: "4.8",
        colors: ["#f5f5f5", "#c5a789"],
    },
    {
        id: 9,
        name: "Minimal Office Ethnic Set",
        category: "Festive Lehenga",
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
        discount: "40% OFF",
        price: "₹ 4,099",
        oldPrice: "₹ 6,899",
        rating: "4.9",
        colors: ["#efefef", "#d4b29d"],
    },
];

const colors = [
    { name: "", value: "#111" },
    { name: "", value: "#6b4b3e" },
    { name: "", value: "#888" },
    { name: "", value: "#c93b3b" },
    { name: "", value: "#6d8c57" },
    { name: "", value: "#4c70c1" },
    { name: "", value: "#ef8fbe" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

export default function ShopProducts() {
    return (
        <section className="bg-white min-h-screen text-[#222]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
                    {/* LEFT FILTER */}
                    <aside className="lg:sticky lg:top-24 h-fit">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                            <h3 className="text-[15px] font-medium">Filter Options</h3>
                        </div>

                        {/* CATEGORY */}
                        <div className="mb-8">
                            <h4 className="text-[14px] font-semibold mb-4">Category</h4>
                            <div className="space-y-3 text-[13px] text-gray-600">
                                {["All", "Women", "Fashion", "Jackets", "Tops", "Dresses"].map(
                                    (item, index) => (
                                        <label
                                            key={index}
                                            className="flex items-center gap-3 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                className="accent-[#8b5e3c] h-3.5 w-3.5"
                                                defaultChecked={item === "All"}
                                            />
                                            <span>{item}</span>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>

                        {/* PRICE */}
                        <div className="mb-8">
                            <h4 className="text-[14px] font-semibold mb-4">Price</h4>
                            <div className="px-1">
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    defaultValue="300"
                                    className="w-full accent-[#8b5e3c]"
                                />
                                <div className="flex items-center justify-between text-[12px] text-gray-500 mt-2">
                                    <span>₹999</span>
                                    <span>₹9,999</span>
                                </div>
                            </div>
                        </div>

                        {/* COLOR */}
                        <div className="mb-8">
                            <h4 className="text-[14px] font-semibold mb-4">Color</h4>
                            <div className="flex items-center flex-wrap gap-3 text-[13px]">
                                {colors.map((color, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center justify-center cursor-pointer"
                                    >
                                        <span
                                            className="w-5 h-5 rounded-full border border-gray-300"
                                            style={{ backgroundColor: color.value }}
                                        ></span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* SIZE */}
                        <div>
                            <h4 className="text-[14px] font-semibold mb-4">Size</h4>
                            <div className="space-y-3 text-[13px] text-gray-600">
                                {sizes.map((size, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-3 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            className="accent-[#8b5e3c] h-3.5 w-3.5"
                                        />
                                        <span>{size}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <div>
                        {/* TOP BAR */}
                        <div className="flex gap-4 mb-8">
                            <div className="flex w-full items-center justify-center gap-2 text-[12px]">
                                <h1 className="text-[#4E0918] text-4xl text-center">
                                    Showing 1-9 of 54 results
                                </h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                            {products.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/singleproduct/${product.id}`}
                                    className="group block"
                                >
                                    <div className="bg-white">

                                        {/* IMAGE */}
                                        <div className="relative aspect-[3/4] overflow-hidden bg-[#f7f2ed]">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-[1.03] transition duration-500"
                                            />
                                        </div>

                                        {/* CONTENT */}
                                        <div className="pt-3">

                                            {/* TITLE */}
                                            <h3 className="text-[13px] leading-[1.35] font-medium text-[#2a1d18]">
                                                {product.name}
                                            </h3>

                                            {/* CATEGORY */}
                                            <p className="mt-1 text-[11px] text-[#9b9189]">
                                                {product.category}
                                            </p>

                                            {/* PRICE ROW */}
                                            <div className="mt-2 bg-amber-400 flex items-center gap-2 flex-wrap">

                                                <span className="text-[18px] font-medium text-[#1b1b1b]">
                                                    {product.price}
                                                </span>

                                                <span className="text-[11px] text-[#9a9a9a] line-through">
                                                    MRP {product.oldPrice}
                                                </span>

                                                {/* DISCOUNT */}
                                               <span
                                                style={{
                                                    backgroundColor : "#8c0f24"
                                                }}
                                               className="ml-1 inline-flex items-center border border-2  text-white text-[9px] font-semibold px-2 py-[3px] rounded-full">
  {product.discount}
</span>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}