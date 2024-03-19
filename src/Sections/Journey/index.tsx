import React from "react";
import LineStepper from "../../Components/LineStepper";
import { Player } from "@lottiefiles/react-lottie-player";
import rocket from "./rocket.json"; 
import graduate from "./graduate.json"; 

const education = [
    {
        label: "Banking IT - Back End",
        role: "Digitalent - Rakamin Academy",
        time: "July 21 - Oct 21",
    },
    {
        label: "Backend Development",
        role: "Glints Academy powered by Binar Academy",
        time: "Dec 20 - March 21"
    },
    {
        label: "Economics",
        role: "Andalas University",
        time: "Aug 12 - Jan 18",
    },
];

const projects = [
    {
        label: "Forest Technologies",
        role: "Frontend Developer",
        time: "June 23 - Aug 23",
        image: "/project/forest.webp",
        link: "https://theforest.ai/",
    },
    {
        label: "Canlah",
        role: "Fullstack Developer",
        time: "Nov 22 - May 23",
        image: "/project/canlah.webp",
        link: "https://store.canlah.com/",
    },
    {
        label: "Luna",
        role: "Fullstack Developer",
        time: "July 22 - Dec 22",
        image: "/project/luna.webp",
        link: "https://www.withluna.ai/",
    },
    {
        label: "SquareArt",
        role: "Backend Developer",
        time: "May 22 - June 22",
        image: "/project/squareart.webp",
        link: "https://squareart.exchange/",
    },
    {
        label: "Maple",
        role: "Frontend Developer",
        time: "Jan 22 - July 22",
        image: "/project/maple.webp",
        link: "https://www.maple.haus/",
    },
    {
        label: "Farmz",
        role: "Fullstack Developer",
        time: "Aug 21 - Dec 21",
        image: "/project/farmz.webp",
        link:  "https://www.farmzasia.com/",

    },
];

export default function Journey() {
    return (
        <section id="qualification" className="pt-8 pb-16 qualification lg:max-w-[968px] m-auto">
            <h2 className="text-center font-semibold text-2xl md:text-4xl text-title mb-8">Personal Journey</h2>

            <div className="flex flex-row items-center">
                <LineStepper data={education} />
                <Player src={graduate} autoplay loop className="w-fit hidden md:block" />
            </div>
            <div className="flex flex-row items-end">
                <Player src={rocket} autoplay loop className="h-full w-fit animate-fly -translate-y-full duration-500 hidden md:block" />
                <LineStepper data={projects} />
            </div>
            

        </section>
    )
}