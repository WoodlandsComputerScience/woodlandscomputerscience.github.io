import {FaAngleDown, FaAngleRight} from "react-icons/fa6";
import Logo from "./Logo.tsx";
import {useEffect, useState, useRef} from "react";

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
    {
        title: "Meeting Notes",
        href: "/posts",
        className: "nav-link hover:text-foreground-bright",
    },
    {
        title: "Game Jam 2025",
        href: "/game-jam",
        className: "nav-link gradient-text text-to-emerald-300 text-from-brand font-black",
    },
];

export interface NavProps {
    active?: string;
}

export default function Nav({active} : NavProps) {
    const [ navOpen, setNavOpen ] = useState(false);
    // we have to disable animating the drawer when the user clicks a link, to prevent it from breaking scroll
    const [ animate, setAnimate ] = useState(true);
    const domNode = useRef<HTMLElement | null>(null);


    const drawerToggleCallback = () => {
        setAnimate(true);
        setNavOpen(!navOpen);
    }

    const linkCallback=  () => {
        setAnimate(false);
        setNavOpen(false);
    }

    useEffect(() => {
        const handler = (e: Event) => {
            if (!domNode.current?.contains(e.target as Node)) {
                setNavOpen(false);
            }
        }
        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        }
    }, [])

    return <nav className="z-50 p-4 shadow-2xl bg-neutral-950/90 text-left sticky top-0 lg:top-4 w-full lg:w-auto shrink-0"
        ref={domNode}>
        <div className="flex justify-between -ml-3">
            <Logo />
            <button className="sm:hidden hover:cursor-pointer p-3 -mr-6" onClick={drawerToggleCallback}>
                <FaAngleDown className={"transition duration-200 " + (navOpen ? "-rotate-180" : "")} />
            </button>
        </div>
        <div className={"transition-[grid-template-rows] ease-in-out overflow-hidden grid sm:block "
            + (navOpen ? "grid-rows-[1fr] " : "grid-rows-[0fr] ")
            + (animate ? "duration-200 " : "duration-0 ")
        }>
            <div className="min-h-0 font-light">
                <ul className="flex flex-col -ml-3 sm:flex-row lg:flex-col lg:ml-14 gap-3 text-nowrap flex-wrap mt-4 list-none p-0">
                    { links.map((link) => <li key={link.href} >
                        <a href={link.href} className={link.href === active ? "nav-link active" : link.className}
                           onClick={linkCallback}>
                            <FaAngleRight/>{link.title}
                        </a>
                    </li>)}
                </ul>
            </div>
        </div>
    </nav>
}