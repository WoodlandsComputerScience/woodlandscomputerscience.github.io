import * as React from "react";
import {FaAngleDown, FaAngleRight} from "react-icons/fa6";
import Footer from "./Footer.tsx";
import Logo from "./Logo.tsx";

const links = [
    {
        title: "Home",
        href: "/#",
        className: "nav-link hover:text-foreground-bright",
    },
    {
        title: "Calendar",
        href: "/#calendar",
        className: "nav-link hover:text-foreground-bright",
    },
/*    {
        title: "Meeting Notes",
        href: "/meeting-notes",
        className: "nav-link hover:text-foreground-bright",
    },*/
    {
        title: "Game Jam 2025",
        href: "/game-jam",
        className: "nav-link gradient-text text-to-emerald-300 text-from-brand font-black",
    },
];

export default function Template({children = [], active = ""} : {children?: React.ReactNode, active?: string}) {
    const [ navOpen, setNavOpen ] = React.useState(false);

    return <div className="px-4 lg:py-4 flex h-full mx-auto justify-center items-start flex-col lg:flex-row lg:gap-8">
        <nav className="z-50 p-4 shadow-2xl bg-neutral-950/90 text-left sticky top-0 lg:top-4 w-full lg:w-auto shrink-0"
        >
            <div className="flex justify-between -ml-3">
                <Logo />
                <button className="sm:hidden hover:cursor-pointer p-3 pr-0" onClick={() => setNavOpen(!navOpen)}>
                    <FaAngleDown className={"transition duration-200 " + (navOpen ? "-rotate-180" : "")} />
                </button>
            </div>
            <div className={"transition-[grid-template-rows] ease-in-out overflow-hidden duration-200 grid sm:block " + (navOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="min-h-0 font-light">
                    <ul className="flex flex-col -ml-3 sm:flex-row lg:flex-col lg:ml-14 gap-3 text-nowrap flex-wrap mt-4 list-none p-0">
                        { links.map((link) => <li key={link.href} >
                            <a href={link.href} className={link.href === active ? "nav-link active" : link.className}>
                                <FaAngleRight/>{link.title}
                            </a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
        <main className="w-full flex flex-col max-w-7xl lg:mr-4">
            {children}
            <Footer />
        </main>
    </div>
}