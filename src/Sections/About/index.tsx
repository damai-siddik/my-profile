import React from "react";
import Button from "../../Components/Button";

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
          <h2 className="text-center text-title text-2xl md:text-4xl font-semibold mb-8">About Me</h2>
          {/* <span className="text-center block text-sm mb-8">My Introduction</span> */}
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 mx-6">
            {/* Second Image */}
            <img src="/damai-2.jpeg" className="w-[200px] h-[200px] rounded-full object-cover" />
            <div className="flex flex-col gap-4">
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