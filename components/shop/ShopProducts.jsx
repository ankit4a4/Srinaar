"use client";

import { useMemo, useState } from "react";
import { FiChevronDown, FiHeart, FiX } from "react-icons/fi";
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
    price: 4199,
    oldPrice: 6999,
    rating: 4.8,
    colors: ["#7a0f1d", "#2b0f12", "#caa27a"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 2,
    name: "Maroon Velvet Bridal Lehenga",
    category: "Bridal Collection",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    discount: "40% OFF",
    price: 4599,
    oldPrice: 7499,
    rating: 4.8,
    colors: ["#5c0d16", "#a32537", "#111"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 3,
    name: "Autumn Royal Wine Lehenga",
    category: "Wedding Wear",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    discount: "40% OFF",
    price: 4899,
    oldPrice: 7999,
    rating: 4.8,
    colors: ["#5b2a22", "#8d2235"],
    sizes: ["L", "XL"],
  },
  {
    id: 4,
    name: "Polka Ruby Designer Lehenga",
    category: "Party Wear",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
    discount: "40% OFF",
    price: 3999,
    oldPrice: 6599,
    rating: 4.9,
    colors: ["#111", "#a3172d"],
    sizes: ["M", "XL"],
  },
  {
    id: 5,
    name: "Soft Brown Wedding Lehenga",
    category: "Festive Lehenga",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    discount: "40% OFF",
    price: 4299,
    oldPrice: 7199,
    rating: 4.7,
    colors: ["#9c7a60", "#e8ddd2"],
    sizes: ["S", "M", "XXL"],
  },
  {
    id: 6,
    name: "Cream White Premium Lehenga",
    category: "Wedding Wear",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    discount: "40% OFF",
    price: 5199,
    oldPrice: 8499,
    rating: 5.0,
    colors: ["#f2efe9", "#ddd7ce"],
    sizes: ["L", "XL", "XXL"],
  },
  {
    id: 7,
    name: "Soft Yellow Festival Lehenga",
    category: "Traditional Wear",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=800&auto=format&fit=crop",
    discount: "40% OFF",
    price: 3899,
    oldPrice: 6499,
    rating: 4.8,
    colors: ["#cb9457", "#f4ddbf"],
    sizes: ["S", "M"],
  },
  {
    id: 8,
    name: "Classy White Designer Lehenga",
    category: "Party Wear",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    discount: "40% OFF",
    price: 4499,
    oldPrice: 7299,
    rating: 4.8,
    colors: ["#f5f5f5", "#c5a789"],
    sizes: ["M", "L"],
  },
  {
    id: 9,
    name: "Minimal Office Ethnic Set",
    category: "Festive Lehenga",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    discount: "40% OFF",
    price: 4099,
    oldPrice: 6899,
    rating: 4.9,
    colors: ["#efefef", "#d4b29d"],
    sizes: ["S", "M", "L"],
  },
];

const categoryOptions = [
  "Festive Lehenga",
  "Bridal Collection",
  "Wedding Wear",
  "Party Wear",
  "Traditional Wear",
];

const colorOptions = [
  { name: "Black", value: "#111" },
  { name: "Brown", value: "#6b4b3e" },
  { name: "Grey", value: "#888" },
  { name: "Red", value: "#c93b3b" },
  { name: "Olive", value: "#6d8c57" },
  { name: "Blue", value: "#4c70c1" },
  { name: "Pink", value: "#ef8fbe" },
  { name: "White", value: "#f5f5f5" },
  { name: "Cream", value: "#f2efe9" },
];

const sizeOptions = ["S", "M", "L", "XL", "XXL"];

const MAX_PRICE = 9999;

export default function ShopProducts() {
  const [filters, setFilters] = useState({
    categories: ["Festive Lehenga"],
    colors: [],
    sizes: ["M"],
    maxPrice: 9999,
    sortBy: "featured",
  });

  const toggleArrayValue = (key, value) => {
    setFilters((prev) => {
      const exists = prev[key].includes(value);

      return {
        ...prev,
        [key]: exists
          ? prev[key].filter((item) => item !== value)
          : [...prev[key], value],
      };
    });
  };

  const removeFilterChip = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      colors: [],
      sizes: [],
      maxPrice: MAX_PRICE,
      sortBy: "featured",
    });
  };

  const filteredProducts = useMemo(() => {
    let updatedProducts = [...products];

    if (filters.categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.colors.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.colors.some((color) => filters.colors.includes(color))
      );
    }

    if (filters.sizes.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.sizes.some((size) => filters.sizes.includes(size))
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) => product.price <= filters.maxPrice
    );

    if (filters.sortBy === "price-low-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-high-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "name-a-z") {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === "rating") {
      updatedProducts.sort((a, b) => b.rating - a.rating);
    }

    return updatedProducts;
  }, [filters]);

  const activeFilterChips = [
    ...filters.categories.map((item) => ({
      type: "categories",
      label: item,
      value: item,
    })),
    ...filters.sizes.map((item) => ({
      type: "sizes",
      label: item,
      value: item,
    })),
    ...filters.colors.map((item) => ({
      type: "colors",
      label:
        colorOptions.find((color) => color.value === item)?.name || "Color",
      value: item,
      color: item,
    })),
  ];

  return (
    <section className="min-h-screen bg-white text-[#222]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          {/* LEFT FILTER */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 className="text-[15px] font-medium text-[#2a1d18]">
                Filter Options
              </h3>
            </div>

            {/* CATEGORY */}
            <div className="mb-8">
              <h4 className="mb-4 text-[14px] font-semibold text-[#2a1d18]">
                Category
              </h4>
              <div className="space-y-3 text-[13px] text-gray-600">
                {categoryOptions.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(item)}
                      onChange={() => toggleArrayValue("categories", item)}
                      className="h-4 w-4 accent-[#8b5e3c]"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* PRICE */}
            <div className="mb-8">
              <h4 className="mb-4 text-[14px] font-semibold text-[#2a1d18]">
                Price
              </h4>
              <div className="px-1">
                <input
                  type="range"
                  min="999"
                  max={MAX_PRICE}
                  step="100"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxPrice: Number(e.target.value),
                    }))
                  }
                  className="w-full accent-[#8b5e3c]"
                />
                <div className="mt-3 flex items-center justify-between text-[12px] text-gray-500">
                  <span>₹999</span>
                  <span>Up to ₹{filters.maxPrice.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* COLOR */}
            <div className="mb-8">
              <h4 className="mb-4 text-[14px] font-semibold text-[#2a1d18]">
                Color
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {colorOptions.map((color) => {
                  const active = filters.colors.includes(color.value);

                  return (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => toggleArrayValue("colors", color.value)}
                      title={color.name}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border transition ${active
                          ? "border-[#8b5e3c] ring-2 ring-[#d9c1ab]"
                          : "border-gray-300"
                        }`}
                    >
                      <span
                        className="h-5 w-5 rounded-full border border-black/10"
                        style={{ backgroundColor: color.value }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SIZE */}
            <div>
              <h4 className="mb-4 text-[14px] font-semibold text-[#2a1d18]">
                Size
              </h4>
              <div className="space-y-3 text-[13px] text-gray-600">
                {sizeOptions.map((size) => (
                  <label
                    key={size}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      checked={filters.sizes.includes(size)}
                      onChange={() => toggleArrayValue("sizes", size)}
                      className="h-4 w-4 accent-[#8b5e3c]"
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
            <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex  w-full justify-between items-center gap-2">

                <div className="flex flex-wrap items-center gap-2">
                  {activeFilterChips.length > 0 ? (
                    <>
                      {activeFilterChips.map((chip, index) => (
                        <button
                          key={`${chip.type}-${chip.value}-${index}`}
                          type="button"
                          onClick={() => removeFilterChip(chip.type, chip.value)}
                          className="inline-flex items-center gap-2 border border-[#d8d2c4] bg-[#ece7db] px-3 py-2 text-[12px] text-[#2d2d2d]"
                        >
                          {chip.color && (
                            <span
                              className="h-3 w-3 rounded-full border border-black/10"
                              style={{ backgroundColor: chip.color }}
                            />
                          )}
                          <span>{chip.label}</span>
                          <FiX className="text-[12px]" />
                        </button>
                      ))}

                      <button
                        type="button"
                        onClick={clearAllFilters}
                        className="text-[12px] font-medium text-[#2d2d2d] underline underline-offset-2"
                      >
                        Clear all
                      </button>
                    </>
                  ) : (
                    <span className="text-[12px] text-[#6b6b6b]">
                      No filters selected
                    </span>
                  )}
                </div>


                <div className="relative">
                  <span className="text-[12px] text-[#6b6b6b] ">Sort by</span>

                  <select
                    value={filters.sortBy}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        sortBy: e.target.value,
                      }))
                    }
                    className="appearance-none ml-3 border border-[#d8d2c4] bg-[#ece7db] px-4 py-2 pr-9 text-[12px] text-[#2d2d2d] outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="name-a-z">Name: A to Z</option>
                    <option value="rating">Top Rated</option>
                  </select>


                </div>
              </div>
            </div>

            {/* PRODUCT COUNT */}


            {/* PRODUCTS */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/singleproduct/${product.id}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[20px]">
                    {/* Image Wrapper */}
                    <div className="relative h-[350px] md:h-[240px] overflow-hidden rounded-[20px] bg-[#f6f1ed] sm:h-[300px] lg:h-[335px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.06]"
                      />

                      {/* Soft overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>



                      {/* Wishlist Icon - Shows on Hover with theme color */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // Add your wishlist logic here
                        }}
                        className="absolute bottom-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#7f1026] shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 hover:bg-[#7f1026] hover:text-white sm:h-11 sm:w-11"
                        style={{
                          position: "absolute",
                          overflow: "visible",
                          isolation: "auto",
                        }}
                      >
                        <FiHeart className="text-[18px]" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="px-1 pt-4">
                      <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#9a9a9a]">
                        {product.category}
                      </p>

                      <h3 className="line-clamp-2 min-h-[48px] font-serif text-[16px] leading-[1.4] text-[#1f1f1f] transition-colors duration-300 group-hover:text-[#7f1026] sm:text-[18px]">
                        {product.name}
                      </h3>

                      <div className="mt-3 flex items-end gap-2">
                        <span className="text-[22px] font-semibold leading-none text-[#1f1f1f] sm:text-[26px]">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>

                        <span className="pb-[2px] text-[13px] text-[#9a9a9a] line-through">
                          ₹{product.oldPrice.toLocaleString("en-IN")}
                        </span>
                        <span className=" rounded-full bg-[#7f1026] px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white shadow-md sm:text-[11px]">
                          {product.discount}
                        </span>
                      </div>


                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-16 text-center">
                <h3 className="text-lg font-medium text-[#2a1d18]">
                  No products found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Try changing your filters or clear all filters.
                </p>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="mt-4 border border-[#d8d2c4] bg-[#ece7db] px-4 py-2 text-[12px] text-[#2d2d2d]"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}