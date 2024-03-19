import React from "react";
import Button from "../../Components/Button";

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

export default function Home() {
    return (
        <section id="home" className="pt-8 pb-16 home ">
          <div className="flex flex-col md:flex-row-reverse justify-between md:justify-center items-center mx-6 pt-14 gap-8 md:gap-24">
            <div className='w-full flex flex-col justify-center items-center gap-8 md:items-start md:max-w-fit'>
              <div className="bg-inherit">
                <img src="/damai.jpeg" alt="image" className='rounded-full w-[200px] h-[195px]' />
              </div>
            </div>
            <div className='w-full text-center flex flex-col items-center justify-center md:items-start md:max-w-fit'>
              <h1 className="text-3xl md:text-5xl font-bold text-title mb-6">Hi, I'm Damai</h1>
              {/* <h3 className='text-lg md:text-xl text-letter font-medium my-3'>Software Engineer</h3> */}
              <p className="text-justify text-lg font-medium mb-4">A passionate software engineer driven by enthusiasm and equipped with experience. I am deeply committed to continuous learning and growth together.</p>
              <div className='flex flex-row gap-4 items-end h-10'>
                {socialMediaList.map((socialMedia) => (
                  <i key={socialMedia.label} className={`uil uil-${socialMedia.icon} text-primary text-3xl hover:scale-125 duration-300 cursor-pointer`} onClick={() => window.open(socialMedia.link)}></i>  
                ))}
              </div>
              {/* TODO: Make the contact to be footer */}
              {/* <Button className="bg-primary text-white"
                endIcon={<i className='uil uil-message' />}
                onClick={() => console.log('contact me')}>Contact Me</Button> */}
            </div>
          </div>
        </section>
    )
}