import React from "react";
import Button from "../../Components/Button";
// import Lottie, { LottiePlayer } from "lottie-react";
import groovyWalkAnimation from "./muslim.json";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const aboutMeData = [
    {
      total: "2+",
      label: "Years experience",
    },
    {
      total: 6,
      label: "Completed projects"
    },
];

export default function About() {
    return (
        <section id="about" className="pt-8 pb-16 about">
          <h2 className="text-center text-title text-2xl md:text-4xl font-semibold md:mb-8">About Me</h2>
          {/* <span className="text-center block text-sm mb-8">My Introduction</span> */}
          <div className="flex flex-col md:flex-row md:justify-between items-center mx-6 relative gap-8">
            {/* Second Image */}
            {/* <Lottie animationData={groovyWalkAnimation} loop={true} style={{ height: 300 }} /> */}
            <Player src={groovyWalkAnimation} autoplay loop className="w-[200px]" ></Player>
            {/* <img src="/image.png" className="md:w-1/2 h-auto rounded-full object-cover" /> */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-16 justify-evenly md:justify-start">
                {aboutMeData.map((data) => (
                  <div key={data.label}>
                    <span className="block text-center text-xl font-semibold text-title">{data.total}</span>
                    <span className="block text-center text-sm">{data.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-justify">Experienced in web development, specializing in both client-side and server-side technologies. Proficient in building user interfaces using Angular, React, or Next.js, while also adept at crafting scalable server-side solutions with Express.js or Go. Adept at collaborating within cross-functional teams to deliver high-quality solutions, motivated to learn, and consistently contributing to the success of various projects.</p>
              <Button className='bg-primary text-white w-fit m-auto md:m-0'
                endIcon={<i className='uil uil-import' />}
                onClick={() => window.open("/CV-Damai.pdf")}>Download CV</Button>
            </div>
          </div>
        </section>
    )
}