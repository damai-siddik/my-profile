import React from "react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const projects = [
    {
        name: "Forest Ai",
        desc: "",
        image: "forest",
        link: "https://theforest.ai/",
        stack: [],
    },
    {
        name: "Canlah",
        desc: "",
        image: "canlah",
        link: "https://store.canlah.com/",
        stack: [],
    },
    {
        name: "Withluna",
        desc: "",
        image: "luna",
        link: "https://www.withluna.ai/",
        stack: [],
    },
    {
        name: "SquareArt",
        desc: "",
        image: "squareart",
        link: "https://squareart.exchange/",
        stack: [],
    },
    {
        name: "Maple Haus",
        desc: "",
        image: "maple",
        link: "https://www.maple.haus/",
        stack: [],
    },
    {
        name: "Farmz",
        desc: "",
        image: "farmz",
        link: "https://www.farmzasia.com/",
        stack: [],
    },
]

export default function Feature() {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                className="relative list-none p-0 z-[1]"
                wrapperClass="snap-mandatory"
                loop={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                }}
                modules={[Navigation, Pagination, Autoplay]}
            >
                {projects.map((data) => (
                    <SwiperSlide key={data.name} className="w-full snap-start grid gap-6 mb-10 bg-second md:rounded-3xl cursor-pointer">
                        <img onClick={() => window.open(data.link)} src={`/project/${data.image}.webp`} alt="image" className="w-full h-fit md:h-72 p-6 object-contain md:object-fill rounded-[32px] md:rounded-[40px]" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}