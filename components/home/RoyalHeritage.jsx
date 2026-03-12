"use client";
import img from "@/assets/home/royal.png"

export default function RoyalHeritage() {
  return (
    <section
      className="relative h-[640px] flex items-center"
      style={{
        backgroundImage: `url('${img.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto w-full px-6">
        
        {/* Right Content */}
        <div className="flex justify-end">
          <div className="text-center md:w-[60%] text-white ">

            <h3 className="md:text-[100px] text-[#AC002E] font-serif mb-2">
              Royal
            </h3>

            <h2 className="text-[120px] font-serif leading-none mb-6">
              Heritage
            </h2>

            <button className="btn-primary">
             <span> Explore</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}