import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from './Components/Button';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function App() {
  const initialTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(initialTheme);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const menuNav = [
    {
        link: '#home',
        icon: 'uil-estate',
        title: 'Home',
    },
    {
        link: '#about',
        icon: 'uil-user',
        title:  'About',
    },
    {
        link: '#skills',
        icon: 'uil-file-alt',
        title:  'Skills'
    },
    {
        link: '#services',
        icon: 'uil-briefcase-alt',
        title:  'Services'
    },
    {
        link: '#portfolio',
        icon: 'uil-scenery',
        title: 'Portfolio'
    },
    {
        link: '#contact',
        icon: 'uil-message',
        title: 'Contact me',
    }
  ];

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
      icon: 'linkedin-alt',
      link: 'https://www.linkedin.com/in/damai-siddik/',
    },
  ]

  const aboutMeData = [
    {
      total: 6,
      label: "Completed projects"
    },
    {
      total: "2+",
      label: "Years experience",
    },
  ];

  const skills = [
    {
      label: "Frontend Developer",
      icon: "pagelines",
      tech: [
        {
          label: "HTML",
          value: 90,
        },
        {
          label: "CSS",
          value: 90,
        },
        {
          label: "Typescript",
          value: 85,
        },
        {
          label: "React",
          value: 85,
        },
        {
          label: "Next.js",
          value: 85,
        },
        {
          label: "Angular",
          value: 85,
        },
      ]
    },
    {
      label: "Backend Developer",
      icon: "server",
      tech: [
        {
          label: "Express.js",
          value: 90,
        },
        {
          label: "MongoDB",
          value: 90,
        },
        {
          label: "Go",
          value: 85,
        },
        {
          label: "gRPC",
          value: 85,
        },
        {
          label: "GraphQL",
          value: 85,
        },
        {
          label: "Git",
          value: 85,
        },
      ]
    },
  ];

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
      label: "Forest AI",
      desc: "Frontend Developer",
      time: "Jun - Aug 23"
    },
    {
      label: "Canlah",
      desc: "Fullstack Developer",
      time: "Nov 22 - May 23"
    },
    {
      label: "Luna",
      desc: "Fullstack Developer",
      time: "Jul - Dec 22"
    },
    {
      label: "SquareArt",
      desc: "Backend Developer",
      time: "May - Jun 22",
    },
    {
      label: "Maple",
      desc: "Frontend Developer",
      time: "Jan - Jul 22",
    },
    {
      label: "Farmz",
      desc: "Fullstack Developer",
      time: "Aug - Dec 21"
    },
  ];

  const [activeQual, setActiveQual] = useState(projects);


  useEffect(() => {
    const targetClass = document.getElementById("wrapper");
    if (theme && theme === 'dark' ) {
      targetClass?.classList.add('dark')
    } else {
      targetClass?.classList.remove('dark')
    }
  }, [theme])

  const changeTheme = () => {
    const newTheme = theme && theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  const openMenuList = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="m-auto min-h-screen text-letter bg-mono" id="wrapper">

      {/* ============================= HEADER ================================ */}
      <header className="shadow-modal w-full fixed bottom-0 md:top-0 h-fit left-0 z-[100] bg-mono" id="header">
        <nav className="flex justify-between items-center h-12 mx-6 lg:max-w-[968px] lg:mx-auto lg:px-6">
          <a href="#" className="no-underline text-title hover:text-primary font-medium block">Damai Yulianti Siddik</a>
          
          {openMenu && (
            <div className="bottom-0 md:top-0 fixed left-0 w-full bg-mono pt-8 px-6 pb-16 shadow-modal rounded-t-3xl duration-300">
              <div className="grid grid-cols-3 gap-8">
                {menuNav.map((menu) => (
                  <a key={menu.title} href={menu.link} className="flex flex-col items-center font-medium text-title text-sm" >
                    <i className={`text-xl uil ${menu.icon}`}></i>
                    {menu.title}
                  </a>
                ))}
              </div>
              <i className="uil uil-times absolute right-5 bottom-2 text-2xl cursor-pointer text-primary" onClick={openMenuList}></i>
            </div>
          )}

          {/* LIST MENU */}
          <div className="flex items-center">
            <i className={twMerge("uil", theme === 'dark' ? 'uil-sun' : 'uil-moon')}
              onClick={changeTheme}>
            </i>
            <div className="text-lg cursor-pointer text-title font-medium ml-4">
              <i className="uil uil-apps" onClick={openMenuList}></i>
            </div>
          </div>
        </nav>
      </header>

      {/* ======================= MAIN ==================== */}
      <main className='block lg:max-w-[968px] m-auto'>
        {/* ======================= HOME ==================== */}
        <section id="home" className="pt-8 pb-16 home">
          <div className="flex flex-col md:flex-row-reverse justify-between md:justify-center items-center mx-6 pt-14 gap-8 md:gap-24">
            <div className='w-full flex flex-col justify-center items-center gap-8 md:items-start md:max-w-fit'>
              <div className="bg-inherit">
                <img src="/damai.jpeg" alt="image" className='rounded-full w-[200px] h-[195px]' />
              </div>
              <div className='flex flex-row gap-4 items-center w-full justify-center'>
                {socialMediaList.map((socialMedia) => (
                  <i key={socialMedia.label} className={`uil uil-${socialMedia.icon} text-primary text-2xl`} onClick={() => window.open(socialMedia.link)}></i>  
                ))}
              </div>
            </div>
            <div className='w-full text-center flex flex-col items-center justify-center md:items-start md:max-w-fit'>
              <h1 className="text-3xl md:text-5xl font-bold text-title">Hi, I'm Damai</h1>
              {/* <h3 className='text-lg md:text-xl text-letter font-medium my-3'>Software Engineer</h3> */}
              <p className="my-6 text-justify">A passionate software engineer driven by enthusiasm and equipped with experience. I am deeply committed to continuous learning and growth.</p>
              <Button className="bg-primary text-white"
                endIcon={<i className='uil uil-message' />}
                onClick={() => console.log('contact me')}>Contact Me</Button>
            </div>
          </div>
        </section>

        {/* ======================= ABOUT ==================== */}
        <section id="about" className="pt-8 pb-16 about">
          <h2 className="text-center text-title text-2xl md:text-4xl font-semibold mb-8">About Me</h2>
          {/* <span className="text-center block text-sm mb-8">My Introduction</span> */}
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 mx-6">
            {/* Second Image */}
            <img src="/damai-2.jpeg" className="w-[200px] h-[200px] rounded-full object-cover" />
            <div className="flex flex-col gap-10">
              <p className="text-justify">Experienced in web development, specializing in both client-side and server-side technologies. Proficient in building user interfaces using Angular, React, or Next.js, while also adept at crafting scalable server-side solutions with Express.js or Go. Adept at collaborating within cross-functional teams to deliver high-quality solutions, motivated to learn, and consistently contributing to the success of various projects.</p>
              <div className="flex flex-row justify-evenly">
                {aboutMeData.map((data) => (
                  <div key={data.label}>
                    <span className="block text-center text-xl font-semibold text-title">{data.total}</span>
                    <span className="block text-center text-sm">{data.label}</span>
                  </div>
                ))}
              </div>
              <Button className='bg-primary text-white w-fit m-auto'
                endIcon={<i className='uil uil-import' />}
                onClick={() => window.open("/CV-Damai.pdf")}>Download CV</Button>
            </div>
          </div>
        </section>

        {/* ======================= SKILLS ==================== */}
        <section id="skills" className="pt-8 pb-16 skills">
         <h2 className="text-center font-semibold text-2xl md:text-4xl text-title mb-8">Skills</h2>
         {/* <span className="text-center block mb-8 text-sm">My Technical Level</span> */}
         <div className="flex flex-col md:flex-row justify-center gap-10 mx-6 ">
          {skills.map((skill, index) => (
            <div key={skill.label} className="flex flex-col gap-6 max-w-[500px] w-full">
              <div className="flex flex-row items-center cursor-pointer gap-2 justify-center">
                <i className={`uil uil-${skill.icon} text-primary`}></i>
                <h1 className="text-title font-semibold text-lg">{skill.label}</h1>
              </div>
              <div className="grid grid-cols-3 gap-4 grid-flow-row">
                {skill.tech?.map((tech) => (
                  // <div key={tech.label} className="flex flex-col gap-2">
                  //   <div className="flex justify-between">
                  //     <h3 className="font-medium text-base text-title">{tech.label}</h3>
                  //     <span>{`${tech.value}%`}</span>
                  //   </div>
                  //   <div className="bg-lighter h-[5px] rounded-md">
                  //     <span className="block bg-primary h-full rounded-md" style={{ width: `${tech.value}%`}}></span>
                  //   </div>
                  // </div>
                  <div key={tech.label} className="border-primary border rounded-lg py-2 text-center font-medium">
                    {/* <i className='uil uil-check text-primary text-2xl'></i> */}
                    {tech.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
         </div>
        </section>

        {/* ======================= QUALIFICATION ==================== */}
        <section id="qualification" className="pt-8 pb-16 qualification">
          <h2 className="text-center font-semibold text-2xl md:text-4xl text-title mb-8">Personal Journey</h2>
          {/* <span className="text-center block mb-8 text-sm">My personal journey</span> */}
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
            <div className="mx-6 md:flex md:justify-center">
              {activeQual.map((qual, index) => (
                <div key={`${qual.label} - ${index}`} className="grid grid-cols-[1fr_max-content_1fr] md:grid-rows-[max-content] md:grid-cols-none gap-6 md:w-[250px]">
                  {index % 2 !== 0 && <div className="md:hidden"></div>}
                  <div className={index % 2 !== 0 ? "order-last" : "md:order-last"}>
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

        <section id="recommendations" className="pt-8 pb-16 recommendations">
          <h2 className="text-center font-semibold text-2xl md:text-4xl text-title">Recommendations</h2>
          <span className="text-center block mb-8 text-sm">What they say about me</span>
          <Swiper
            slidesPerView={1}
            className="mx-6 relative list-none p-0 z-[1]"
            wrapperClass="snap-mandatory"
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            loop
          >
            {[1,2,3].map((number) => (
              <SwiperSlide key={number} className="w-full snap-start py-6 px-12 grid gap-6">
                <div className='flex flex-col justify-center items-center'>
                  <div className="text-lg mb-2 text-title font-semibold">Online Store</div>
                  <p>{number}</p>
                </div>
                <Button className="bg-primary text-white" onClick={() => console.log("button swipe")}>Demo</Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section id="portfolio" className="pt-8 pb-16 portfolio"></section>
        <section id="project" className="pt-8 pb-16 project"></section>
      </main>
    </div>
  );
}

export default App;
