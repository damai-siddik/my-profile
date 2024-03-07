import React, { useState } from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import Button from "../../Components/Button";
import { twMerge } from "tailwind-merge";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const recommendations = [
  {
    name: "Inez Nata Prawira",
    position: "Operations Manager",
    photo: "/inez.jpeg",
    message: "I had a great time working with Damai. She's exceptional software engineer with a passion for delivering high-quality solutions. Her in-depth knowledge of programming languages and software architecture enables her to tackle complex problems with ease. Damai's contributions have been pivotal in ensuring the success of our projects. Her exceptional teamwork and ability to excel both independently and within a group make her a highly valuable asset for any organization. I have no doubt that she will continue to excel and handle her responsibilities with diligence.",
  },
  {
    name: "Shafira Ishlah Nurulita",
    position: "Product Manager",
    photo: "/shafira.jpeg",
    message: "I've had the pleasure of working alongside Damai for the past two years, and I can confidently say that she is an exceptional software engineer. Damai's insatiable curiosity and eagerness to learn new things are truly commendable. She consistently challenges herself and takes on responsibilities with unwavering dedication. Damai's ability to communicate effectively is a valuable asset to any team. She ensures that all tasks are clearly defined and executed flawlessly. She is not just a skilled engineer but also an outstanding team member who brings positivity and collaboration to the workplace. I highly recommend Damai as a software engineer and teammate; she will undoubtedly excel in any endeavor she takes on.",
  },
  {
    name: "Mohammad Rendra",
    position: "Senior Software Engineer",
    photo: "/rendra.jpeg",
    message: "Damai is really a hard worker, she's willing to go extra miles to make sure the task she's working on gets delivered. And that doesn't go only for the tasks on her hand, but also everyone else's. Aside from that, having her on the team is a game-changer. Her positive energy and enthusiasm never fail to lighten up the mood for everyone around. Not only does she bring a refreshing perspective to the table, but her ability to create a positive work environment is truly impressive!",
  },
  {
    name: "Zikrullah Aliwainda",
    position: "Software Engineer",
    photo: "/zik.jpeg",
    message: "If you ask me about Damai then I will spontaneously say she is a very diligent person. She is a typical person who is thirsty for knowledge, especially when it comes to work. She is very reliable in every task and if there is any uncertainty in her decision, she will always ask a certain person to avoid ambiguity in her work. I am very happy to have worked with her and I really look forward to the same in the future.",
  },
  {
    name: "Andhi Arifin",
    position: "Senior Software Engineer",
    photo: "/andhi.jpeg",
    message: "Although we weren't in the same team, our paths often crossed, and I can't help but express my admiration for her dedication and the positive impact she's had on our workplace. Damai has consistently demonstrated a strong work ethic, unwavering commitment to excellence, and a remarkable ability to collaborate effectively across teams. Her professionalism and enthusiasm have undoubtedly left a lasting impression on our organization."
  },
  {
    name: "Agung Suryana",
    position: "Software Engineer",
    photo: "/agung.jpeg",
    message: "I am delighted to provide a glowing review for damai, who exemplifies the qualities of work, high dedication, humility, and exceptional teamwork. Damai consistently goes above and beyond in every task she undertake, demonstrating an unwavering commitment to excellence. Despite her remarkable skills and achievements, she remain remarkably humble, always willing to lend a helping hand and share credit with the team. Her ability to foster collaboration and camaraderie within the team is truly commendable. Damai is an invaluable asset, and her dedication, humility, and teamwork are an inspiration to us all.",
  },
];

export default function Recommendations() {
    const [more, setMore] = useState(false);

    return (
        <section id="recommendations" className="pt-8 pb-16 recommendations">
          <h2 className="text-center font-semibold text-2xl md:text-4xl text-title">Recommendations</h2>
          <span className="text-center block mb-8 text-sm">What they say about me</span>
          <div className="flex flex-col gap-3 mb-4">
            {recommendations.map((data, index) => (
              <div key={data.name} className={twMerge('flex-col justify-center text-justify mx-2 mb-5 shadow-chat p-6 rounded-xl text-title', !more && index > 2 ? 'hidden' : 'flex')}>
                <div className="flex flex-row gap-2">
                  <img src={data.photo} className="rounded-full w-12 h-12" />
                  <div>
                    <div className="text-lg font-semibold">{data.name}</div>
                    <p className="mb-2 font-medium text-sm text-letter">{data.position}</p>
                  </div>
                </div>
                <p className="">{data.message}</p>
              </div>
            ))}
          </div>
          <Button className='bg-primary text-white w-fit m-auto'
            endIcon={<i className={`uil uil-angle-${!more ? 'down' : 'up'}`} />}
            onClick={() => setMore(!more)}>{`See ${!more ? 'More' : 'Less'}`}
          </Button>
          {/* <Swiper
            slidesPerView={1}
            className="mx-6 relative list-none p-0 z-[1]"
            wrapperClass="snap-mandatory"
            autoplay={true}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            loop
          >
            {recommendations.map((data) => (
              <SwiperSlide key={data.name} className="w-full snap-start py-6 px-12 grid gap-6">
                <div className='flex flex-col justify-center items-center text-justify mx-2 mb-5 shadow-lg p-4'>
                  <div className="text-lg text-title font-semibold">{data.name}</div>
                  <p className="mb-2">{data.position}</p>
                  <p>{data.message}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </section>
    )
}