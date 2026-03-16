"use client"
import React, { useState } from "react";
import {
  FiTruck,
  FiRefreshCcw,
  FiAward,
  FiShield,
} from "react-icons/fi";

const productImages = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030469668-8e9f0fd8d3c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030469675-3b6f2a444ef0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030470302-6df7adf2d7f5?auto=format&fit=crop&w=900&q=80",
];

const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["#8f1d22", "#c98f82", "#e2c8bb", "#f3efe8"];

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="min-h-screen bg-[#ece7dd] px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px] border-b border-[#d8d0c4] pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[540px_1fr] lg:gap-10 xl:gap-14">
          {/* LEFT */}
          <div>
            <div className="overflow-hidden rounded-[4px] bg-[#6a3728]">
              <img
                src={selectedImage}
                alt="Crimson Royale Lehenga"
                className="h-[420px] w-full object-cover sm:h-[520px] md:h-[620px]"
              />
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`h-[96px] w-[78px] flex-shrink-0 overflow-hidden rounded-[4px] border sm:h-[105px] sm:w-[86px] ${
                    selectedImage === img
                      ? "border-[#9f2635]"
                      : "border-[#cbbfb0]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`thumbnail-${index}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="pt-1">
            <h1 className="font-serif text-[30px] leading-tight text-[#34241f] md:text-[38px]">
              Crimson Royale Lehenga
            </h1>

            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#a14f49] md:text-[15px]">
              Bridal Lahenga
            </p>

            <div className="mt-4 border-t border-[#d7cec1]" />

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[#2d201b]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#776963] line-through md:text-sm">
                MRP
              </span>
              <span className="text-[30px] font-semibold leading-none md:text-[36px]">
                ₹ 5,999
              </span>
              <span className="text-sm text-[#776963] md:text-[15px]">
                inclusive of all taxes
              </span>
            </div>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-[#6b5a52] md:text-[17px]">
              Handcrafted bridal lehenga with intricate embroidery and a
              timeless silhouette.
            </p>

            {/* SIZE */}
            <div className="mt-6">
              <h3 className="mb-3 text-base font-medium text-[#4a3730] md:text-[17px]">
                Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[58px] border px-4 text-base transition-all md:min-w-[62px] md:text-[17px] ${
                      selectedSize === size
                        ? "h-[46px] border-[#b5162e] bg-[#b5162e] text-white"
                        : "h-[46px] border-[#c8b8aa] bg-transparent text-[#734f49] hover:border-[#b5162e]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="mt-2 text-sm text-[#8a776f] md:text-[15px]">
                Size Guide
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="btn-primary">
                <span>Buy Now</span>
              </button>

              <button className="btn-primary3">
                <span>Add To Cart</span>
              </button>
            </div>

            {/* COLOR */}
            <div className="mt-7">
              <div className="flex items-center gap-4">
                <span className="text-base text-[#4a3730] md:text-[17px]">
                  Color
                </span>

                <div className="flex items-center gap-3">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`h-[18px] w-[18px] rounded-full transition hover:scale-110 md:h-[20px] md:w-[20px] ${
                        selectedColor === color
                          ? "ring-2 ring-[#9f2635] ring-offset-2 ring-offset-[#ece7dd]"
                          : "border border-[#c9bcae]"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-[#d7cec1]" />

            {/* PRODUCT DETAILS */}
            <div className="mt-6">
              <h2 className="font-serif text-[32px] leading-none text-[#8f2d2f] md:text-[38px]">
                Product Details
              </h2>

              <ul className="mt-5 space-y-3 text-base text-[#5f514b] md:text-[17px]">
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] text-[#7b6b65]">✦</span>
                  <span>
                    <span className="font-medium text-[#44322d]">Fabric:</span>{" "}
                    Silk Blend
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-[3px] text-[#7b6b65]">✦</span>
                  <span>
                    <span className="font-medium text-[#44322d]">Work:</span>{" "}
                    Hand Embroidery
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-[3px] text-[#7b6b65]">✦</span>
                  <span>
                    <span className="font-medium text-[#44322d]">Dupatta:</span>{" "}
                    Net With Border
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-[3px] text-[#7b6b65]">✦</span>
                  <span>
                    <span className="font-medium text-[#44322d]">Fit:</span>{" "}
                    True to Size
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-[3px] text-[#7b6b65]">✦</span>
                  <span>
                    <span className="font-medium text-[#44322d]">
                      Occasion:
                    </span>{" "}
                    Wedding / Festive
                  </span>
                </li>
              </ul>

              {/* FEATURES */}
              <div className="mt-8 grid grid-cols-1 gap-y-4 gap-x-6 text-base text-[#665750] sm:grid-cols-2 md:text-[20px]">
                <div className="flex items-center gap-2 ">
                  <FiTruck className="text-[#8f2d2f]" />
                  <span>Free Shipping</span>
                </div>

                <div className="flex items-center gap-2 ">
                  <FiRefreshCcw className="text-[#8f2d2f]" />
                  <span>7 Days Easy Return</span>
                </div>

                <div className="flex items-center gap-2 ">
                  <FiAward className="text-[#8f2d2f]" />
                  <span>Assured Quality</span>
                </div>

                <div className="flex items-center gap-2 ">
                  <FiShield className="text-[#8f2d2f]" />
                  <span>COD Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;