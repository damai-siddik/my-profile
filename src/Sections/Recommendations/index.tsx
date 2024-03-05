import React from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import Button from "../../Components/Button";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function Recommendations() {
    return (
        <section id="recommendations" className="pt-8 pb-16 recommendations">
          <h2 className="text-center font-semibold text-2xl md:text-4xl text-title">Recommendations</h2>
          <span className="text-center block mb-8 text-sm">What they say about me</span>
          <Swiper
            slidesPerView={1}
            className="mx-6 relative list-none p-0 z-[1]"
            wrapperClass="snap-mandatory"
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            loop
          >
            {[1,2,3].map((number) => (
              <SwiperSlide key={number} className="w-full snap-start py-6 px-12 grid gap-6">
                <div className='flex flex-col justify-center items-center'>
                  <div className="text-lg mb-2 text-title font-semibold">Online Store</div>
                  <p>{number}</p>
                </div>
                <Button className="bg-primary text-white" onClick={() => console.log("button swipe")}>Demo</Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
    )
}