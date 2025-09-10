import {ChevronDown, ChevronRight} from "lucide-react";
import * as React from "react";

export default function Template({children = []} : {children?: React.ReactNode}) {
    const [ navOpen, setNavOpen ] = React.useState(false);
    return <main className="p-4 flex h-full w-500 max-w-full mx-auto items-start gap-4 flex-col lg:flex-row">
        <nav className={"p-4 transition-all duration-200 shadow-2xl shadow-black " +
            "bg-zinc-900 border-1 border-t-0 lg:border-t-1 border-zinc-700 " +
            "rounded-b-xl lg:rounded-xl " +
            "flex-none text-left fixed lg:sticky top-0 right-4 left-4 lg:top-4 w-auto"}
        >
            <div className="flex justify-between">
                <a href="/" className="flex items-center -mt-3">
                    <img src="/logo.png" alt="logo" className="flex-none h-20 -ml-4" />
                    <h1 className="text-xl font-bold flex-auto">
                        Woodlands <br/> Computer Science
                    </h1>
                </a>
                <button className="sm:hidden hover:cursor-pointer p-3" onClick={() => setNavOpen(!navOpen)}>
                    <ChevronDown className={"transition duration-200 " + (navOpen ? "rotate-180" : "")} />
                </button>
            </div>
            <div className={"transition-[grid-template-rows] ease-in-out overflow-hidden duration-200 grid sm:block " + (navOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="min-h-0">
                    <div className="flex flex-col ml-0 sm:flex-row lg:flex-col lg:ml-16 gap-3 text-nowrap flex-wrap mt-4">
                        <a href="/" className="flex gap-2 transition duration-75 ease-in hover:text-brand">
                            <ChevronRight/>Home
                        </a>
                        <a href="/" className="flex gap-2 transition duration-75 ease-in hover:text-brand">
                            <ChevronRight/>Calendar
                        </a>
                        <a href="/" className="flex gap-2 transition duration-75 ease-in hover:text-brand">
                            <ChevronRight/>Meeting Notes
                        </a>
                        <a href="/" className="flex gap-2 hp-link">
                            <ChevronRight />Hack::Peel
                        </a>
                    </div>

                </div>
            </div>
        </nav>
        <main className="flex-auto mt-26 sm:mt-36 lg:mt-0">
            {children}
        </main>
    </main>
}