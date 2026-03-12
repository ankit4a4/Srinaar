"use client";
import Image from "next/image";
import img from "../../assets/home/collection.png"
import "@/app/globals.css";

const collections = [
    {
        title: "Festive Lehenga",
        image: img,
    },
    {
        title: "Palazzo Suit",
        image: img,
    },
    {
        title: "Straight Suit",
        image: img,
    },
    {
        title: "Anarkali Suit",
        image: img,
    },
];

export default function SignatureCollections() {
    return (
        <section className="bg-[#e7e0d6] py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex items-center justify-center gap-6 mb-12">

                    {/* Left Side */}
                    <div className="flex items-center md:flex hidden relative w-full max-w-[260px]">
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full absolute "></span>
                        <div className="flex-1 h-[1px] bg-[#4C0018] "></div>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full right-3 absolute"></span>
                        <span className="w-3 h-3 bg-[#4C0018] rounded-full"></span>

                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-serif text-gray-600 whitespace-nowrap">
                        Our Signature Collections
                    </h2>

                    {/* Right Side */}
                    <div className="flex items-center md:flex hidden w-full relative max-w-[260px]">
                        <span className="w-3 h-3 bg-[#4C0018] rounded-full"></span>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full left-3 absolute mr-1"></span>
                        <div className="flex-1 h-[1px] bg-[#4C0018] "></div>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full"></span>
                    </div>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-4 gap-6">

                    {collections.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden group shadow-lg"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={300}
                                height={420}
                                className="object-cover w-full h-[420px] group-hover:scale-105 transition duration-500"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/30"></div>

                            {/* content */}
                            <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                                <h3 className="text-2xl font-serif mb-3">
                                    {item.title}
                                </h3>

                                <button className="btn-primary2">
                                    <span>Explore</span>
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}