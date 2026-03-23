"use client";

export default function TopOfferBar() {
  const offers = [
    "Get 20% OFF on your first order",
    "Get 20% OFF on your first order",
    "Get 20% OFF on your first order",
    "Get 20% OFF on your first order",
    "Get 20% OFF on your first order",
  ];

  const loop = [...offers, ...offers];

  return (
    <>
      <div className="w-full overflow-hidden bg-gradient-to-r from-[#8b0020] via-[#c4002b] to-[#8b0020]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((text, i) => (
            <div
              key={i}
              className="flex items-center shrink-0 whitespace-nowrap py-[6px] text-[12px] sm:text-[13px] font-medium text-white tracking-wide"
            >
              <span className="mx-6">{text}</span>
              <span className="text-white">*</span>
            </div>
          ))}

          {loop.map((text, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center shrink-0 whitespace-nowrap py-[6px] text-[12px] sm:text-[13px] font-medium text-white tracking-wide"
            >
              <span className="mx-6">{text}</span>
              <span className="text-white">*</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Animation SAME FILE me */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </>
  );
}