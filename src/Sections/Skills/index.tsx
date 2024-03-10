import React from "react";

const skills = [
    {
      label: "Frontend Developer",
      icon: "pagelines",
      tech: ["HTML", "CSS", "Typescript", "React", "Next.js", "Angular", "Tailwind CSS", "Responsive Web"],
    },
    {
      label: "Backend Developer",
      icon: "server",
      tech: ["Express.js", "MongoDB", "Go", "gRPC", "GraphQL", "Git"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="pt-8 pb-16 skills">
            <h2 className="text-center font-semibold text-2xl md:text-4xl text-title mb-8">Skills</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 mx-6 ">
            {skills.map((skill, index) => (
                <div key={skill.label} className="flex flex-col gap-6 max-w-[500px] w-full">
                <div className="flex flex-row items-center cursor-pointer gap-2 justify-center">
                  <i className={`uil uil-${skill.icon} text-primary`}></i>
                  <h1 className="text-title font-semibold text-lg">{skill.label}</h1>
                </div>
                <div className="grid grid-cols-3 gap-4 grid-flow-row">
                  {skill.tech?.map((tech) => (
                    <div key={tech} className="border-primary hover:bg-primary hover:text-white border rounded-lg py-2 text-center justify-center font-medium flex items-center">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
        </section>
    )
}