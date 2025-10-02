import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa6";


export interface NewsItemProps {
    href?: string;
    children?: ReactNode;
}


export interface NewsBarProps {
    className?: string;
    children?: ReactNode;
}

export function NewsItem(props: NewsItemProps) {
    return <li className="block border-2 border-foreground rounded-2xl w-sm min-w-sm max-w-sm h-65">
        <a href={props.href} className="flex flex-col max-h-full w-full no-underline p-4 h-full">
            {props.children}
        </a>
    </li>
}

export function NewsBar(props: NewsBarProps) {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [scrollable, setScrollable] = useState(false);
    const content = useRef<HTMLOListElement>(null);
    
    const updateButtons = () => {
        if (content.current) {
            setScrollable(content.current.clientWidth < content.current.scrollWidth);
            setLeft(content.current.scrollLeft > 0);
            setRight(content.current.scrollLeft + content.current.clientWidth < content.current.scrollWidth);
        }
    }

    const scroll = (multiplier: number) => {
        if (content.current) {
            content.current.scrollBy({ left: multiplier * content.current.clientWidth, behavior: "smooth" });
        }
    }

    let shadow = [];
    if (right) shadow.push("inset -15px 0 10px -7px rgba(0,0,0,0.5)");
    if (left) shadow.push("inset 15px 0 10px -7px rgba(0,0,0,0.5)");
    const css: CSSProperties = {
        boxShadow: shadow.join(","),
    };

    useEffect(updateButtons, []);

    return <div className={"flex flex-row items-center min-w-0 max-w-full " + props.className}>
        {
            scrollable && <button className={"p-4 " + (left ? "text-foreground-dimmed" : "text-neutral-700")} 
            disabled={!left}
            onClick={() => scroll(-1/3)}
            >
                <FaAngleLeft size={24} />
            </button>
        }

        <ol className="ps-0 list-none flex flex-row overflow-x-auto max-w-full gap-4 hide-scrollbar" style={css} ref={content} onScroll={updateButtons}>
            {props.children}
        </ol>
        {
            scrollable && <button className={"p-4 shadow " + (right ? "text-foreground-dimmed" : "text-neutral-700")}
            disabled={!right}
            onClick={() => scroll(1/3)}
            >
                <FaAngleRight size={24}/>
            </button>
        }
    </div>
}