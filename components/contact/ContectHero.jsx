"use client";

import Image from "next/image";
import vaseImg from "../../assets/home/collection.png"; // apni vase image yaha lagani hai

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#efebeb] overflow-hidden">
      <div className="relative max-w-7xl mx-auto min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] px-6 sm:px-10 lg:px-16">
        {/* Left Content */}
        <div className="pt-16 sm:pt-20 lg:pt-24 pl-0 sm:pl-4 lg:pl-8 max-w-[420px] relative z-20">
          <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] leading-none font-serif text-[#2e1f1f] mb-4">
            Contact Us
          </h1>

          <p className="text-[11px] sm:text-xs leading-5 text-[#7d7272] max-w-[260px] mb-12">
            We answer your inquiries with care and provide thoughtful support
            for every question you share with us.
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-[#2e1f1f]">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.18em] text-[#7c7070] mb-2">
                Address
              </h3>
              <p className="text-[11px] leading-5 text-[#4a3c3c]">
                540, New Street
                <br />
                New Jersey, USA
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.18em] text-[#7c7070] mb-2">
                Phone
              </h3>
              <p className="text-[11px] leading-5 text-[#4a3c3c]">
                +00 123 456 678
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.18em] text-[#7c7070] mb-2">
                Email
              </h3>
              <p className="text-[11px] leading-5 text-[#4a3c3c] break-all">
                hello@srinaar.com
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.18em] text-[#7c7070] mb-2">
                Follow us
              </h3>

              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 border border-[#948787] text-[10px] text-[#5e5252] flex items-center justify-center">
                  f
                </span>
                <span className="w-5 h-5 border border-[#948787] text-[10px] text-[#5e5252] flex items-center justify-center">
                  i
                </span>
                <span className="w-5 h-5 border border-[#948787] text-[10px] text-[#5e5252] flex items-center justify-center">
                  p
                </span>
                <span className="w-5 h-5 border border-[#948787] text-[10px] text-[#5e5252] flex items-center justify-center">
                  x
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom white surface */}
        <div className="absolute left-0 bottom-0 w-full h-[110px] sm:h-[125px] bg-white z-0" />

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