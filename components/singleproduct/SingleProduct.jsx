"use client";
import React, { useState } from "react";
import {
  FiTruck,
  FiRefreshCcw,
  FiAward,
  FiShield,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const productData = {
  title: "Crimson Royale Lehenga",
  category: "Bridal Lahenga",
  price: 5999,
  description:
    "Handcrafted bridal lehenga with intricate embroidery and a timeless silhouette.",
  images: [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1610030469668-8e9f0fd8d3c4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1610030469675-3b6f2a444ef0?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1610030470302-6df7adf2d7f5?auto=format&fit=crop&w=900&q=80",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["#8f1d22", "#c98f82", "#e2c8bb", "#f3efe8"],
  sizeGuide: [
    {
      size: "32",
      standardSize: "S",
      bust: "32-33",
      waist: "28-29",
      hip: "36-37",
      shoulder: "14",
      length: "44",
    },
    {
      size: "34",
      standardSize: "M",
      bust: "34-35",
      waist: "30-31",
      hip: "38-39",
      shoulder: "14.25",
      length: "44",
    },
    {
      size: "36",
      standardSize: "L",
      bust: "36-37",
      waist: "32-33",
      hip: "40-41",
      shoulder: "14.75",
      length: "44",
    },
    {
      size: "38",
      standardSize: "XL",
      bust: "38-39",
      waist: "34-35",
      hip: "42-43",
      shoulder: "15.25",
      length: "44",
    },
    {
      size: "40",
      standardSize: "2XL",
      bust: "40-41",
      waist: "36-38",
      hip: "44-45",
      shoulder: "15.75",
      length: "44",
    },
    {
      size: "42",
      standardSize: "3XL",
      bust: "42-43",
      waist: "40-41",
      hip: "47-48",
      shoulder: "16.25",
      length: "44",
    },
  ],
  details: [
    { label: "Fabric", value: "Silk Blend" },
    { label: "Work", value: "Hand Embroidery" },
    { label: "Dupatta", value: "Net With Border" },
    { label: "Fit", value: "True to Size" },
    { label: "Occasion", value: "Wedding / Festive" },
  ],
  features: [
    { icon: FiTruck, text: "Free Shipping" },
    { icon: FiRefreshCcw, text: "7 Days Easy Return" },
    { icon: FiAward, text: "Assured Quality" },
    { icon: FiShield, text: "COD Available" },
  ],
};

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [selectedGuideSize, setSelectedGuideSize] = useState("32");

  return (
    <div className="min-h-screen bg-[#ece7dd] px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px] border-b border-[#d8d0c4] pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[540px_1fr] lg:gap-10 xl:gap-14">
          {/* LEFT */}
          <div>
            <div className="overflow-hidden rounded-[4px] bg-[#6a3728]">
              <img
                src={selectedImage}
                alt={productData.title}
                className="h-[420px] w-full object-cover sm:h-[520px] md:h-[620px]"
              />
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {productData.images.map((img, index) => (
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
              {productData.title}
            </h1>

            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#a14f49] md:text-[15px]">
              {productData.category}
            </p>

            <div className="mt-4 border-t border-[#d7cec1]" />

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[#2d201b]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#776963] line-through md:text-sm">
                MRP
              </span>
              <span className="text-[30px] font-semibold leading-none md:text-[36px]">
                ₹ {productData.price.toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-[#776963] md:text-[15px]">
                inclusive of all taxes
              </span>
            </div>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-[#6b5a52] md:text-[17px]">
              {productData.description}
            </p>

            {/* SIZE */}
            <div className="mt-6">
              <h3 className="mb-3 text-base font-medium text-[#4a3730] md:text-[17px]">
                Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {productData.sizes.map((size) => (
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

              <button
                type="button"
                onClick={() => setShowSizeGuide(!showSizeGuide)}
                className="mt-2 flex items-center gap-1 text-sm text-[#8a776f] md:text-[15px]"
              >
                <span>Size Guide</span>
                {showSizeGuide ? (
                  <FiChevronUp className="text-[14px]" />
                ) : (
                  <FiChevronDown className="text-[14px]" />
                )}
              </button>

              {showSizeGuide && (
                <div className="mt-4 overflow-hidden border border-[#d8d0c4] bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full w-full border-collapse">
                      <thead>
                        <tr className="bg-[#f7f5f1]">
                          <th className="px-3 py-3 text-left text-[12px] font-medium text-[#4f4f4f]">
                            Sizes
                          </th>
                          <th className="px-3 py-3 text-left text-[12px] font-medium text-[#4f4f4f]">
                            Standard
                            <br />
                            Size
                          </th>
                          <th className="px-3 py-3 text-left text-[12px] font-medium text-[#4f4f4f]">
                            To Fit
                            <br />
                            Bust
                          </th>
                          <th className="px-3 py-3 text-left text-[12px] font-medium text-[#4f4f4f]">
                            To Fit
                            <br />
                            Waist
                          </th>
                          <th className="px-3 py-3 text-left text-[12px] font-medium text-[#4f4f4f]">
                            To Fit
                            <br />
                            Hip
                          </th>
                          <th className="px-3 py-3 text-left text-[12px] font-medium text-[#4f4f4f]">
                            To Fit
                            <br />
                            Across
                            <br />
                            Shoulder
                          </th>
                          <th className="px-3 py-3 text-left text-[12px] font-medium text-[#4f4f4f]">
                            Front
                            <br />
                            Length
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {productData.sizeGuide.map((item) => (
                          <tr
                            key={item.size}
                            className="border-t border-[#ece7dd]"
                          >
                            <td className="px-3 py-3 text-[13px] text-[#4a4a4a]">
                              <button
                                type="button"
                                onClick={() => setSelectedGuideSize(item.size)}
                                className="flex items-center gap-3"
                              >
                                <span
                                  className={`flex h-[14px] w-[14px] items-center justify-center rounded-full border ${
                                    selectedGuideSize === item.size
                                      ? "border-black"
                                      : "border-[#666]"
                                  }`}
                                >
                                  {selectedGuideSize === item.size && (
                                    <span className="h-[8px] w-[8px] rounded-full bg-black" />
                                  )}
                                </span>
                                <span>{item.size}</span>
                              </button>
                            </td>

                            <td className="px-3 py-3 text-[13px] text-[#6a6a6a]">
                              {item.standardSize}
                            </td>
                            <td className="px-3 py-3 text-[13px] text-[#6a6a6a]">
                              {item.bust}
                            </td>
                            <td className="px-3 py-3 text-[13px] text-[#6a6a6a]">
                              {item.waist}
                            </td>
                            <td className="px-3 py-3 text-[13px] text-[#6a6a6a]">
                              {item.hip}
                            </td>
                            <td className="px-3 py-3 text-[13px] text-[#6a6a6a]">
                              {item.shoulder}
                            </td>
                            <td className="px-3 py-3 text-[13px] text-[#6a6a6a]">
                              {item.length}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
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
                  {productData.colors.map((color, index) => (
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
                {productData.details.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-[3px] text-[#7b6b65]">✦</span>
                    <span>
                      <span className="font-medium text-[#44322d]">
                        {item.label}:
                      </span>{" "}
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* FEATURES */}
              <div className="mt-8 grid grid-cols-1 gap-y-4 gap-x-6 text-base text-[#665750] sm:grid-cols-2 md:text-[20px]">
                {productData.features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 ">
                      <Icon className="text-[#8f2d2f]" />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;