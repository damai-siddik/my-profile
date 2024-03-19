import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import feAnimation from "./ui.json";
import beAnimation from "./system.json";
import { twMerge } from "tailwind-merge";

const skills = [
    {
      label: "Frontend Development",
      icon: "pagelines",
      tech: ["HTML", "CSS", "Typescript", "React", "Next.js", "Angular", "Tailwind CSS", "Responsive Web"],
      lottie: feAnimation,
    },
    {
      label: "Backend Development",
      icon: "server",
      tech: ["Express.js", "MongoDB", "Go", "gRPC", "GraphQL", "Git"],
      lottie: beAnimation,
    },
];

export default function Skills() {
    return (
        <section id="skills" className="pt-8 pb-16 skills relative mx-6">
            <h2 className="text-center font-semibold text-2xl md:text-4xl text-title mb-8">Skills</h2>
            <div className="flex flex-col gap-8 md:gap-0">
              {skills.map((skill, index) => (
                <div key={skill.label} className={twMerge("flex justify-between items-center relative w-full overflow-hidden", index % 2 === 0 ? "flex-row" : "flex-row-reverse" )}>
                  <div key={skill.label} className="flex flex-col gap-6 w-full md:w-1/2 justify-center">
                    <div className="flex flex-row items-center cursor-pointer gap-2 justify-center">
                      <i className={`uil uil-${skill.icon} text-primary`}></i>
                      <h1 className="text-title font-semibold text-lg">{skill.label}</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-4 grid-flow-row">
                      {skill.tech?.map((tech) => (
                        <div key={tech} className=" bg-second text-letter rounded-2xl p-1 text-center justify-center font-medium flex items-center">
                          {tech}
                        </div>
                      ))}
                  </div>
                  </div>
                  <Player src={skill.lottie} autoplay loop className={twMerge("w-[450px] hidden md:block")} ></Player>
                </div>
              ))}
            </div>
        </section>
    )
}