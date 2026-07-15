"use client";

export default function CheckoutHero() {
  return (
    <section className="bg-gradient-to-r from-[#2a1a14] to-[#4b1e1e] text-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Secure Checkout
          </h1>
          <p className="text-[#e9d8d0] text-lg">
            Complete your purchase with confidence
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 flex items-center justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#990027] flex items-center justify-center font-bold">
              1
            </div>
            <p className="text-sm mt-2">Cart</p>
          </div>

          <div className="hidden md:block h-1 w-12 bg-[#990027]"></div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#990027] flex items-center justify-center font-bold">
              2
            </div>
            <p className="text-sm mt-2">Details</p>
          </div>

          <div className="hidden md:block h-1 w-12 bg-[#990027]"></div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#990027] flex items-center justify-center font-bold">
              3
            </div>
            <p className="text-sm mt-2">Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
