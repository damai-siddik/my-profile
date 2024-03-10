import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const tabs = [
    {
      icon: "briefcase-alt",
      label: "Experience"
    },
    {
      icon: "graduation-cap",
      label: "Education",
    },
];

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
    time: "June - Aug 23"
},
{
    label: "Canlah",
    desc: "Fullstack Developer",
    time: "Nov 22 - May 23"
},
{
    label: "Luna",
    desc: "Fullstack Developer",
    time: "July - Dec 22"
},
{
    label: "SquareArt",
    desc: "Backend Developer",
    time: "May - June 22",
},
{
    label: "Maple",
    desc: "Frontend Developer",
    time: "Jan - July 22",
},
{
    label: "Farmz",
    desc: "Fullstack Developer",
    time: "Aug - Dec 21"
},
];

const responsible = [
  "Built server-side logic and databases using programming languages such as Express or Go.",
  "Optimized the database queries using aggregation pipelines with MongoDB.",
  "Performed unit tests and maintained the codebase.",
  "Refactor code to improve code readability and reduce complexity if necessary.",
  "Developed user interfaces using HTML, CSS, and Typescript frameworks such as React, Angular, or Next.js.",
  "Ensured that web applications were responsive and worked seamlessly across various devices and screen sizes using Tailwind CSS.",
  "Debugging and troubleshooting issues across the application stack.",
  "Collaborated effectively within cross-functional teams.",
];

export default function Qualification() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeQual, setActiveQual] = useState(projects);

    return (
        <section id="qualification" className="pt-8 pb-16 qualification">
          <h2 className="text-center font-semibold text-2xl md:text-4xl text-title mb-8">Personal Journey</h2>
          <div className="mb-6 m-auto">
            <div className="flex justify-evenly mb-8">
              {tabs.map((tab, index) => (
                <div key={tab.label} className={twMerge("text-xl font-medium cursor-pointer inline-flex items-center", activeTab === index ? "text-primary" : "")} 
                  onClick={() => {
                    setActiveTab(index);
                    setActiveQual(index === 0 ? projects : education);
                  }}
                >
                  <i className={`text-2xl mr-1 uil uil-${tab.icon}`} />
                  {tab.label}
                </div>
              ))}
            </div>
            {activeTab == 0 && (
              <div className="mx-6 flex flex-col text-justify gap-2 mb-4">
              <span>In late 2020, I decided to switch my career to IT. By mid-2021, I joined a company in Singapore, <span className="font-semibold">Forest Ai Pte. Ltd.</span>, as a professional software engineer. I was responsible for:</span>
              <ul className="list-disc list-outside">
                {responsible.map((data) => (
                  <li key={data} className="ml-5">{data}</li>
                ))}
              </ul>
            </div>
            )}
            <div className="mx-6 md:flex md:justify-center">
              {activeQual.map((qual, index) => (
                <div key={`${qual.label} - ${index}`} className="grid grid-cols-[1fr_max-content_1fr] md:grid-rows-[max-content] md:grid-cols-none gap-6 md:w-[250px]">
                  {index % 2 !== 0 && <div className="md:hidden"></div>}
                  <div className={twMerge('flex flex-col justify-center', index % 2 !== 0 ? "order-last" : "md:order-last")}>
                    <div className="text-sm text-second-lighter mb-3 md:text-center">{qual.time}</div>
                    <h3 className="text-base font-medium text-title md:text-center">{qual.label}</h3>
                    <span className="inline-block text-sm mb-4 md:text-center w-full">{qual.desc}</span>
                  </div>
                  <div>
                    <span className="inline-block w-[13px] h-3 bg-primary rounded-full md:w-[13px] md:h-3 md:relative md:left-1/2"></span>
                    <span className={twMerge("h-full md:h-[1px] w-[1px] md:w-full bg-primary translate-x-[6px] md:translate-x-[50%] translate-y-[-7px] md:translate-y-[-12px]", index === activeQual.length - 1 ? "hidden" : "block")}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}