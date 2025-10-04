import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


export interface NewsItemProps {
    href?: string;
    children?: ReactNode;
}


export interface NewsBarProps {
    className?: string;
    children?: ReactNode;
}

export function NewsItem(props: NewsItemProps) {
    return <li className="block ps-0 bg-neutral-950/40 border-2 border-neutral-700 rounded-2xl w-sm min-w-66 max-w-66 sm:min-w-85 sm:max-w-85 h-93 overflow-clip">
        <a href={props.href} className="flex flex-col max-h-full w-full no-underline h-full">
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
            // 280 obtained through trial and error :'(
            content.current.scrollBy({ left: Math.sign(multiplier) * Math.max(280, Math.abs(multiplier) * content.current.clientWidth), behavior: "smooth" });
        }
    }
    
    useEffect(updateButtons, []);

    return <div className={"flex flex-row items-center min-w-0 max-w-full " + props.className}>
        {
            scrollable && <button className={"py-4 sm:px-4 -ml-4 " + (left ? "text-foreground-dimmed" : "text-neutral-700")} 
            disabled={!left}
            onClick={() => scroll(-3/5)}
            >
                <FaAngleLeft size={24} />
            </button>
        }

        <ol className="ps-0 list-none flex flex-row overflow-x-auto max-w-full gap-4 hide-scrollbar" ref={content} onScroll={updateButtons}>
            {props.children}
        </ol>
        {
            scrollable && <button className={"py-4 sm:px-4 -mr-4 " + (right ? "text-foreground-dimmed" : "text-neutral-700")}
            disabled={!right}
            onClick={() => scroll(3/5)}
            >
                <FaAngleRight size={24}/>
            </button>
        }
    </div>
}