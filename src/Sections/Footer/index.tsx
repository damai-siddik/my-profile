import React from "react";

const socialMediaList = [
    {
      label: 'github',
      icon: 'github-alt',
      link: 'https://github.com/damai-siddik',
    },
    {
      label: 'email',
      icon: 'envelope',
      link: 'mailto:damai.siddik@gmail.com'
    },
    {
      label: 'instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/damaisiddik/'
    },
    {
      label: 'linkedin',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/damai-siddik/',
    },
];

export default function Footer() {
    return (
        <footer className="hidden md:block w-full text-sm py-5">
            <div className="flex flex-row items-center justify-between m-auto max-w-[968px] px-6 text-primary">
            <span className="font-semibold text-sm">&copy;2024 Damai Y.S</span>
            <div className="flex flex-row h-full items-center">
                {socialMediaList.map((socialMedia) => (
                    <i key={socialMedia.label} className={`uil uil-${socialMedia.icon} text-primary text-2xl cursor-pointer hover:-translate-y-2 duration-300 w-9`} onClick={() => window.open(socialMedia.link)}></i>  
                ))}
            </div>
            {/* Back to top */}
            {/* <a href="#home">
              <i className="uil uil-top-arrow-to-top px-2 py-1 bg-primary rounded-md text-white cursor-pointer"></i>
            </a> */}
            </div>
        </footer>
    )
}