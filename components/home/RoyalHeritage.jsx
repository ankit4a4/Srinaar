"use client";
import img from "@/assets/home/royal.png"

export default function RoyalHeritage() {
  return (
    <section className="relative w-full flex items-center">
      <img src={img.src} alt="Royal Heritage" className="w-full h-[300px] md:h-auto object-cover" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 flex justify-end items-center max-w-7xl mx-auto w-full px-6">
        <div className="text-center w-full md:w-[60%] text-white">
          <h3 className="text-[50px] md:text-[100px] text-[#AC002E] font-serif mb-2">
            Royal
          </h3>
          <h2 className="text-[60px] md:text-[120px] font-serif leading-none mb-6">
            Heritage
          </h2>
          <button className="btn-primary">
            <span> Explore</span>
          </button>
        </div>
      </div>
    </section>
  );
}