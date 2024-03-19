import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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

export default function Header() {
    const initialTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(initialTheme);
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuList = () => {
        setOpenMenu(!openMenu);
    }


    useEffect(() => {
        const targetClass = document.getElementById("wrapper");
        if (theme && theme !== 'dark' ) {
            targetClass?.classList.remove('dark')
        } else {
            targetClass?.classList.add('dark')
        }
    }, [theme])

    const changeTheme = () => {
        const newTheme = theme && theme !== 'dark' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    return (
        <header className="shadow-modal w-full fixed bottom-0 md:top-0 h-fit left-0 z-[100] bg-mono" id="header">
            <nav className="flex justify-between items-center h-12 mx-6 lg:max-w-[968px] lg:mx-auto lg:px-6">
            <a href="#" className="no-underline text-letter hover:text-primary font-medium block">Damai Yulianti Siddik</a>
            
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
                <i className={twMerge("cursor- md:text-lg uil", theme && theme !== 'dark' ? 'uil-moon' : 'uil-sun')}
                    onClick={changeTheme}>
                </i>
                {/* TODO: Make a list for menu */}
                {/* <div className="text-lg cursor-pointer text-title font-medium ml-4">
                    <i className="uil uil-apps" onClick={openMenuList}></i>
                </div> */}
            </div>
            </nav>
        </header>
    )
}