import * as React from "react";
import {FaAngleDown, FaAngleRight} from "react-icons/fa6";
import Footer from "./Footer.tsx";

export default function Template({children = []} : {children?: React.ReactNode}) {
    const [ navOpen, setNavOpen ] = React.useState(false);
    return <div className="px-4 lg:py-4 flex h-full mx-auto justify-center items-start flex-col lg:flex-row lg:gap-8">
        <nav className="z-50 p-4 shadow-2xl bg-neutral-950/90 text-left sticky top-0 lg:top-4 w-full lg:w-auto"
        >
            <div className="flex justify-between">
                <a href="/" className="flex items-center -mt-3 no-underline">
                    <img src="/logo.png" alt="logo" className="flex-none h-20 mr-4 pb-1" />
                    <h1 className="text-xl font-bold flex-auto">
                        Woodlands <br/> Computer Science
                    </h1>
                </a>
                <button className="sm:hidden hover:cursor-pointer p-3" onClick={() => setNavOpen(!navOpen)}>
                    <FaAngleDown className={"transition duration-200 " + (navOpen ? "-rotate-180" : "")} />
                </button>
            </div>
            <div className={"transition-[grid-template-rows] ease-in-out overflow-hidden duration-200 grid sm:block " + (navOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="min-h-0 font-light">
                    <ul className="flex flex-col ml-0 sm:flex-row lg:flex-col lg:ml-20 gap-3 text-nowrap flex-wrap mt-4 list-none p-0">
                        <li><a href="/" className="navLink hover:text-brand">
                            <FaAngleRight />Home
                        </a></li>
                        <li><a href="/" className="navLink hover:text-brand">
                            <FaAngleRight />Calendar
                        </a></li>
                        <li><a href="/" className="navLink hover:text-brand">
                            <FaAngleRight />Meeting Notes
                        </a></li>
                        <li><a href="/" className="navLink font-black gradient-text text-to-emerald-300 text-from-brand">
                            <FaAngleRight />Game Jam 2025
                        </a></li>
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