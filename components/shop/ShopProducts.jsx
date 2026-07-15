'use client';

import { useMemo, useState, useEffect } from "react";
import { FiChevronDown, FiHeart, FiX, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { api } from "../../utils/api";
import { useCart } from "../../contexts/CartContext";
import toast from "react-hot-toast";

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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    sizes: [],
    maxPrice: 9999,
    sortBy: "featured",
  });
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await api.get('/products');
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleArrayValue = (key, value) => {
    setFilters((prev) => {
      const exists = prev[key].includes(value);
      return {
        ...prev,
        [key]: exists ? prev[key].filter((item) => item !== value) : [...prev[key], value],
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

    if (filters.sizes.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.sizes?.some((size) => filters.sizes.includes(size))
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
    }

    return updatedProducts;
  }, [filters, products]);

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
      label: colorOptions.find((color) => color.value === item)?.name || "Color",
      value: item,
      color: item,
    })),
  ];

  if (loading) {
    return (
      <section className="min-h-screen bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <div className="text-xl text-gray-600">Loading products...</div>
        </div>
      </section>
    );
  }

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
              <div className="flex w-full justify-between items-center gap-2">
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
                  <span className="text-[12px] text-[#6b6b6b]">Sort by</span>
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
                  </select>
                </div>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="group"
                >
                  <Link
                    href={`/singleproduct/${product._id}`}
                    className="block"
                  >
                    <div className="overflow-hidden">
                      {/* Image Wrapper */}
                      <div className="relative h-[350px] md:h-[340px] overflow-hidden bg-[#f6f1ed] sm:h-[350px] lg:h-[400px]">
                        <img
                          src={product.images?.[0] || "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=lehenga&image_size=square"}
                          alt={product.name}
                          className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.06]"
                        />
                        {/* Soft overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
                        {/* Wishlist Icon */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          className="absolute bottom-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#7f1026] shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 hover:bg-[#7f1026] hover:text-white sm:h-11 sm:w-11"
                        >
                          <FiHeart className="text-[16px]" />
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
                            ₹{(product.discountPrice || product.price)?.toLocaleString("en-IN")}
                          </span>
                          {product.discountPrice && (
                            <span className="pb-[2px] text-[13px] text-[#9a9a9a] line-through">
                              ₹{product.price?.toLocaleString("en-IN")}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* Add to Cart Button */}
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      try {
                        await addToCart(product, 1, product.sizes?.[0], product.colors?.[0]);
                        toast.success('Added to cart!');
                      } catch (err) {
                        console.error('Add to cart failed:', err);
                        toast.error('Failed to add to cart');
                      }
                    }}
                    className="mt-4 w-full flex items-center justify-center gap-2 rounded-full bg-[#990027] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#7f1026]"
                  >
                    <FiShoppingCart />
                    Add to Cart
                  </button>
                </div>
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