import { useEffect, useRef, useState } from "react";
import TrafficLight from "./TrafficLight";
import { FaAngleRight } from "react-icons/fa6";

const list = [
    ["Software Engineering", "text-red-400", "via-red-950"],
    ["Web Development", "text-blue-400", "via-blue-950"],
    ["Cybersecurity", "text-yellow-400", "via-yellow-950"],
    ["Artificial Intelligence", "text-violet-400", "via-violet-950"],
    ["Game Development", "text-orange-400", "via-orange-950"],
    ["Competitive Programming", "text-indigo-400", "via-indigo-950"],
    ["All Things CS", "bg-clip-text text-transparent bg-gradient-to-br from-brand via-green-400 to-green-300", "via-green-950"], // non breaking space
];

const longest = list.map(([x]) => x).sort((a, b) => b.length - a.length)[0];

export default function HeroHeading() {
    const [text, setText] = useState(list[list.length-1][0]);
    const [blink, setBlink] = useState(true);
    const [className, setClassName] = useState("");
    const [bgClassName, setBgClassName] = useState("via-gray-950");
    const idx = useRef(0);
    const stateStart = useRef(-1);
    const initTime = 750;
    const blinkTime = 3500;
    const typingSpeed = 1000; // cpm
    const updateInterval = 60000/typingSpeed;
    const state = useRef<"init" | "right" | "left" | "hold">("init");

    let reserveString = list[idx.current][0].substring(text.length);
    // Pad with target text to reserve word breaks

    useEffect(() => {
        let animationFrame = 0;
        const update = (time: number) => {
            const [target, className, bgClassName] = list[idx.current];
            if (stateStart.current===-1) stateStart.current=time;
            const elapsed = time-stateStart.current;
            setClassName(className);
            setBgClassName(bgClassName);
            switch (state.current) {
                case "init":
                    setBlink(true);
                    setText("");
                    if (elapsed >= initTime) {
                        state.current = "right";
                        stateStart.current = time;
                    }
                    break;
                case "right":
                    // keep typing
                    setBlink(false);
                    setText(t => {
                        const needsUpdate = Math.floor(elapsed/updateInterval)>t.length;
                        if (!needsUpdate) return t;
                        if (t.length+1 == target.length) {
                            state.current="hold";
                            stateStart.current=time;
                        }
                        return target.substring(0, t.length+1)
                    });
                    break;
                case "hold":
                    setBlink(true);
                    if (idx.current===list.length-1 || elapsed < blinkTime) break;
                    // fall through
                    state.current = "left";
                    stateStart.current = time;
                case "left":
                    setBlink(false);
                    setText(t => {
                        const needsUpdate = target.length-elapsed/updateInterval<t.length;
                        if (!needsUpdate) return t;
                        if (t.length-1 == 0) {
                            state.current="right";
                            idx.current++;
                            stateStart.current = time;
                        }
                        return target.substring(0, t.length-1);
                    });
            }
            animationFrame = requestAnimationFrame(update);
        };
        animationFrame = window.requestAnimationFrame(update);
        return () => window.cancelAnimationFrame(animationFrame);
    }, []);

    return <div className={"p-5 rounded-t-3xl flex flex-col items-start h-190 max-h-[82vh] transition-colors duration-2500 bg-linear-to-t sm:bg-linear-to-br from-slate-950 from-35% to-zinc-950 via-75% " + bgClassName}>
            <TrafficLight className="h-3.5" />
            <div className="my-auto w-full md:pl-12">
                <h1 id="home" className="text-xl sm:text-3xl my-4 max-w-2xl"><em>Open doors</em> to
                    <strong className="sm:mt-4 block text-4xl sm:text-6xl lg:text-7xl font-extrabold h-[2lh]">
                        <span className={className}>{text}
                        <span className={"transition-opacity font-normal text-white " + (blink ? "caret" : "opacity-100")}>_</span></span><span className="invisible">{reserveString}</span>
                    </strong>
                </h1>
                <p className="max-w-2xl text-md sm:text-lg mb-4">
                    Welcome to the Woodlands School Computer Science Club!
                </p>
                <p className="max-w-2xl text-md sm:text-lg">
                    Join us <span className="text-neutral-200 underline"> Monday lunches in Room 100</span> for lessons, workshops, and
                    contests. Beginning programmers or those interested in CS are always welcome!
                </p>
                <a href="#calendar" className="mt-8 btn text-brand border-brand shadow-brand" role="button">See What's Happening <FaAngleRight /></a>
            </div>
        </div>
            
}