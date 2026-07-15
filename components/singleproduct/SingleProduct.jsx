'use client';
import React, { useState } from 'react';
import {
  FiTruck,
  FiRefreshCcw,
  FiAward,
  FiShield,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';
import { useCart } from '../../contexts/CartContext';
import toast from 'react-hot-toast';

export default function SingleProduct({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [selectedGuideSize, setSelectedGuideSize] = useState('32');
  const { addToCart } = useCart();

  const images = product.images?.length ? product.images : [];

  const handleAddToCart = async () => {
    try {
      await addToCart(product, 1, selectedSize, selectedColor);
      toast.success('Added to cart successfully!');
    } catch (error) {
      toast.error('Failed to add to cart! Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#ece7dd] px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px] border-b border-[#d8d0c4] pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[540px_1fr] lg:gap-10 xl:gap-14">
          {/* LEFT */}
          <div>
            <div className="overflow-hidden rounded-[4px] bg-[#6a3728]">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-[420px] w-full object-cover sm:h-[520px] md:h-[620px]"
              />
            </div>

            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`h-[96px] w-[78px] flex-shrink-0 overflow-hidden rounded-[4px] border sm:h-[105px] sm:w-[86px] ${
                      selectedImage === img ? 'border-[#9f2635]' : 'border-[#cbbfb0]'
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
            )}
          </div>

          {/* RIGHT */}
          <div className="pt-1">
            <h1 className="font-serif text-[30px] leading-tight text-[#34241f] md:text-[38px]">
              {product.name}
            </h1>

            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#a14f49] md:text-[15px]">
              {product.category}
            </p>

            <div className="mt-4 border-t border-[#d7cec1]" />

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[#2d201b]">
              {product.discountPrice && (
                <span className="text-xs uppercase tracking-[0.08em] text-[#776963] line-through md:text-sm">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-[30px] font-semibold leading-none text-[#9f2635] md:text-[36px]">
                ₹{(product.discountPrice || product.price).toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-[#776963] md:text-[15px]">
                inclusive of all taxes
              </span>
            </div>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-[#6b5a52] md:text-[17px]">
              {product.description}
            </p>

            {/* SIZE */}
            {product.sizes?.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-4 text-base font-medium text-[#4a3730] md:text-[17px]">
                  Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[58px] border px-4 text-base transition-all md:min-w-[62px] md:text-[17px] ${
                        selectedSize === size
                          ? 'h-[46px] border-[#b5162e] bg-[#b5162e] text-white'
                          : 'h-[46px] border-[#c8b8aa] bg-transparent text-[#734f49] hover:border-[#b5162e]'
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
                {showSizeGuide && product.sizeGuideImage && (
                  <div className="mt-4">
                    <img
                      src={product.sizeGuideImage}
                      alt="Size Guide"
                      className="w-full max-w-md rounded-lg border border-[#cbbfb0]"
                    />
                  </div>
                )}
              </div>
            )}

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-full bg-gradient-to-r from-[#990027] to-[#7f1026] px-6 py-4 text-sm font-semibold text-white transition-all hover:from-[#7f1026] hover:to-[#590c19]">
                <span>Buy Now</span>
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 rounded-full border-2 border-[#990027] bg-transparent px-6 py-4 text-sm font-semibold text-[#990027] transition-all hover:bg-[#990027] hover:text-white"
              >
                <span>Add To Cart</span>
              </button>
            </div>

            {/* COLOR */}
            {product.colors?.length > 0 && (
              <div className="mt-7">
                <div className="flex items-center gap-4">
                  <span className="text-base text-[#4a3730] md:text-[17px]">
                    Color
                  </span>
                  <div className="flex items-center gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`h-[18px] w-[18px] rounded-full transition hover:scale-110 md:h-[20px] md:w-[20px] ${
                          selectedColor === color
                            ? 'ring-2 ring-[#9f2635] ring-offset-2 ring-offset-[#ece7dd]'
                            : 'border border-[#c9bcae]'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-7 border-t border-[#d7cec1]" />

            {/* PRODUCT DETAILS */}
            <div className="mt-6">
              <h2 className="font-serif text-[32px] leading-none text-[#8f2d2f] md:text-[38px]">
                Product Details
              </h2>

              {product.details?.length > 0 && (
                <ul className="mt-5 space-y-3 text-base text-[#5f514b] md:text-[17px]">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-[3px] text-[#7b6b65]">✦</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* FEATURES */}
              <div className="mt-8 grid grid-cols-1 gap-y-4 gap-x-6 text-base text-[#665750] sm:grid-cols-2 md:text-[20px]">
                {[
                  { icon: FiTruck, text: 'Free Shipping' },
                  { icon: FiRefreshCcw, text: '7 Days Easy Return' },
                  { icon: FiAward, text: 'Assured Quality' },
                  { icon: FiShield, text: 'COD Available' },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
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
}
