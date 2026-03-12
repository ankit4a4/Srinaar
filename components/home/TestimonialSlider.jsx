    "use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img from "@/assets/home/collection.png"

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Riya",
    location: "Dehradun",
    rating: "5.0",
    text: `"Ye dress meri beti ne festival me pehni thi aur sab ne bahut tareef ki. Traditional look ke saath modern touch bhi hai. Fabric breathable hai isliye garmi me bhi problem nahi hui. Definitely phir se order karenge."`,
    image: img,
  },
  {
    id: 2,
    name: "Ananya",
    location: "Delhi",
    rating: "5.0",
    text: `"Quality bahut achhi hai aur stitching perfect hai. Wedding function ke liye order kiya tha aur sabne compliment diya."`,
    image: img,
  },
  {
    id: 3,
    name: "Meera",
    location: "Jaipur",
    rating: "5.0",
    text: `"Fabric lightweight aur comfortable hai. Color exactly same hai jo website par dikhaya gaya tha. Bahut satisfied hu."`,
    image: img,
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-[#fff] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <p className="text-[#4C0018] text-sm mb-2">Testimonial</p>
        <h2 className="text-5xl italic text-[#4C0018] mb-10">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-[#efe9df] rounded-xl p-10 flex flex-col md:flex-row items-center gap-10">

                {/* Image */}
                <div className="w-[180px] h-[220px] relative flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Content */}
                <div className="max-w-xl">

                  <div className="font-semibold mb-2">
                    {review.rating}
                  </div>

                  <p className="text-lg leading-relaxed mb-6">
                    {review.text}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {review.location}
                    </p>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}