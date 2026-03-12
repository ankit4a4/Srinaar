"use client";

import { RiStarSmileLine } from "react-icons/ri";
import { RiTruckLine } from "react-icons/ri";
import { RiRefreshLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function PremiumFeatures() {
  const features = [
    {
      icon: <RiStarSmileLine size={26} />,
      title: "Premium Quality",
    },
    {
      icon: <RiTruckLine size={26} />,
      title: "Pan India Delivery",
    },
    {
      icon: <RiRefreshLine size={26} />,
      title: "Easy Return",
    },
    {
      icon: <RiSecurePaymentLine size={26} />,
      title: "Secure Checkout",
    },
  ];

  return (
    <section className="bg-[#fff] py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-gradient-to-r from-red-800 to-[#4C0018] rounded-2xl px-10 py-6 flex justify-between items-center">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white flex-1 justify-center relative"
            >
              {/* Icon */}
              <div className="text-white text-2xl">
                {item.icon}
              </div>

              {/* Text */}
              <span className="text-md font-medium">
                {item.title}
              </span>

              {/* Divider */}
              {index !== features.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-white/50"></div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}