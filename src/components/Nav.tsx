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

    return <nav className="pl-8 z-50 px-4 pt-5 pb-2 shadow-2xl bg-neutral-950/80 text-left sticky top-0 lg:top-4 w-full left-0 lg:w-auto shrink-0 grow-0 backdrop-blur-md"
        ref={domNode}>
        <div className="flex justify-between">
            <Logo />
            <button className="sm:hidden hover:cursor-pointer p-3 mb-4" onClick={drawerToggleCallback}>
                <FaAngleDown className={"transition duration-200 " + (navOpen ? "rotate-180" : "")} />
            </button>
        </div>
        <div className={"transition-[grid-template-rows] ease-in-out overflow-hidden grid sm:block "
            + (navOpen ? "grid-rows-[1fr] " : "grid-rows-[0fr] ")
            + (animate ? "duration-200 " : "duration-0 ")
        }>
            <div className="min-h-0 font-light">
                <ul className="flex flex-col -ml-1 sm:flex-row lg:flex-col lg:ml-18 gap-3 text-nowrap flex-wrap mt-2 mb-2 list-none p-0">
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