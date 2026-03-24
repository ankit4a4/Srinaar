"use client";

import Image from "next/image";
import vaseImg from "../../assets/home/collection.png"; // apni vase image yaha lagani hai

export default function ContactHero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#990027] to-[#330113] overflow-hidden">
      <div className="relative max-w-7xl mx-auto min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] px-6 sm:px-10 lg:px-16">
        {/* Left Content */}
        <div className="pt-16 sm:pt-20 lg:pt-24 pl-0 sm:pl-4 lg:pl-8 max-w-[520px] relative z-20">
          <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] leading-tight font-serif text-white mb-6">
            Contact Us
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-white/90 max-w-[380px] mb-12">
            We answer your inquiries with care and provide thoughtful support
            for every question you share with us.
          </p>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-white">
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2 font-medium">
                Address
              </h3>
              <p className="text-base leading-6 text-white/90">
                540, New Street
                <br />
                New Jersey, USA
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2 font-medium">
                Phone
              </h3>
              <p className="text-base leading-6 text-white/90">
                +00 123 456 678
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2 font-medium">
                Email
              </h3>
              <p className="text-base leading-6 text-white/90 break-all">
                hello@srinaar.com
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2 font-medium">
                Follow us
              </h3>

              <div className="flex items-center gap-2">
                <span className="w-8 h-8 border border-white/40 text-white/80 text-sm flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-colors cursor-pointer">
                  f
                </span>
                <span className="w-8 h-8 border border-white/40 text-white/80 text-sm flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-colors cursor-pointer">
                  i
                </span>
                <span className="w-8 h-8 border border-white/40 text-white/80 text-sm flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-colors cursor-pointer">
                  p
                </span>
                <span className="w-8 h-8 border border-white/40 text-white/80 text-sm flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-colors cursor-pointer">
                  x
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom white surface - removed as gradient replaces it */}
        
        {/* Decorative image bottom absolute */}
        <div className="absolute bottom-0 right-6 sm:right-10 lg:right-16 z-10">
          <Image
            src={vaseImg}
            alt="Decorative vase"
            width={340}
            height={320}
            priority
            className="w-[180px] sm:w-[240px] lg:w-[320px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}