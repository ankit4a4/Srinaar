export default function ContactForm() {
  return (
    <section className=" py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1f1f]">
            Get In Touch
          </h2>

          <div className="flex justify-center mt-4 mb-5">
            <span className="w-12 h-[2px] bg-[#990027]"></span>
          </div>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#7d7272] leading-relaxed">
            Have a question or want to work with us? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-5 py-3.5 text-base text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/20 transition-all duration-300 bg-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-5 py-3.5 text-base text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/20 transition-all duration-300 bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <select className="w-full border border-gray-300 rounded-lg px-5 py-3.5 text-base text-gray-700 outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/20 transition-all duration-300 bg-white cursor-pointer">
              <option value="" disabled selected>Select Occasion</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Corporate Event</option>
              <option>Other</option>
            </select>

            <select className="w-full border border-gray-300 rounded-lg px-5 py-3.5 text-base text-gray-700 outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/20 transition-all duration-300 bg-white cursor-pointer">
              <option value="" disabled selected>Select Budget</option>
              <option>Below ₹10,000</option>
              <option>₹10,000 - ₹25,000</option>
              <option>₹25,000 - ₹50,000</option>
              <option>₹50,000 - ₹1,00,000</option>
              <option>Above ₹1,00,000</option>
            </select>
          </div>

          <div className="mb-8">
            <textarea
              rows={5}
              placeholder="Tell us about your requirements..."
              className="w-full border border-gray-300 rounded-lg px-5 py-3.5 text-base text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/20 transition-all duration-300 resize-none bg-white"
            ></textarea>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="bg-[#990027] hover:bg-[#7a0020] text-white text-sm tracking-[1px] uppercase px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}