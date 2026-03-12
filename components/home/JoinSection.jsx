export default function JoinSection() {
  return (
    <section className="bg-[#fff] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-5xl text-red-800 font-serif mb-6">
          Join the Srinaar
        </h2>


         <div className="flex items-center justify-center gap-6 mb-12">

                    {/* Left Side */}
                    <div className="flex items-center  md:flex hidden relative w-full max-w-[260px]">
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full absolute "></span>
                        <div className="flex-1 h-[1px] bg-[#4C0018] "></div>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full right-3 absolute"></span>
                        <span className="w-3 h-3 bg-[#4C0018] rounded-full"></span>

                    </div>

                    {/* Heading */}
                    <h2 className="text-lg font-serif text-gray-600 whitespace-nowrap">
                        Get Exclusive Offers
                    </h2>

                    {/* Right Side */}
                    <div className="flex items-center  md:flex hidden w-full relative max-w-[260px]">
                        <span className="w-3 h-3 bg-[#4C0018] rounded-full"></span>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full left-3 absolute mr-1"></span>
                        <div className="flex-1 h-[1px] bg-[#4C0018] "></div>
                        <span className="w-2 h-2 bg-[#4C0018] rounded-full"></span>
                    </div>

                </div>

      </div>
    </section>
  );
}