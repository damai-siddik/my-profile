import React from "react";
import Stepper from "../../Components/Stepper";
import { twMerge } from "tailwind-merge";
import LineStepper from "../../Components/LineStepper";
import { Player } from "@lottiefiles/react-lottie-player";
import rocket from "./rocket.json"; 
import graduate from "./graduate.json"; 

const education = [
    {
        label: "Banking IT - Back End",
        desc: "Digitalent - Rakamin Academy",
        time: "July 21 - Oct 21",
    },
    {
        label: "Backend Development",
        desc: "Glints Academy powered by Binar Academy",
        time: "Dec 20 - March 21"
    },
    {
        label: "Economics",
        desc: "Andalas University",
        time: "Aug 12 - Jan 18",
    },
];

const projects = [
    {
        label: "Forest Technologies",
        desc: "Frontend Developer",
        time: "June - Aug 23",
        image: "/project/forest.webp",
    },
    {
        label: "Canlah",
        desc: "Fullstack Developer",
        time: "Nov 22 - May 23",
        image: "/project/canlah.webp",
    },
    {
        label: "Luna",
        desc: "Fullstack Developer",
        time: "July - Dec 22",
        image: "/project/luna.webp",
    },
    {
        label: "SquareArt",
        desc: "Backend Developer",
        time: "May - June 22",
        image: "/project/squareart.webp",
    },
    {
        label: "Maple",
        desc: "Frontend Developer",
        time: "Jan - July 22",
        image: "/project/maple.webp",
    },
    {
        label: "Farmz",
        desc: "Fullstack Developer",
        time: "Aug - Dec 21",
        image: "/project/farmz.webp",
    },
];

export default function Journey() {
    return (
        <section id="qualification" className="pt-8 pb-16 qualification lg:max-w-[968px] m-auto">
            <h2 className="text-center font-semibold text-2xl md:text-4xl text-title mb-8">Personal Journey</h2>
            <div className="flex flex-row items-center">
                <LineStepper data={education} />
                <Player src={graduate} autoplay loop className="w-max hidden md:block" />
            </div>
            <div className="flex flex-row items-end">
                <Player src={rocket} autoplay loop className="h-full w-fit animate-fly -translate-y-full duration-500 hidden md:block" />
                <LineStepper data={projects} />
            </div>
            

        </section>
    )
}