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
        desc: "",
    },
    {
        label: "Canlah",
        role: "Fullstack Developer",
        time: "Nov 22 - May 23",
        image: "/project/canlah.webp",
        desc: "",
    },
    {
        label: "Luna",
        role: "Fullstack Developer",
        time: "July 22 - Dec 22",
        image: "/project/luna.webp",
        desc: "Automate visibility and alignment of all stakeholders, orchestrate launches beyond the siloed tasks and ship high-quality products together.",
    },
    {
        label: "SquareArt",
        role: "Backend Developer",
        time: "May 22 - June 22",
        image: "/project/squareart.webp",
        desc: "SquareArt is a dedicated art marketplace that offers a diverse selection of original artwork from artists worldwide.",
    },
    {
        label: "Maple",
        role: "Frontend Developer",
        time: "Jan 22 - July 22",
        image: "/project/maple.webp",
        desc: "Maple Haus is a homeowners community platform to share ideas, inspirations, decoration tips, renovation journeys, and other home-related matters. Synergising with our parent company, Forest AI, we innovate and bring forward creativity for a better living experience with advanced technology in mind."
    },
    {
        label: "Farmz",
        role: "Fullstack Developer",
        time: "Aug 21 - Dec 21",
        image: "/project/farmz.webp",
        desc: "Farmz is in the business of education and consultancy to get more people to understand the importance of living a healthy lifestyle. Farmz provides customers with the knowledge, sources & program's when it comes to Food Education, Juicing, Healthy Cooking, and Baking.",

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